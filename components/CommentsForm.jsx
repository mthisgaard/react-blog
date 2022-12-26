import React, { useRef, useState, useEffect } from 'react';
import { submitComment } from '../services';

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentElement = useRef();
  const nameElement = useRef();
  const emailElement = useRef();
  const storeDataElement = useRef();

  useEffect(() => {
    nameElement.current.value = window.localStorage.getItem('name');
    emailElement.current.value = window.localStorage.getItem('email');
  }, [])
  

  const handleCommentSubmission = () => {
    setError(false);

    const { value: comment } = commentElement.current;
    const { value: name } = nameElement.current;
    const { value: email } = emailElement.current;
    const { checked: storeData } = storeDataElement.current;

    if(!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = { name, email, comment, slug };

    if(storeData) {
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('email', email);
    } else {
      window.localStorage.removeItem('name', name);
      window.localStorage.removeItem('email', email);
    }

    submitComment(commentObj)
      .then((res) => {
        setShowSuccessMessage(true);
        
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000)
      })
  }

  return (
    <div className="bg-white shadow-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-bottom pb-4">Leave a comment</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea 
          ref={commentElement} 
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Comment"
          name="comment"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input 
          type="text"
          ref={nameElement} 
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Name"
          name="name"
        />
        <input 
          type="text"
          ref={emailElement} 
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input 
            ref={storeDataElement}
            type="checkbox" 
            id="storeData"
            name="storeData"
            value="true"
          />
          <label className="text-gray-500 cursor-pointer ml-2" htmlFor="storeData">Save my name and email for the next time I comment.</label>
        </div>
      </div>
      {error && <p className="text-ss text-red-500">All fields are required.</p>}
      <div className="mt-8">
        <button 
          type="button"
          onClick={handleCommentSubmission}
          className="duration-500 transform hover:-translate-y-1 hover:bg-gray-200 inline-block border border-2 rounded text-lg font-medium text-gray-700 px-8 py-3 cursor-pointer"
        >
          Post Comment
        </button>
        {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500">Comment submitted for review.</span>}
      </div>
    </div>
  )
}

export default CommentsForm