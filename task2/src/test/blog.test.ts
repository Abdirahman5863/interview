import { PrismaClient } from '@prisma/client';
import {afterAll, beforeEach, expect, test} from '@jest/globals'

const prisma = new PrismaClient();

beforeEach(async () => {
  await prisma.comment.deleteMany();
  await prisma.post.deleteMany();
  await prisma.user.deleteMany();
});

afterAll(async () => {
  await prisma.$disconnect();
});
 
test('create a user', async () => {
  const user = await prisma.user.create({
    data: {
      email: 'arman@gmail.com',
      name: 'Arman Abdi'
    }
  });

  expect(user.name).toBe('Arman Abdi');
});

test('create a post', async () => {
  const user = await prisma.user.create({
    data: {
      email: 'Abdi@gmail.com',
      name: 'Abdi'
    }
  });

  const post = await prisma.post.create({
    data: {
      title: 'My Post',
      content: 'Content here',
      authorId: user.id
    }
  });

  expect(post.title).toBe('My Post');
});

test('create a comment', async () => {
  const user = await prisma.user.create({
    data: {
      email: 'Abdi@gmail.com',
      name: 'Abdi'
    }
  });

  const post = await prisma.post.create({
    data: {
      title: 'Post',
      content: 'Content',
      authorId: user.id
    }
  });

  const comment = await prisma.comment.create({
    data: {
      content: 'Nice post!',
      postId: post.id,
      userId: user.id
    }
  });

  expect(comment.content).toBe('Nice post!');
});