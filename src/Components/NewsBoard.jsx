import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setarticles] = useState([]);
  console.log("ARTICLES....", articles);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=0b50ab035cf041cf9ac516fc42048a43`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setarticles(data.articles));
  }, [category]);
  return (
    <div>
      <h2 className="text-center">
        {" "}
        latest <span className="badge bg-danger">News</span>
      </h2>
      {articles?.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
};

export default NewsBoard;
