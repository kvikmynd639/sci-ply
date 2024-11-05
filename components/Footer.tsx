import Link from "next/link";

export default function Footer() {
    return (
      <footer className="relative bg-[#229799] text-white text-center py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="irregular-shape">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1440 320"
              className="absolute top-0 left-0 z-0"
            >
              <path
                fill="#229799"
                d="M0,32L120,37.3C240,43,480,53,720,74.7C960,96,1200,128,1320,144L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
              ></path>
            </svg>
            <h2 className="text-4xl font-bold mb-4 relative z-10">Get in Touch</h2>
            <p className="relative z-10">info@sciply.com</p>
          </div>
        </div>
        <div className="flex justify-center space-x-4 mt-8 text-sm">
          <Link href="/">Privacy Policy</Link>
          <span>|</span>
          <Link href="/">Terms & Conditions</Link>
        </div>
      </footer>
    );
  }
  