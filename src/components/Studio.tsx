import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    title: 'dot.',
    category: 'Site expérimental - Interaction',
    year: '2026',
    image: 'https://images.pexels.com/photos/15302913/pexels-photo-15302913.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    description: 'Une expérience éditoriale minimaliste, pensée autour du calme et de la connexion.',
    href: 'https://dotdesign.kusooo.fr',
  },
  {
    title: 'Evolve Intelligence',
    category: 'Page de conversion - IA',
    year: '2026',
    image: 'https://images.pexels.com/photos/17483848/pexels-photo-17483848.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    description: "Une page de conversion technologique immersive pour une plateforme d'intelligence modulaire.",
    href: 'https://beyondpixel.kusooo.fr',
  },
  {
    title: 'KUSOOO',
    category: 'Hero expérimental - Motion',
    year: '2026',
    image: 'https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    description: "Un hero guidé par le scroll, aux typographies superposées et à l'énergie rétro-futuriste.",
    href: 'https://evolveintelligence.kusooo.fr',
  },
];

export function Studio() {
  return (
    <section id="studio" className="relative z-10 w-full overflow-hidden px-6 py-32 sm:py-40">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="reveal">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">Kusooo - Projets sélectionnés</p>
            <h2 className="text-4xl font-normal leading-[1.0] text-foreground sm:text-6xl" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Des interfaces qui<br /><em className="not-italic text-muted-foreground">restent en tête.</em>
            </h2>
          </div>
          <p className="reveal max-w-xs text-sm text-muted-foreground">Chaque aperçu ouvre le site complet dans un nouvel onglet.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <a key={project.title} href={project.href} target="_blank" rel="noreferrer" className={`reveal group block ${i % 2 === 1 ? 'md:mt-24' : ''}`} aria-label={`Ouvrir le projet ${project.title}`}>
              <div className="relative overflow-hidden rounded-2xl bg-secondary/40">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={project.image} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover opacity-80 transition duration-500 motion-reduce:transition-none group-hover:scale-[1.03] group-hover:opacity-100" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute right-5 top-5 rounded-full bg-black/25 p-2.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"><ArrowUpRight size={18} className="text-foreground" /></div>
              </div>
              <div className="mt-6 flex items-start justify-between gap-4">
                <div><h3 className="text-2xl font-normal text-foreground sm:text-3xl" style={{ fontFamily: "'Instrument Serif', serif" }}>{project.title}</h3><p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{project.category}</p></div>
                <span className="whitespace-nowrap text-sm text-muted-foreground">{project.year}</span>
              </div>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}