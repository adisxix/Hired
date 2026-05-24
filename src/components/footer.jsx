import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  const socials = [
    {
      label: "Twitter / X",
      href: "https://twitter.com",
      icon: (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      icon: (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://instagram.com",
      icon: (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
    {
      label: "Facebook",
      href: "https://facebook.com",
      icon: (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: "https://youtube.com",
      icon: (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      href: "https://github.com",
      icon: (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
    },
  ];



  const contactInfo = [
    {
      icon: (
        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      text: "support@hired.com",
      href: "mailto:support@hired.com",
    },
    {
      icon: (
        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
      text: "+91 8829018918",
      href: "tel:+918829018918",
    },
    {
      icon: (
        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      text: "Greater Noida, Uttar Pradesh, India",
      href: "https://www.google.com/maps/place/Greater+Noida,+Uttar+Pradesh,+India"
    },
  ];

  

  return (
    <footer className="relative overflow-hidden border-t border-blue-600/10 bg-[#020408] font-mono backdrop-blur-lg">

      <div className="absolute top-0 left-[5%] right-[5%] h-px pointer-events-none bg-linear-to-r from-transparent via-blue-500/60 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-50 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(30,100,255,0.06)_0%,transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 sm:pt-16 lg:px-8">

        
        <div className="mb-12 grid grid-cols-1 gap-12 border-b border-blue-600/8 pb-12 md:grid-cols-2">

          
          <div className="max-w-xl">
            <Link to="/" className="flex items-center gap-3 mb-4 no-underline">
              <div className="w-11 h-11 border border-blue-500/50 rounded-lg bg-white flex items-center justify-center overflow-hidden shrink-0">
                <img src="/hiredlogo.svg" alt="Hired Logo" className="w-3/4 h-3/4 object-contain block" />
              </div>
              <span className="text-2xl font-extrabold text-white tracking-wider">Hired</span>
            </Link>

            <p className="mb-7 max-w-xl text-sm leading-relaxed text-white/40">
              The next-generation job portal connecting top talent with industry-leading companies. Whether you're looking to hire or get hired, we've got you covered with our seamless and efficient platform.
            </p>

            
            <div className="flex flex-col gap-3">
              {contactInfo.map((c) => (
                <a key={c.text} href={c.href} className="flex items-center gap-3 text-sm text-white/40 no-underline transition-colors hover:text-blue-400">
                  <span className="text-blue-500/70 shrink-0">{c.icon}</span>
                  {c.text}
                </a>
              ))}
            </div>
          </div>

          
          <div className="flex flex-col justify-center">
            <h3 className="mb-5 text-xl font-extrabold tracking-tight text-white">Get top jobs in your inbox</h3>

            <div className="flex flex-col overflow-hidden rounded-lg sm:flex-row">
              <input type="email" placeholder="your@email.com" className="min-w-0 flex-1 border border-blue-600/20 bg-blue-900/5 px-4 py-3 text-sm font-mono text-white outline-none sm:border-r-0" />
              <button className="border border-blue-600 bg-blue-600 px-5 py-3 text-xs font-mono uppercase tracking-widest text-white hover:bg-blue-500">Subscribe →</button>
            </div>

            <div className="mt-7">
              <p className="text-xs tracking-widest text-white mb-3 uppercase">Follow us</p>
              <div className="flex gap-2 flex-wrap">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label} className="flex h-9 w-9 items-center justify-center border border-blue-600/20 text-white/35 no-underline transition-colors hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        


        <div className="flex flex-wrap items-center justify-center gap-4 pb-8">
          <p className="text-sm text-blue-500 m-0 text-center">© {year} hired, Inc. All rights reserved. Hired is not responsible for the content of external job postings.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;