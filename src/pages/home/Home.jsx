import { useLoaderData } from "react-router-dom";
import Banner from "../../Header/Banner";
import Service from "../../Service/Service";
import Footer from "../../component/footer/Footer";
import Banner2 from "../../component/footer/banner2/Banner2";
import BCard from "../../component/bCard/BCard";

const Home = () => {

  const cards = useLoaderData();

  return (
    <div>

      <div className="max-w-screen-xl mx-auto">
        <Banner></Banner>
      </div>
      <Service cards={cards}></Service>
      <div className="max-w-screen-xl mx-auto">
        <Banner2></Banner2>
      </div>
      <div>
        <BCard></BCard>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;