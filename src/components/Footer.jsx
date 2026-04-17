import React from "react";
import { Code, MessageCircle, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-200 mt-16 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand & About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">
              Skill<span className="text-blue-400">Swap</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              A community-driven platform where knowledge flows freely. Exchange
              skills, build connections, and grow together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/JstMeJosh/skillswap-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <Code size={16} /> Frontend Repo
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/JstMeJosh/skillswap-backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <Code size={16} /> Backend Repo
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/JstMeJosh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <Code size={16} /> Developer
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/2349122656254?text=Hi%20SkillSwap%20team%2C%20I%20have%20a%20question..."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors text-white text-sm font-medium"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
              <p className="text-slate-400 text-xs">
                Questions? Chat with us anytime!
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-slate-400 text-sm">
              <p>
                © {currentYear} SkillSwap. Made with{" "}
                <Heart size={14} className="inline text-red-500" /> by Joshua
              </p>
            </div>
            <div className="text-slate-500 text-xs mt-4 md:mt-0">
              <p>Open Source • MIT License • Built with React & Express</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
