import React, { useState, useEffect, useRef } from "react";

export interface NavigationProps {
  children: React.ReactNode;
}

export const Navigation = ({ children }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <div
      ref={menuRef}
      className="relative flex items-center flex-none px-6 border border-solid rounded border-idc-blue-100"
    >
      <button
        className="flex items-center justify-center w-10 h-10 text-sm md:hidden"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        Browse
      </button>

      <ul
        className={`absolute top-0 md:static flex flex-col md:flex-row gap-5 text-sm text-black bg-white md:bg-transparent p-4 md:p-0 rounded md:rounded-none shadow md:shadow-none transition-transform duration-300 ease-in-out ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-[-100%] opacity-0"
        } md:translate-y-0 md:opacity-100`}
      >
        {children}
      </ul>
    </div>
  );
};
