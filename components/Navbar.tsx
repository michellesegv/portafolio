"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "quien-soy",
        "skills",
        "proyectos",
        "sobre-mi",
        "contactame",
      ];

      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);

        if (element) {
          const { offsetTop, offsetHeight } = element;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/escudo.png"
              alt="Michelle Seguil Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </Link>

          <ul className="hidden md:flex space-x-8">
            {[
              { id: "quien-soy", label: "¡Hola!" },
              { id: "skills", label: "Conocimientos" },
              { id: "proyectos", label: "Proyectos" },
              { id: "sobre-mi", label: "Habilidades" },
              { id: "contactame", label: "Contáctame" },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-gray-700 hover:text-rose-600 transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-rose-600 font-semibold"
                      : ""
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-gray-200">
            <ul className="py-4 space-y-2">
              {[
                { id: "quien-soy", label: "¡Hola!" },
                { id: "skills", label: "Conocimientos" },
                { id: "proyectos", label: "Proyectos" },
                { id: "sobre-mi", label: "Habilidades" },
                { id: "contactame", label: "Contáctame" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-4 py-2 text-gray-700 hover:text-rose-600 hover:bg-gray-50 transition-colors duration-200 ${
                      activeSection === item.id
                        ? "text-rose-600 font-semibold"
                        : ""
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
