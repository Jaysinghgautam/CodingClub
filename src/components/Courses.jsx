 import React from 'react';

const CodingClub = () => {
  return (
    <div className=" text-gray-800 font-sans p-6 " style={{ backgroundColor: '#DDF6D2' }}>
      {/* Hero Section */}
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold mb-2">Coding Club</h1>
        <p className="text-lg text-gray-600">
          "We are the Coding Club of IIT Guwahati"
        </p>
        <p className="max-w-xl mx-auto mt-4 text-gray-700">
          Coding Club is one of the biggest clubs of IIT Guwahati. As part of the Institute Technical Council, we provide a gateway for students to join the coding community. Get mentorship and improve your coding ability.
        </p>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Learn More
        </button>
      </section>

      {/* Ongoing Courses */}
      <section className="py-10 ">
        <h2 className="text-3xl font-semibold text-center mb-8">Ongoing Courses</h2>
        <div className="  grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {/* Course 1 */}
          <div className=" bg-gray-100 p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-2">Introduction to NodeJS</h3>
            <p className="text-gray-700 mb-2">A course on Server Side Development</p>
            <p className="text-gray-600 mb-4">
              Node.js is an open-source, cross-platform JavaScript runtime environment. It's a 4-week course with assignments and a demo project.
            </p>
            <a href="https://codingiitg.github.io/courses.html" className="text-blue-600 hover:underline">Learn More →</a>
          </div>
          {/* Course 2 */}
          <div className="bg-gray-100 p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-2">Fast Track to ML</h3>
            <p className="text-gray-700 mb-2">Machine Learning</p>
            <p className="text-gray-600 mb-4">
              Dive into deep learning, neural networks, and computer vision. An 8-week course with 2 projects and a Data Science hackathon.
            </p>
            <a href="https://codingiitg.github.io/courses.html" className="text-blue-600 hover:underline">Learn More →</a>
          </div>
        </div>
        <div className="text-center mt-6">
          <button className="px-6 py-2 bg-gray-200 rounded hover:bg-gray-300 transition">Show More</button>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-10">
        <h2 className="text-2xl font-semibold text-center mb-4">How to get started?</h2>
        <p className="text-center text-gray-700 mb-4">
          Want to start development? We have some very good material for you, check out the blog.
        </p>
        <div className="text-center">
          <a href="#" className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
            Read Blog
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-10 pt-6 text-sm text-gray-600">
        <div className="text-center">
          ✧ Developed and Maintained by : Coding Club rec sonbhadra
        </div>
        <div className="text-center mt-2">
          <p>Email: <a href="mailto:codingclubrecsonbhadra@gmail.com" className="text-blue-600">codingclubrecsonbhadra@gmail.com</a></p>
          <p> Address: rajkiya Engineering college sonbhadra </p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="https://www.facebook.com/codingclubrecsonbhadra/" className="text-blue-600 hover:underline">Facebook</a>
            <a href="https://codingclubrecsonbhadra" className="text-blue-600 hover:underline">Courses</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CodingClub;
