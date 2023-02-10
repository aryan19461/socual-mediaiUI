import React from 'react'
import  "./sidebar.css"
import { Bookmark, Chat, Event, Group, HelpOutline, RssFeed, School, VideoLabel, WorkOutline } from "@material-ui/icons"
import  p10 from "../../assets/person/10.jpg"


function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          
          <li className="sidebarListItem">
              <RssFeed className='sidebarIcon'/>
              <span className='sidebarListItemText'>Feed</span>
          </li>


          <li className="sidebarListItem">
              <Chat className='sidebarIcon'/>
              <span className='sidebarListItemText'>chat</span>
          </li>

          <li className="sidebarListItem">
              <VideoLabel className='sidebarIcon'/>
              <span className='sidebarListItemText'>video</span>
          </li>

          <li className="sidebarListItem">
              <Group className='sidebarIcon'/>
              <span className='sidebarListItemText'>group</span>
          </li>

          <li className="sidebarListItem">
              <Bookmark className='sidebarIcon'/>
              <span className='sidebarListItemText'>bookmark</span>
          </li>

          <li className="sidebarListItem">
              <HelpOutline className='sidebarIcon'/>
              <span className='sidebarListItemText'>helpoutline</span>
          </li>

          <li className="sidebarListItem">
              <WorkOutline className='sidebarIcon'/>
              <span className='sidebarListItemText'>workoutline</span>
          </li>

          <li className="sidebarListItem">
              <Event className='sidebarIcon'/>
              <span className='sidebarListItemText'>Event</span>
          </li>

          <li className="sidebarListItem">
              <School className='sidebarIcon'/>
              <span className='sidebarListItemText'>Courses</span>
          </li>

        </ul>
      <button className='sidebarButton'>Show More</button>
      <hr className='sidebarHr'/>
      
      <ul className="sidebarFriendList">
          
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src={p10} alt="" />
          </li>

          
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src={p10} alt="" />
          </li>

          
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src={p10} alt="" />
          </li>

          
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src={p10} alt="" />
          </li>


          
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src={p10} alt="" />
          </li>


          
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src={p10} alt="" />
          </li>

          
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src={p10} alt="" />
          </li>
      </ul>
      </div>
    </div>
  )
}

export default Sidebar
