import React from "react";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import ThingsYouNeed from "./Components/ThingsYouNeed/ThingsYouNeed";
import Deals from "./Components/DealsAndDiscount/Deals";
import VacationPlan from "./Components/Vacationlan/VacationPlan";
import About from "./Components/AboutUs/About";
import Blogs from "./Components/Blogs/Blogs";
import Subscribe from "./Components/Footer/Subscribe/Subscribe";
// import element from './assets/images/HeroImages/Element.png'
const App = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="mainContainer lg:mx-[10%] mx-[5%] xl:mx-[15%]">
        <div className="hero mt-[18px] lg:mx-0 mx-[5%] mb-[20px] relative">
         
          <Hero />
        </div>
      </div>
      <div className="bg-[#F7F8FC] mt-[98px] sm:mt-[126px] pb-[56px]">


        <div className="lg:mx-[10%] mx-[5%] xl:mx-[15%]">
          <ThingsYouNeed />
        </div>

      </div>
      <div className="py-[48px] bg-[#FEFCFB] w-full">
        <div className="lg:mx-[10%] mx-[5%] xl:mx-[15%]">
          <Deals />
        </div>
      </div>
      <div className=" my-[56px]">
        <div className="lg:mx-[10%] mx-[5%] xl:mx-[15%]">
          <VacationPlan />
        </div>
      </div>
      <div className="py-[180px] bg-[#F7F8FC] my-[56px]">
        <div className="lg:mx-[10%] mx-[5%] xl:mx-[15%]">
          <About />
        </div>
      </div>
      <div className="py-[98px] my-[56px]">
        <div className="lg:mx-[10%] mx-[5%] xl:mx-[15%]">
          <Blogs />
        </div>
      </div>
      <div className="bg-[#F7F8FC] mt-[56px]">
        <div className="lg:mx-[10%] mx-[5%] xl:mx-[15%]">
          <Subscribe />
        </div>
      </div>
    </div>
  );
};
export default App;