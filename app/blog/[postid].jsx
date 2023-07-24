import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const BlogPostDetails = ({ post }) => (
  <div>
    <h1>{post.title}</h1>
    <p>{post.content}</p>
    <img src={post.img} alt="post" />
  </div>
);

export async function getServerSideProps(context) {
  const { params } = context;
  const post = await prisma.post.findUnique({
    where: {
      id: params.postid,
    },
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}

export default BlogPostDetails;
