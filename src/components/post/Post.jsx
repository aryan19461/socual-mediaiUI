import { MoreVert } from '@material-ui/icons'
import React from 'react'
import like from "../../assets/like.png"
import heart from "../../assets/heart.png"
import { DUsers } from '../../dummyData.js'
import "./post.css"


function Post({post}) {

    console.log(post)
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' src= "" alt="" />
                    <span className="postUsername">aryan singh</span>
                    <span className="postDate"> {post.date}</span>
                </div>

                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postcenter">
                <span className='postText'>{post.desc}</span>
                <div>
                <img className='postImg' src={post.photo} alt="img" />
                {/* <img className='postImg' src={require(`${post.photo}`)} alt="" /> */}
                </div>
            </div>

            <div className="postBottom">
                <div className="postBottomLeft">
                <img className='likeIcon' src={like} alt="" />   
                <img className='likeIcon' src={heart} alt="" />
                </div>
                <span className='postLikeCounter'>{post.like} likes</span>
                <div className="postBottomRight">
                    <span className='postCommentText'>
                        {post.comment} comments
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post
