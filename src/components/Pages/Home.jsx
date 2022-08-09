import React from "react";
import Main from "../Main";
import requests from "../../Requests";
import Row from "../Row";
const Home = () => {
  return (
    <>
      <Main />
      <Row RowId="1" title="UpComing" fetchURL={requests.requestUpcoming} />
      <Row RowId="2" title="Popular" fetchURL={requests.requestPopular} />
      <Row RowId="3" title="trending" fetchURL={requests.requestTrending} />
      <Row RowId="4" title="Top Rated" fetchURL={requests.requestTrending} />
      <Row RowId="5" title="Horror" fetchURL={requests.requestHorror} />
    </>
  );
};

export default Home;
