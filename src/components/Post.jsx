import { Avatar } from '@material-ui/core'
import React,{useState} from 'react'
import './Post.css'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import {useStateValue} from '../components/ContextApi/StateProvider'
import db from './fairbase'
import firebase from 'firebase'


function Post() {
    const [{user},dispatch]=useStateValue()
   
    const [input,setInput]= useState("");
    const [imageUrl,setImageUrl]= useState("");


    const handelSubmit=(e)=>{
       e.preventDefault();
       
       db.collection("posts").add({
           message:input,
           profilePic:user.photoURL,
           userName:user.displayName,
           postTime:firebase.firestore.FieldValue.serverTimestamp(),
           image:imageUrl,
       });


       setInput("");
       setImageUrl("")
    }
    return (
        <div className="post">
            <div className="top">
                <Avatar src={user.photoURL}  />
                <form onSubmit={handelSubmit} action="">
                    <input value={input} 
                    onChange={e=>setInput(e.target.value)}
                    className="post-input"  placeholder={`Whats on your Mind ${user.displayName} ?`} type="text"/>
                    <input value={imageUrl} 
                    onChange={e=>setImageUrl(e.target.value)}
                    placeholder="Image URL"/>
                    <button type="submit"></button>
                </form>
            </div>

            <div className="bottom">
                <div className="post-option">
                    <VideocamIcon style={{color:"red"}} />
                    <h3>Live Video</h3>
                </div>
                <div className="post-option">
                    <PhotoLibraryIcon style={{color:"green"}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="post-option">
                    <SentimentVerySatisfiedIcon style={{color:"orange"}} />
                    <h3>LFeelings/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default Post
