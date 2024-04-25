import React from "react"
export default function Hero(props){
    return (
        <section className="section-one" style={props.data.on ? props.data.onBackground_image: props.data.offBackground_image}>
            <div className="my-journal-txt">
                <p>{props.data.date}</p>
                <h1>{ props.data.on ? "Voyage Across the Universe": props.data.title }</h1>
                <p>
                    {props.data.description}
                </p>   
            </div>
        </section>
    )
}