import React from 'react'
import './assets/css/SlideHp.css'
import highlightVideo from './assets/media/videos/rarible_video_2.webm'
import sliderItem from './assets/media/videos/GenerationIII-FullCycleFeature1.webm'


function SliderHp() {

    return(

        <div className="slider">
            <div className="slider--highlight">
                <div className="slider--highlight-content">
                <video autoPlay src={highlightVideo} />
                </div>
            </div>
            <div className="slider--list">
                <div className="slider--item">
                <video autoPlay src={sliderItem} />
                </div>
                <div className="slider--item">
                <video autoPlay src={sliderItem} />
                </div>
                <div className="slider--item">
                <video autoPlay src={sliderItem} />
                </div>
                <div className="slider--item">
                <video autoPlay src={sliderItem} />
                </div>
                <div className="slider--item">
                <video autoPlay src={sliderItem} />
                </div>
                <div className="slider--item">
                <video autoPlay src={sliderItem} />
                </div>
            </div>
        </div>
    )
}

export default SliderHp;