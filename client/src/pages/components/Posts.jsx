import React, { useState } from 'react'

import Thumbnail1 from '../images/blog1 (2).jpg'
import Thumbnail2 from '../images/blog3.jpg'
import Thumbnail3 from '../images/blog4.jpg'
import Thumbnail4 from '../images/blog5.jpg'
import Thumbnail5 from '../images/blog6.jpg'
import PostItem from './PostItem'

const DUMMY_POSTS = [
    {
        id: '1',
        thumbnail: Thumbnail1,
        category: 'education',
        title: 'this is the title of very first post on this blog',
        desc: 'werfwfddddddddddddddddddddddddddddddd',
        authorID: 3
    },
    {
        id: '2',
        thumbnail: Thumbnail2,
        category: 'education',
        title: 'this is the title of very first post on this blog',
        desc: 'werfwfddddddddddddddddddddddddddddddd',
        authorID: 1
    },
    {
        id: '3',
        thumbnail: Thumbnail3,
        category: 'education',
        title: 'this is the title of very first post on this blog',
        desc: 'werfwfddddddddddddddddddddddddddddddd',
        authorID: 2
    },
    {
        id: '4',
        thumbnail: Thumbnail4,
        category: 'education',
        title: 'this is the title of very first post on this blog',
        desc: 'werfwfddddddddddddddddddddddddddddddd',
        authorID: 13
    },
    {
        id: '5',
        thumbnail: Thumbnail5,
        category: 'education',
        title: 'this is the title of very first post on this blog',
        desc: 'werfwfddddddddddddddddddddddddddddddd',
        authorID: 11
    }
]


const Posts =() => {
    const [posts, setPosts] = useState(DUMMY_POSTS)
  return (
    <section className="posts">
       <div className="container posts_container">
            {
                posts.map(({id,thumbnail,category,title,desc,authorID}) =>
                    <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title}
                    description={desc} authorID={authorID}/> )
            }
       </div>
        
    </section>
  )
}

export default Posts

