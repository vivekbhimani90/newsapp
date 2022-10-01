import React, { useState, useEffect } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0c417ba3ec28408abdaa733de943cc7c&page=${page}&pageSize=${props.pageSize}`;
    // const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0c417ba3ec28408abdaa733de943cc7c&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsenData = await data.json();
    setArticles(parsenData.articles);
    setTotalResults(parsenData.totalResults);
    setLoading(false);
  };
  useEffect(() => {
    updateNews();
    //eslint-disable-next-line
  }, []);

  //     handleToPrevious= async ()=>{
  //       console.log("Previous");

  //       // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0c417ba3ec28408abdaa733de943cc7c&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
  //       // setLoading(true)
  //       // let data=  await fetch(url);
  //       // let parsenData= await data.json()
  //  setPage(page-1)
  //setArticles(parsenData.articles)
  // setLoading(false)

  // //  })

  //setPage(page+1)

  //     }
  // handleToNext= async ()=>{
  //   console.log("Next");
  //     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0c417ba3ec28408abdaa733de943cc7c&page=$page + 1}&pageSize=${props.pageSize}`;
  //     // setLoading(true)
  //     // let data=  await fetch(url);
  //     // let parsenData= await data.json()
  //  setPage(page+1)
  //setArticles(parsenData.articles)
  // setLoading(false)

  //     updateNews();
  //setPage(page+1)

  //
  //     console.log( " Next btn" + page)

  // }

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0c417ba3ec28408abdaa733de943cc7c&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parsenData = await data.json();
    setArticles(articles.concat(parsenData.articles));
    setTotalResults(parsenData.totalResults);
  };

  return (
    <>
      <h1 className="text-center" style={{ margin: "35px",marginTop:'90px'}}>
        Newsapp-Headlines
      </h1>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        {" "}
        <div className="container">
          <div className="row">
            {articles.map((element, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <Newsitem
                    author={element.author}
                    source={element.source.name}
                    publishedAt={element.publishedAt}
                    title={element.title}
                    description={element.description}
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://images.moneycontrol.com/static-mcnews/2022/08/Carbon-770x433.jpg"
                    }
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>

      {/* <div className=" container d-flex justify-content-between">
            <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handleToPrevious}>&laquo; Previous</button>
            <button disabled={page+1 > Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={handleToNext}>Next &raquo;</button>
            </div>
      
     */}
    </>
  );
};

export default News;
