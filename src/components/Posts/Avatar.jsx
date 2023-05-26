import React from 'react'
import avatarImage from '../../images/avatar.jpg'
import { Link } from 'react-router-dom'

function Avatar({url}) {
  return (
    <Link to={url}>
    <img
    width={64}
    height={64}
    className="mr-3 rounded-circle"
    src={avatarImage}
    alt="cat"
  /></Link>
  )
}

export default Avatar
