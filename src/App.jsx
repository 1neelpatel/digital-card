import agent from './agent.json';
import QRCode from 'react-qr-code';
import { Mail, Phone, Linkedin, Globe, Instagram, Calendar, Facebook, Moon, Sun } from 'lucide-react';
import './index.css';
import { useEffect, useState } from 'react';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-md"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <Sun className="text-yellow-400 w-5 h-5" /> : <Moon className="text-gray-800 w-5 h-5" />}
        </button>
      </div>

      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 text-center">
        <img
          src="/cloud-team-logo.png"
          alt="Cloud Team Realty"
          className="w-32 mx-auto mb-4 animate-fade-in"
        />
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover border-4 border-blue-500 mx-auto"
        />
        <h1 className="text-2xl font-bold mt-4 text-gray-900 dark:text-white">{agent.name}</h1>
        <p className="text-gray-600 dark:text-gray-300">{agent.title}</p>

        <div className="mt-6 space-y-3">
          <a href={`mailto:${agent.email}`} className="block w-full">
            <div className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white p-3 rounded-lg flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" /> {agent.email}
            </div>
          </a>
          <a href={`tel:${agent.phone}`} className="block w-full">
            <div className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white p-3 rounded-lg flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" /> Call Me: ({agent.phone.slice(0, 3)}) {agent.phone.slice(3, 6)}-{agent.phone.slice(6)}
            </div>
          </a>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <a href={agent.linkedin} target="_blank" rel="noreferrer"><Linkedin className="w-6 h-6 text-blue-600" /></a>
          <a href={agent.website} target="_blank" rel="noreferrer"><Globe className="w-6 h-6 text-gray-800 dark:text-white" /></a>
          <a href={agent.instagram} target="_blank" rel="noreferrer"><Instagram className="w-6 h-6 text-pink-500" /></a>
          <a href={agent.calendar} target="_blank" rel="noreferrer"><Calendar className="w-6 h-6 text-green-600" /></a>
          <a href={agent.facebook} target="_blank" rel="noreferrer"><Facebook className="w-6 h-6 text-blue-800" /></a>
        </div>

        {agent.customLinks && agent.customLinks.length > 0 && (
          <div className="mt-6 space-y-2">
            {agent.customLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="block w-full"
              >
                <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 p-3 rounded-lg font-medium">
                  {link.label}
                </div>
              </a>
            ))}
          </div>
        )}

<a
  href="/neel-patel.vcf"
  download="neel-patel.vcf"
  className="mt-6 inline-block text-blue-600 dark:text-blue-400 underline"
>
  Save to Contacts
</a>

        <div className="mt-6 flex justify-center">
          <QRCode value={agent.qr} size={128} />
        </div>
      </div>
    </div>
  );
}
