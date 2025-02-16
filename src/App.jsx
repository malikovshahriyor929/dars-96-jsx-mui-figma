import React from "react";
import Header from "./components/header";
import Showcase from "./components/showcase";
import Deeler from "./components/deeler";
import Recomidation from "./components/recomidation";
import Card from "./components/card";
import TestForUsers from "./components/testForUser";
import CommentAndSupport from "./components/commentAndSupport";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <Header />
      <Showcase />
      <Deeler />
      <Recomidation />
      <Card />
      <TestForUsers />
      <CommentAndSupport/>
      <Footer/>
    </>
  );
};

export default App;
