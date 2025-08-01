import React from 'react';
import { NavItem, Assistant, Founder, Feature } from './types';
import LegalIcon from './components/icons/LegalIcon';
import ImageIcon from './components/icons/ImageIcon';
import CyberIcon from './components/icons/CyberIcon';
import MedicalIcon from './components/icons/MedicalIcon';
import WellnessIcon from './components/icons/WellnessIcon';
import PersonaIcon from './components/icons/PersonaIcon';
import PartnerIcon from './components/icons/PartnerIcon';
import ChatInteractiveIcon from './components/icons/ChatInteractiveIcon';
import VoiceIcon from './components/icons/VoiceIcon';
import ChatIcon from './components/icons/ChatIcon';
import BrainIcon from './components/icons/BrainIcon';
import ChartIcon from './components/icons/ChartIcon';
import VisualizationIcon from './components/icons/VisualizationIcon';
import SpeakerIcon from './components/icons/SpeakerIcon';
import SearchIcon from './components/icons/SearchIcon';

const novaFeatures: Feature[] = [
  { icon: <PersonaIcon />, name: 'Persona Creation', description: 'Build a digital version of yourself.' },
  { icon: <PartnerIcon />, name: 'Partner Crafting', description: 'Design an AI companion with personality traits, and boundaries.' },
  { icon: <ChatInteractiveIcon />, name: 'Interactive Chats', description: 'Engage in realistic, adaptive conversations with your persona or companion.' },
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Assistants', href: '#assistants' },
  { label: 'About', href: '#about' },
];

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
  { icon: <CyberIcon />, name: 'Deepfake Detection', description: 'Detect deepfakes and AI-generated content.' },
];

const drRobotFeatures: Feature[] = [
  { icon: <MedicalIcon />, name: 'Medical Assistance', description: 'Advanced AI for medical professionals.' },
  { icon: <MedicalIcon />, name: 'Symptom Analysis', description: 'Preliminary symptom checking.' },
  { icon: <MedicalIcon />, name: 'Research Support', description: 'Access medical studies and papers.' },
];

const diyaFeatures: Feature[] = [
  { icon: <ChatIcon />, name: 'Real-time Responses', description: 'Instant business and wellness query responses.' },
  { icon: <BrainIcon />, name: 'Mental Wellness Support', description: 'Tailored support for entrepreneurial pressures.' },
  { icon: <ChartIcon />, name: 'Strategic Business Guidance', description: 'Market analysis and executive advisory.' },
];

