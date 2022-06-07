function SinglePost({ post }) {
  return (
    <>
      <h3>{post.postId}</h3>
      <h3>{post.title}</h3>
      <h5>{post.body}</h5>
    </>
  );
}
export default SinglePost;
const singlePostUrl = "https://jsonplaceholder.typicode.com/posts";

export async function getStaticPaths() {
  const res = await fetch(singlePostUrl);
  const data = await res.json();
  const paths = data.map((post) => {
    return {
      params: { postId: `${post.id}` },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`${singlePostUrl}/${params.postId}`);
  const data = await res.json();

  return {
    props: {
      post: data,
    },
  };
}
