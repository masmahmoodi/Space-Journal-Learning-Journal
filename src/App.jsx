import React from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Blogs from "./components/Blogs"
import data from "./data/data"
import Footer from "./components/footer"
import HeroData from "./data/HeroData"

export default function App(){
   
   const [blogsData,setBlogsData] = React.useState(data)
   const [heroData,setHeroData] = React.useState(HeroData)

   function changeImageCover(){
      setBlogsData(prevBlogData =>{
           return prevBlogData.map(data=>{
                     return  {...data,on:!data.on}
              })
      })
      setHeroData(prevHeroData =>{
           return prevHeroData.map(data=>{
                 return  {...data,on:!data.on}
              })
      })
   }

   const heroDataArray = heroData.map(data =>{
      return(
         <Hero data={data} key={data.id} />
      )
   })
   const dataArray = blogsData.map(data =>{
      return(
         <Blogs data={data}  key={data.id}/>
      )
   })
    
   return(
    <>
       <Header handleClick={changeImageCover} />
       <main>
           {heroDataArray}
           <section className="section-two blog-section" >
             {dataArray}
           </section>
       </main>
       <Footer />
    </>

   )
  
}