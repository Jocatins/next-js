function NewsArticleList({ articles }) {
  return (
    <>
      <h4>List of News Articles</h4>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h4>
              {article.id} - {article.title} | {article.category}
            </h4>
          </div>
        );
      })}
    </>
  );
}
export default NewsArticleList;

const newsApi = "http://localhost:4000/news";

export async function getServerSideProps() {
  const response = await fetch(newsApi);
  const data = await response.json();

  return {
    props: {
      articles: data,
    },
  };
}
