import { SEO } from '@/components/seo/SEO';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Experience } from '@/sections/Experience';
import { Skills } from '@/sections/Skills';
import { Projects } from '@/sections/Projects';
import { Achievements } from '@/sections/Achievements';
import { Testimonials } from '@/sections/Testimonials';
import { BlogPreview } from '@/sections/BlogPreview';
import { Contact } from '@/sections/Contact';

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    name: 'Abdullah Akinkunmi Sheriff',
    alternateName: ['Codewithhayee', 'Abdullah Sheriff'],
    jobTitle: 'Frontend Developer & Full Stack Software Engineer',
    url: 'https://codewithhayee.dev',
    sameAs: [
      'https://github.com/abdullah12-tech',
      'https://www.linkedin.com/in/abdullahi-sheriff-2669b03a8',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ibadan',
      addressCountry: 'Nigeria',
    },
    knowsAbout: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'JavaScript', 'Frontend Development'],
  },
};

export function Home() {
  return (
    <>
      <SEO
        title="Abdullah Akinkunmi Sheriff | Frontend Developer & Software Engineer Nigeria | Codewithhayee"
        description="Abdullah Akinkunmi Sheriff (Codewithhayee) — Frontend Developer & Full Stack Software Engineer in Nigeria. React, TypeScript, Node.js. Building premium web experiences with real business impact."
        path="/"
        jsonLd={personJsonLd}
      />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Testimonials />
      <BlogPreview />
      <Contact />
    </>
  );
}
