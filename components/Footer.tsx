import React from 'react';
import { UB_INTELLIGENCE_LOGO } from '../constants';
import LinkedInIcon from './icons/LinkedInIcon';

interface FooterProps {
  id: string;
}

const TwitterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" {...props}>
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.213 0-.425-.015-.637A9.954 9.954 0 0024 4.59z" />
  </svg>
);

const EmailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" {...props}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>
);


const Footer: React.FC<FooterProps> = ({ id }) => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const footerLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'AI Assistants', href: '#assistants' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const policyLinks = [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
  ];


  return (
    <footer id={id} className="bg-[#080808] text-gray-400 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-700/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-12 items-start">
          
          <div>
            <div className="mb-6">
              {UB_INTELLIGENCE_LOGO}
            </div>
            <p className="text-sm leading-relaxed">
              UB Intelligence is dedicated to advancing AI technology and providing innovative solutions for a smarter future.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map(link => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href);}}
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-5">Get in Touch</h3>
            <address className="not-italic space-y-3">
              <p className="flex items-center">
                <EmailIcon className="w-5 h-5 mr-2.5 text-blue-400 flex-shrink-0"/>
                <a href="mailto:ubintelligence.tech@gmail.com" className="hover:text-blue-400 transition-colors duration-200">ubintelligence.tech@gmail.com</a>
              </p>
              <p className="text-sm">
                UB Intelligence, Shivaganga Road, Kerala, India.
              </p>
            </address>
            <div className="flex space-x-5 mt-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-200 transform hover:scale-110" aria-label="UB Intelligence on LinkedIn">
                <LinkedInIcon />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition-colors duration-200 transform hover:scale-110" aria-label="UB Intelligence on Twitter">
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/70 pt-10 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} UB Intelligence. All rights reserved.</p>
          <div className="mt-3 space-x-1.5">
            {policyLinks.map((link, index) => (
               <React.Fragment key={link.label}>
                <a href={link.href} className="hover:text-blue-400 transition-colors duration-200 px-1.5">{link.label}</a>
                {index < policyLinks.length -1 && <span className="text-gray-600">|</span>}
               </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;