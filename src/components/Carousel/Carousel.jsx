import React, { useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

import logoFSI from '../../assets/images/fsi-logo.png'
import logoCN from '../../assets/images/code-ninjas-logo.png'
import logoRiggs from '../../assets/images/riggs-logo.png'

import "./Carousel.css"

export const Carousel = ({ data }) => {
    
    // const slideLogos = [logoFSI, logoCN, logoRiggs];


    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    }

    return(
        <div className='carousel'>
            <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide}/>
            {data.map((item, idx) => {
                return (
                    <div key={idx} className={slide === idx ? "slide" : "slide slide-hidden"}>
                        <div className='workSlide'>
                            {/* <img key={idx} src={slideLogos[idx]} className='logo'/> */}
                            <h1>{item.company}</h1>
                            <h3>{item.role}</h3>
                            <div className="divider"></div>
                            <ul>
                                {item.roleDescription.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>
                            

                        </div>
                    </div>
                );
            })}
            <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide}/>
            <span className='indicators'>
                {data.map((_, idx) => {
                    return  ( 
                        <button 
                            key={idx} 
                            onClick={() => setSlide(idx)} 
                            className={slide === idx ? "indicator" : "indicator indicator-inactive"}
                        ></button>
                    );
                })}
            </span>
        </div>

        
    )
};