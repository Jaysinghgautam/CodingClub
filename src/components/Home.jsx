  import React from "react";
 import logo from '../assets/logo.jpg'
 import hero from '../assets/hero.jpg'
 import ml from '../assets/ml.jpg'
 import node from '../assets/node.jpg'
 import coding from '../assets/coding.jpg'
import { useNavigate } from "react-router-dom";
const CodingClubPage = () => {
    const Navigate = useNavigate()

    const handleSubmit = () => {
        Navigate('/blog')
    }
  return (
    <div className="  min-h-screen   p-8 md:p-12 font-sans text-gray-800 overflow-hidden" style={{ backgroundColor: '#DDF6D2' }}>
      {/* bg-color:bg-gradient-to-br from-blue-300 to-gray-300 */}
      <section className="bg-gray-200 grid  md:grid-cols-2 gap-6 text-left mb-10  rounded-2xl shadow-lg p-6 md:p-10">
       <div className="">
         <h2 className="text-2xl font-semibold mb-4 text-blue-700">About Us</h2>
        <p className="text-lg leading-relaxed">
          Coding Club is one of the biggest clubs of rec sonbhadra. As a part of the
          Institute Technical Council, we aim to provide a gateway for the people in
          our institute to join the coding community. We create a platform which allows
          students to gain assistance and mentorship to enhance their coding ability.
        </p>
        <button className="mt-6 px-6 py-2 bg-pink-400 text-white rounded-xl shadow hover:bg-blue-550 transition">
          Learn More
        </button>
       </div>
       <div className="w-90 h-90 rounded-2xl items-center">
        <img src={hero} className="shadow rounded-2xl" />
       </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-pink-500 text-center">Ongoing Courses</h2>
 
          <div className="grid gap-10 md:grid-cols-2">
      {/* NodeJS Course Card */}
      <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden transition hover:shadow-xl">
        <img
          src={node}
          alt="Introduction to NodeJS"
          className="w-full h-40% object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900">Introduction to NodeJS</h3>
          <p className="text-sm text-blue-600 mt-1">A course on Server Side Development</p>
          <p className="text-gray-700 mt-3">
            Node.js is an open-source, cross-platform, JavaScript runtime environment that
            executes JavaScript code outside a web browser. It is a 4-week course coupled
            with assignments and demo project.
          </p>
          <button className="mt-6 px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition">
            Learn More →
          </button>
        </div>
      </div>

      {/* Fast Track to ML Card */}
      <div className="bg-white h-full rounded-2xl shadow-lg border border-blue-100 overflow-hidden transition hover:shadow-xl">
        <img
          src={ml}
          alt="Fast Track to ML" 
          className="w-full h-30% object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900">Fast Track to ML</h3>
          <p className="text-sm text-blue-600 mt-1">Machine Learning</p>
          <p className="text-gray-700 mt-5  ">
            A specially curated course on the deeper concepts of Machine Learning like Deep
            Learning, Neural Networks and Computer Vision. It will be an 8-week course and
            will have 2 projects along with a Data Science hackathon at the end.
          </p>
          <button onClick={handleSubmit} className="mt-6 mb-4 px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition">
            Learn More →
          </button>
        </div>
      </div>
    </div>
                    
        <div className="text-center mt-15">
          <button className="px-6 py-2 bg-pink-500 text-gray-800 rounded hover:bg-gray-300 transition">
            Show More
          </button>
        </div>
      </section>

      <section className=" grid md:grid-cols-2  mb-16 bg-gray-300 rounded-2xl shadow-lg p-6 md:p-10">
        <div className="">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">How to get started?</h2>
        <p className="text-lg text-gray-700">
          Want to start development? We have some very good material for you, check out the blog.
        </p>
        <button onClick={handleSubmit} className="mt-6 px-6 py-2 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition">
          Read blog
        </button>
        </div>
        <div className="">
          <img src={coding} alt="" />
        </div>
      </section>

      <footer className="text-sm text-gray-700 border-t pt-6 items-center ">
        <p className="mb-2 items-center"> Developed and Maintained by: <strong>Coding Club recs</strong></p>
        <p className="mb-1">E-mail: <a href="mailto:codingclubrecsonbhadra@gmail.com" className="text-blue-500 underline">codingclubrecsonbhadra@gmail.com</a></p>
        <address className="not-italic mb-3">
         Rajkiya Engineering College  Sonbhadra <br/>
         robertsganj churk 231206
        </address>
        <div className="space-x-4">
          <a href="https://codingrecs.github.io/courses.html" className="text-blue-600 hover:underline">Courses</a>
          <a href="https://www.linkedin.com/codingclubiitg/" className="text-blue-600 hover:underline">Linkedin</a>
        </div>
      </footer>
    </div>
  );
};

export default CodingClubPage;
