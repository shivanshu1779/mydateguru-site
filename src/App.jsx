import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Youtube, Github, Download, ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";

const PROFILE = {
  name: "Shivanshu Sharma",
  domain: "Mydataguru.com",
  tagline: "Data Engineering • Analytics • Cloud • DevOps",
  email: "shivanshu.mps@outlook.com",
  phone: "+1 (204) 881-3033",
  location: "Winnipeg, Canada",
  linkedin: "https://www.linkedin.com/in/shivanshu-sharma-",
  github: "https://github.com/",
  youtube: "https://www.youtube.com/@MyDataGuru",
  resumeUrl: "/resume/Shivanshu_Sharma_Data_Engineer.pdf",
};

const SKILLS = [
  { title: "Data Engineering", items: ["SQL (Advanced)", "Data Modeling (3NF/Star)", "ETL/ELT Pipelines", "dbt (foundational)", "Airflow (basics)", "Snowflake", "Azure Data Factory", "Azure Databricks (PySpark)", "Azure Data Lake"] },
  { title: "Programming & DevOps", items: ["Python", "Java", "Bash", "Git/GitHub", "CI/CD (Jenkins)", "Docker (basics)", "REST APIs"] },
  { title: "Analytics & BI", items: ["Power BI", "Tableau (basics)", "A/B Analysis", "Forecasting (WFM)", "KPI Dashboards"] },
  { title: "QA & Performance", items: ["Selenium", "Postman", "JMeter", "LoadRunner", "Test Strategy", "SDLC/STLC"] },
];

const PROJECTS = [
  { title: "Retail Sales & Customer Behavior Analysis", summary: "End-to-end pipeline: ingest CSV & API → clean in Databricks → store in Data Lake → model in Snowflake → visualize in Power BI.", tags: ["ADF", "Databricks", "Snowflake", "Power BI"], link: "#" },
  { title: "Contact Center Analytics (Intouch CX)", summary: "AHT, CSAT, DSAT, occupancy, productive hours, and call-volume predictions to support staffing decisions.", tags: ["WFM", "Forecasting", "Python", "SQL"], link: "#" },
  { title: "Competitor Product Pricing Analysis", summary: "Price-scrape & compare across retailers; normalized model, KPI tracking, and alerting for price deltas.", tags: ["Python", "ETL", "SQL"], link: "#" },
];

