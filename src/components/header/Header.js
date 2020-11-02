import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SubtitlesOutlinedIcon from '@material-ui/icons/SubtitlesOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { useStateValue } from '../ContextApi/StateProvider'

function Header() {
    const [{ user }, dispatch] = useStateValue()
    return (
        <div className="header">
            <div className="header-left">
                <img src="https://cdn.iconscout.com/icon/free/png-64/facebook-2038471-1718509.png" alt="" />
                <div className="header-input">
                    <SearchIcon />
                    <input placeholder="Search Facebook" type="text" />
                </div>
            </div>


            <div className="header-meddle">
                <div className="header-option header-option--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header-option ">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header-option">
                    <StorefrontOutlinedIcon fontSize="large" />
                </div>
                <div className="header-option">
                    <SubtitlesOutlinedIcon fontSize="large" />
                </div>
                <div className="header-option">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
            </div>


            <div className="header-right">
                <div className="hader-info">
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>

            </div>
        </div>
    )
}

export default Header
