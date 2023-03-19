import { Avatar } from '@mui/material'
import React, { forwardRef } from 'react'
import VerifiedUser from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutline from '@mui/icons-material/ChatBubbleOutline';
import Repeat from '@mui/icons-material/Repeat';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Publish from '@mui/icons-material/Publish';
import "./Post.css"

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post--avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post--body">
          <div className="post--header">
            <div className="post-headerText">
              <h3>{displayName}
                <span className="post--headerSpecial">
                  <VerifiedUser className="post--badge" />@{username}
                </span></h3>
            </div>
            <div className="post--headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} />
          <div className="post--footer">
            <ChatBubbleOutline fontSize="small" />
            <Repeat fontSize="small" />
            <FavoriteBorder fontSize="small" />
            <Publish fontSize="small" />
          </div>
        </div>
      </div>
    )
  }
);

export default Post