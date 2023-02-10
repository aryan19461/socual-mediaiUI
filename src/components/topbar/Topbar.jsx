import React from 'react'
import "./topbar.css"
import { Chat, Notifications, Person, Search } from '@material-ui/icons'

const Topbar = () => {
  return (
    <>
    <div className='topbarContainer'>
      
           {/* LEFT*/ }
      <div className="topbarLeft">
        <span className='logo'>Social</span>
      </div>

     {/* CENTER*/ }
      <div className="topbarCenter">
        
         <div className="searchbar">
            <Search className='searchIcon'/>
            <input placeholder='Search your content' className="searchInput" />
        </div>

      </div>

      {/* RIGHT*/ }
      <div className="topbarRight">
          
          <div className="topbarLinks">
              <span className="topbarLink">HomePage</span>
              <span className="topbarLink">Timeline</span>
          </div>
          
      <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person/>
            <span className="topbarIconBadge">1</span>
            </div>

            <div className="topbarIconItem">
            <Chat/>
            <span className="topbarIconBadge">2</span>
            </div>


            <div className="topbarIconItem">
            <Notifications/>
            <span className="topbarIconBadge">1</span>
            </div>
          </div>
      </div> 

        <img className='topbarImg' src="" alt="" />


      </div>
    </>
  )
}

export default Topbar
