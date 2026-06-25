import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { MagneticButton } from '@/components/ui/MagneticButton';

const CONTACT_EMAIL = 'Abdullahakinkunmi26@gmail.com';
const WHATSAPP_NUMBER = '2347039705647';

const channels = [
  { icon: Mail, label: 'Email', value: 'Abdullahakinkunmi26@gmail.com', href: `mailto:${CONTACT_EMAIL}` },
  { icon: Linkedin, label: 'LinkedIn', value: 'abdullahi-sheriff', href: 'https://www.linkedin.com/in/abdullahi-sheriff-2669b03a8' },
  { icon: Github, label: 'GitHub', value: 'abdullah12-tech', href: 'https://github.com/abdullah12-tech' },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Message directly', href: `https://wa.me/${WHATSAPP_NUMBER}` },
];

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    const subject = encodeURIComponent(form.subject || `Portfolio inquiry from ${form.name}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          command="./contact.sh --reach-out"
          title="Let's build something worth shipping"
          description="Open to remote roles, freelance engagements, and ambitious products. I usually reply within a day."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 max-w-4xl mx-auto">
          <div className="space-y-3">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 glass rounded-xl p-4 hover:border-brand-violet/40 transition-colors group"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-violet/10 text-brand-violet-light group-hover:bg-brand-violet/20 transition-colors">
                  <c.icon size={17} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-text-muted">{c.label}</p>
                  <p className="text-sm font-medium text-text-primary truncate">{c.value}</p>
                </div>
              </a>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <GlassCard className="p-7">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-xs font-mono text-text-muted">Name</label>
                    <input
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="mt-1.5 w-full rounded-lg veil-2 border hairline-strong px-3.5 py-2.5 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-brand-violet/50 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-xs font-mono text-text-muted">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="mt-1.5 w-full rounded-lg veil-2 border hairline-strong px-3.5 py-2.5 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-brand-violet/50 transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="text-xs font-mono text-text-muted">Subject</label>
                  <input
                    id="subject"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="mt-1.5 w-full rounded-lg veil-2 border hairline-strong px-3.5 py-2.5 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-brand-violet/50 transition-colors"
                    placeholder="Role, project, or opportunity"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-xs font-mono text-text-muted">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-1.5 w-full rounded-lg veil-2 border hairline-strong px-3.5 py-2.5 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-brand-violet/50 transition-colors resize-none"
                    placeholder="Tell me a bit about what you're building..."
                  />
                </div>
                <MagneticButton type="submit" className="w-full justify-center" icon={sent ? <CheckCircle2 size={16} /> : <Send size={16} />}>
                  {sent ? 'Opening your email client…' : 'Send message'}
                </MagneticButton>
                <p className="text-xs text-text-muted text-center">
                  Opens your email client with this message pre-filled, addressed to me directly.
                </p>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
