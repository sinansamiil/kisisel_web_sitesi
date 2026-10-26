import React from 'react';
import { ToastProvider } from '@/context/ToastContext';
import SystemBar from '@/components/SystemBar';
import SiteHeader from '@/components/SiteHeader';
import HeroSection from '@/components/HeroSection';
import EditorialManifesto from '@/components/EditorialManifesto';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import VoluntarySection from '@/components/VoluntarySection';
import MarqueeGallery from '@/components/MarqueeGallery';
import EducationSkillsSection from '@/components/EducationSkillsSection';
import ContactSection from '@/components/ContactSection';
import SiteFooter from '@/components/SiteFooter';

export default function Home() {
  return (
    <ToastProvider>
      {/* Top System Bar */}
      <SystemBar />

      <div className="page-wrapper">
        {/* Header Navigation */}
        <SiteHeader />

        {/* Hero Section & Generative Canvas */}
        <HeroSection />

        {/* Editorial Manifesto */}
        <EditorialManifesto />

        {/* About Section */}
        <AboutSection />

        {/* Filterable Projects */}
        <ProjectsSection />

        {/* Professional Experience */}
        <ExperienceSection />

        {/* Voluntary & Leadership */}
        <VoluntarySection />

        {/* Continuous Photo & Engineering Marquee */}
        <MarqueeGallery />

        {/* Education, Certifications & Skills Matrix */}
        <EducationSkillsSection />

        {/* Editorial Contact Section */}
        <ContactSection />

        {/* Footer */}
        <SiteFooter />
      </div>
    </ToastProvider>
  );
}
