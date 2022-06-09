function ArticleListByCategory({ articles, category }) {
  return (
    <>
      <h1>
        Showing News based on Category<i>{category}</i>{" "}
      </h1>
      {articles.map((article, index) => {
        return (
          <div key={index}>
            <h4>
              {article.id} | {article.title}
            </h4>
            <p>{article.description}</p>
          </div>
        );
      })}
    </>
  );
}
export default ArticleListByCategory;

const newsApi = "http://localhost:4000/news?category=";

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  console.log(query);
  console.log(req.headers.cookie);
  res.setHeader("Set-Cookie", ["name=Titan"]);
  const { category } = params;

  const response = await fetch(`${newsApi}${category}`);
  const data = await response.json();
  console.log(`Pre-rendering News articles for category,${category}`);

  return {
    props: {
      articles: data,
      category,
    },
  };
}
