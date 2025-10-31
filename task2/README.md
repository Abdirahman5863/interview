Blogging System with Prisma

This is a simple blogging system where users can create posts and comment on them.
It uses Node.js, TypeScript, and Prisma ORM with a PostgreSQL database.

Project Setup
1. Clone the project
git clone <your-repo-url>
cd task2

2. Install dependencies
npm install

3. Create a .env file

Create a .env file in the root folder and add your database connection URL:

DATABASE_URL="postgresql://user:password@localhost:5432/blog_db"

4. Setup the database

Run the following commands to generate the Prisma client and create database tables:

npm run db:generate
npm run db:migrate


To open Prisma Studio (database GUI):

npm run db:studio

Run the Project

To start the application:

npm run dev

Run Tests

To run all tests:

npm test



What It Does

Users can create blog posts.

Other users can comment on those posts.

Each post shows the author and all comments.

Each comment shows who wrote it.

Cascade delete is enabled — if a user or post is deleted, related comments are removed too.

Tools Used

Node.js — runtime environment

TypeScript — type-safe JavaScript

Prisma ORM — database ORM

PostgreSQL — database

Jest — testing framework