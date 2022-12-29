import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-lg p-0 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img 
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top object-center absolute h-80 w-full object-cover shadow-lg"
        />
      </div>
      <h1 className="transition duration-700 text-cener mb-8 px-8 cursor-pointer hover:text-gray-600 text-3xl font-semibold">
        <Link href={`/post/${post.slug}`}>
          {post.title}
        </Link>
      </h1>
      <div className="block lg:flex-col items-center mb-8 w-full px-8">
        <div className="flex items-center pb-3 mb-0 w-full lg:w-auto mr-8">
          <img 
            src={post.author.photo.url} 
            alt={post.author.name}
            height="30px"
            width="30px"
            className="rounded-full"
          />
          <p className="inline text-gray-700 ml-2 text-lg">{post.author.name}</p>
        </div>
        <div className="font-medium text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="align-middle">
            {moment(post.createdAt).format('MMM DD, YYYY')}
          </span>
        </div>
      </div>
      <p className="text-lg text-gray-700 font-normal px-4 px-8 mb-8">{post.exerpt}</p>
      <div className="px-8 pb-12 ">
        <Link href={`/post/${post.slug}`}>
            <span className="duration-500 transform hover:-translate-y-1 hover:bg-gray-200 inline-block border border-2 rounded text-lg font-medium text-gray-700 px-8 py-3 cursor-pointer">
              Continue Reading
            </span>
        </Link>
      </div>
    </div>
  )
}

export default PostCard