const YT_VIDEOS = [
  { id: "dQw4w9WgXcQ", title: "Build an Azure ADF to Snowflake Pipeline" },
  { id: "XGSy3_Czz8k", title: "Data Modeling 101: Star vs 3NF" },
  { id: "kXYiU_JCYtU", title: "Power BI: From Raw to Executive Dashboard" },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/40 text-foreground">
      <header className="sticky top-0 z-50 backdrop-blur border-b border-border/40 bg-white/60">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-primary/10 grid place-items-center font-bold">MDG</div>
            <div>
              <div className="text-sm uppercase tracking-widest text-muted-foreground">{PROFILE.domain} by</div>
              <div className="font-semibold">{PROFILE.name}</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-4 text-sm">
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#youtube" className="hover:underline">YouTube</a>
            <a href="#resume" className="hover:underline">Resume</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" variant="outline">
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin className="w-4 h-4 mr-1"/>LinkedIn</a>
            </Button>
            <Button asChild size="sm">
              <a href="#contact">Collaborate <ArrowRight className="w-4 h-4 ml-1"/></a>
            </Button>
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-sm uppercase tracking-widest text-muted-foreground">{PROFILE.domain}</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-2">
            Data Engineering Portfolio <span className="text-primary">& Collaboration Hub</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
            I architect reliable data pipelines and analytics that drive decisions. Azure, Databricks, Snowflake, and Power BI are my toolkit; clean models and actionable dashboards are my outcomes.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <a href="#projects">Explore Projects</a>
            </Button>
            <Button asChild variant="outline">
              <a href="#resume"><Download className="w-4 h-4 mr-2"/>Download Resume</a>
            </Button>
            <Button asChild variant="secondary">
              <a href={PROFILE.youtube} target="_blank" rel="noreferrer"><Youtube className="w-4 h-4 mr-2"/>YouTube</a>
            </Button>
          </div>
          <ul className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            {["Azure Data Factory","Databricks (PySpark)","Snowflake","SQL / Python","Data Modeling","Power BI Dashboards","CI/CD (Jenkins)","WFM Forecasting"].map((cap) => (
              <li key={cap} className="flex items-center gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4"/>{cap}</li>
            ))}
          </ul>
        </motion.div>
      </section>

      <section id="skills" className="max-w-6xl mx-auto px-4 pb-6">
        <h2 className="text-2xl font-bold mb-4">Core Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILLS.map((group) => (
            <Card key={group.title} className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">{group.title}</CardTitle>
                <CardDescription>Tools & focus areas</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {group.items.map((item) => (
                    <li key={item} className="list-disc list-inside">{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-4">Projects & Case Studies</h2>
        <p className="text-muted-foreground mb-6 max-w-3xl">
          I partner with teams to design scalable data platforms and clear analytics. Below are representative projects—happy to walk you through architectures, code, and results.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {PROJECTS.map((p) => (
            <Card key={p.title} className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">{p.title}</CardTitle>
                <CardDescription>{p.tags.join(" • ")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{p.summary}</p>
                <div className="mt-4">
                  <Button asChild variant="secondary" size="sm">
                    <a href={p.link} target="_blank" rel="noreferrer">View Details <ExternalLink className="w-4 h-4 ml-1"/></a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="rounded-2xl mt-6 border border-dashed">
          <CardHeader>
            <CardTitle>Open to Collaboration</CardTitle>
            <CardDescription>Consulting • Freelance • Mentorship • Content Partnerships</CardDescription>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm">
            If you have a data problem worth solving—pipeline modernization, analytics dashboards, cost-optimized Snowflake, or contact-center forecasting—let’s team up. I contribute hands-on engineering, clear documentation, and pragmatic delivery.
          </CardContent>
        </Card>
      </section>

      <section id="youtube" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-4">YouTube Tutorials</h2>
        <p className="text-muted-foreground mb-6 max-w-3xl">A selection of educational videos. Swap the IDs in code with your actual uploads.</p>
        <div className="grid md:grid-cols-3 gap-4">
          {YT_VIDEOS.map((v) => (
            <Card key={v.id} className="rounded-2xl overflow-hidden">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <CardHeader>
                <CardTitle className="text-base">{v.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section id="resume" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-4">Resume</h2>
        <div className="grid md:grid-cols-2 gap-4 items-start">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Data Engineering Focus</CardTitle>
              <CardDescription>Snapshot of strengths</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Architected ADF → Databricks → Snowflake pipelines with monitoring and cost controls.</li>
                <li>Modeled data for BI with conformed dimensions; delivered KPI dashboards (Power BI).</li>
                <li>Built forecasting logic (contact center) to inform hiring and staffing plans.</li>
                <li>Hands-on with CI/CD, code reviews, and documentation for reproducibility.</li>
              </ul>
              <div className="mt-4 flex gap-2">
                <Button asChild><a href={PROFILE.resumeUrl} target="_blank" rel="noreferrer"><Download className="w-4 h-4 mr-2"/>Download PDF</a></Button>
                <Button asChild variant="outline"><a href="#contact">Request Full CV</a></Button>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Certifications & Education</CardTitle>
              <CardDescription>Selected highlights</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Microsoft Certified: Azure Administrator (AZ-104)</li>
                <li>Microsoft Certified: DevOps Engineer Expert</li>
                <li>ISTQB Foundation Level (CTFL)</li>
                <li>Post-Degree Diploma: Predictive Analytics — University of Winnipeg</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-4">Contact & Collaboration</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Let’s build something</CardTitle>
              <CardDescription>Brief your project—I'll reply with a plan</CardDescription>
            </CardHeader>
            <CardContent>
              <form action={`mailto:${PROFILE.email}`} method="post" encType="text/plain" className="space-y-3">
                <Input name="name" placeholder="Your name" required />
                <Input type="email" name="email" placeholder="Your email" required />
                <Input name="subject" placeholder="Project topic" />
                <Textarea name="message" placeholder="Tell me about your data challenge: goals, stack, timelines" rows={5} />
                <div className="flex gap-2">
                  <Button type="submit">Send</Button>
                  <Button asChild variant="outline"><a href={`mailto:${PROFILE.email}`}>Email Directly</a></Button>
                </div>
              </form>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Direct</CardTitle>
              <CardDescription>Preferred channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2 hover:underline"><Mail className="w-4 h-4"/>{PROFILE.email}</a>
              <a href={`tel:${PROFILE.phone}`} className="flex items-center gap-2 hover:underline"><Phone className="w-4 h-4"/>{PROFILE.phone}</a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:underline"><Linkedin className="w-4 h-4"/>LinkedIn</a>
              <a href={PROFILE.youtube} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:underline"><Youtube className="w-4 h-4"/>YouTube</a>
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:underline"><Github className="w-4 h-4"/>GitHub</a>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border/40 py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>
            © {new Date().getFullYear()} {PROFILE.domain} • Built by {PROFILE.name}
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
