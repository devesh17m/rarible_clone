import React from 'react'
import './assets/css/TopCollection.css'
import avatar from './assets/media/imgs/content/avatar_collection.png'

function TopCollection() {

    function collectionDrop() {
        var y = document.getElementById("comunity-dropmenu");
        if (y.className === "collection-day--dropdown") {
          y.className += " collection-dropdown--enable";
        } else {
          y.className = "collection-day--dropdown";
        }
      }

    return(
        <div className="top-collection">
            <div className="top-collection--heading">
                <div className="top-collection--heading-left">
                <h2>Top collection in</h2>
                <h2 onClick={collectionDrop}> 
                    1 day
                    <img style={{width: '15px'}} src="./assets/icons/angle-down-solid.svg" alt="" />
                </h2>
                <div className="collection-day--dropdown" id="collection-drop">
                    <div className="collection--dropdown">
                    <p> 3 days</p>
                    <p> 7 days</p>
                    <p> 10 days</p>
                    </div>
                </div>
                </div>
                <div className="top-collection--heading-right">
                <button type="button">See all</button>
                </div>
            </div>
            <div className="top-collection--list">
                <div className="top-collection--item">
                <p>1</p>
                <div className="collection--avatar">
                    <img src={avatar} />
                </div>
                <div className="collection-item--infor">
                    <p>Cool cat</p>
                    <p>$1,000,001</p>
                </div>
                </div>
                <div className="top-collection--item">
                <p>1</p>
                <div className="collection--avatar">
                    <img src={avatar} />
                </div>
                <div className="collection-item--infor">
                    <p>Cool cat</p>
                    <p>$1,000,001</p>
                </div>
                </div>
                <div className="top-collection--item">
                <p>1</p>
                <div className="collection--avatar">
                    <img src={avatar} />
                </div>
                <div className="collection-item--infor">
                    <p>Cool cat</p>
                    <p>$1,000,001</p>
                </div>
                </div>
                <div className="top-collection--item">
                <p>1</p>
                <div className="collection--avatar">
                    <img src={avatar} />
                </div>
                <div className="collection-item--infor">
                    <p>Cool cat</p>
                    <p>$1,000,001</p>
                </div>
                </div>
                <div className="top-collection--item">
                <p>1</p>
                <div className="collection--avatar">
                    <img src={avatar} />
                </div>
                <div className="collection-item--infor">
                    <p>Cool cat</p>
                    <p>$1,000,001</p>
                </div>
                </div>
            </div>
        </div>

    
    )
}

export default TopCollection;