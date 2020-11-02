import React, { useState, useEffect } from 'react'
import './Feed.css'
import Story from '../Story'
import Post from '../Post'
import PostItem from '../PostItem'
import db from '../fairbase'

function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy("postTime","desc").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ))

    }, [])
    return (
        <div className="feed" >
            <Story />
            <Post />

            {posts.map(post => (
                <PostItem
                    key={post.id}
                    image={post.data.image}
                    profilePic={post.data.profilePic}
                    userName={post.data.userName}
                    message={post.data.message}
                    postTime={post.data.postTime}
                />
            ))}
        </div>
    )
}

export default Feed
