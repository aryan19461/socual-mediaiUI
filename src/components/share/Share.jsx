import { EmojiEmotionsRounded, Label, PermMedia, Room } from '@material-ui/icons'
import React from 'react'
import "./share.css"
import post1 from "../../assets/post/post10.jpg"
const Share = () => {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img className='shareProfileImg' src={post1} alt="" />
                <input placeholder="What's in your mind" className='shareInput'/>
            </div>

            <hr className='shareHr'/>
            <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor='Red' className='shareIcon'/>
                            <span className="shareOptionText">
                                photo / video
                            </span>
                        </div>

                        <div className="shareOption">
                            <Label htmlColor='black' className='shareIcon'/>
                            <span className="shareOptionText">
                                Tag
                            </span>
                        </div>

                        <div className="shareOption">
                            <Room htmlColor='blue' className='shareIcon'/>
                            <span className="shareOptionText">
                                Location
                            </span>
                        </div>

                        <div className="shareOption">
                            <EmojiEmotionsRounded htmlColor='yellow' className='shareIcon'/>
                            <span className="shareOptionText">
                                Feelings
                            </span>
                        </div>
                        
                    </div>
                    <button className='shareButton'>Share</button>
            </div>
        </div> 
    </div>
  )
}

export default Share
