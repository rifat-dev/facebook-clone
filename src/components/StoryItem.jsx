import { Avatar } from '@material-ui/core'
import React from 'react'
import './StoryItem.css'
// import { Avatar} from '@material-ui/core';

function StoryItem({ image, profileSrc, title }) {
    return (
        <div style={{backgroundImage:`url(${image})`}} className="storyItem">
            <Avatar className="avater" src={profileSrc} />
            <h4>{title}</h4>

        </div>
    )
}

export default StoryItem
