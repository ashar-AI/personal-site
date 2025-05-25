import { Astro } from '@icons/Astro'
import { Docker } from '@icons/Docker'
import { Jest } from '@icons/Jest'
import { Nestjs } from '@icons/NestJs'
import { NextJs } from '@icons/NextJs'
import { ReactJs } from '@icons/ReactJs'
import { Tailwindcss } from '@icons/Tailwind'
import { TypeScript } from '@icons/TypeScript'
import { Python } from '@icons/Python'
// import { Java } from '@icons/Java'
import { ReactJs as ReactNative } from '@icons/ReactJs'
import { Nodejs } from '@icons/Nodejs'
import { Expressjs } from '@icons/Expressjs'
// import { RestApi } from '@icons/RestApi'
import { GraphQL } from '@icons/GraphQL'
import { PostgreSQL } from '@icons/PostgreSQL'
import { Firestore } from '@icons/Firestore'
import { MongoDB } from '@icons/MongoDB'
import { Redis } from '@icons/Redis'
import { AWS } from '@icons/AWS'
import { Figma } from '@icons/Figma'
import { Postman } from '@icons/Postman'
import { LangChain } from '@icons/LangChain'
import { Shell } from '@icons/Shell'
import type { JSX, SVGProps } from 'react'

type TechStack = {
  name: string
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  description: string
}

const techStacks: TechStack[] = [
  {
    name: 'TypeScript',
    icon: TypeScript,
    description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
  },
  {
    name: 'Python',
    icon: Python,
    description: 'Python is a high-level, interpreted programming language known for its readability and versatility.'
  },
  // {
  //   name: 'Java',
  //   icon: Java,
  //   description: 'Java is a class-based, object-oriented programming language designed for portability and cross-platform application.'
  // },
  {
    name: 'React Native',
    icon: ReactNative,
    description: 'React Native is a framework for building native mobile applications using React and JavaScript.'
  },
  {
    name: 'React',
    icon: ReactJs,
    description: 'React is a JavaScript library for building user interfaces, particularly single-page applications.'
  },
  {
    name: 'NestJS',
    icon: Nestjs,
    description: 'NestJS is a progressive Node.js framework for building efficient and scalable server-side applications.'
  },
  {
    name: 'Next.js',
    icon: NextJs,
    description: 'Next.js is a React framework that enables server-side rendering and generating static websites.'
  },
  {
    name: 'Node.js',
    icon: Nodejs,
    description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine for building scalable network applications.'
  },
  {
    name: 'Express.js',
    icon: Expressjs,
    description: 'Express.js is a minimal and flexible Node.js web application framework that provides robust features for web and mobile applications.'
  },
  // {
  //   name: 'REST APIs',
  //   icon: RestApi,
  //   description: 'REST is an architectural style for distributed hypermedia systems, commonly used for creating web services.'
  // },
  {
    name: 'GraphQL',
    icon: GraphQL,
    description: 'GraphQL is a query language for APIs and a runtime for executing those queries with your existing data.'
  },
  {
    name: 'PostgreSQL',
    icon: PostgreSQL,
    description: 'PostgreSQL is a powerful, open source object-relational database system with strong reputation for reliability and data integrity.'
  },
  {
    name: 'Firestore',
    icon: Firestore,
    description: 'Firestore is a flexible, scalable NoSQL cloud database from Firebase for mobile, web, and server development.'
  },
  {
    name: 'MongoDB',
    icon: MongoDB,
    description: 'MongoDB is a cross-platform document-oriented database program, classified as a NoSQL database.'
  },
  {
    name: 'Redis',
    icon: Redis,
    description: 'Redis is an in-memory data structure store, used as a database, cache, and message broker.'
  },
  {
    name: 'AWS',
    icon: AWS,
    description: 'Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services.'
  },
  {
    name: 'Figma',
    icon: Figma,
    description: 'Figma is a collaborative interface design tool that supports real-time collaboration.'
  },
  {
    name: 'Postman',
    icon: Postman,
    description: 'Postman is an API platform for building and using APIs, simplifying each step of the API lifecycle.'
  },
  {
    name: 'Jest',
    icon: Jest,
    description: 'Jest is a delightful JavaScript Testing Framework with a focus on simplicity.'
  },
  {
    name: 'Docker',
    icon: Docker,
    description: 'Docker is a platform for developing, shipping, and running applications in containers.'
  },
  {
    name: 'Astro',
    icon: Astro,
    description: 'Astro is a modern static site builder that delivers lightning-fast performance with less JavaScript.'
  },
  {
    name: 'Tailwind',
    icon: Tailwindcss,
    description: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.'
  },
  {
    name: 'LangChain',
    icon: LangChain,
    description: 'LangChain is a framework for developing applications powered by language models.'
  },
  {
    name: 'Shell',
    icon: Shell,
    description: 'Shell scripting is a computer program designed to be run by a Unix shell, a command-line interpreter.'
  }
]

export default techStacks
