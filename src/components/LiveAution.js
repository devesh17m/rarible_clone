import React from 'react'
import './assets/css/Body.css'
import likeIcon from './assets/icons/like.png'
import {liveAutionItem} from '../data/liveAutionItem'


function LiveAution() {

    return(
        <div className="live-aution">
            <div className="live-aution-container">
                <div className="live-aution--heading">
                <h2>Live aution</h2>
                </div>
                <div className="live-aution--list">
                <div className="live-aution--list-container">
                    {liveAutionItem.map((autionItem) => {
                        return(
                            <div className="live-aution--item">
                                <div className="live-aution--item-container">
                                    {/* heading */}
                                    <div className="live-aution--item-heading">
                                    <div className="live-aution--item-heading-left">
                                        <div className="avatar-collection">
                                            <img src={autionItem.collectionAvatar} />
                                            <p className="collection-avatar--describe">Collection: {autionItem.collection}</p>
                                            </div>
                                        <div className="avatar-creator">
                                            <img src={autionItem.creatorAvavtar} />
                                            <p className="creator-avatar--describe">Creator: {autionItem.creator}</p>
                                            </div>
                                        <div className="avatar-owner">
                                            <img src={autionItem.ownerAvavtar} />
                                            <p className="owner-avatar--describe">Owner: {autionItem.owner}</p>
                                            </div>
                                    </div>
                                    <div className="live-aution--item-heading-right">
                                        <button>...</button>
                                    </div>
                                    </div>
                                    {/* img */}
                                    <div className="live-aution--img">
                                    <div className="live-aution--img-container">
                                        <img src={autionItem.bidItemImg} />
                                    </div>
                                    </div>
                                    <div className="live-aution--infor">
                                    <p className="live-aution--infor-title">
                                        <a href="#">{autionItem.itemName}</a>
                                    </p>
                                    <p className="live-aution--infor-detail">
                                        Heighest bid{' '}
                                        {autionItem.remainItem}/{autionItem.totalItem}
                                    </p>
                                    <div className="live-aution--infor-status">
                                        <p>{autionItem.currentBid} wETH</p>
                                        <button className="item--like">
                                        <img src={likeIcon}/>
                                        <p>{autionItem.likeCount}</p>
                                        </button>
                                    </div>
                                    </div>
                                </div>
                            </div>  
                        )
                    })}
                    
                    
                </div>
                </div>
            </div>
            </div>
    
    )
}

export default LiveAution;