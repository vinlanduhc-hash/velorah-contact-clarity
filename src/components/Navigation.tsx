import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [{ label: 'Accueil', href: '#home' }, { label: 'Projets', href: '#studio' }, { label: 'À propos', href: '#about' }, { label: 'Journal', href: '#journal' }, { label: 'Contact', href: '#contact' }];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll); }, []);
  return <nav className="fixed left-0 right-0 top-0 z-50 px-6 py-4 sm:px-8"><div className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-6 py-3 transition-all duration-500 ${scrolled ? 'liquid-glass' : 'bg-transparent'}`}>
    <a href="#home" className="select-none text-2xl tracking-tight text-foreground sm:text-3xl" style={{ fontFamily: "'Instrument Serif', serif" }}>Kusooo<sup className="text-xs">&reg;</sup></a>
    <ul className="hidden items-center gap-8 md:flex">{NAV_LINKS.map((link) => <li key={link.label}><a href={link.href} className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground">{link.label}</a></li>)}</ul>
    <a href="#contact" className="liquid-glass hidden cursor-pointer rounded-full px-6 py-2.5 text-sm text-foreground transition-transform hover:scale-[1.03] md:block">Me contacter</a>
    <button onClick={() => setOpen((value) => !value)} className="p-2 text-foreground md:hidden" aria-label="Ouvrir le menu">{open ? <X size={22} /> : <Menu size={22} />}</button>
  </div>{open && <div className="liquid-glass animate-fade-rise mx-auto mt-3 max-w-7xl rounded-3xl px-6 py-6 md:hidden"><ul className="flex flex-col gap-4">{NAV_LINKS.map((link) => <li key={link.label}><a href={link.href} onClick={() => setOpen(false)} className="block text-base text-muted-foreground transition-colors hover:text-foreground">{link.label}</a></li>)}<li><a href="#contact" onClick={() => setOpen(false)} className="liquid-glass mt-2 block rounded-full px-6 py-3 text-center text-sm text-foreground">Me contacter</a></li></ul></div>}</nav>;
}