import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    title: "9Ledger",
    description:
      "A compliance-first ERP platform that combines a production-grade business management system with an intelligent automation layer. Enabling Hungarian SMEs to automate up to 90% of routine accounting work while maintaining full human oversight and regulatory compliance.",
    repo: "https://github.com/onyx5z/9ledger",
  },
  {
    title: "MAFI",
    description:
      "A modular, extensible framework designed to generate high-quality financial intelligence by combining multiple specialized analytical algorithms into a unified decision support system. Built on a scalable architecture where each module performs a focused analytical task, while the core engine aggregates outputs into actionable insights.",
    repo: "https://github.com/onyx5z/MAFI",
  },
];

const skills = [
  "Accounting",
  "Financial Analysis",
  "Process Automation",
  "Workflow Optimization",
  "Systems Thinking",
];

const contacts = [
  {
    label: "Email",
    href: "mailto:z.burjan@outlook.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com/onyx5z",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/zburjan",
    icon: Linkedin,
  },
  {
    label: "X",
    href: "https://x.com/z_burjan",
    icon: Twitter,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <SiteHeader />

      <section className="container mx-auto flex flex-col items-center text-center py-24 sm:py-32">
        <p className="text-sm tracking-[0.12em] text-muted-foreground uppercase">
          Accountant &amp; Software Engineer
        </p>
        <h1 className="text-balance mt-5 max-w-4xl text-4xl leading-tight font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Taking legacy solutions to highly optimized, cost-effective, fully
          automated systems.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Delivering efficient solutions that optimize resources, saving
          companies both time and money.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <a href="#projects">
              View Projects
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="link" size="lg" className="px-0">
            <a href="#contact">Get in touch</a>
          </Button>
        </div>
      </section>

      <section id="about" className="container mx-auto scroll-mt-28 py-12">
        <div className="glass rounded-3xl p-7 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">About</h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Finance and Accounting bachelor student specializing in accounting,
            financial processes, and systems thinking. Strong focus on workflow
            optimization, automation concepts, and building scalable structures
            that improve operational efficiency.
          </p>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Combining business education with technical self-study to design
            future-ready financial and administrative systems.
          </p>
        </div>
      </section>

      <section id="projects" className="container mx-auto scroll-mt-28 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          <p className="mt-3 text-muted-foreground">
            Systems built to automate financial workflows and eliminate
            inefficiency.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="glass glass-hover h-full rounded-3xl border-white/55 py-0"
            >
              <CardHeader className="pt-6">
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription className="leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto gap-2 pb-6">
                <Button asChild size="sm">
                  <a href={project.repo} target="_blank" rel="noreferrer">
                    <Github className="h-4 w-4" />
                    Repository
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section id="skills" className="container mx-auto scroll-mt-28 py-12">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="glass rounded-full px-4 py-1.5 text-sm"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      <section id="contact" className="container mx-auto scroll-mt-28 py-12 pb-24">
        <div className="glass rounded-3xl p-7 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-3 text-muted-foreground">
            Open to opportunities in financial systems engineering, process
            automation, and accounting technology.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {contacts.map((contact) => (
              <Button key={contact.label} asChild variant="outline" className="glass">
                <a
                  href={contact.href}
                  target={contact.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={contact.href.startsWith("mailto:") ? undefined : "noreferrer"}
                >
                  <contact.icon className="h-4 w-4" />
                  {contact.label}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Zoltan Burjan
          </p>
          <div className="flex gap-4">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={contact.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <contact.icon className="h-4 w-4" />
                <span className="sr-only">{contact.label}</span>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
