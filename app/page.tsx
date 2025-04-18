import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, MapPin, Calendar, Briefcase } from "lucide-react"
import TechStack from "@/components/tech-stack"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900 dark:text-white">BW</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link
                href="#about"
                className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-500"
              >
                About
              </Link>
              <Link
                href="#experience"
                className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-500"
              >
                Experience
              </Link>
              <Link
                href="#skills"
                className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-500"
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-500"
              >
                Projects
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <div className="hidden md:flex space-x-2">
                <Link href="https://github.com/BaslaelWorkineh" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </Button>
                </Link>
                <Link
                  href="https://linkedin.com/in/baslael-workineh-ayele-131b11248/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="mailto:baslaworku@gmail.com">
                  <Button variant="ghost" size="icon" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-100 via-gray-50 to-gray-50 dark:from-emerald-900/20 dark:via-gray-900 dark:to-gray-950 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium mb-6">
                Full-Stack Developer & AI Engineer
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                Baslael <span className="text-emerald-600 dark:text-emerald-500">Workineh</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed">
                Building magical mobile experiences, scaling systems, and shipping reliable applications with a focus on
                AI integration.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Button asChild size="lg" className="rounded-full">
                  <a href="mailto:baslaworku@gmail.com" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" /> Contact Me
                  </a>
                </Button>
                <Button variant="outline" asChild size="lg" className="rounded-full">
                  <Link href="#projects" className="flex items-center gap-2">
                    View Projects <ChevronDown className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-emerald-600 dark:text-emerald-500" />
                  <span>Addis Ababa, Ethiopia</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-emerald-600 dark:text-emerald-500" />
                  <span>Available for new projects</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-700 transform rotate-6"></div>
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <img src="/images/profile.jpg" alt="Baslael Workineh" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="text-sm font-medium">Currently working at DamaDash Tech Solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <div className="sticky top-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">About Me</h2>
                <div className="h-1 w-20 bg-emerald-500 mb-8"></div>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Get to know more about my background, education, and what drives me as a developer.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Education</h3>
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-emerald-600 dark:text-emerald-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">B.Sc. Computer Science</p>
                        <p className="text-gray-600 dark:text-gray-400">Addis Ababa University, Ethiopia</p>
                        <p className="text-gray-600 dark:text-gray-400">2021 - 2025 (Expected)</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Connect</h3>
                    <div className="flex gap-3">
                      <Link href="https://github.com/BaslaelWorkineh" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon" aria-label="GitHub">
                          <Github className="h-5 w-5" />
                        </Button>
                      </Link>
                      <Link
                        href="https://linkedin.com/in/baslael-workineh-ayele-131b11248/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="icon" aria-label="LinkedIn">
                          <Linkedin className="h-5 w-5" />
                        </Button>
                      </Link>
                      <Link href="mailto:baslaworku@gmail.com">
                        <Button variant="outline" size="icon" aria-label="Email">
                          <Mail className="h-5 w-5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  I am a full-stack software engineer with a passion for building magical mobile experiences, scaling
                  systems, and shipping reliable applications. Currently pursuing my B.Sc. in Computer Science at Addis
                  Ababa University, expected to graduate in June 2025.
                </p>
                <br/>
                <p>
                  My expertise spans across AI development, machine learning engineering, and entrepreneurship. I'm
                  currently working with cutting-edge AI technologies at iCog-Labs and SingularityNet, while also
                  leading my own tech startup, DamaDash.
                </p>
                <br/>
                <h3>My Journey</h3>
                <p>
                  My journey in technology began with a fascination for how software could solve real-world problems.
                  This led me to pursue computer science and dive deep into both theoretical concepts and practical
                  application development. I've been particularly drawn to the intersection of mobile development and
                  artificial intelligence.
                </p>
                <br/>
                <p>
                  At iCog-Labs, I've had the opportunity to work on cutting-edge AI projects, contributing to teams like
                  ECAN and Pattern Miner. I also proposed  the Cognitive Synergy Engine, which received
                  recognition within the company.
                </p>
                <br/>
                <p>
                  My work with SingularityNet has allowed me to explore the frontiers of AI development, including
                  creating developer tools like the VS Code extension for the meTTa language that has gained significant
                  adoption despite the language being relatively new.
                </p>
                <br/>
                <h3>Entrepreneurial Spirit</h3>
                <p>
                  As the CEO and co-founder of DamaDash Tech Solutions, I'm leading a team to build innovative
                  peer-to-peer delivery solutions for the Ethiopian market. This entrepreneurial venture has taught me
                  valuable lessons about product development, team leadership, and business strategy.
                </p>
                <br/>
                <p>
                  When I'm not coding or building products, you can find me watching tech-related movies or playing the
                  guitar (though I admit I'm still learning 🙂).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <div className="sticky top-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Work Experience</h2>
                <div className="h-1 w-20 bg-emerald-500 mb-8"></div>
                <p className="text-gray-600 dark:text-gray-400">
                  My professional journey across different roles and organizations, showcasing my growth and expertise
                  in the tech industry.
                </p>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="space-y-12">
                <div className="relative pl-8 pb-12 border-l-2 border-gray-200 dark:border-gray-800">
                  <div className="absolute top-0 left-0 w-8 h-8 -translate-x-1/2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <div className="mb-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    Mar 2025 - Present
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">CEO & Co-Founder</h3>
                  <div className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
                    DamaDash Tech Solutions • Addis Ababa, Ethiopia
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 space-y-3">
                    <p>
                      Developed the mobile app for DamaDash, a peer-to-peer delivery platform, and currently leading a
                      team of four to establish it as the top tech solution in Ethiopia.
                    </p>
                    <p>
                      Overseeing the entire startup to ensure its success as a leading technology solutions company.
                    </p>
                  </div>
                </div>

                <div className="relative pl-8 pb-12 border-l-2 border-gray-200 dark:border-gray-800">
                  <div className="absolute top-0 left-0 w-8 h-8 -translate-x-1/2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <div className="mb-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    Apr 2024 - Present
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Machine Learning Engineer</h3>
                  <div className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
                    SingularityNet • Remote (Strawinskylaan, ZX Amsterdam)
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 space-y-3">
                    <p>Working for SingularityNet through iCog-Labs.</p>
                    <p>
                      Developed a VS Code Extension for a relatively new language called meTTa and got 250+ users for
                      the extension (a significant number considering the language is new).
                    </p>
                    <p>Performing regular tasks and contributing to ongoing projects.</p>
                  </div>
                </div>

                <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-800">
                  <div className="absolute top-0 left-0 w-8 h-8 -translate-x-1/2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <div className="mb-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    Apr 2024 - Present
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">AI Developer</h3>
                  <div className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
                    iCog-Labs • Addis Ababa, Ethiopia
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 space-y-3">
                    <p>
                      Contributing to different teams such as ECAN, Pattern Miner, and Cognitive Synergy Platform (my
                      proposed idea).
                    </p>
                    <p>
                      Received excellent evaluation results, with our team being the only one to achieve a 100%
                      evaluation score in the company.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <div className="sticky top-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Technical Skills</h2>
                <div className="h-1 w-20 bg-emerald-500 mb-8"></div>
                <p className="text-gray-600 dark:text-gray-400">
                  The technologies, languages, and tools I've mastered throughout my career as a developer and AI
                  engineer.
                </p>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-sm bg-emerald-500"></div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Programming Languages</h3>
                  </div>
                  <TechStack technologies={["Python", "JavaScript", "meTTa", "C++"]} />
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-sm bg-emerald-500"></div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Frameworks & Libraries</h3>
                  </div>
                  <TechStack technologies={["React", "React Native", "Express.js", "Tailwind CSS", "Next.js"]} />
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-sm bg-emerald-500"></div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Databases & Tools</h3>
                  </div>
                  <TechStack technologies={["MySQL", "PostgreSQL", "Prisma", "AWS", "Git", "Linux (Ubuntu/Arch)"]} />
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-sm bg-emerald-500"></div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">AI & Machine Learning</h3>
                  </div>
                  <TechStack
                    technologies={[
                      "Machine Learning",
                      "Deep Learning",
                      "Neural Networks",
                      "Attention Mechanisms",
                      "LLM Integration",
                      "AI Agent Development",
                    ]}
                  />
                </div>
              </div>

              <div className="mt-8 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-sm bg-emerald-500"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Other Skills</h3>
                </div>
                <TechStack
                  technologies={[
                    "Data Structures & Algorithms",
                    "System Design",
                    "MVP Development",
                    "Game Development",
                    "UI/UX Design",
                    "Project Management",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <div className="sticky top-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Featured Projects</h2>
                <div className="h-1 w-20 bg-emerald-500 mb-8"></div>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  A showcase of my most significant work, demonstrating my skills and problem-solving approach across
                  different domains.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link
                    href="https://github.com/BaslaelWorkineh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    View All Projects <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="space-y-16">
                <div className="group">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                      <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium mb-4">
                        Mobile App
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">DamaDash</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        A peer-to-peer delivery service mobile app that connects travelers with senders, optimizing
                        package delivery through existing travel routes.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {["React Native", "Node.js", "Express", "Postgres"].map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-800 dark:text-gray-200 text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <Button asChild>
                        <Link
                          href="https://damadash.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          View Project <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                    <div className="order-1 md:order-2">
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden group-hover:shadow-xl transition-all duration-300">
                        <img src="/images/damadash.png" alt="DamaDash" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="order-2">
                      <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium mb-4">
                        Web Application
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          GuzoSync: Smart Bus Tracking
                        </h3>
                        <span className="px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-xs font-medium rounded-md">
                          In Progress
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        An integrated bus route allocation, optimization, and tracking system with AI integration that
                        serves passengers, drivers, queue regulators, and control centers.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {["React", "Node.js", "PostgreSQL", "Machine Learning", "Google Maps API"].map(
                          (tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-800 dark:text-gray-200 text-sm"
                            >
                              {tech}
                            </span>
                          ),
                        )}
                      </div>
                      <Button asChild>
                        <Link
                          href="https://guzo-sync.vercel.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          View Project <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                    <div className="order-1">
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden group-hover:shadow-xl transition-all duration-300">
                        <img src="/images/guzosync.png" alt="GuzoSync" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                      <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium mb-4">
                        Web App
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">BeatBuddy X-treme</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        A simple beat visualizer made with lovable.ai in 1 hour. This is to show that I use LLM models well to build things for me faster. I can debug faster,
                        code faster, and deploy faster with the help of LLMs.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {["Next js",].map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-800 dark:text-gray-200 text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <Button asChild>
                        <Link
                          href="https://beat-buddy-groove.lovable.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          View Project <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                    <div className="order-1 md:order-2">
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden group-hover:shadow-xl transition-all duration-300">
                        <img src="/images/beat.png" alt="BeatBuddy X-treme" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src="/images/extention.png"
                        alt="meTTa VS Code Extension"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium mb-4">
                        Developer Tool
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">meTTa VS Code Extension</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Developed a VS Code extension for the meTTa language, gaining over 250 users despite the
                        language being relatively new.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {["TypeScript", "VS Code API", "meTTa"].map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200 text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="group bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src="/images/cognitive.png"
                        alt="Cognitive Synergy Engine"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium mb-4">
                        AI Platform
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        Cognitive Synergy Engine
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        A proposed and "to be implemented" platform at iCog-Labs that facilitates cognitive synergy between
                        different AI systems.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {["Python", "AI", "Neural Networks", "Machine Learning"].map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200 text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Baslael Workineh</h3>
              <p className="text-gray-400 mb-6">Full-Stack Developer & AI Engineer based in Addis Ababa, Ethiopia.</p>
              <div className="flex gap-4">
                <Link href="https://github.com/BaslaelWorkineh" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </Button>
                </Link>
                <Link
                  href="https://linkedin.com/in/baslael-workineh-ayele-131b11248/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="mailto:baslaworku@gmail.com">
                  <Button variant="ghost" size="icon" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#experience" className="text-gray-400 hover:text-white transition-colors">
                    Experience
                  </Link>
                </li>
                <li>
                  <Link href="#skills" className="text-gray-400 hover:text-white transition-colors">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-gray-400 hover:text-white transition-colors">
                    Projects
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-emerald-500 mt-0.5" />
                  <span className="text-gray-400">baslaworku@gmail.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-emerald-500 mt-0.5" />
                  <span className="text-gray-400">Addis Ababa, Ethiopia</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Baslael Workineh. All rights reserved.</p>
            <p className="mt-2">
              <Link
                href="https://mrbasketo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-500 hover:text-emerald-400"
              >
                mrbasketo.com
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
