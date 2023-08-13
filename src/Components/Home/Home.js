import React from 'react'
import "./home.scss"
const Card=({img})=>{
    return (
        <img className="card" src={img} alt='imageUsed'></img>
    )
}

const Row=({title,arr=[{img:"https://m.media-amazon.com/images/M/MV5BNjQwZDIyNjAtZGQxMC00OTUwLWFiOWYtNzg2NDc5Mjc1MDQ5XkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_.jpg"}]})=>{
    
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div>
                {
                    arr.map((item)=>
                      (  <Card img={item.img}/>
                       ) )
                }
            
            </div>
        </div>
    )
}




const Home = () => {
  return (
   <section className='home'>
    <div className="banner">

    </div>
    <Row title={"Popular on Netflix"}/>
    <Row title={"Movies"}/>
    <Row title={"TV Shows"}/>
    <Row title={"Recently Added"}/>
    <Row title={"My List"}/>
   </section>
   
  )
}

export default Home
