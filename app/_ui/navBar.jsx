"use client"
import { useState } from 'react';
import { ChevronsRight, SearchCheck, X } from 'lucide-react';
import Link from "next/link";
import {motion,AnimatePresence} from 'framer-motion';
const NavEls = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Explore", href: "/explore" },
  { name: "My Library", href: "/library" }
];

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="flex relative shadow-lg py-4 px-4 sm:px-6 bg-[#10141d] border-b-2 border-white min-h-[75px] tracking-wide z-50">
      <div className="flex  flex-wrap items-center gap-5 w-full max-w-screen-xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
       
            <img 
            src="/logo.png" 
            alt="Logo"
            className="w-40 animate-pulse hover:scale-105 transition-transform duration-300" 
          /> 
        
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex ml-auto">
          <ul className="flex gap-6">
            {NavEls.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  className="text-gray-200 text-sm font-medium hover:text-[#ffc290] transition-colors duration-300 px-3 py-2 rounded-md hover:bg-white/5"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation  */}
        <AnimatePresence>
{isMobileMenuOpen && (
          <div  className="lg:hidden fixed inset-0 bg-black  z-40" onClick={closeMobileMenu}>
            <motion.div initial={{x:-400}}
            animate={{x:0}}
            transition={{duration:0.1,ease:"easeInOut"}}
            exit={{x:-400,duration:0.5,ease:"easeInOut"}} 
              className="fixed top-0 left-0 w-80 h-full bg-gradient-to-tr from-purple-800 via-indigo-600 to-blue-500 shadow-xl z-50 transform transition-transform duration-300 ease-in-out"
              onClick={(e) => e.stopPropagation()}
            >
             
              <div  className="flex items-center justify-between p-6 border-b border-gray-700">
                <img src="/logo.png" alt="Logo" className="w-32" />
                <button 
                  onClick={closeMobileMenu}
                  className="p-2 rounded-md cursor-pointer hover:bg-white/10 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} color="white" />
                </button>
              </div>

              
              <nav  className="p-6">
                <ul className="space-y-4">
                  {NavEls.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="block text-gray-200 text-lg font-medium hover:text-[#ffc290] transition-colors duration-300 px-3 py-3 rounded-md hover:bg-white/5"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </div>
        )}
        </AnimatePresence>
        

       
        <div className="flex items-center ml-auto lg:ml-0 space-x-3">
         
          <button
            className="p-2 rounded-md hover:bg-white/10 transition-colors duration-300 group"
            aria-label="Search"
          >
            <SearchCheck 
              size={24} 
              className="text-white group-hover:text-[#ffc290] cursor-pointer transition-colors duration-300" 
            />
          </button>

          <button
            className="w-10 h-10 font-bold bg-gradient-to-r from-pink-400 to-pink-600 rounded-full cursor-pointer hover:from-pink-500 hover:to-pink-700 transition-all duration-300 flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-105"
            aria-label="User profile"
          >
            S
          </button>

        
          <button  
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-all duration-300 group"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <ChevronsRight 
              size={24} 
              className={`text-white group-hover:text-[#ffc290] transition-all cursor-pointer duration-300  group-hover:rotate-180`} 
            />
          </button>
        </div>
      </div>
    </header>
  );
}