export const ASSISTANTS_DATA: Assistant[] = [
  {
    id: 'dharmabot',
    name: 'JustEase',
    tagline: 'Your AI Legal Partner',
    description: 'Revolutionizing legal work with AI-powered research, drafting, and analysis. JustEase empowers legal professionals to achieve more with greater accuracy and speed.',
    features: dharmabotFeatures,
    screenshotUrl: '/Justease.png', 
    accentColor: 'text-blue-400', 
    gradientFrom: 'from-blue-900', 
    gradientTo: 'to-indigo-800',
    ctaTagline: "Ready to transform your legal practice?",
    ctaButtonText: "Visit JustEase",
    externalLink: "https://dharmabot.ai/",
  },
  {
    id: 'imagenie',
    name: 'Imagenie',
    tagline: 'Create with AI Magic',
    description: 'Unleash your creativity with Imagenie. Generate breathtaking images, compelling content, and natural-sounding voiceovers effortlessly.',
    features: imagenieFeatures,
    screenshotUrl: '/Screenshot 2025-06-01 134109.png',
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
    screenshotUrl: '/image copy.png',
    accentColor: 'text-red-400',
    gradientFrom: 'from-red-900',
    gradientTo: 'to-rose-800',
    ctaTagline: "Secure your digital frontier with AI.",
    ctaButtonText: "Explore Adv. Robot",
    externalLink: "https://advrobot.netlify.app/",
  },
  {
    id: 'nova',
    name: 'Nova AI',
    tagline: 'Create Your Digital Persona',
    description: 'A cutting-edge AI platform designed for self-discovery and personal growth. Nova AI lets you create, customize, and interact with your own digital persona or supportive AI companion.',
    features: novaFeatures,
    screenshotUrl: '/nova-screenshot.png',
    accentColor: 'text-purple-400',
    gradientFrom: 'from-purple-900',
    gradientTo: 'to-violet-800',
    ctaTagline: "Unlock your potential with Nova AI.",
    ctaButtonText: "Try Nova AI",
    externalLink: "https://nova4u.netlify.app/",
  },
  {
    id: 'drrobot',
    name: 'Synapse',
    tagline: 'Intelligent Medical AI',
    description: 'Empowering healthcare professionals with advanced AI capabilities for diagnosis support, research, and patient care optimization.',
    features: drRobotFeatures,
    screenshotUrl: '/dr-robot.png',
    accentColor: 'text-green-400',
    gradientFrom: 'from-green-900',
    gradientTo: 'to-teal-800',
    ctaTagline: "Advance healthcare with intelligent insights.",
    ctaButtonText: "Try Synapse",
    externalLink: "https://dr-robot.netlify.app/",
  },
  {
    id: 'diya',
    name: 'Diya',
    tagline: 'Your AI Companion',
    description: 'Diya is a comprehensive AI assistant developed by UB Intelligence, designed as the ultimate companion for entrepreneurs and business builders. Your dual mission encompasses both mental wellness support and strategic business guidance, recognizing that entrepreneurial success requires both emotional resilience and tactical expertise.',
    features: diyaFeatures,
    screenshotUrl: '/diya-screenshot.png',
    accentColor: 'text-sky-400', 
    gradientFrom: 'from-sky-700', 
    gradientTo: 'to-cyan-500',
    ctaTagline: "Your ultimate companion for entrepreneurial success.",
    ctaButtonText: "Visit Diya",
    externalLink: "https://diya.help/",
  },
];

export const FOUNDERS_DATA: Founder[] = [
  {
    id: 'founder1',
    name: 'Adv. Rahul A R',
    title: 'Chief Executive Officer (CEO) & AI Visionary',
    bio: "Rahul leads UB Intelligence with a strong vision for transformative AI. With years of experience in advocacy, machine learning, and product development, he is the technical architect behind UB Intelligence's platform. His expertise lies in building scalable AI systems and advancing cutting-edge research, all with a mission to develop the safest AI solutions.",
    imageUrl: '/IMG_20250118_170430.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/advrahular',
  },
  {
    id: 'founder2',
    name: 'Adv. Vinu Vinay',
    title: 'Chief Operating Officer (COO) & Legal Expert',
    bio: "Vinu, an accomplished advocate with an MBA, leads the financial strategy and legal innovation at UB Intelligence. He is spearheading the development and launch of the company's AI legal assistant in Dubai, while forging strategic partnerships with prominent law firms in the region.",
    imageUrl: '/Screenshot 2025-06-02 020400.png',
    linkedinUrl: 'https://www.linkedin.com/in/adv-vinu-vinay-58458b26a',
  },
  {
    id: 'founder3',
    name: 'Nikhil A R',
    title: 'Co-Founder & System Security Specialist',
    bio: "Nikhil is the cybersecurity backbone of UB Intelligence. As a skilled systems security engineer, he ensures the platform's infrastructure is secure, resilient, and privacy-first, safeguarding both data and trust in every interaction.",
    imageUrl: '/Screenshot 2025-06-02 020903.png',
    linkedinUrl: 'https://www.linkedin.com/in/nikhil-a-r-2a1801150',
  },
];

export const UB_INTELLIGENCE_LOGO = (
  <div className="font-extrabold tracking-tight">
    <span className="text-white">UB</span>
    <span className="text-blue-500">Intelligence</span>
  </div>
);