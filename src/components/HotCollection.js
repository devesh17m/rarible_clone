import React from 'react'
import coverPhoto from '../components/assets/media/imgs/collection/cover-photo.jpeg'
import avatarPhoto from '../components/assets/media/imgs/collection/avatar.gif'
import {HotCollectionItem} from '../data/HotCollectionItem'


function HotCollection() {

    return(
        <div className="hot-collection">
            <div className="hot-collection-container">
                <div className="hot-collection--heading">
                <h4>Hot collection</h4>
                </div>
                <div className="hot-collection--list">
                <div className="hot-collection--list-container">
                    {HotCollectionItem.map((collection) => {
                        return(
                            <div className="hot-collection--item">
                                <a href="#">
                                    <div className="hot-collection--item-container">
                                    <div className="hot-collection--item-img">
                                        <div className="hot-collection--photo-cover">
                                        <img src={collection.coverPhoto}/>
                                        </div>
                                        <div className="hot-collection--avatar">
                                        <img src={collection.avatarPhoto}/>
                                        </div>
                                    </div>
                                    <div className="hot-collection--item-infor">
                                        <div className="hot-collection--item-title">
                                        <p>{collection.collector}</p>
                                        </div>
                                        <div className="hot-collection--item-value">
                                        <p>{collection.money}</p>
                                        </div>
                                    </div>
                                    </div>
                                </a>
                            </div>
                        )
                    })}
                    
                </div>
                </div>
            </div>
            </div>

    )
}
export default HotCollection;