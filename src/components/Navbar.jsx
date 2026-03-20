const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/65 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <a href="#home" className="font-display text-lg font-bold tracking-[0.2em] text-white">
          ID
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition hover:text-electric"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <nav className="flex gap-4 overflow-x-auto px-6 pb-4 text-sm text-slate-300 md:hidden sm:px-8 lg:px-10">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="whitespace-nowrap rounded-full border border-white/10 px-4 py-2 transition hover:border-electric/50 hover:text-electric"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
