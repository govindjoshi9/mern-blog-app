import { useEffect, useState } from 'react'
import Post from '../post'

export default function IndexPage() {
  const [post, setPost] = useState('');
  useEffect(() => {
    fetch('http://localhost:4000/post').then(response => {
      response.json().then(posts => {
          setPost(posts)
        })
      })
  }, []);

      
  return (
    <>
      {post.length > 0 &&
        post.map((singlePost, index) => <Post key={index} {...singlePost} />)}
    </>
  );
}
