import Link from "next/link";

function PostList({ posts }) {
  return (
    <>
      <h2>List of Posts</h2>
      {posts.map((post, index) => {
        return (
          <div key={index}>
            <Link href={`posts/${post.id}`} passHref>
              <h4>
                {post.id} {post.title}
              </h4>
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
}
const homeUrl = "https://jsonplaceholder.typicode.com/posts";

export async function getStaticProps() {
  const res = await fetch(homeUrl);
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
}
export default PostList;
