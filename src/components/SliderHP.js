import React from 'react'
import './assets/css/SlideHp.css'
import highlightVideo from './assets/media/videos/rarible_video_2.webm'
// import sliderItemLink from './assets/media/videos/GenerationIII-FullCycleFeature1.webm'
import { sliderItem} from '../data/sliderItem'

function SliderHp() {
    
    return(

        <div className="slider">
            <div className="slider-container">
            <div className="slider--highlight">
                <div className="slider--highlight-content">
                    <video autoPlay src={highlightVideo} />
                </div>
            </div>
            <div className="slider--list">
                {sliderItem.map((data, key) => {
                return (
                    <div key={key} className ={data.className} >
                        <video autoPlay={data.autoPlay} 
                        src={data.src}></video>
                    </div>
                );
                })}
                
                
            </div>
        
            </div>
        </div>
    )
}

export default SliderHp;