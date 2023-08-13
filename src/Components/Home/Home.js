import React, { useEffect, useState } from 'react'
import "./home.scss"
import axios from 'axios';
const api_Key="6d195c4249045a02c427050fc4a56ac5";
const urlMain="https://api.themoviedb.org/3/movie/";
const upcomingText="upcoming?api_key=";
const imageUrlBack="https://image.tmdb.org/t/p/original";
const nowPlaying="now_playing?api_key=";
const popular="popular?api_key=";
const topRated="top_rated?api_key=";
const Card=({img})=>{
    return (
        <img className="card" src={img} alt='imageUsed'></img>
    )
}

const Row=({title,arr=[]})=>{
    
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div>
                {
                    arr.map((item,index)=>
                      (  <Card key={index} img={`${imageUrlBack}${item.poster_path}`}/>
                       ) )
                }
            
            </div>
        </div>
    )
}




const Home = () => {
    const [upcomingMovies,setUpcomingMovies]=useState([]);
    const [nowPlayingMovies,setNowPlayingMovies]=useState([]);
    const [popularMovies,setPopularMovies]=useState([]);
    const [topRatedMovies,setTopRatedMovies]=useState([]);

    useEffect(() => {
        const fetchData=async()=>{
            const {data: {results}}=await axios.get(`${urlMain}${upcomingText}${api_Key}`);
            setUpcomingMovies(results);           
        };
        const fetchDatanowPlaying=async()=>{
            const {data: {results}}=await axios.get(`${urlMain}${nowPlaying}${api_Key}`);
            setNowPlayingMovies(results);           
        };
        const fetchDatapopular=async()=>{
            const {data: {results}}=await axios.get(`${urlMain}${popular}${api_Key}`);
            setPopularMovies(results);           
        };
        const fetchDatatopRated=async()=>{
            const {data: {results}}=await axios.get(`${urlMain}${topRated}${api_Key}`);
            setTopRatedMovies(results);           
        };
        fetchData();
        fetchDatanowPlaying();
        fetchDatapopular();
        fetchDatatopRated();
        
      }, []);
  return (
   <section className='home'>
    <div className="banner">

    </div>
    <Row title={"Upcoming"} arr={upcomingMovies}/>
    <Row title={"Now Playing"} arr={nowPlayingMovies}/>
    <Row title={"Popular Movies"} arr={popularMovies}/>
    <Row title={"Top Rated Movies"} arr={topRatedMovies}/>
   
   </section>
   
  )
}

export default Home
