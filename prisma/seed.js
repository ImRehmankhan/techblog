import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create admin user
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@techblog.com' },
    update: {},
    create: {
      email: 'admin@techblog.com',
      name: 'Admin User',
      role: 'ADMIN'
    }
  })

  console.log('✅ Created admin user:', adminUser.email)

  // Create categories
  const reactCategory = await prisma.category.upsert({
    where: { slug: 'reactjs' },
    update: {},
    create: {
      name: 'React.js',
      slug: 'reactjs',
      description: 'Learn React.js from basics to advanced concepts',
      color: '#61DAFB'
    }
  })

  const reactNativeCategory = await prisma.category.upsert({
    where: { slug: 'react-native' },
    update: {},
    create: {
      name: 'React Native',
      slug: 'react-native',
      description: 'Mobile development with React Native',
      color: '#20232A'
    }
  })

  const jsCategory = await prisma.category.upsert({
    where: { slug: 'javascript' },
    update: {},
    create: {
      name: 'JavaScript',
      slug: 'javascript',
      description: 'Modern JavaScript concepts and patterns',
      color: '#F7DF1E'
    }
  })

  const tsCategory = await prisma.category.upsert({
    where: { slug: 'typescript' },
    update: {},
    create: {
      name: 'TypeScript',
      slug: 'typescript',
      description: 'Type-safe JavaScript development',
      color: '#3178C6'
    }
  })

  const nextjsCategory = await prisma.category.upsert({
    where: { slug: 'nextjs' },
    update: {},
    create: {
      name: 'Next.js',
      slug: 'nextjs',
      description: 'Full-stack React framework',
      color: '#000000'
    }
  })

  console.log('✅ Created categories')

  // Create tags
  const beginnerTag = await prisma.tag.upsert({
    where: { slug: 'beginner' },
    update: {},
    create: {
      name: 'Beginner',
      slug: 'beginner'
    }
  })

  const advancedTag = await prisma.tag.upsert({
    where: { slug: 'advanced' },
    update: {},
    create: {
      name: 'Advanced',
      slug: 'advanced'
    }
  })

  const tutorialTag = await prisma.tag.upsert({
    where: { slug: 'tutorial' },
    update: {},
    create: {
      name: 'Tutorial',
      slug: 'tutorial'
    }
  })

  console.log('✅ Created tags')

  // Create sample posts
  const post1 = await prisma.post.upsert({
    where: { slug: 'getting-started-react-js-2024' },
    update: {},
    create: {
      title: 'Getting Started with React.js in 2024',
      slug: 'getting-started-react-js-2024',
      excerpt: 'Learn the fundamentals of React.js and start building amazing web applications. This comprehensive guide covers everything from setup to advanced concepts.',
      content: `# Getting Started with React.js in 2024

React.js has become one of the most popular JavaScript libraries for building user interfaces. In this comprehensive guide, we'll explore everything you need to know to get started with React in 2024.

## What is React?

React is a JavaScript library for building user interfaces, particularly web applications. It was created by Facebook and is now maintained by Facebook and the community.

### Key Features

- **Component-Based**: Build encapsulated components that manage their own state
- **Virtual DOM**: Efficient updates and rendering
- **Learn Once, Write Anywhere**: Use React for web, mobile, and even VR applications

## Setting Up Your Development Environment

Let's start by setting up a new React project using Vite, which is faster than Create React App:

\`\`\`bash
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev
\`\`\`

## Your First Component

Here's a simple React component:

\`\`\`jsx
function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}

export default Welcome;
\`\`\`

## State Management with useState

React's useState hook allows you to add state to functional components:

\`\`\`jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## Next Steps

- Learn about useEffect for side effects
- Explore React Router for navigation
- Practice building projects
- Join the React community

Happy coding! 🚀`,
      published: true,
      featured: true,
      authorId: adminUser.id,
      categories: {
        connect: [{ id: reactCategory.id }, { id: jsCategory.id }]
      },
      tags: {
        connect: [{ id: beginnerTag.id }, { id: tutorialTag.id }]
      }
    }
  })

  const post2 = await prisma.post.upsert({
    where: { slug: 'react-native-navigation-guide' },
    update: {},
    create: {
      title: 'React Native Navigation: Complete Guide',
      slug: 'react-native-navigation-guide',
      excerpt: 'Master navigation in React Native apps with React Navigation. Learn stack navigation, tab navigation, and drawer navigation with practical examples.',
      content: `# React Native Navigation: Complete Guide

Navigation is a crucial part of any mobile application. In this guide, we'll explore React Navigation, the most popular navigation library for React Native.

## Installation

First, install the required packages:

\`\`\`bash
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
\`\`\`

## Stack Navigation

Stack navigation allows you to transition between screens where each new screen is placed on top of a stack:

\`\`\`jsx
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
\`\`\`

## Tab Navigation

Tab navigation is perfect for switching between different sections of your app:

\`\`\`jsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
\`\`\`

## Best Practices

1. Keep navigation structure simple
2. Use appropriate navigation patterns
3. Handle deep linking properly
4. Test navigation on different devices

React Navigation makes it easy to create smooth, native navigation experiences in your React Native apps!`,
      published: true,
      featured: true,
      authorId: adminUser.id,
      categories: {
        connect: [{ id: reactNativeCategory.id }]
      },
      tags: {
        connect: [{ id: advancedTag.id }, { id: tutorialTag.id }]
      }
    }
  })

  console.log('✅ Created sample posts')

  // Create sample comments
  await prisma.comment.create({
    data: {
      content: 'Great tutorial! This really helped me understand React basics.',
      authorId: adminUser.id,
      postId: post1.id,
      approved: true
    }
  })

  await prisma.comment.create({
    data: {
      content: 'The navigation examples are very clear. Thanks for sharing!',
      authorId: adminUser.id,
      postId: post2.id,
      approved: true
    }
  })

  console.log('✅ Created sample comments')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
