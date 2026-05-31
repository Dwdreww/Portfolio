import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Brain,
  BriefcaseBusiness,
  Check,
  Code2,
  Contact,
  Copy,
  ExternalLink,
  GitBranch,
  GraduationCap,
  Layers3,
  Mail,
  Menu,
  Palette,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import {
  HashRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import {
  EMAIL,
  PROFILE_IMAGE,
  designWorks,
  projectCategories,
  projects,
  skillGroups,
  socialLinks,
  upcomingDesignFocus,
} from "./portfolioData";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Designs", to: "/designs" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const featuredProjects = projects.filter((project) => project.featured);

function useCopyEmail() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return { copied, copyEmail };
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return null;
}

function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary navigation">
        <Link className="brand" to="/" aria-label="Andrew Valenzuela home">
          <span className="brand-mark">AV</span>
          <span>
            <strong>Andrew Valenzuela</strong>
            <small>Full-Stack Web Developer</small>
          </span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>

        <div className={`nav-links ${isOpen ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

function ButtonLink({ children, className = "", icon: Icon, to, href, ...props }) {
  const content = (
    <>
      <span>{children}</span>
      {Icon ? <Icon size={18} aria-hidden="true" /> : null}
    </>
  );

  if (to) {
    return (
      <Link className={`button ${className}`} to={to} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <a className={`button ${className}`} href={href} {...props}>
      {content}
    </a>
  );
}

function SectionHeader({ eyebrow, title, text, align = "start" }) {
  return (
    <div className={`section-header align-${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

function PageHero({ eyebrow, title, text, action }) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{text}</p>
          {action ? <div className="page-hero-action">{action}</div> : null}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, compact = false }) {
  return (
    <article className={`project-card ${compact ? "compact" : ""}`}>
      <a
        className="project-media"
        href={project.demoUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${project.title} live demo`}
      >
        <img src={project.screenshot} alt={`${project.title} interface screenshot`} />
      </a>

      <div className="project-body">
        <div className="project-meta">
          <span>{project.role}</span>
          <span>{project.categories[0]}</span>
        </div>

        <div>
          <h3>{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>

        <p>{project.summary}</p>
        <p className="project-impact">{project.impact}</p>

        <div className="tag-list" aria-label={`${project.title} technology stack`}>
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="card-actions">
          <ButtonLink
            className="button-primary"
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            icon={ExternalLink}
          >
            Live Demo
          </ButtonLink>
          <ButtonLink
            className="button-secondary"
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            icon={GitBranch}
          >
            GitHub
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}

function SkillCard({ skill, icon: Icon }) {
  return (
    <article className="skill-card">
      <div className="skill-icon">
        <Icon size={22} aria-hidden="true" />
      </div>
      <h3>{skill.title}</h3>
      <p>{skill.summary}</p>
      <div className="tag-list">
        {skill.tools.map((tool) => (
          <span key={tool}>{tool}</span>
        ))}
      </div>
    </article>
  );
}

function HomePage({ copied, copyEmail }) {
  return (
    <>
      <section
        className="hero"
        style={{
          "--hero-image": `url(${PROFILE_IMAGE})`,
        }}
      >
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="status-line">
              <BadgeCheck size={18} aria-hidden="true" />
              Open to Opportunities
            </p>
            <p className="eyebrow">Computer Science Student</p>
            <h1>Full-Stack Web Developer building practical web systems.</h1>
            <p className="hero-text">
              I create responsive web applications, AI-enabled tools, and
              user-friendly interfaces that turn technical ideas into working
              products.
            </p>
            <div className="hero-actions">
              <ButtonLink className="button-primary" to="/projects" icon={ArrowRight}>
                View Projects
              </ButtonLink>
              <button className="button button-secondary" type="button" onClick={copyEmail}>
                <span>{copied ? "Email Copied" : "Copy Email"}</span>
                {copied ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
              </button>
            </div>
          </div>

          <div className="hero-proof" aria-label="Portfolio highlights">
            <div>
              <strong>4+</strong>
              <span>Deployed projects</span>
            </div>
            <div>
              <strong>AI/ML</strong>
              <span>Applied systems</span>
            </div>
            <div>
              <strong>React</strong>
              <span>Primary frontend</span>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="container">
          <SectionHeader
            eyebrow="Featured work"
            title="Projects that show the range."
            text="The homepage leads with deployed work that proves full-stack delivery, applied AI, and practical interface design."
          />
          <div className="featured-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="dark-band">
        <div className="container two-column">
          <div>
            <p className="eyebrow">How I work</p>
            <h2>Clear interfaces, useful systems, and enough design sense to make them usable.</h2>
          </div>
          <div className="work-principles">
            <p>
              I focus on turning requirements into working screens, connecting
              frontend flows to backend logic, and presenting technical features
              in a way people can understand quickly.
            </p>
            <ButtonLink className="button-light" to="/about" icon={ArrowRight}>
              More About Me
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="container">
          <SectionHeader
            eyebrow="Capabilities"
            title="A full-stack foundation with AI and product design support."
            text="These are the tools and practices I use most often across the projects in this portfolio."
          />
          <div className="skill-grid">
            {skillGroups.map((skill, index) => {
              const icons = [Code2, BriefcaseBusiness, Brain, Palette];
              const Icon = icons[index] || Code2;
              return <SkillCard key={skill.title} skill={skill} icon={Icon} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.categories.includes(activeCategory));
  }, [activeCategory]);

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Deployed work across full-stack, AI, and interface design."
        text="Each project includes the working demo and source repository so the experience and implementation can be reviewed together."
      />

      <section className="site-section">
        <div className="container">
          <div className="filter-bar" aria-label="Project filters">
            {projectCategories.map((category) => (
              <button
                key={category}
                className={activeCategory === category ? "active" : undefined}
                type="button"
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="project-grid">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function DesignsPage() {
  const design = designWorks[0];

  return (
    <>
      <PageHero
        eyebrow="Design work"
        title="Figma prototypes and interface studies."
        text="This page keeps the current design work curated and honest: one finished prototype now, with a clear direction for future case studies."
        action={
          <ButtonLink
            className="button-primary"
            href={design.link}
            target="_blank"
            rel="noreferrer"
            icon={ExternalLink}
          >
            Open Figma Prototype
          </ButtonLink>
        }
      />

      <section className="site-section">
        <div className="container design-layout">
          <article className="design-feature">
            <div className="design-image">
              <img src={design.image} alt={`${design.title} preview`} />
            </div>
            <div className="design-copy">
              <p className="eyebrow">{design.type}</p>
              <h2>{design.title}</h2>
              <p>{design.summary}</p>
              <div className="tag-list">
                {design.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
              <ButtonLink
                className="button-secondary"
                href={design.link}
                target="_blank"
                rel="noreferrer"
                icon={ExternalLink}
              >
                View Prototype
              </ButtonLink>
            </div>
          </article>

          <aside className="upcoming-panel" aria-label="Upcoming design work">
            <p className="eyebrow">Upcoming</p>
            <h2>Next design case studies</h2>
            <ul>
              {upcomingDesignFocus.map((item) => (
                <li key={item}>
                  <Sparkles size={18} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A Computer Science student building practical full-stack products."
        text="My work sits at the intersection of frontend development, backend integration, applied AI, and interface design."
      />

      <section className="site-section">
        <div className="container about-layout">
          <div className="about-photo">
            <img src={PROFILE_IMAGE} alt="Andrew Valenzuela" />
          </div>

          <div className="about-copy">
            <p>
              I am a Computer Science student focused on building clean web
              applications and useful software systems. My projects include
              full-stack service platforms, machine learning interfaces, and
              practical tools that make technical workflows easier to use.
            </p>
            <p>
              I care about clear structure, readable interfaces, and shipping
              work that can be opened, tested, and improved. I am especially
              interested in roles where I can keep growing as a developer while
              contributing to real product work.
            </p>

            <div className="about-points">
              <div>
                <GraduationCap size={22} aria-hidden="true" />
                <h3>CS foundation</h3>
                <p>Academic grounding in software development, systems thinking, and problem solving.</p>
              </div>
              <div>
                <Layers3 size={22} aria-hidden="true" />
                <h3>Product mindset</h3>
                <p>Interfaces are planned around clarity, user flow, and the work people need to complete.</p>
              </div>
              <div>
                <BookOpen size={22} aria-hidden="true" />
                <h3>Continuous learning</h3>
                <p>Comfortable learning new tools and improving projects through feedback and iteration.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactPage({ copied, copyEmail }) {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let us connect and build something useful."
        text="The best way to reach me is by email. You can also review my work on GitHub or connect with me on LinkedIn."
      />

      <section className="site-section">
        <div className="container contact-grid">
          <div className="contact-panel">
            <Mail size={28} aria-hidden="true" />
            <h2>Email</h2>
            <p>{EMAIL}</p>
            <div className="card-actions">
              <button className="button button-primary" type="button" onClick={copyEmail}>
                <span>{copied ? "Email Copied" : "Copy Email"}</span>
                {copied ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
              </button>
              <ButtonLink className="button-secondary" href={`mailto:${EMAIL}`} icon={Send}>
                Send Email
              </ButtonLink>
            </div>
          </div>

          <div className="contact-links">
            <a href={socialLinks.github} target="_blank" rel="noreferrer">
              <GitBranch size={22} aria-hidden="true" />
              <span>
                <strong>GitHub</strong>
                <small>Source code and project repositories</small>
              </span>
              <ExternalLink size={18} aria-hidden="true" />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
              <Contact size={22} aria-hidden="true" />
              <span>
                <strong>LinkedIn</strong>
                <small>Professional profile and updates</small>
              </span>
              <ExternalLink size={18} aria-hidden="true" />
            </a>
            <div className="resume-placeholder">
              <BriefcaseBusiness size={22} aria-hidden="true" />
              <span>
                <strong>Resume PDF</strong>
                <small>Reserved for a downloadable resume when the file is added.</small>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>Andrew Valenzuela - Full-Stack Web Developer</p>
        <div>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

function PortfolioExperience() {
  const { copied, copyEmail } = useCopyEmail();

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollToTop />
      <SiteNav />
      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage copied={copied} copyEmail={copyEmail} />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/designs" element={<DesignsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage copied={copied} copyEmail={copyEmail} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <PortfolioExperience />
    </HashRouter>
  );
}

export default App;
