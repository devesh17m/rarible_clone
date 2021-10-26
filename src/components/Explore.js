import React from 'react'
import './assets/css/Body.css'
// import avatar from './assets/media/imgs/content/avatar_collection.png'
// import itemImg from './assets/media/imgs/hotbids/d00047ef.webp'
import likeIcon from './assets/icons/like.png'
import {ExploreItem} from '../data/ExploreItem'


function Explore() {

    return(
        <div className="hotbid">
            <div className="hotbid-container">
                <div className="hotbid--heading explore--heading">
                    

                <div className="explore--heading-left">
                    <h2>Explore</h2>
                    <button id="explore-category">Category</button>
                    <button id="explore-collections">Collections</button>
                    <button id="explore-sale-type">Sale types</button>
                    <button id="explore-price">Price range</button>
                </div>
                <div className="explore--heading-right">
                    <button id="eplore-category">Recents added</button>
                </div>
                </div>
                <div className="hotbid--list">
                <div className="explore--list-container">
                    {ExploreItem.map((bidItem) => {
                        return(
                            <div className="hotbid--item">
                                <div className="hotbid--item-container">
                                    {/* heading */}
                                    <div className="hotbid--item-heading">
                                    <div className="hotbid--item-heading-left">
                                        <div className="avatar-collection">
                                            <img src={bidItem.collectionAvatar} />
                                            <p className="collection-avatar--describe">Collection: {bidItem.collection}</p>
                                            </div>
                                        <div className="avatar-creator">
                                            <img src={bidItem.creatorAvavtar} />
                                            <p className="creator-avatar--describe">Creator: {bidItem.creator}</p>
                                            </div>
                                        <div className="avatar-owner">
                                            <img src={bidItem.ownerAvavtar} />
                                            <p className="owner-avatar--describe">Owner: {bidItem.owner}</p>
                                            </div>
                                    </div>
                                    <div className="hotbid--item-heading-right">
                                        <button>...</button>
                                    </div>
                                    </div>
                                    {/* img */}
                                    <div className="hotbid--img">
                                    <div className="hotbid--img-container">
                                        <img src={bidItem.bidItemImg} />
                                    </div>
                                    </div>
                                    <div className="hotbid--infor">
                                    <p className="hotbid--infor-title">
                                        <a href="#">{bidItem.itemName}</a>
                                    </p>
                                    <p className="hotbid--infor-detail">
                        
                                        <span className="hotbid--span">{bidItem.startBid} ETH</span>
                                        {bidItem.remainItem}/{bidItem.totalItem}
                                    </p>
                                    <div className="hotbid--infor-status">
                                        <p> <a href="#"> Place a bid</a></p>
                                        <button className="item--like">
                                        <img src={likeIcon}/>
                                        <p>{bidItem.likeCount}</p>
                                        </button>
                                    </div>
                                    </div>
                                </div>
                            </div>  
                        )
                    })}
                </div>
                </div>
                <div className="explore--loadmore-btn">
                    <button>Load more</button>
                </div>
            </div>
            </div>
    
    )
}

export default Explore;