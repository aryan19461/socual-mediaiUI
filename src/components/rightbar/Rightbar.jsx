import React from 'react'
import "./rightbar.css"
import bday from "../../assets/gift.png"
import ad from "../../assets/ad.png"
import p1 from "../../assets/person/1.jpg"


function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className='birthdayImg' src={bday} alt="" />
          <span className='birthdayText'> <b> 3 Friends have birthday  today</b></span>
        </div>
        <img className='rightbarAd' src={ad} alt="" />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className="rightbatFriendList">
          <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img className='rightbarProfileImg' src={p1} alt="" />
                <span className="rightbarOnline">

                </span>
              </div>
              <span className="rightbarUsername">Nikhil</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Rightbar
