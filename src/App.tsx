import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import About from './components/About';
import Contact from './components/Contact';
import ProductionProjectDetail from './components/ProductionProjectDetail';
import { Project } from './data/projects';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedProductionProjectId, setSelectedProductionProjectId] = useState<string | null>(null);

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
    setSelectedProject(null);
    setSelectedProductionProjectId(null);
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setSelectedProductionProjectId(null); // Clear any previously selected production project
    setCurrentSection('project-detail');
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
    setCurrentSection('projects');
  };

  const handleProductionProjectClick = (id: string) => {
    setSelectedProductionProjectId(id);
    setCurrentSection('production-project-detail');
  };

  const handleBackToProjectEngineerDetails = () => {
    setSelectedProductionProjectId(null);
    setCurrentSection('projects'); // Go back to the main Projects page
  };

  const renderCurrentSection = () => {
    if (selectedProductionProjectId) {
      return <ProductionProjectDetail productionProjectId={selectedProductionProjectId} onBack={handleBackToProjectEngineerDetails} />;
    }

    if (selectedProject) {
      return <ProjectDetail project={selectedProject} onBack={handleBackToProjects} onProductionProjectClick={handleProductionProjectClick} />;
    }

    switch (currentSection) {
      case 'home':
        return <Hero onSectionChange={handleSectionChange} />;
      case 'projects':
        return <Projects onProjectClick={handleProjectClick} onProductionProjectClick={handleProductionProjectClick} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onSectionChange={handleSectionChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation currentSection={currentSection} onSectionChange={handleSectionChange} />
      <main className="pt-16">
        {renderCurrentSection()}
      </main>
    </div>
  );
}

export default App;