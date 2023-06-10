import React from "react";
import {BsArrowDownCircle} from "react-icons/bs"
import kids_img from "../assets/kids_img.png"
import mobile_img from "../assets/mobile.jpg"

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
    <section className="container mx-auto ">
      <div className="flex md:flex-row flex-col justify-between items-center p-4 md:p-1">
          <div className="order-last md:order-first w-full md:w-1/2">
            <img src={kids_img} alt="kids image" width="100%"/>
          </div>
          <div className="w-full md:w-1/2 leading-loose order-2">
            <h2 className="text-white md:text-left text-center font-extrabold text-4xl md:text-5xl">Watch everywhere</h2>
            <p className="md:text-xl text-sm mt-3 leading-loose text-center md:text-left">Explore the Latest Releases, Find Your Favorites, and Stay Up-to-Date with the Entertainment World..</p>
          </div>
      </div>
    </section>
    <section className="container mx-auto mt-5 p-5">
      <div className="flex md:flex-row flex-col p-4 justify-between items-center p-4 md:p-1">
          <div className="md:w-1/2 w-full leading-loose">
            <h2 className="text-white md:text-left text-center font-extrabold text-4xl md:text-5xl">Unleash your Cinematic Journey</h2>
            <p className="md:text-xl text-sm mt-3 leading-loose text-center md:text-left">Explore the Latest Releases, Find Your Favorites, and Stay Up-to-Date with the Entertainment World..</p>
            <button className="myBtn mt-5 md:w-0 w-full">Get Started</button>
          </div>
          <div>
            <img src={mobile_img} alt="mobile phone" width="100%"/>
          </div>
      </div>
    </section>
    </>
  );
};

export default Home;
