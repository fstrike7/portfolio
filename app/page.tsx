import { Suspense } from "react"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import LoadingProjects from "@/components/loading-projects"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#121212] to-[#1e1e1e] z-0"></div>
        <div className="z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Faustino Beatrice</h1>
          <h2 className="text-xl md:text-2xl text-[#9c5de3] mb-8">Software Developer</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Desarrollador de Software que disfruta transformando ideas en código. ✌️
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="https://github.com/fstrike7"
              target="_blank"
              className="bg-[#9c5de3] hover:bg-[#8a4fd0] text-white px-6 py-3 rounded-md flex items-center transition-colors"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/faustino-beatrice/"
              target="_blank"
              className="bg-[#2d2d2d] hover:bg-[#3a3a3a] text-white px-6 py-3 rounded-md flex items-center transition-colors"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      <section id="about" className="py-20 bg-[#1e1e1e]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Acerca de <span className="text-[#9c5de3]">Mí</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-[#9c5de3]">
                <Image
                  src="/placeholder.jpg?height=256&width=256"
                  alt="Faustino Beatrice"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold mb-4">Desarrollador Full Stack</h3>
              <p className="text-gray-300 mb-6">
                Soy técnico en programación y actualmente me estoy certificando en Data Science.
                (ITBA). Me especializo en desarrollo web Backend con experiencia en tecnologías como Django, Spring y
                bases de datos SQL y NoSQL.
              </p>

              <h4 className="text-xl font-semibold mb-3 text-[#9c5de3]">Experiencia Laboral</h4>
              <div className="space-y-4 mb-6">
                <div>
                  <h5 className="font-medium">Software Developer en Despegar</h5>
                  <p className="text-gray-400">Agosto 2022 - Noviembre 2024</p>
                  <p className="text-gray-300">
                    Desarrollo de aplicaciones web utilizando Spring Framework, integración continua y entrega continua (CI/CD) y AWS.
                  </p>
                </div>
                <div>
                  <h5 className="font-medium">Jr. Data Engineer</h5>
                  <p className="text-gray-400">Febrero 2022 - Agosto 2022</p>
                  <p className="text-gray-300">
                    Desarrollo de scripts, web scraping y ETL usando Python y sus librerías correspondientes.
                  </p>
                </div>
              </div>

              <h4 className="text-xl font-semibold mb-3 text-[#9c5de3]">Educación</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium">Tecnicatura superior en programación</h5>
                  <p className="text-gray-400">Teclab - 2021-2022</p>
                </div>
                <div>
                  <h5 className="font-medium">Certificacion avanzada en Data Science</h5>
                  <p className="text-gray-400">ITBA - 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Mis <span className="text-[#9c5de3]">Proyectos</span>
          </h2>
          <Suspense fallback={<LoadingProjects />}>
            <ProjectsSection username="fstrike7" />
          </Suspense>
        </div>
      </section>

      <section id="skills" className="py-20 bg-[#1e1e1e]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Mis <span className="text-[#9c5de3]">Habilidades</span>
          </h2>
          <SkillsSection />
        </div>
      </section>

      <section id="contact" className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-[#9c5de3]">Contacto</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col space-y-6">
              <a
                href="mailto:cuentadefaustinob@gmail.com"
                className="flex items-center p-4 bg-[#2d2d2d] rounded-lg hover:bg-[#3a3a3a] transition-colors"
              >
                <Mail className="h-6 w-6 mr-4 text-[#9c5de3]" />
                <span>cuentadefaustinob@gmail.com</span>
              </a>
              <a
                href="https://github.com/fstrike7"
                target="_blank"
                className="flex items-center p-4 bg-[#2d2d2d] rounded-lg hover:bg-[#3a3a3a] transition-colors"
                rel="noreferrer"
              >
                <Github className="h-6 w-6 mr-4 text-[#9c5de3]" />
                <span>github.com/fstrike7</span>
              </a>
              <a
                href="https://www.linkedin.com/in/faustino-beatrice/"
                target="_blank"
                className="flex items-center p-4 bg-[#2d2d2d] rounded-lg hover:bg-[#3a3a3a] transition-colors"
                rel="noreferrer"
              >
                <Linkedin className="h-6 w-6 mr-4 text-[#9c5de3]" />
                <span>linkedin.com/in/faustino-beatrice</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-[#0a0a0a] text-center">
        <div className="container mx-auto px-4"></div>
      </footer>
    </main>
  )
}

