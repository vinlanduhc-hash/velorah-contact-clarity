import { useState, type FormEvent } from 'react';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import { InteractiveGridPattern } from '@/components/ui/interactive-grid-pattern';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setStatus('submitting');
    try {
      const { createClient } = await import('@supabase/supabase-js');
      const supabase = createClient(import.meta.env['VITE_SUPABASE_URL'] as string, import.meta.env['VITE_SUPABASE_ANON_KEY'] as string);
      const { error } = await supabase
        .from('contact_messages')
        .insert({ name: name.trim(), email: email.trim(), message: message.trim() });
      if (error) throw error;
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative z-10 w-full overflow-hidden px-6 py-32 sm:py-40">
      <InteractiveGridPattern
        className="pointer-events-none absolute inset-0 z-0 h-full w-full [mask-image:radial-gradient(60%_60%_at_50%_50%,white,transparent)] opacity-40"
        squaresClassName="pointer-events-auto stroke-foreground/10 hover:fill-foreground/10"
        width={48}
        height={48}
        squares={[40, 30]}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left - Statement */}
          <div className="lg:col-span-5 reveal">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Me contacter
            </p>
            <h2
              className="text-4xl sm:text-6xl md:text-7xl font-normal text-foreground leading-[1.0]"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Construisons
              <br />
              quelque chose
              <br />
              <em className="not-italic text-muted-foreground">qui mérite le silence.</em>
            </h2>

            <div className="mt-12 space-y-3 text-sm">
              <p className="text-muted-foreground">
                Studio - Reykjavik &amp; Lisbonne
              </p>
              <a
                href="mailto:hello@kusooo.studio"
                className="block text-foreground hover:text-muted-foreground transition-colors"
              >
                hello@kusooo.studio
              </a>
              <p className="text-muted-foreground">Disponible pour une sélection de projets en 2026.</p>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-7 reveal">
            <form
              onSubmit={handleSubmit}
              className="liquid-glass rounded-3xl p-8 sm:p-10 space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium uppercase tracking-[0.2em] text-foreground/80"
                  >
                    Nom
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Votre nom"
                    autoComplete="name"
                    className="w-full rounded-none border-b-2 border-foreground/25 bg-transparent py-3 text-base text-foreground outline-none transition-colors placeholder:text-foreground/40 hover:border-foreground/40 focus:border-foreground focus-visible:ring-0"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium uppercase tracking-[0.2em] text-foreground/80"
                  >
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="vous@studio.com"
                    autoComplete="email"
                    className="w-full rounded-none border-b-2 border-foreground/25 bg-transparent py-3 text-base text-foreground outline-none transition-colors placeholder:text-foreground/40 hover:border-foreground/40 focus:border-foreground focus-visible:ring-0"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-xs font-medium uppercase tracking-[0.2em] text-foreground/80"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  placeholder="Parlez-nous du projet que vous avez en tête..."
                  className="w-full resize-none rounded-none border-b-2 border-foreground/25 bg-transparent py-3 text-base leading-relaxed text-foreground outline-none transition-colors placeholder:text-foreground/40 hover:border-foreground/40 focus:border-foreground focus-visible:ring-0"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                <p className="text-xs text-foreground/70">
                  Nous répondons sous deux jours ouvrés.
                </p>
                <button
                  type="submit"
                  disabled={status === 'submitting' || status === 'success'}
                  className="liquid-glass inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium text-foreground transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/60 disabled:opacity-60 disabled:hover:scale-100"
                >
                  {status === 'submitting' && (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Envoi en cours
                    </>
                  )}
                  {status === 'success' && (
                    <>
                      <Check size={16} />
                      Message envoyé
                    </>
                  )}
                  {(status === 'idle' || status === 'error') && (
                    <>
                      Envoyer le message
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </div>

              {status === 'success' && (
                <p role="status" className="animate-fade-rise pt-2 text-sm font-medium text-foreground">
                  Merci - votre message nous est bien parvenu. Nous vous répondrons très vite.
                </p>
              )}
              {status === 'error' && (
                <p role="alert" className="pt-2 text-sm font-medium text-destructive">
                  Une erreur s’est produite lors de l’envoi. Réessayez ou écrivez-nous directement à hello@kusooo.studio.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}