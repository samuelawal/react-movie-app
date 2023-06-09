import React from "react";
import {BsArrowDownCircle} from "react-icons/bs"

import MovieCard from "../components/organisms/MovieCard";



const Home = () => {

  return (
      <> 
    <div className="home_container">
  <section className="flex justify-center flex-col justify-center items-center h-4/6 pt-12">
    <p className="text-small">introducing</p>
    <h1 className="text-white text-center leading-none  text-4xl md:text-7xl font-extrabold">Movie<span className="text-brand-red">Time</span><br/>Spotlight Picks.</h1>
    <p className="text-sm md:text-sm text-center pt-4 md:pt-6">Immerse Yourself in the Exciting World of Trending Movies and TV Series with MovieTime <br/>cause why not enjoy soft life.</p>
      </section>
      <div className="flex items-center justify-center">
      <BsArrowDownCircle className="text-center" size='2em'/>
      </div>
    </div>
    <section className="container mx-auto">
     
    </section>
    </>
  );
};

export default Home;
