export default function About() {
    return (
      <section id="about" className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-900 text-white">
        <h2 className="text-4xl font-bold text-pink-500 mb-4">About Me</h2>
        <p className="text-lg text-gray-300 max-w-3xl">
          I&apos;m Isha, a passionate Data Analyst skilled in SQL, Power BI, Python, and Tableau. 
          I love transforming raw data into meaningful insights to drive business decisions. 
          With hands-on experience in data visualization and analysis, I aim to bring clarity through data.
        </p>
        <div className="mt-6">
          <a
            href="/resume.pdf"
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full text-lg transition"
            download
          >
            Download Resume
          </a>
        </div>
      </section>
    );
  }
  