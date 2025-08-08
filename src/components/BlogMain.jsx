import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import clothes from '../assets/clothess.jpg';
import capsule from '../assets/capsule.jpg';
import denimm from '../assets/denimm.jpg';
import stylingg from '../assets/stylingg.jpg';



import summer from '../assets/summer.webp';
// Dummy data for blog posts to demonstrate the layout
const blogPosts = [
  {
    id: 1,
    title: '5 Must-Have Fashion Trends for Summer 2025',
    excerpt: 'Summer is here, and it’s time to update your wardrobe. We’ve rounded up the top five trends that are taking the fashion world by storm this season...',
    imageUrl: summer,
    author: 'Jane Doe',
    date: 'August 1, 2025',
  },
  {
    id: 2,
    title: 'How to Build a Capsule Wardrobe',
    excerpt: 'Simplify your style and save money by building a versatile capsule wardrobe. Learn how to choose timeless pieces that can be mixed and matched for any occasion...',
    imageUrl: capsule,
    author: 'John Smith',
    date: 'July 25, 2025',
  },
  {
    id: 3,
    title: 'The Ultimate Guide to Denim Fits',
    excerpt: 'From skinny to wide-leg, finding the perfect pair of jeans can be a challenge. Our guide breaks down all the popular denim fits to help you find your new favorite...',
    imageUrl: denimm,
    author: 'Emily White',
    date: 'July 18, 2025',
  },
  {
    id: 4,
    title: 'Styling Tips for the Perfect Outfit',
    excerpt: 'Elevate your everyday look with these simple yet effective styling tricks. We cover everything from accessorizing to color theory to help you express your unique style...',
    imageUrl: stylingg,
    author: 'Jane Doe',
    date: 'July 10, 2025',
  },
];

const BlogMain = () => {
  return (
    <div className="flex flex-col items-center  font-sans p-4 md:p-8">
      
      {/* Blog Header & Hero Section */}
      <div className="w-full max-w-6xl text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          SHOP.CO Blog
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore the latest fashion trends, styling tips, and stories from the SHOP.CO community.
        </p>
      </div>

      {/* Featured Post Section */}
      <div className="w-full max-w-6xl mb-16">
        <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:w-1/2">
            <img 
              src={clothes}
              alt="Featured Blog Post" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 text-left">
            <span className="text-sm text-red-500 font-semibold uppercase">Featured Article</span>
            <h2 className="text-3xl font-bold text-gray-800 text-left my-4">
              The Art of Effortless Style: A Beginner's Guide
            </h2>
            <p className="text-gray-600 text-left leading-relaxed mb-6">
              Discover the secrets to looking chic and put-together without trying too hard. From mastering a neutral color palette to investing in key pieces, we'll show you how to build a stylish wardrobe with ease...
            </p>
            <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
              <span>By **Jane Doe**</span>
              <span>August 5, 2025</span>
            </div>
            <a href="#" className="flex items-center text-red-500 font-semibold hover:text-red-600 transition-colors duration-200">
              Read More
              <FiArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* Recent Posts Grid */}
      <div className="w-full max-w-6xl mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Recent Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-48 object-top object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl text-left font-bold text-gray-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-left text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>By **{post.author}**</span>
                  <span>{post.date}</span>
                </div>
                <a href="#" className="flex items-center text-red-500 font-semibold text-sm hover:text-red-600 transition-colors duration-200">
                  Read More
                  <FiArrowRight className="ml-1" size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
     
    </div>
  );
};

export default BlogMain;
