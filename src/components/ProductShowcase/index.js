import React, { useEffect, useRef, useState } from 'react'
import "./productShowcase.css"
import nikon3 from "../../common/images/nikon3.jpg"

const ProductShowcase = () => {
    const[showAnimation,setShowAnimation]=useState(false);

    const ref=useRef(null);

    const toggleAnimation=(e)=>{
        if(e[0].isIntersecting){
        setShowAnimation(true);
        }
    };

    const options={
        root:null,
        rootMargin:'0px',
        threshold:0.5,
    };

    const observer=new IntersectionObserver(toggleAnimation,options)

    useEffect(() => {
        const observer= new IntersectionObserver(toggleAnimation,options)
        if(!showAnimation)
        {
            if(ref.current)
            {
                observer.observe(ref.current);
            }
        }
        return()=>{

        }
            if(ref.current)
            {
                observer.unobserve(ref.current);
            }
    })
    
  return (
    <div className={`product-showcase ${showAnimation?'scale-in-bottom':""}`  }
    ref={ref}
    >
        <div className="showcase-wrapper">
           
                <img src={nikon3} 
                className="showcase-ui  showcase-mockup-1" />
                 
        </div>
    </div>
  )
}

export default ProductShowcase;