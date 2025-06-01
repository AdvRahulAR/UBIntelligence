
import React from 'react';
import { NavItem, Assistant, Founder, Feature } from './types';
import LegalIcon from './components/icons/LegalIcon';
import ImageIcon from './components/icons/ImageIcon';
import CyberIcon from './components/icons/CyberIcon';
import MedicalIcon from './components/icons/MedicalIcon';
import WellnessIcon from './components/icons/WellnessIcon';
// FeatureIconDefault is not currently used by any assistant but kept for potential future use.
// import FeatureIconDefault from './components/icons/FeatureIconDefault';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Assistants', href: '#assistants' },
  { label: 'About', href: '#about' },
  // Contact is part of Navbar CTA and Footer
];

// Note: Icon styling within features will be applied dynamically in AssistantDisplay
// The className here might be overridden or augmented by AssistantDisplay logic
// We ensure a base class for the icon itself if not fully overridden.
const dharmabotFeatures: Feature[] = [
  { icon: <LegalIcon />, name: 'Legal Research', description: 'Access vast legal databases instantly.' },
  { icon: <LegalIcon />, name: 'Drafting Assistance', description: 'Automated drafting for legal documents.' },
  { icon: <LegalIcon />, name: 'Document Analysis', description: 'Extract key information and insights.' },
];

const imagenieFeatures: Feature[] = [
  { icon: <ImageIcon />, name: 'Image Generation', description: 'Create stunning visuals from text prompts.' },
  { icon: <ImageIcon />, name: 'Content Creation', description: 'Generate engaging written content.' },
  { icon: <ImageIcon />, name: 'Voice Generation', description: 'Lifelike text-to-speech capabilities.' },
];

const advRobotFeatures: Feature[] = [
  { icon: <CyberIcon />, name: 'Cyber Law AI', description: 'Specialized AI for cyber law queries.' },
  { icon: <CyberIcon />, name: 'LLM Jailbreak Test', description: 'Test robustness of Large Language Models.' },
  { icon: <CyberIcon />, name: 'Vulnerability Scan', description: 'Identify potential security weaknesses.' },
];

const drRobotFeatures: Feature[] = [
  { icon: <MedicalIcon />, name: 'Medical Assistance', description: 'Advanced AI for medical professionals.' },
  { icon: <MedicalIcon />, name: 'Symptom Analysis', description: 'Preliminary symptom checking.' },
  { icon: <MedicalIcon />, name: 'Research Support', description: 'Access medical studies and papers.' },
];

const diyaFeatures: Feature[] = [
  { icon: <WellnessIcon />, name: 'Mental Wellness', description: 'Support for entrepreneurs mental health.' },
  { icon: <WellnessIcon />, name: 'Stress Management', description: 'Techniques and guidance for stress.' },
  { icon: <WellnessIcon />, name: 'Mindfulness Exercises', description: 'Guided mindfulness sessions.' },
];


