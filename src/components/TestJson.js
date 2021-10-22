import React from 'react'
import './assets/css/SlideHp.css'
import { sliderItem } from '../data/sliderItem'

function TestJson() {

    return(

        <>
            <div className="test-json">
            {sliderItem.map((data, key) => {
                return (
                    <div key={key}>
                    {data.name +
                        " , " +
                        data.age }
                    </div>
                );
                })}
            </div>
        </>
    )
}

export default TestJson;