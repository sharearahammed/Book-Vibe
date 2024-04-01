import { Helmet } from "react-helmet-async";
import Banner from "../../Banner/Banner";
import Books from "../../Books/Books";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Book Vibe Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Banner></Banner>
      <Books></Books>
    </div>
  );
};

export default Home;
