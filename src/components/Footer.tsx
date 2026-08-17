import { ArrowUp } from 'lucide-react';
import { TailwindCssBackgroundSnippet } from '@/components/ui/tailwind-css-background-snippet';

const FOOTER_LINKS = [
  {
    heading: 'Studio',
    links: ['Travaux choisis', 'Processus', 'Approche', 'Collaborations'],
  },
  {
    heading: 'Journal',
    links: ['Essais', 'Notes de terrain', 'Processus', 'Archives'],
  },
  {
    heading: 'Contact',
    links: ['Instagram', 'Are.na', 'LinkedIn', 'Newsletter'],
  },
];

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden px-6 pt-24 pb-12 border-t border-border bg-background">
      {/* Background gradient */}
      <TailwindCssBackgroundSnippet />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top - Large statement */}
        <div className="reveal pb-20">
          <p
            className="text-5xl sm:text-7xl md:text-8xl font-normal text-foreground leading-[0.95]"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Kusooo<sup className="text-xl">&reg;</sup>
          </p>
          <p className="text-muted-foreground text-sm mt-6 max-w-md">
            Un studio discret qui conçoit des expériences numériques réfléchies
            pour les esprits profonds, les créateurs audacieux et les esprits
            rebelles.
          </p>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-16">
          {FOOTER_LINKS.map((col) => (
            <div key={col.heading} className="reveal">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">
                {col.heading}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="reveal">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">
              Studio
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Reykjavik, IS
              <br />
              Lisbon, PT
            </p>
            <a
              href="mailto:hello@kusooo.studio"
              className="text-sm text-foreground/80 hover:text-foreground transition-colors block mt-3"
            >
              hello@kusooo.studio
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 Kusooo. Tous droits réservés.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Retour en haut
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}