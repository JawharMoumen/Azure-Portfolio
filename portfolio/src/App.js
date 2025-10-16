import { useState } from 'react';
import { Github, Linkedin, Mail, Code, Database, Cloud, ExternalLink } from 'lucide-react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  // ÄNDRA DESSA till din egen info!
  const myInfo = {
    name: "Jawhar Moumen",
    title: "Full Stack Developer Student",
    email: "Jawhar.Moumen@stud.sti.se",
    github: "https://github.com/JawharMoumen",
  };

  // ÄNDRA DESSA till dina projekt!
  const projects = [
    {
      title: "Azure Portfolio",
      description: "Ett React portfolio deployat i Azure med Static Web Apps och CI/CD",
      tech: ["React", "Azure", "GitHub Actions"],
      github: "https://github.com/dittanvändarnamn/portfolio"
    },
    {
      title: "Projekt 2",
      description: "Beskriv ditt skolprojekt här",
      tech: ["Python", "Django"],
      github: "https://github.com/dittanvändarnamn/projekt2"
    }
  ];

  // ÄNDRA DESSA till dina skills!
  const skills = {
    "Frontend": ["React", "HTML", "CSS", "JavaScript"],
    "Backend": ["Java", "Node.js"],
    "Databaser": ["SQL", "PostgreSQL"],
    "Cloud": ["Azure", "Docker", "Git"]
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #1e293b 0%, #1e40af 100%)' }}>
      {/* Navigation */}
      <nav style={{ 
        position: 'fixed', 
        top: 0, 
        width: '100%', 
        backgroundColor: 'rgba(15, 23, 42, 0.9)',
        backdropFilter: 'blur(10px)',
        zIndex: 50,
        borderBottom: '1px solid rgba(59, 130, 246, 0.2)',
        padding: '1rem 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>{myInfo.name}</h1>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['about', 'projects', 'skills', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeSection === section ? '#60a5fa' : '#d1d5db',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  textTransform: 'capitalize',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.color = 'white'}
                onMouseLeave={(e) => e.target.style.color = activeSection === section ? '#60a5fa' : '#d1d5db'}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={{ paddingTop: '8rem', paddingBottom: '5rem', padding: '8rem 1.5rem 5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
              {myInfo.title}
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#93c5fd', marginBottom: '2rem' }}>
              Passionerad om molnteknologi och modern webbutveckling
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              <a href={myInfo.github} target="_blank" rel="noopener noreferrer" 
                 style={{ padding: '0.75rem', backgroundColor: 'rgba(59, 130, 246, 0.2)', borderRadius: '0.5rem', display: 'flex' }}>
                <Github color="white" size={24} />
              </a>
              <a href={myInfo.linkedin} target="_blank" rel="noopener noreferrer"
                 style={{ padding: '0.75rem', backgroundColor: 'rgba(59, 130, 246, 0.2)', borderRadius: '0.5rem', display: 'flex' }}>
                <Linkedin color="white" size={24} />
              </a>
              <a href={`mailto:${myInfo.email}`}
                 style={{ padding: '0.75rem', backgroundColor: 'rgba(59, 130, 246, 0.2)', borderRadius: '0.5rem', display: 'flex' }}>
                <Mail color="white" size={24} />
              </a>
            </div>
          </div>

          {/* About Section */}
          {activeSection === 'about' && (
            <div style={{ 
              backgroundColor: 'rgba(30, 41, 59, 0.5)', 
              backdropFilter: 'blur(10px)',
              borderRadius: '1rem', 
              padding: '2rem', 
              border: '1px solid rgba(59, 130, 246, 0.2)' 
            }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>Om mig</h3>
              <div style={{ color: '#d1d5db', lineHeight: '1.8' }}>
                <p style={{ marginBottom: '1rem' }}>
                  Jag är en driven utvecklare med passion för att skapa moderna webbapplikationer 
                  och lära mig nya teknologier. Just nu fokuserar jag på molnlösningar med Azure.
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  Min resa inom programmering började [SKRIV OM DIG SJÄLV HÄR] och sedan dess har jag 
                  arbetat med både frontend och backend-teknologier.
                </p>
                <p>
                  <strong style={{ color: '#60a5fa' }}>Söker LIA:</strong> Jag är redo att bidra 
                  till ett team och fortsätta utvecklas som utvecklare.
                </p>
              </div>
            </div>
          )}

          {/* Projects Section */}
          {activeSection === 'projects' && (
            <div>
              <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>Projekt</h3>
              {projects.map((project, idx) => (
                <div key={idx} style={{ 
                  backgroundColor: 'rgba(30, 41, 59, 0.5)', 
                  backdropFilter: 'blur(10px)',
                  borderRadius: '1rem', 
                  padding: '1.5rem', 
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                    <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>{project.title}</h4>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github color="#60a5fa" size={20} />
                    </a>
                  </div>
                  <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>{project.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {project.tech.map((tech, i) => (
                      <span key={i} style={{ 
                        padding: '0.25rem 0.75rem', 
                        backgroundColor: 'rgba(59, 130, 246, 0.2)', 
                        color: '#93c5fd', 
                        borderRadius: '1rem', 
                        fontSize: '0.875rem' 
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Skills Section */}
          {activeSection === 'skills' && (
            <div>
              <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>Skills</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category} style={{ 
                    backgroundColor: 'rgba(30, 41, 59, 0.5)', 
                    backdropFilter: 'blur(10px)',
                    borderRadius: '1rem', 
                    padding: '1.5rem', 
                    border: '1px solid rgba(59, 130, 246, 0.2)' 
                  }}>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
                      {category}
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {skillList.map((skill, i) => (
                        <span key={i} style={{ 
                          padding: '0.25rem 0.75rem', 
                          backgroundColor: 'rgba(59, 130, 246, 0.1)', 
                          color: '#93c5fd', 
                          borderRadius: '0.5rem', 
                          fontSize: '0.875rem',
                          border: '1px solid rgba(59, 130, 246, 0.2)'
                        }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contact Section */}
          {activeSection === 'contact' && (
            <div style={{ 
              backgroundColor: 'rgba(30, 41, 59, 0.5)', 
              backdropFilter: 'blur(10px)',
              borderRadius: '1rem', 
              padding: '2rem', 
              border: '1px solid rgba(59, 130, 246, 0.2)' 
            }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>Kontakt</h3>
              <div style={{ color: '#d1d5db' }}>
                <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>
                  Intresserad av att samarbeta eller vill veta mer?
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <a href={`mailto:${myInfo.email}`} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#60a5fa', textDecoration: 'none' }}>
                    <Mail size={20} />
                    <span>{myInfo.email}</span>
                  </a>
                  <a href={myInfo.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#60a5fa', textDecoration: 'none' }}>
                    <Github size={20} />
                    <span>{myInfo.github}</span>
                  </a>
                  <a href={myInfo.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#60a5fa', textDecoration: 'none' }}>
                    <Linkedin size={20} />
                    <span>{myInfo.linkedin}</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer style={{ padding: '2rem 0', borderTop: '1px solid rgba(59, 130, 246, 0.2)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center', color: '#9ca3af' }}>
          <p>© 2025 {myInfo.name}. Deployd med Azure Static Web Apps.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;