import { PrismaClient } from '@prisma/client';

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
      email: 'test@example.com',
      name: 'Test User'
    }
  });

  expect(user.name).toBe('Test User');
});

test('create a post', async () => {
  const user = await prisma.user.create({
    data: {
      email: 'john@example.com',
      name: 'John'
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
      email: 'john@example.com',
      name: 'John'
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