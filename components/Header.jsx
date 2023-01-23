import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, [])
  
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full flex items-center justify-between border-gray-300 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="title cursor-pointer font-bold text-6xl drop-shadow-2xl">
              Japan Blog
            </span>
          </Link>
        </div>
        <div>
          <div className="hidden md:float-left md:contents">
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className="md:float-right mt-2 ml-4 align-middle duration-500 bg-white rounded-lg opacity-70 hover:opacity-100 transform hover:-translate-y-1 inline-block border border-2 rounded text-lg font-medium px-8 py-3 cursor-pointer">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
