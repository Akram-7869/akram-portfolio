'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  Award,
  BookOpen,
  Briefcase,
  Check,
  ChevronRight,
  Code2,
  Copy,
  Cpu,
  Database,
  Download,
  ExternalLink,
  FileText,
  Filter,
  Globe,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  RotateCcw,
  Send,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  X,
  Zap,
} from 'lucide-react'
import {
  achievements,
  allProjects,
  education,
  experience,
  profile,
  ProjectItem,
  services,
  socials,
  stats,
  technicalSkills,
} from '@/data/profile'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { GithubIcon, LinkedinIcon } from '@/components/BrandIcons'

const navItems = [
  ['Work', 'work'],
  ['Experience', 'experience'],
  ['Skills', 'skills'],
  ['DSA & Proof', 'achievements'],
  ['Education', 'education'],
  ['Services', 'services'],
  ['Contact', 'contact'],
]

const filterCategories = ['All', 'Frontend & Web', 'Full Stack & SaaS', 'AI & Copilot'] as const
type FilterType = (typeof filterCategories)[number]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)
  const [activeFilter, setActiveFilter] = useState<FilterType>('All')
  const [copied, setCopied] = useState(false)

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Frontend Developer Role',
    message: '',
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)

    const subject = encodeURIComponent(
      `Inquiry from ${formData.name} - ${formData.projectType || 'Software Developer'}`
    )
    const body = encodeURIComponent(
      `Hi Akram,\n\nName: ${formData.name}\nEmail: ${formData.email}\nRequirement / Role: ${formData.projectType}\n\nMessage:\n${formData.message}\n\nSent from your portfolio website.`
    )
    const mailtoUrl = `mailto:${profile.email}?subject=${subject}&body=${body}`

    // Automatically trigger default mail client (Gmail / Apple Mail / Outlook)
    window.location.href = mailtoUrl
  }

  const filteredProjects =
    activeFilter === 'All'
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter)

  return (
    <main>
      {/* Sticky Glass Navbar */}
      <nav className="nav-shell">
        <div className="nav-inner">
          <button className="wordmark" onClick={() => scrollTo('home')}>
            <span className="mark">AS</span>
            <span>{profile.shortName}</span>
          </button>

          <div className="desktop-nav">
            {navItems.map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)}>
                {label}
              </button>
            ))}
          </div>

          <div className="nav-right-actions">
            <a
              href={profile.resumeUrl}
              download="Resume-Akram.pdf"
              className="btn-resume-nav"
              title="Download Resume PDF"
            >
              <Download size={14} />
              <span>Resume</span>
            </a>
            <button className="nav-cta" onClick={() => scrollTo('contact')}>
              Let&apos;s Talk <ArrowUpRight size={14} />
            </button>
            <button
              className="menu-button"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mobile-nav">
            {navItems.map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)}>
                {label}
                <ArrowUpRight size={14} />
              </button>
            ))}
            <a
              href={profile.resumeUrl}
              download="Resume-Akram.pdf"
              className="btn-resume-nav"
              style={{ justifyContent: 'center', marginTop: '8px' }}
            >
              <Download size={14} />
              <span>Download Resume PDF</span>
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero page-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" /> {profile.role}
          </div>

          <div className="badge-location">
            <MapPin size={12} /> {profile.location} • 1.6+ Years Exp • Frontend, Backend &amp; AI Systems
          </div>

          <h1>{profile.intro}</h1>
          <p className="hero-summary">{profile.summary}</p>

          <div className="hero-actions">
            <button className="button-primary" onClick={() => scrollTo('work')}>
              Explore Projects <ArrowUpRight size={16} />
            </button>
            <a
              href={profile.resumeUrl}
              download="Resume-Akram.pdf"
              className="button-secondary"
            >
              <Download size={16} /> Download Resume
            </a>
            <button className="copy-email-btn" onClick={handleCopyEmail}>
              {copied ? <Check size={14} color="#22c55e" /> : <Copy size={14} />}
              {copied ? 'Copied to Clipboard!' : 'Copy Email'}
            </button>
          </div>

          {/* Social Links Strip */}
          <div className="social-strip">
            <span className="social-strip-label">Profiles:</span>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-icon"
            >
              <GithubIcon size={14} /> GitHub
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-icon"
            >
              <LinkedinIcon size={14} /> LinkedIn
            </a>
            <a
              href={socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-icon"
            >
              <Code2 size={14} /> LeetCode
            </a>
            <a
              href={socials.codechef}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-icon"
            >
              <Award size={14} /> CodeChef
            </a>
            <a
              href={socials.geeksforgeeks}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-icon"
            >
              <Terminal size={14} /> GFG
            </a>
          </div>
        </div>

        {/* Hero Code Window */}
        <div className="code-card">
          <div className="code-top">
            <div className="window-dots">
              <span className="window-dot red" />
              <span className="window-dot yellow" />
              <span className="window-dot green" />
            </div>
            <span className="code-label">akram.developer.ts</span>
            <div className="code-live-pill">
              <span className="status-dot" /> active
            </div>
          </div>
          <div className="code-body">
            <p>
              <span className="code-dim">01</span>{' '}
              <span className="code-key">const</span>{' '}
              <span className="code-prop">engineer</span> = &#123;
            </p>
            <p>
              <span className="code-dim">02</span> &nbsp;&nbsp;
              <span className="code-prop">name</span>:{' '}
              <span className="code-string">&quot;{profile.name}&quot;</span>,
            </p>
            <p>
              <span className="code-dim">03</span> &nbsp;&nbsp;
              <span className="code-prop">role</span>:{' '}
              <span className="code-string">&quot;Full Stack &amp; AI Integration&quot;</span>,
            </p>
            <p>
              <span className="code-dim">04</span> &nbsp;&nbsp;
              <span className="code-prop">frontend</span>:{' '}
              <span className="code-highlight">[&quot;React 19&quot;, &quot;Next.js&quot;, &quot;TypeScript&quot;, &quot;Tailwind&quot;]</span>,
            </p>
            <p>
              <span className="code-dim">05</span> &nbsp;&nbsp;
              <span className="code-prop">backend</span>:{' '}
              <span className="code-highlight">[&quot;Node.js&quot;, &quot;Express&quot;, &quot;PostgreSQL&quot;, &quot;Redis&quot;]</span>,
            </p>
            <p>
              <span className="code-dim">06</span> &nbsp;&nbsp;
              <span className="code-prop">apisAndArch</span>:{' '}
              <span className="code-string">&quot;40+ RESTful APIs · Knex ORM · RBAC&quot;</span>,
            </p>
            <p>
              <span className="code-dim">07</span> &nbsp;&nbsp;
              <span className="code-prop">aiIntegration</span>:{' '}
              <span className="code-string">[&quot;RAG Architecture&quot;, &quot;MCP &amp; AI Agents&quot;, &quot;Tool Calling&quot;]</span>,
            </p>
            <p>
              <span className="code-dim">08</span> &nbsp;&nbsp;
              <span className="code-prop">problemSolving</span>:{' '}
              <span className="code-string">&quot;1,500+ Solved · GFG Rank #2&quot;</span>
            </p>
            <p>
              <span className="code-dim">09</span> &#125;;
            </p>
            <div className="code-divider" />
            <p className="code-output">
              <span>→</span> Building fast, interactive, and high-conversion web apps
              <span className="cursor" />
            </p>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="stats page-grid">
        {stats.map((item) => (
          <div key={item.label}>
            <strong>{item.value}</strong>
            <span className="stat-label">{item.label}</span>
            <small>{item.note}</small>
          </div>
        ))}
      </section>

      {/* Projects Showcase with Category Filter */}
      <section id="work" className="section page-grid">
        <div className="section-heading">
          <span className="eyebrow">Selected Work</span>
          <h2>Frontend Experiences &amp; Enterprise Platforms</h2>
          <p>
            From high-conversion luxury brand websites and interactive voice-driven portals to full-stack
            SaaS platforms and AI copilots.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="project-filter-bar">
          {filterCategories.map((cat) => {
            const count =
              cat === 'All'
                ? allProjects.length
                : allProjects.filter((p) => p.category === cat).length
            return (
              <button
                key={cat}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                <span>{cat}</span>
                <span className="filter-count">{count}</span>
              </button>
            )
          })}
        </div>

        {/* Projects Grid */}
        <div className="featured-projects-grid">
          {filteredProjects.map((project) => (
            <article className="personal-project-card" key={project.title}>
              <div className="project-card-header">
                <span className="project-badge">{project.badge}</span>
                <span className="client-type-tag">
                  <ShieldCheck size={13} style={{ color: 'var(--primary)' }} />
                  {project.clientType}
                </span>
              </div>

              <h3>{project.title}</h3>
              <div className="project-subtitle">{project.subtitle}</div>
              <p className="project-desc">{project.description}</p>

              <ul className="project-highlights-list">
                {project.highlights.map((h: string, idx: number) => (
                  <li key={idx}>
                    <Check size={15} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="pills">
                {project.technologies.map((t: string) => (
                  <span className="pill" key={t}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-demo"
                  >
                    <Globe size={14} /> Live Demo <ArrowUpRight size={13} />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-github"
                  >
                    <GithubIcon size={14} /> Source Code <ArrowUpRight size={13} />
                  </a>
                )}
                <button
                  className="btn-modal-trigger"
                  onClick={() => setSelectedProject(project)}
                >
                  Inspect Highlights <ChevronRight size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Work Experience & Shloka Solutions */}
      <section id="experience" className="section section-border page-grid">
        <div className="section-heading">
          <span className="eyebrow">Professional Experience</span>
          <h2>Work Experience at Shloka Solutions</h2>
          <p>
            Delivering high-performance frontends, enterprise SaaS modules, and production APIs as
            a core Software Developer.
          </p>
        </div>

        {/* Experience Header Banner */}
        <div className="experience-banner">
          <div className="exp-banner-top">
            <div className="exp-company-info">
              <h3>{experience.company}</h3>
              <div className="exp-role-title">
                {experience.title} • {experience.period}
              </div>
            </div>
            <div className="exp-meta">
              <span>{experience.location}</span>
              <span className="exp-award-tag">
                <Award size={12} /> 2× Star of the Month Recipient
              </span>
            </div>
          </div>
          <p className="exp-summary">{experience.summary}</p>
          <div className="confidentiality-notice">
            <ShieldCheck size={16} />
            <span>
              Production projects, landing pages, and enterprise SaaS platforms architected in accordance with client confidentiality standards.
            </span>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="section section-border page-grid">
        <div className="section-heading">
          <span className="eyebrow">Technical Competencies</span>
          <h2>Skills &amp; Engineering Stack</h2>
          <p>
            Languages, frameworks, design systems, and architectural tools leveraged across
            modern frontend engineering and scalable full-stack development.
          </p>
        </div>

        <div className="skills-container">
          {Object.entries(technicalSkills).map(([category, list]) => (
            <div className="skill-category-card" key={category}>
              <div className="skill-category-header">
                {category.includes('Frontend') && <Globe size={15} />}
                {category.includes('Backend') && <Server size={15} />}
                {category.includes('AI') && <Sparkles size={15} />}
                {category.includes('RAG') && <Sparkles size={15} />}
                {category.includes('LLM') && <Sparkles size={15} />}
                {category.includes('Databases') && <Database size={15} />}
                {category.includes('Cloud') && <Cpu size={15} />}
                {category.includes('Tools') && <Layers size={15} />}
                {category.includes('Computer Science') && <Code2 size={15} />}
                <span>{category}</span>
              </div>
              <div className="skill-pills">
                {list.map((skill) => (
                  <span className="skill-pill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Problem Solving & DSA Achievements */}
      <section id="achievements" className="section section-border page-grid">
        <div className="section-heading">
          <span className="eyebrow">Proven Rigor</span>
          <h2>Problem Solving &amp; Recognition</h2>
          <p>
            Demonstrated algorithmic mastery across competitive programming platforms and recognized
            in-company performance.
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((item) => (
            <article className="achievement-card" key={item.title}>
              <div className="achievement-top">
                <span className="achievement-platform">{item.platform}</span>
                <span className="achievement-badge">{item.highlight}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="achievement-link"
                >
                  {item.linkLabel} <ArrowUpRight size={13} />
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section section-border page-grid">
        <div className="section-heading">
          <span className="eyebrow">Academic Background</span>
          <h2>Education</h2>
          <p>Computer science foundation, software engineering principles, and core theory.</p>
        </div>

        <div className="education-card">
          <div className="edu-main">
            <span className="eyebrow" style={{ fontSize: '11px' }}>
              <GraduationCap size={15} /> Bachelor&apos;s Degree
            </span>
            <h3>{education.institution}</h3>
            <div className="edu-degree">{education.degree}</div>
            <p className="edu-desc">{education.description}</p>
          </div>
          <div className="edu-meta">
            <span className="edu-cgpa-badge">CGPA: 8.0 / 10</span>
            <span className="edu-period">{education.period}</span>
            <span className="badge-location" style={{ marginTop: 0 }}>
              <MapPin size={11} /> {education.location}
            </span>
          </div>
        </div>
      </section>

      {/* Services / What I Can Build */}
      <section id="services" className="section section-border page-grid">
        <div className="section-heading">
          <span className="eyebrow">Capabilities</span>
          <h2>What I Bring to Your Team</h2>
          <p>
            From high-conversion frontend architectures to enterprise SaaS workflows and AI copilots.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, idx) => (
            <div className="service-card" key={service.title}>
              <span className="service-card-number">0{idx + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-tags">
                {service.tags.map((t) => (
                  <span className="pill" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section page-grid">
        <div className="contact-intro">
          <span className="eyebrow">Get in touch</span>
          <h2>Let&apos;s build something exceptional.</h2>
          <p>
            Actively open to Frontend Developer and Full-Stack opportunities. Let&apos;s discuss how I can
            contribute to your engineering team.
          </p>

          <div className="contact-cards">
            <a href={`mailto:${profile.email}`} className="contact-info-card">
              <div className="contact-info-icon">
                <Mail size={18} />
              </div>
              <div className="contact-info-content">
                <small>Email Address</small>
                <strong>{profile.email}</strong>
              </div>
              <ArrowUpRight size={15} style={{ marginLeft: 'auto', opacity: 0.6 }} />
            </a>

            <a
              href={`https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent('Hi Akram, I reviewed your portfolio and would like to discuss an opportunity!')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info-card"
            >
              <div className="contact-info-icon whatsapp-icon-bg">
                <MessageCircle size={18} />
              </div>
              <div className="contact-info-content">
                <small>WhatsApp &amp; Phone</small>
                <strong>{profile.phone}</strong>
              </div>
              <ArrowUpRight size={15} style={{ marginLeft: 'auto', opacity: 0.6 }} />
            </a>

            <div className="contact-info-card" style={{ cursor: 'default' }}>
              <div className="contact-info-icon">
                <MapPin size={18} />
              </div>
              <div className="contact-info-content">
                <small>Location</small>
                <strong>{profile.location} (Open to Remote &amp; Relocation)</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form with Automatic Email Launch & Instant WhatsApp option */}
        <div className="contact-form">
          <h3>Send a Message</h3>

          {formSubmitted ? (
            <div className="contact-success-box">
              <div className="contact-success-title">
                <Check size={18} /> Email Draft Opened in Your Mail App!
              </div>
              <p className="contact-success-desc">
                Your email client (Gmail, Apple Mail, Outlook) has been opened with your pre-filled message addressed to{' '}
                <strong>{profile.email}</strong>.
              </p>
              <div className="contact-success-actions">
                <a
                  href={`https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(
                    `Hi Akram,\n\nName: ${formData.name}\nRole / Requirement: ${formData.projectType}\nMessage: ${formData.message}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-direct"
                >
                  <MessageCircle size={15} /> Send via WhatsApp Instantly
                </a>
                <button
                  type="button"
                  className="btn-reset-form"
                  onClick={() => {
                    setFormSubmitted(false)
                    setFormData({ name: '', email: '', projectType: 'Frontend Developer Role', message: '' })
                  }}
                >
                  <RotateCcw size={14} /> Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} style={{ display: 'grid', gap: '16px' }}>
              <label>
                Name
                <input
                  required
                  placeholder="Your name or company"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </label>
              <label>
                Email
                <input
                  required
                  type="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </label>
              <label>
                Project Type / Opportunity
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                >
                  <option value="Frontend Developer Role">Frontend Developer (React / Next.js) Role</option>
                  <option value="Full-Stack Developer Role">Full-Stack Software Developer Role</option>
                  <option value="High-Impact Web Application">Web Application / MVP Development</option>
                  <option value="Landing Page / Design System">Landing Page &amp; Design System</option>
                  <option value="AI Integration / API Work">AI Feature / API Integration</option>
                  <option value="Other Exploration">Other Discussion</option>
                </select>
              </label>
              <label>
                Message
                <textarea
                  required
                  rows={4}
                  placeholder="Share details about the role, stack, or timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </label>
              <button className="button-primary" type="submit">
                <Send size={16} /> Send Message via Email
              </button>
            </form>
          )}

          <small>
            Prefer direct reach? Email{' '}
            <a href={`mailto:${profile.email}`} style={{ color: 'var(--primary)' }}>
              {profile.email}
            </a>{' '}
            or click the green WhatsApp icon anytime.
          </small>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer page-grid">
        <div className="footer-left">
          <button className="wordmark" onClick={() => scrollTo('home')}>
            <span className="mark">AS</span>
            <span>{profile.name}</span>
          </button>
        </div>

        <div className="footer-socials">
          <a href={socials.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={socials.leetcode} target="_blank" rel="noopener noreferrer">
            LeetCode
          </a>
          <a href={socials.codechef} target="_blank" rel="noopener noreferrer">
            CodeChef
          </a>
          <a href={socials.geeksforgeeks} target="_blank" rel="noopener noreferrer">
            GFG
          </a>
        </div>

        <div>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
      </footer>

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />

      {/* Toast Alert */}
      {copied && <div className="toast-msg">Email copied to clipboard!</div>}

      {/* Interactive Project Case Modal */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <article className="case-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            <span className="eyebrow">{selectedProject.clientType}</span>
            <h2>{selectedProject.title}</h2>
            {selectedProject.subtitle && (
              <div className="project-subtitle" style={{ fontSize: '15px' }}>
                {selectedProject.subtitle}
              </div>
            )}
            <p style={{ marginTop: '14px', color: 'var(--muted-foreground)', lineHeight: 1.7 }}>
              {selectedProject.description}
            </p>

            <div className="modal-columns">
              <div>
                <span className="modal-label">Key Engineering Deliverables</span>
                <ul className="modal-highlights">
                  {selectedProject.highlights.map((h: string, idx: number) => (
                    <li key={idx}>
                      <Check size={15} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="modal-label">Technologies Used</span>
                <div className="pills">
                  {selectedProject.technologies.map((t: string) => (
                    <span className="pill" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-links">
              {selectedProject.demoUrl && (
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-demo"
                >
                  <Globe size={14} /> Open Live Demo <ExternalLink size={13} />
                </a>
              )}
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-github"
                >
                  <GithubIcon size={14} /> Source Code <ExternalLink size={13} />
                </a>
              )}
            </div>
          </article>
        </div>
      )}
    </main>
  )
}
