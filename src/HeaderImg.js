import ProfileImg from "./profile.png"
import ProfileLogo from "./profileLogo.png"

import React from 'react'

export default function HeaderImg() {
  return (
    <div>
        <img className="profile-img" src={ProfileImg} alt="profile" />
        <img className="profile-logo" src={ProfileLogo} alt="profile logo" />
    </div>
  )
}
