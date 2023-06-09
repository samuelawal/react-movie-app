import React from "react";


import MovieCard from "../components/organisms/MovieCard";



const Home = () => {

  return (
    <main className="home_container">
  <div className="flex justify-center flex-col justify-center items-center h-96 pt-12">
    <p className="text-small">introducing</p>
    <h1 className="text-white text-center leading-none  text-4xl md:text-7xl font-extrabold">Movie<span className="text-brand-red">Time</span><br/>Spotlight Picks.</h1>
    <p className="text-small text-center pt-4 md:pt-6">Immerse Yourself in the Exciting World of Trending Movies and TV Series with MovieTime <br/>cause why not enjoy soft life.</p>
      </div>
    </main>
  );
};

export default Home;
