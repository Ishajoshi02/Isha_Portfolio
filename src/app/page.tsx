
"use client";
import Image from "next/image";
import { useState } from "react";
import { FaFilePdf, FaRunning, FaMusic, FaCamera, FaPlane, FaGamepad } from "react-icons/fa";
import { FaReact, FaNodeJs, FaDatabase, FaTools, FaDocker } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiTailwindcss, SiTypescript, SiPostman, SiAew } from "react-icons/si";
import { FaCogs, FaLock, FaPaintBrush, FaRocket, FaLink, FaPencilRuler } from "react-icons/fa";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FaEnvelope, FaLinkedin, FaCoffee, FaRegCommentDots } from "react-icons/fa";
export default function Home() {
  const [activeTab, setActiveTab] = useState("resume");


  const projects = [
    {
      title: "Recipe Rover",
      description:
        "An interactive platform for users to buy, sell, and exchange vehicles with real-time updates. I worked on the frontend for this group project.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      image: "/images/Recipe.jpg",
      github: "https://github.com/yourrepo",
      live: "https://yourproject.com",
    },
    {
      title: "Weather Forecast App",
      description:
        "A responsive weather forecast app powered by ReactJS and OpenWeatherMap API for real-time weather updates.",
      tech: ["React.js", "OpenWeather API", "CSS"],
      image: "/images/OIP.jpg",
      github: "https://github.com/yourrepo",
      live: "https://yourproject.com",
    },
    {
      title: "Chatbot AI",
      description:
        "A smart chatbot powered by AI that provides instant responses using Natural Language Processing (NLP).",
      tech: ["Next.js", "OpenAI API", "Tailwind CSS"],
      image: "/images/chaatbot.jpg",
      github: "https://github.com/yourrepo",
      live: "https://yourproject.com",
    },
  ];
  










  return (
    <main className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center px-6 md:px-10">
      {/* ✅ Hero Section */}
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto w-full space-y-10 md:space-y-0"
      >
        {/* ✅ Left Content */}
        <div className="max-w-lg text-center md:text-left">
          <h2 className="text-red-500 font-bold text-lg md:text-xl uppercase tracking-wider">
            HELLO!
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-3">
            I Am <span className="text-red-500">Isha Joshi</span>
          </h1>
          <p className="text-lg text-gray-300 mt-4 leading-relaxed">
            I'm a Data Analyst with experience in SQL, Power BI, and Python.
            I create dashboards and insights to drive business decisions.
          </p>

{/* ✅ Fix Spacing & Structure for Download CV */}
<div className="download-box">
  <div className="download-container">
    <a href="/resume.pdf" download>Download CV</a>
  </div>
</div>





        </div>

        {/* ✅ Profile Image (Hero Section) */}
        <div className="w-80 md:w-96 h-auto rounded-lg overflow-hidden border-4 border-red-500 shadow-lg">
          <Image
            src="/profile.jpg"
            alt="Isha's Profile Picture"
            width={400}
            height={500}
            className="rounded-lg object-cover"
          />
        </div>
      </section>



      {/* ✅ About Me Section */}
      <section id="about" className="about-container mt-32">
        {/* ✅ Image */}
        <div className="about-image-container">
          <Image
            src="/about-profile.jpg"
            alt="Isha's Profile"
            width={280}
            height={350}
            className="rounded-lg object-cover"
          />
        </div>

        {/* ✅ About Me Content */}
        <div className="about-content">
          <h2 className="text-red-500 font-bold text-lg md:text-xl uppercase tracking-wider">ABOUT ME</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold leading-tight mt-2">
            Who I Am?
          </h3>
          <p className="about-text mt-4">
            I am a Data Analyst passionate about turning data into meaningful insights.
            My expertise lies in SQL, Power BI, Python, and Data Visualization, helping
            businesses make informed decisions. With a keen eye for detail and a love
            for problem-solving, I specialize in data storytelling, dashboard creation,
            and automation.
          </p>
          <p className="about-text mt-2">
            Currently, I'm expanding my skills in Machine Learning and Cloud Analytics.
          </p>

          {/* ✅ Read More Button */}
          <div className="mt-6">
            <a href="#portfolio" className="btn-primary">
              Read More
            </a>
          </div>
        </div>
      </section>
      <section id="skills" className="text-center">
      <h2 className="text-4xl font-bold text-cyan-400 mb-10">My Skills</h2>

      <div className="skills-container">
        
        {/* ✅ Frontend Skills */}
        <div className="skill-card frontend">
          <h3 className="skill-title text-cyan-400"><FaReact className="skill-icon" /> Frontend</h3>
          <ul className="skill-list">
            <li className="skill-item"><SiJavascript className="skill-icon" /> JavaScript</li>
            <li className="skill-item"><SiTypescript className="skill-icon" /> TypeScript</li>
            <li className="skill-item"><FaReact className="skill-icon" /> React.js</li>
            <li className="skill-item"><SiTailwindcss className="skill-icon" /> Tailwind CSS</li>
            <li className="skill-item"><FaPencilRuler className="skill-icon"/>UI/UX Design</li>
          </ul>
        </div>

        {/* ✅ Backend Skills */}
        <div className="skill-card backend">
          <h3 className="skill-title text-green-400"><FaNodeJs className="skill-icon" /> Backend</h3>
          <ul className="skill-list">
            <li className="skill-item"><FaNodeJs className="skill-icon" /> Node.js</li>
            <li className="skill-item"><FaRocket className="skill-icon"/> Express.js</li>
            <li className="skill-item"><SiMongodb className="skill-icon" /> MongoDB</li>
            <li className="skill-item"><FaLink className="skill-icon" />REST APIs</li>
          </ul>
        </div>

        {/* ✅ Tools */}
        <div className="skill-card tools">
          <h3 className="skill-title text-yellow-400"><FaTools className="skill-icon" /> Tools</h3>
          <ul className="skill-list">
            <li className="skill-item"><SiPostman className="skill-icon" /> Postman</li>
            <li className="skill-item"><FaPaintBrush className="skills-icon" />Figma</li>
            
          </ul>
        </div>

        {/* ✅ DevOps & Cybersecurity */}
        <div className="skill-card devops">
          <h3 className="skill-title text-purple-400"><FaDocker className="skill-icon" /> DevOps & Cybersecurity</h3>
          <ul className="skill-list">
            <li className="skill-item"><FaDocker className="skill-icon" /> Docker</li>
            <li className="skill-item"><SiAew className="skill-icon" /> AWS</li>
            <li className="skill-item"><FaCogs className="skill-icon" />CI/CD Pipelines</li>
            <li className="skill-item"><FaLock className="skill-icon"/>Cybersecurity Enthusiast</li>
          </ul>
        </div>

      </div>
    </section>
    <section id="projects">
      <h2 className="text-4xl font-extrabold text-center mb-10">
        <span className="text-purple-400">My</span> Projects
      </h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={300}
              className="project-image"
            />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="project-icon" />
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt className="project-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
 
 
    <section id="personal-data" className="py-16 text-center">
  <h2 className="text-4xl font-extrabold">
    <span className="text-purple-400">My</span> Personal Data
  </h2>

  {/* ✅ Tabs for Resume & Blog */}
  <div className="personal-data-tabs mt-6">
    <button
      className={`text-lg ${activeTab === "resume" ? "active" : "inactive"}`}
      onClick={() => setActiveTab("resume")}
    >
      Resume
    </button>
    <button
      className={`text-lg ${activeTab === "blog" ? "active" : "inactive"}`}
      onClick={() => setActiveTab("blog")}
    >
      Blog
    </button>
  </div>

  {/* ✅ Resume Section */}
  {activeTab === "resume" && (
    <div className="resume-container">
      <div className="resume-card"><div className="flex flex-col items-center text-center p-6 border border-cyan-500 rounded-lg shadow-lg bg-gray-900">
  <div className="flex items-center space-x-3">
    <FaFilePdf className="text-red-400 text-3xl" />
    <h3 className="text-red-400 text-xl font-bold">Resume</h3>
  </div>
  <p className="text-gray-400 italic mt-2">
    "Your resume is your personal brand—make it compelling, make it powerful, and let it open doors to your dream job."
  </p>
  <a
    href="/ISha Resume.pdf"
    download
    className="mt-4 inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition hover:bg-blue-700 shadow-md"
  >
    📥 Download Resume
  </a>
</div>

      </div>

      {/* ✅ Two Column Layout for Career & Hobbies */}
      <div className="resume-details">
        <div className="career-card">
          <h3 className="text-purple-400 text-xl font-bold">Career Philosophy</h3>
          <p className="text-gray-400 mt-2">
            Technology is the bridge between ideas and reality. I believe in building scalable, efficient, and impactful solutions that enhance human experiences.
          </p>
          <p className="text-gray-400 mt-2">
            With a passion for continuous learning and innovation, I strive to create software that not only solves problems but also inspires progress.
          </p>
        </div>

        <div className="hobbies-card">
          <h3 className="text-yellow-400 text-xl font-bold">Hobbies</h3>
          <ul className="text-gray-400 space-y-2 mt-3">
            <li className="flex items-center"><FaRunning className="text-yellow-400 mr-2" /> Running & Fitness</li>
            <li className="flex items-center"><FaMusic className="text-yellow-400 mr-2" /> Listening to Music</li>
            <li className="flex items-center"><FaCamera className="text-yellow-400 mr-2" /> Photography</li>
            <li className="flex items-center"><FaPlane className="text-yellow-400 mr-2" /> Traveling</li>
            <li className="flex items-center"><FaGamepad className="text-yellow-400 mr-2" /> Playing Video Games</li>
          </ul>
        </div>
      </div>
    </div>
  )}

  {/* ✅ Blog Section */}
  {activeTab === "blog" && (
    <div className="blog-card">
      <h3 className="text-green-400 text-xl font-bold">Blog Posts</h3>
      <p className="text-gray-400 mt-2">Explore my latest articles on technology, data analysis, and career insights.</p>

      {/* Sample Blog Posts */}
      <div className="mt-4 space-y-4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h4 className="text-lg text-cyan-400 font-semibold">The Future of Data Analytics</h4>
          <p className="text-gray-400 text-sm">How AI is transforming the way we analyze and interpret data.</p>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <h4 className="text-lg text-cyan-400 font-semibold">Why UI/UX Matters in 2025</h4>
          <p className="text-gray-400 text-sm">A deep dive into modern UI/UX design principles for engaging apps.</p>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <h4 className="text-lg text-cyan-400 font-semibold">Getting Started with Machine Learning</h4>
          <p className="text-gray-400 text-sm">A beginner's guide to ML models and their real-world applications.</p>
        </div>
      </div>
    </div>
  )}
</section>


<section className="py-16 text-center flex flex-col items-center">
      {/* ✅ Centering "Let's Connect" */}
      <h2 className="text-4xl font-extrabold text-center mb-8">
        <span className="text-purple-400">Let&apos;s</span> Connect
      </h2>

      {/* ✅ Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 px-6 md:px-12 max-w-6xl mx-auto">
        
        {/* ✅ Email Card */}
        <div className="contact-card">
          <div className="flex items-center space-x-3">
            <span className="text-blue-400 text-3xl">📧</span>
            <h3 className="text-lg font-bold">Email Me</h3>
          </div>
          <p className="text-gray-400 text-sm">Let&apos;s talk about your project</p>
          <a href="mailto:krishthakar198@gmail.com" className="text-blue-400 text-sm">
            krishthakar198@gmail.com
          </a>
        </div>

        {/* ✅ LinkedIn Card */}
        <div className="contact-card">
          <div className="flex items-center space-x-3">
            <span className="text-blue-400 text-3xl">🔗</span>
            <h3 className="text-lg font-bold">LinkedIn</h3>
          </div>
          <p className="text-gray-400 text-sm">Let&apos;s connect professionally</p>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-sm">
            View Profile
          </a>
        </div>

        {/* ✅ GitHub Card */}
        <div className="contact-card">
          <div className="flex items-center space-x-3">
            <span className="text-gray-400 text-3xl">🐱</span>
            <h3 className="text-lg font-bold">GitHub</h3>
          </div>
          <p className="text-gray-400 text-sm">Check out my code</p>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-sm">
            View Projects
          </a>
        </div>

        {/* ✅ Let's Connect Card */}
        <div className="contact-card border-yellow-500">
          <div className="flex items-center space-x-3">
            <span className="text-yellow-400 text-3xl">☕</span>
            <h3 className="text-lg font-bold">Let&apos;s Connect</h3>
          </div>
          <p className="text-gray-400 text-sm">Let&apos;s discuss ideas over coffee</p>
          <a href="#" className="text-blue-400 text-sm">
            Schedule a Meet
          </a>
        </div>

      </div>

      {/* ✅ Chat Button - Centered */}
      <div className="mt-10 flex justify-center">
        <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition hover:bg-blue-700 flex items-center space-x-2">
          <span>💬</span>
          <span>Always happy to chat!</span>
        </button>
      </div>
    </section>
    </main>
  );
}