export const ASSISTANTS_DATA: Assistant[] = [
  {
    id: 'dharmabot',
    name: 'Dharmabot',
    tagline: 'Your AI Legal Partner',
    description: 'Revolutionizing legal work with AI-powered research, drafting, and analysis. Dharmabot empowers legal professionals to achieve more with greater accuracy and speed.',
    features: dharmabotFeatures,
    screenshotUrl: 'https://picsum.photos/seed/dharmabot_dark/800/500', 
    accentColor: 'text-blue-400', 
    gradientFrom: 'from-blue-900', 
    gradientTo: 'to-indigo-800',
    ctaTagline: "Ready to transform your legal practice?",
    ctaButtonText: "Visit Dharmabot",
    externalLink: "https://dharmabot.ai/",
  },
  {
    id: 'imagenie',
    name: 'Imagenie',
    tagline: 'Create with AI Magic',
    description: 'Unleash your creativity with Imagenie. Generate breathtaking images, compelling content, and natural-sounding voiceovers effortlessly.',
    features: imagenieFeatures,
    screenshotUrl: 'https://picsum.photos/seed/imagenie_new_dark/800/500', 
    accentColor: 'text-orange-400', 
    gradientFrom: 'from-orange-800', 
    gradientTo: 'to-yellow-600',     
    ctaTagline: "Bring your creative visions to life.",
    ctaButtonText: "Explore Imagenie",
    externalLink: "http://imagenie.fun/",
  },
  {
    id: 'advrobot',
    name: 'Adv. Robot',
    tagline: 'Cyber Guardian AI',
    description: 'Navigate the complexities of cyber law and test AI model security with Adv. Robot. Your advanced solution for digital defense and AI integrity.',
    features: advRobotFeatures,
    screenshotUrl: 'https://picsum.photos/seed/advrobot_dark/800/500',
    accentColor: 'text-red-400',
    gradientFrom: 'from-red-900',
    gradientTo: 'to-rose-800',
    ctaTagline: "Secure your digital frontier with AI.",
    ctaButtonText: "Explore Adv. Robot",
    externalLink: "https://adv-robot-977847817748.us-west1.run.app",
  },
  {
    id: 'drrobot',
    name: 'Dr. Robot',
    tagline: 'Intelligent Medical AI',
    description: 'Empowering healthcare professionals with advanced AI capabilities for diagnosis support, research, and patient care optimization.',
    features: drRobotFeatures,
    screenshotUrl: 'https://picsum.photos/seed/drrobot_dark/800/500',
    accentColor: 'text-green-400',
    gradientFrom: 'from-green-900',
    gradientTo: 'to-teal-800',
    ctaTagline: "Advance healthcare with intelligent insights.",
    ctaButtonText: "Coming Soon", // Updated
  },
  {
    id: 'diya',
    name: 'Diya',
    tagline: 'Wellness for Innovators',
    description: 'Diya is a dedicated mental wellness assistant for entrepreneurs, offering tools and support to navigate the pressures of building a business.',
    features: diyaFeatures,
    screenshotUrl: 'https://picsum.photos/seed/diya_lightblue/800/500',
    accentColor: 'text-sky-400', 
    gradientFrom: 'from-sky-700', 
    gradientTo: 'to-cyan-500',
    ctaTagline: "Nurture your well-being, empower your journey.",
    ctaButtonText: "Coming Soon", // Updated
  },
];

export const FOUNDERS_DATA: Founder[] = [
  {
    id: 'founder1',
    name: 'Adv. Rahul A R',
    title: 'Chief Executive Officer (CEO) & AI Visionary',
    bio: "Rahul leads UB Intelligence with a strong vision for transformative AI. With years of experience in advocacy, machine learning, and product development, he is the technical architect behind UB Intelligence's platform. His expertise lies in building scalable AI systems and advancing cutting-edge research, all with a mission to develop the safest AI solutions.",
    imageUrl: 'https://picsum.photos/seed/rahul_prof/200/200', // Placeholder image
    linkedinUrl: 'https://www.linkedin.com/in/advrahular',
  },
  {
    id: 'founder2',
    name: 'Adv. Vinu Vinay',
    title: 'Chief Financial Officer (CFO) & Legal Expert',
    bio: "Vinu, an accomplished advocate with an MBA, leads the financial strategy and legal innovation at UB Intelligence. He is spearheading the development and launch of the company’s AI legal assistant in Dubai, while forging strategic partnerships with prominent law firms in the region.",
    imageUrl: 'https://picsum.photos/seed/vinu_prof/200/200', // Placeholder image
    linkedinUrl: 'https://www.linkedin.com/in/adv-vinu-vinay-58458b26a',
  },
  {
    id: 'founder3',
    name: 'Nikhil A R',
    title: 'Co-Founder & System Security Specialist',
    bio: 'Nikhil is the cybersecurity backbone of UB Intelligence. As a skilled systems security engineer, he ensures the platform’s infrastructure is secure, resilient, and privacy-first, safeguarding both data and trust in every interaction.',
    imageUrl: 'https://picsum.photos/seed/nikhil_prof/200/200', // Placeholder image
    linkedinUrl: 'https://www.linkedin.com/in/nikhil-a-r-2a1801150',
  },
];

// Updated logo for better adaptability, specific class for hero sizing handled in HeroSection
export const UB_INTELLIGENCE_LOGO = (
  <div className="font-extrabold tracking-tight"> {/* Base classes, size adjusted where used */}
    <span className="text-white">UB</span>
    <span className="text-blue-500">Intelligence</span>
  </div>
);
