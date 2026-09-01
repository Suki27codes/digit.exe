import { Menu, User, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import Button from "../ui/Button";

const links = [
  { label: "Home", to: "/" },
  { label: "Explore", to: "/explore" },
  { label: "About", to: "/about" },
  { label: "Help", to: "/faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2"
          aria-label="Innoject home"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-maroon-700 text-sm font-bold text-white">
            T
          </div>

          <span className="text-lg font-bold text-maroon-800">
            Innoject
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-maroon-50 text-maroon-800"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/login"
            className="text-sm font-medium text-gray-700 hover:text-maroon-700"
          >
            Log in
          </Link>

          <Link to="/signup">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                {link.label}
              </NavLink>
            ))}

            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              <User size={18} />
              Log in
            </Link>

            <Link
              to="/signup"
              onClick={() => setOpen(false)}
              className="mt-2"
            >
              <Button className="w-full">Get Started</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}