import '../App.css'

import NavBar from '../components/NavBar'
import { useState, useEffect } from 'react'
import Comment from '../components/Comment'
import Footer from '../components/Footer'


function Comments() {

  const [startID, setStartID] = useState(0);
  const [limit, setLimit] = useState(5);
  const [comments, setComments] = useState([]);
  const [length, setLength] = useState(0);

  useEffect(() => {
    // Fetch the number of comments from the database and update the state
    // Example code:
    const fetchLength = async () => {
      try {
        const response = await fetch('/api/comments');
        const data = await response.json();
        setLength(data.length);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchLength();
  }, []);

  useEffect(() => {
    // Fetch comments from the database and update the state
    // Example code:
    const fetchComments = async () => {
      try {
        const response = await fetch('/api/comments?id=' + startID + '&limit=' + limit);
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [limit, startID]);

  return (
    <>
      <NavBar />
      <div className='text-container'>
        <h2 className='p-8 mb-8'>Comments</h2>
        {comments.map((comment, index) => (
          <Comment key={index} name={comment.name} date={comment.date.substring(0, 10)}>
            {comment.content}
          </Comment>
        ))}
      </div>
      <div className='flex flex-row justify-center'>
        {limit < length ? <button className='bg-accent-green hover:bg-accent-green-dark text-neutral-900 font-bold py-2 px-4 rounded m-8' onClick={() => { setLimit(limit + 5); setStartID(startID + 5) }}>Load More</button> : null}
      </div>

      <Footer />
    </>
  )
}

export default Comments
