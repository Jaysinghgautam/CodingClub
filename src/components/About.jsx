import React from "react";
import Ashivini from "../assets/Ashivini.jpg";
import Shubh from "../assets/Shubh.jpg";
import Jay from "../assets/Jay.jpg";
import About from "../assets/About.png";
import Ansh from "../assets/Ansh.jpg";
import Akash from "../assets/Akash.jpg";
import pritesh from "../assets/pritesh.jpg";

const team = [
  { name: "Ansh Verma", role: "President", image: Ansh },
  { name: "Shubh Seth", role: "Vice President", image: Shubh },
  { name: "Akash Giri", role: "Vice President", image: Akash },
  { name: "Pritesh Mishra", role: "Event Co-ordinator", image: pritesh },
  { name: "Ashvini Kumar", role: "Social Media hadler", image: Ashivini },
  { name: "Jaysingh Gautam", role: "Web Manager", image: Jay }
 
];

export default function CodingClub() {
  return (
    <div
      className="px-4 py-10 min-h-screen"
      style={{ backgroundColor: "#DDF6D2" }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-400 mb-6">Coding Club</h1>
        <p className="text-lg text-gray-700 mb-8 w-50%">
          We are the Coding Club of a technical institution, hosting coding
          events, workshops, hackathons, and much more. Whether you want to
          learn, build, or compete, you can do it all here!
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-left mb-10">
          <div className="bg-blue-300 p-6 rounded-lg shadow">
            <img src={About} className="h-full w-full" />
          </div>
          <div className="bg-gray-300 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-pink-400 mb-3 bg-gray-300">
              What We Do
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Workshops and Talks</li>
              <li>Hackathons and Competitions</li>
              <li>Open Source Projects</li>
              <li>Development and Game Dev</li>
              <li>Machine Learning & Competitive Coding</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-blue-400 mb-6">Meet Our Team</h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6  rounded-3xl m-2px shadow-blue-300 "
          style={{ background: "#ECFAE5" }}
        >
          {team.map((member, index) => (
            <div key={index} className="  p-4 rounded-lg shadow text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-50  mx-auto mb-3 object-cover rounded-2xl"
              />
              <h3 className="text-lg font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-300 p-6 rounded-lg shadow mt-8">
          <h2 className="text-2xl font-semibold text-blue-400 mb-3">
            Contact Us
          </h2>
          <p className="text-gray-700">
            Email:{" "}
            <a
              href="mailto:codingclubrecsonbhadra@gmail.com"
              className="text-blue-600 underline"
            >
              codingclubrecsonbhadra@gmail.com
            </a>
          </p>
          <p className="text-gray-700 mt-2">
            Address: Rajkiya Engineering College Churk, Sonbhadra, 231206
          </p>
          <p className="text-gray-700 mt-2">
            Facebook:{" "}
            <a
              href="https://www.facebook.com/codingclubrecsonbhadra/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              facebook.com/codingclub/resconbhadra
            </a>
          </p>
        </div>

        <p className="mt-10 text-sm text-black">
          {" "}
          Developed and Maintained by : Coding Club res sonbhadra
        </p>
      </div>
    </div>
  );
}
