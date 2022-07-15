import ProfileImg from "./profile.png"
import ProfileLogo from "./profileLogo.png"
import React from 'react'

export default function HeaderImg() {
  // const screenWidth = window.innerWidth;
  // const profileWidth = screenWidth < 500 ? screenWidth : 500;
  // const styles = document.styleSheets[0].insertRule(`\
  //   @keyframes profileLogo {\
  //     100% {left: ${profileWidth} ;}`
  // )
  
  return (
    <div>
        <img className="profile-img" src={ProfileImg} alt="profile" />
        <img className="profile-logo" src={ProfileLogo} alt="profile logo" />
    </div>
  )
}
