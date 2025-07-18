import React from "react";
import ml from '../assets/ml.jpg'
import django from '../assets/django.png'
const CodingClubPage = () => {
 
  return (
    <div className=" text-gray-800 font-sans" style={{ backgroundColor: '#DDF6D2' }}>
        
      {/* Blog Section */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          From Our Blog
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 max-w-5xl mx-auto">
          {/* Blog Post 1 */}
          <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition">
            <img
              src={django}
              alt="Django Blog"
              className="rounded mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold">Why Django?</h3>
            <p className="text-sm text-gray-600 my-2">
              Why Django is one of the most popular frameworks for web
              development.
            </p>
            <p className="text-xs text-gray-500">
              Posted by: Mohit Jain • 21 June 2020
            </p>
            <a
              href="https://medium.com"
              className="text-blue-600 hover:underline text-sm mt-2 inline-block"
            >
              Read Blog →
            </a>
          </div>

            
       
          {/* Blog Post 2 */}
          <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition">
            <img
              src= {ml}
              alt="ML Blog"
              className="rounded mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold">
              ML: Hello World to Self-Sufficient Computers
            </h3>
            <p className="text-sm text-gray-600 my-2">
              A journey through the world of Machine Learning, from basics to
              beyond.
            </p>
            <p className="text-xs text-gray-500">
              Posted by: Kartik Bansal and Maneshwar Singh • 18 May 2020
            </p>
            <a
              href="https://medium.com/"
              className="text-blue-600 hover:underline text-sm mt-2 inline-block"
            >
              Read Blog →
            </a>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-12 px-4  text-center">
        <h2 className="text-2xl font-semibold mb-4">How to Get Started?</h2>
        <p className="text-gray-700 mb-4 max-w-2xl mx-auto">
          Want to start development? We have some excellent material for you.
          Check out the blog to dive deeper!
        </p>
        <a
          href="#"
          className="px-6 py-2 bg-pink-400 text-white rounded hover:bg-pink-600 transition"
        >
          Read Blog
        </a>
      </section>

      {/* Footer */}
      <footer className=" text-black text-sm py-6 px-4">
        <div className="text-center">
           Developed and Maintained by Coding Club rec sonbhadra
          <p className="mt-2">
            Email:{" "}
            <a href="mailto:codingclubrecsonbhadra@gmail.com" className="underline">
              codingclubrecsonbhadra@gmail.com
            </a>
          </p>
          <p>Address:rajkiya Engineering College sonbhadra</p>
          <div className="flex justify-center gap-4 mt-2">
            <a
              href="https://www.facebook.com/codingrecs/"
              className="hover:underline"
            >
              Facebook
            </a>
            <a
              href="https://codingrecs.github.io/courses.html"
              className="hover:underline"
            >
              Courses
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CodingClubPage;
