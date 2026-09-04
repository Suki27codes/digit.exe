import { ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="bg-beige-100">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
        
        <div>
          <span className="inline-flex rounded-full bg-maroon-100 px-3 py-1 text-sm font-semibold text-maroon-800">
            Student Innovation Platform
          </span>

          <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Discover the ideas shaping Papua New Guinea's future.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Innoject connects student innovators, organizations,
            mentors, and communities through one platform for
            discovering and showcasing innovation.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/explore">
              <Button size="lg" className="w-full sm:w-auto">
                Explore Projects
                <ArrowRight size={18} />
              </Button>
            </Link>

            <Link to="/signup">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                Get Started
              </Button>
            </Link>
          </div>

          <div className="mt-8">
            <Link
              to="/explore"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-maroon-700"
            >
              <Search size={17} />
              Search student innovations
            </Link>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="relative mx-auto max-w-lg">
            <div className="absolute -inset-4 rounded-3xl bg-maroon-100 blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-maroon-200 bg-white p-6 shadow-card-hover">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-maroon-700">
                  Featured Innovation
                </span>

                <span className="rounded-full bg-success-100 px-3 py-1 text-xs font-semibold text-success-700">
                  Approved
                </span>
              </div>

              <div className="mt-6 flex h-56 items-center justify-center rounded-xl bg-beige-100 text-maroon-700">
                <span className="text-sm font-medium">
                  Student Innovation
                </span>
              </div>

              <h2 className="mt-5 text-xl font-bold text-gray-900">
                Ideas. Innovation. Impact.
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Explore projects created by students across
                different fields and institutions.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}