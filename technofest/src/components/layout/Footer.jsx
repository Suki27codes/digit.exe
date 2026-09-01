import { Link } from "react-router-dom";
import {
  Globe,
  Mail,
  MessageCircle,
  Users,
} from "lucide-react";

const footerLinks = {
  Platform: [
    { label: "Explore", to: "/explore" },
    { label: "About", to: "/about" },
    { label: "FAQ", to: "/faq" },
  ],
  Support: [
    { label: "Contact", to: "/contact" },
    { label: "Privacy", to: "/privacy" },
    { label: "Terms", to: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-maroon-700 font-bold text-white">
                T
              </div>

              <span className="font-bold text-maroon-800">
                Innoject
              </span>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-500">
              Digital Platform for Showcasing Student Innovation.
            </p>

            <div className="mt-5 flex gap-2">
              <a
                href="#"
                aria-label="Community"
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-maroon-700"
              >
                <Globe size={18} />
              </a>

              <a
                href="#"
                aria-label="Updates"
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-maroon-700"
              >
                <MessageCircle size={18} />
              </a>

              <a
                href="#"
                aria-label="Network"
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-maroon-700"
              >
                <Users size={18} />
              </a>

              <a
                href="#"
                aria-label="Email"
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-maroon-700"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold text-gray-900">
                {heading}
              </h3>

              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-gray-500 hover:text-maroon-700"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Innoject. All rights reserved.
        </div>
      </div>
    </footer>
  );
}