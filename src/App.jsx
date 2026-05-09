import { useEffect, useMemo, useState } from "react";

const EMAIL = "andrewvalenzuela082@gmail.com";
const PROFILE_IMAGE = `${import.meta.env.BASE_URL}drew.JPEG`;

const projects = [
  {
    title: "AGRI-VISION | Pineapple Disease Detection System",
    category: ["AI / ML", "Full-Stack", "Computer Vision"],
    highlight: "Computer Vision System",
    description:
      "A pineapple disease detection system that uses YOLOv8 and EfficientNet to identify pineapple health conditions through image-based analysis.",
    tech: ["Python", "Flask", "YOLOv8", "EfficientNet", "React"],
    demoLink: "https://dwdreww.github.io/Agri-Vision/",
  },
  {
    title: "Chunky 3.5",
    category: ["AI / ML", "Full-Stack", "NLP / BERT"],
    highlight: "NLP Toxicity Detection",
    description:
      "A toxic detection and classification framework for Instagram using a BERT-based deep learning model.",
    tech: ["HTML", "CSS", "BERT Model", "GitHub Pages"],
    demoLink: "https://dwdreww.github.io/Latest-Chunky-Model/",
  },
  {
    title: "Paw Match",
    category: ["Full-Stack", "Web App"],
    highlight: "Pet Matching App",
    description:
      "A web-based application designed to help users find and match with pets through a simple and accessible interface.",
    tech: ["React", "JavaScript", "CSS", "GitHub Pages"],
    demoLink: "https://dwdreww.github.io/app-test/",
  },
  {
    title: "Heart Rate Emotion Classifier",
    category: ["AI / ML"],
    highlight: "Emotion Classification",
    description:
      "A machine learning project that classifies emotions using heart rate data with models such as LSTM, GRU, and SVM.",
    tech: ["Python", "TensorFlow", "LSTM", "GRU", "SVM"],
    demoLink: "#",
  },
];

const categories = [
  "All",
  "AI / ML",
  "Full-Stack",
  "Computer Vision",
  "NLP / BERT",
  "Web App",
];

function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [copied, setCopied] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;

    return projects.filter((project) =>
      project.category.includes(activeCategory)
    );
  }, [activeCategory]);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 450);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      alert("Email copied manually: " + EMAIL);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="portfolio">
      <div className="backgroundGlow glowOne"></div>
      <div className="backgroundGlow glowTwo"></div>
      <div className="backgroundGrid"></div>

      <nav className="navbar">
        <a href="#home" className="logo">
          <span className="logoMark">CS</span>
          <span>Portfolio</span>
        </a>

        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="heroTextBox">
          <div className="statusPill">
            <span></span>
            Available for projects
          </div>

          <p className="smallTitle">Full Stack Developer</p>

          <h1>
            Hi, I’m <span>Andrew Valenzuela</span>
          </h1>

          <p className="heroDescription">
            I build clean web applications, machine learning projects, and
            practical software systems that solve real-world problems.
          </p>

          <div className="heroButtons">
            <a href="#projects" className="primaryButton">
              View Projects
            </a>

            <button className="secondaryButton" onClick={handleCopyEmail}>
              {copied ? "Email Copied!" : "Copy Email"}
            </button>
          </div>

          <div className="heroStats">
            <div>
              <h3>4+</h3>
              <p>Projects</p>
            </div>

            <div>
              <h3>AI</h3>
              <p>Focus Area</p>
            </div>

            <div>
              <h3>React</h3>
              <p>Frontend</p>
            </div>
          </div>
        </div>

        <div className="heroVisual">
          <div className="orbit orbitOne"></div>
          <div className="orbit orbitTwo"></div>

          <div className="techBubble bubbleOne">React</div>
          <div className="techBubble bubbleTwo">Python</div>
          <div className="techBubble bubbleThree">AI</div>

          <div className="mainCircle">
            <div className="circleShine"></div>

            <div className="innerCircle imageCircle">
              <img src={PROFILE_IMAGE} alt="Andrew Valenzuela" />
            </div>
          </div>

          <div className="floatingCard topCard">
            <span>01</span>
            <p>Web Development</p>
          </div>

          <div className="floatingCard bottomCard">
            <span>02</span>
            <p>Machine Learning</p>
          </div>
        </div>
      </section>

      <section id="about" className="section aboutSection">
        <p className="sectionTag">About Me</p>

        <div className="aboutGrid">
          <h2>Building simple, useful, and creative digital solutions.</h2>

          <p>
            I am a Computer Science student interested in software development,
            artificial intelligence, and user-friendly systems. I have
            experience in translating complex technical concepts into clear,
            practical solutions and quickly adapt to new environments. I am
            eager to contribute my knowledge and passion for continuous learning
            in a dynamic professional setting.
          </p>
        </div>
      </section>

      <section id="skills" className="section">
        <p className="sectionTag">Skills</p>
        <h2 className="sectionTitle">Technologies I Use</h2>

        <div className="skillsGrid">
          <div className="skillCard">
            <div className="skillIcon">01</div>
            <h3>Frontend</h3>
            <p>HTML, CSS, JavaScript, React</p>
          </div>

          <div className="skillCard">
            <div className="skillIcon">02</div>
            <h3>Backend</h3>
            <p>Python, Flask, API Integration</p>
          </div>

          <div className="skillCard">
            <div className="skillIcon">03</div>
            <h3>AI / Machine Learning</h3>
            <p>TensorFlow, PyTorch, OpenCV, YOLO, BERT</p>
          </div>

          <div className="skillCard">
            <div className="skillIcon">04</div>
            <h3>Tools</h3>
            <p>GitHub, VS Code, Figma, MySQL</p>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="projectHeader">
          <div>
            <p className="sectionTag">Projects</p>
            <h2 className="sectionTitle">Featured Works</h2>
          </div>

          <div className="filterButtons">
            {categories.map((category) => (
              <button
                key={category}
                className={activeCategory === category ? "activeFilter" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="projectGrid">
          {filteredProjects.map((project, index) => (
            <article className="projectCard" key={project.title}>
              <div className="projectTop">
                <span>0{index + 1}</span>
                <p>{project.highlight}</p>
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="techList">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="projectButtons">
                <a href={project.demoLink} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section contactSection">
        <p className="sectionTag">Contact</p>

        <h2>Let’s connect and build something useful.</h2>

        <p>
          You can contact me through email or check more of my work on GitHub.
        </p>

        <div className="contactButtons">
          <button onClick={handleCopyEmail}>
            {copied ? "Email Copied!" : "Copy Email"}
          </button>

          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>

          <a href="https://github.com/Dwdreww" target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/andrew-valenzuela-73578a3b3/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Andrew Valenzuela. Built with React.</p>
      </footer>

      {showTopButton && (
        <button
          className="topButton"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </main>
  );
}

export default App;