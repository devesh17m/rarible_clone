import React from 'react'
import './assets/css/Body.css'
import dropMenuIcon from './assets/icons/angle-down-solid.svg'
import {BestSellerItem} from '../data/BestSellerItem'


function BestSeller() {

    function bestsellerDrop() {
        var y = document.getElementById("best-seller-drop");
        if (y.className === "best-seller-day--dropdown") {
          y.className += " best-seller-dropdown--enable";
        } else {
          y.className = "best-seller-day--dropdown";
        }
      }

    return(
        <div className="best-seller">
            <div className="best-seller-container">
                <div className="best-seller--heading">
                    <div className="best-seller--heading-left">
                    <h4>Best sellers in</h4>
                        <div className="best-seller--filter" onClick={bestsellerDrop}>
                            <h4 > 
                            1 day
                            </h4>
                            <img style={{width: '15px'}} src={dropMenuIcon} />
                        </div>
                        
                    <div className="best-seller-day--dropdown" id="best-seller-drop">
                        <div className="best-seller--dropdown">
                        <p> 3 days</p>
                        <p> 7 days</p>
                        <p> 10 days</p>
                        </div>
                    </div>
                    </div>
                    <div className="best-seller--heading-right">
                    <button type="button">See all</button>
                    </div>
                </div>
                <div className="best-seller--list">
                    {BestSellerItem.map((seller, key) => {
                        return(
                            <div key={key} className="best-seller--item">
                                <p>{key + 1}</p>
                                <div className="seller-avatar">
                                    <img src={seller.srcAvatar} />
                                </div>
                                <div className="seller--infor">
                                    <p>{seller.name}</p>
                                    <p>{seller.money}</p>
                                </div>
                            </div>
                        );
                    })}
                    
                    
                </div>
            </div>
        </div>

    
    )
}

export default BestSeller;