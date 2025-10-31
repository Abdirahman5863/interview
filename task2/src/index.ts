import { prisma } from "./db.js";


async function main() {
  // Create users
  const user1 = await prisma.user.create({
    data: {
      email: 'arman@gmail.com',
      name: 'Arman Abdi'
    }
  });

  const user2 = await prisma.user.create({data:{
     email: 'Abdi@gmail.com',
      name: 'Abdi'
  }
    
    
  });

  console.log('Users created:', user1, user2);

  // Create posts
  const post1 = await prisma.post.create({
    data: {
      title: 'My First Post',
      content: 'This is my first blog post',
      authorId: user1.id
    }
  });

  const post2 = await prisma.post.create({
    data: {
      title: 'Another Post',
      content: 'More interesting content',
      authorId: user1.id,
      published: true
    }
  });

  console.log('Posts created:', post1, post2);

  // Create comments
  const comment1 = await prisma.comment.create({
    data: {
      content: 'Great post!',
      postId: post1.id,
      userId: user2.id
    }
  });

  const comment2 = await prisma.comment.create({
    data: {
      content: 'Very informative',
      postId: post1.id,
      userId: user1.id
    }
  });

  console.log('Comments created:', comment1, comment2);

  // Get post with author and comments
  const postWithData = await prisma.post.findUnique({
    where: { id: post1.id },
    include: {
      author: true,
      comments: {
        include: {
          user: true
        }
      }
    }
  });

  console.log('\nPost with all data:', JSON.stringify(postWithData, null, 2));

  // Get user with posts
  const userWithPosts = await prisma.user.findUnique({
    where: { id: user1.id },
    include: {
      posts: true,
      comments: true
    }
  });

  console.log('\nUser with posts:', JSON.stringify(userWithPosts, null, 2));
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
