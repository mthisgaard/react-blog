import React from 'react'

const Author = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-white">
      <div className="absolute flex justify-center left-0 right-0 -top-14">
        <img 
          src={author.photo.url}
          alt={author.name}
          height="100px" 
          width="100px" 
          className="align-middle rounded-full"
        />
      </div>
      <h3 className="text-gray-700 my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-gray-700 text-lg">{author.bio}</p>
    </div>
  )
}

export default Author