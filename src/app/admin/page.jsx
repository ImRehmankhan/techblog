"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LogOut, Users, FileText, Settings, BarChart3, Calendar, MessageSquare, Shield, Plus, Edit, Trash2, Eye, Search } from "lucide-react";

// Create a simple cache for API responses
const cache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

const useApiCache = (key, fetcher) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const fetchData = useCallback(async (force = false) => {
    const cached = cache.get(key);
    const now = Date.now();
    
    // Return cached data if it's still fresh and not forcing refresh
    if (!force && cached && (now - cached.timestamp < CACHE_DURATION)) {
      setData(cached.data);
      return cached.data;
    }
    
    setLoading(true);
    try {
      const result = await fetcher();
      cache.set(key, { data: result, timestamp: now });
      setData(result);
      return result;
    } catch (error) {
      console.error(`Error fetching ${key}:`, error);
    } finally {
      setLoading(false);
    }
  }, [key]); // Remove fetcher from dependencies
  
  // Memoize the return object to prevent unnecessary re-renders
  return useMemo(() => ({ 
    data, 
    loading, 
    refetch: fetchData 
  }), [data, loading, fetchData]);
};

export default function AdminDashboard() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const router = useRouter();

  // Memoized fetch functions
  const fetchPosts = useCallback(async () => {
    const response = await fetch("/api/posts?limit=20"); // Reduced from 50 to 20
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error('Failed to fetch posts');
  }, []);

  const fetchCategories = useCallback(async () => {
    const response = await fetch("/api/categories");
    if (response.ok) {
      return await response.json();
    }
    throw new Error('Failed to fetch categories');
  }, []);

  const fetchTags = useCallback(async () => {
    const response = await fetch("/api/tags");
    if (response.ok) {
      return await response.json();
    }
    throw new Error('Failed to fetch tags');
  }, []);

  // Use cached API calls
  const { data: postsData, loading: postsLoading, refetch: refetchPosts } = useApiCache('posts', fetchPosts);
  const { data: categoriesData, loading: categoriesLoading, refetch: refetchCategories } = useApiCache('categories', fetchCategories);
  const { data: tagsData, loading: tagsLoading, refetch: refetchTags } = useApiCache('tags', fetchTags);

  // Memoized stats calculation
  const stats = useMemo(() => {
    if (!postsData?.posts) return {
      totalPosts: 0,
      publishedPosts: 0,
      draftPosts: 0,
      totalViews: 0,
    };

    const posts = postsData.posts;
    const published = posts.filter(p => p.published).length;
    const drafts = posts.filter(p => !p.published).length;
    const totalViews = posts.reduce((sum, p) => sum + (p.views || 0), 0);

    return {
      totalPosts: posts.length,
      publishedPosts: published,
      draftPosts: drafts,
      totalViews,
    };
  }, [postsData]);

  useEffect(() => {
    checkAuth();
  }, []);

  // Load data only when tab becomes active and data isn't already loaded
  useEffect(() => {
    if (!user) return;
    
    if (activeTab === "posts" && !postsData && !postsLoading) {
      refetchPosts();
    } else if (activeTab === "categories" && !categoriesData && !categoriesLoading) {
      refetchCategories();
    } else if (activeTab === "tags" && !tagsData && !tagsLoading) {
      refetchTags();
    }
  }, [activeTab, user, postsData, categoriesData, tagsData, postsLoading, categoriesLoading, tagsLoading]);

  const checkAuth = async () => {
    try {
      const response = await fetch("/api/auth/session", {
        method: "GET",
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        if (data.user && data.user.role === "ADMIN") {
          setUser(data.user);
          setIsLoading(false);
        } else {
          router.push("/admin/login");
        }
      } else {
        router.push("/admin/login");
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      router.push("/admin/login");
    }
  };

  const deletePost = async (postId) => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    try {
      const response = await fetch("/api/posts", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: postId }),
      });
      if (response.ok) {
        // Clear cache and refetch
        cache.delete('posts');
        refetchPosts(true);
      }
    } catch (error) {
      console.error("Failed to delete post:", error);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/admin/logout", {
        method: "POST",
      });
      if (response.ok) {
        // Clear all cache on logout
        cache.clear();
        router.push("/admin/login");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user || user.role !== "ADMIN") {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-blue-600 mr-2" />
              <h1 className="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">Welcome, {user.name}</span>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8" aria-label="Tabs">
            {[
              { id: "dashboard", label: "Dashboard", icon: BarChart3 },
              { id: "posts", label: "Posts", icon: FileText },
              { id: "categories", label: "Categories", icon: Calendar },
              { id: "tags", label: "Tags", icon: MessageSquare },
              { id: "users", label: "Users", icon: Users },
              { id: "settings", label: "Settings", icon: Settings },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm transition-colors flex items-center space-x-2`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === "dashboard" && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <FileText className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">Total Posts</dt>
                        <dd className="text-lg font-medium text-gray-900">{stats.totalPosts}</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Eye className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">Published</dt>
                        <dd className="text-lg font-medium text-gray-900">{stats.publishedPosts}</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Edit className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">Drafts</dt>
                        <dd className="text-lg font-medium text-gray-900">{stats.draftPosts}</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <BarChart3 className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">Total Views</dt>
                        <dd className="text-lg font-medium text-gray-900">{stats.totalViews}</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "posts" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Posts</h2>
              <Link
                href="/admin/posts/new"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Plus className="h-4 w-4 mr-2" />
                New Post
              </Link>
            </div>

            {postsLoading ? (
              <div className="flex justify-center items-center h-48">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              </div>
            ) : (
              <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                  {postsData?.posts?.map((post) => (
                    <li key={post.id}>
                      <div className="px-4 py-4 flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900 truncate">{post.title}</p>
                            <div className="ml-2 flex-shrink-0 flex">
                              <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                post.published 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {post.published ? 'Published' : 'Draft'}
                              </p>
                            </div>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {new Date(post.createdAt).toLocaleDateString()} • {post.views || 0} views
                          </p>
                        </div>
                        <div className="ml-4 flex items-center space-x-2">
                          <Link 
                            href={`/admin/posts/${post.id}/edit`}
                            className="p-2 text-gray-400 hover:text-blue-600 transition-colors" 
                            title="Edit"
                          >
                            <Edit className="h-4 w-4" />
                          </Link>
                          <button 
                            onClick={() => deletePost(post.id)} 
                            className="p-2 text-gray-400 hover:text-red-600 transition-colors" 
                            title="Delete"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {activeTab === "categories" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Categories</h2>
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                New Category
              </button>
            </div>

            {categoriesLoading ? (
              <div className="flex justify-center items-center h-48">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              </div>
            ) : (
              <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                  {categoriesData?.map((category) => (
                    <li key={category.id}>
                      <div className="px-4 py-4 flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">{category.name}</p>
                          <p className="text-sm text-gray-500">Category</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors" title="Edit">
                            <Edit className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-red-600 transition-colors" title="Delete">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {activeTab === "tags" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Tags</h2>
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                New Tag
              </button>
            </div>

            {tagsLoading ? (
              <div className="flex justify-center items-center h-48">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              </div>
            ) : (
              <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                  {tagsData?.map((tag) => (
                    <li key={tag.id}>
                      <div className="px-4 py-4 flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">{tag.name}</p>
                          <p className="text-sm text-gray-500">Tag</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors" title="Edit">
                            <Edit className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-red-600 transition-colors" title="Delete">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {activeTab === "users" && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Users</h2>
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 sm:p-6">
                <p className="text-gray-500">User management functionality coming soon...</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "settings" && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Settings</h2>
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 sm:p-6">
                <p className="text-gray-500">Settings functionality coming soon...</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}