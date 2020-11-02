import { Avatar } from '@material-ui/core'
import React from 'react'
import './PostItem.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function PostItem({ profilePic, image, userName, postTime, message }) {
    return (
        <div className="postItem" >
            <div className="post-top">
                <Avatar src={profilePic} className="post-avatar" />
                <div className="post-info">
                    <h3>{userName}</h3>
                    <p>{new Date(postTime?.toDate()).toUTCString()}</p>
                </div>
            </div>

            <div className="post-bottom">
                <p>{message}</p>
                <div className="post-img">
                    <img src={image} alt="" />
                </div>
            </div>

            <div className="post-options">
                <div className="post-item">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post-item">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>

                </div>
                <div className="post-item">
                    <NearMeIcon />
                    <p>Share</p>

                </div>
                <div className="post-item">
                    <AccountCircleIcon />
                    <ExpandMoreIcon />

                </div>
            </div>
        </div>
    )
}

export default PostItem
