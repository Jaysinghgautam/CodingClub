import React from "react";

const events = [
  {
    title: "Interactive Session",
    date: "April 24, 2019",
    description: `The Coding Club is organizing an Interactive Session, where seniors can guide juniors on how to enhance their technical skills over three months. This will be followed by a discussion of the various events and projects we will undertake next year. This event must be attended by everyone who wants to be an active member in the coming semester.`,
  },
  {
    title: "MyPolly Botathon",
    date: "May 16, 2019",
    description: `Interested in chatbots or AI? The Coding Club is organizing a "Botathon"—a 24-hour hackathon sponsored by MyPolly to build your own chatbot. No prior coding experience is required. You can participate solo or as a team.`,
  },
];

const CodingClub = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-4 md:p-8 font-sans">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">Coding Club</h1>
        <p className="text-sm text-gray-500 mt-1">
          Developed and Maintained by Coding Club recsonbhadra{" "}
        </p>
      </header>

      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Events</h2>
        {events.map((event, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6 mb-6">
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{event.date}</p>
            <p>{event.description}</p>
          </div>
        ))}

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Past Events</h3>
          <ul className="list-disc pl-5 text-blue-600">
            <li>
              <a
                href="https://codingclubrecsonbhadra"
                target="_blank"
                rel="noopener noreferrer"
              >
                Events 2025
              </a>
            </li>
          </ul>
        </div>
      </section>

      <footer className="text-center mt-10 text-sm text-gray-600">
        <p>
          Contact:{" "}
          <a
            href="mailto:codingclubrecsonbhadra@gmail.com"
            className="text-blue-600"
          >
            codingclubrecsonbhadra@gmail.com
          </a>
        </p>
        <p> rajkiya Engineering college churk, sonbhadra</p>
        <div className="mt-2 space-x-4">
          <a
            href="https://www.facebook.com/codingclubrecsonbhadra/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            Facebook
          </a>
        </div>
      </footer>
    </div>
  );
};

export default CodingClub;
