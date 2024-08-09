import React, { useState } from 'react'
import Avatar from './images/averter4.jpg'
import { Link } from 'react-router-dom'
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";



const UserProfile = () => {
  const[avatar, setAvatar] = useState(Avatar)
  const[name,setName] = useState('')
  const[email,setEmail] = useState('')
  const[currentPassword,setCurrentPassword] = useState('')
  const[newPassword,setNewPassword] = useState('')
  const[confirmNewPassword,setConfirmNewPassword] = useState('')

  return (
    <section>
      <div className="container profile_container">
        <Link to={'/myposts/sdfsdf'} className='btn'>My posts </Link>

        <div className="profile_details">
          <div className="avatar_wrapper">
            <div className="profile_avatar">
              <img src={avatar} alt="" />
            </div>
            {/* From to updagte avatar */}
            <form className="avatar_form">
              <input type="file" name="avatar" id="avatar" onChange={e => setAvatar(e.target.files[0])} accept="png,jpg,jpeg"/>
              <label htmlFor="avatar"><FaEdit/></label>
            </form>
            <button className="profile_avatar-btn"><FaCheck/></button>
          </div>
          <h1>Ernest Achiever</h1>

          <form className="form profile_form" action="">
            <p className="form_error-massage">This is an error massage </p>
            <input type="text" placeholder='Full Name' value={name} onChange={e => setName(e.target.value)}/>
            <input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder='Current password' value={currentPassword} onChange={e => setConfirmNewPassword(e.target.value)}/>
            <input type="password" placeholder='New password' value={newPassword} onChange={e => setNewPassword(e.target.value)}/>
            <input type="password" placeholder='Confirm new fpassword' value={confirmNewPassword} onChange={e => setConfirmNewPassword(e.target.value)}/>
            <button type="submit" className='btn primary'>Update details</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default UserProfile