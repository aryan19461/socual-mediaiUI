import React from 'react'
import Post from '../post/Post.jsx'
import Share from '../share/Share.jsx'
import "./feed.css"
import { DPosts } from '../../dummyData.js'

function feed() {
  return (
    <div className='feed'>
      <div className="feedWrapper">
          <Share/>
          {DPosts.map((p) =>(
            <Post key={p.id} post={p}/>
          ))}
          
      </div>
    </div>
  )
}

export default feed
