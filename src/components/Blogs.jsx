import React from "react"
export default function Blogs(props){
    console.log(props.data.on)
    return (
            <div  data-aos="zoom-in-up">                        
                <img 
                    src={props.data.on ?props.data.onImageUrl:props.data.offImageUrl}  
                    className="blog-img" 
                />
                <p>{props.data.date}</p>
                <h2>{props.data.title}</h2>
                <p>{props.data.description}</p> 
            </div>
    )
}