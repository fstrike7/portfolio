import type React from "react"
import { Code, Database, Globe, Layout, Server, Terminal, Smartphone, Cloud, GitBranch, Cpu } from "lucide-react"

interface Skill {
  name: string
  icon: React.ReactNode
  items: string[]
}

export default function SkillsSection() {
  const skills: Skill[] = [
    {
      name: "Frontend",
      icon: <Layout className="h-8 w-8 text-[#9c5de3]" />,
      items: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React",
        "Bootstrap",
      ],
    },
    {
      name: "Backend",
      icon: <Server className="h-8 w-8 text-[#9c5de3]" />,
      items: ["Node.js", "Express", "Java", "Spring Boot", "Python", "Django"],
    },
    {
      name: "Bases de Datos",
      icon: <Database className="h-8 w-8 text-[#9c5de3]" />,
      items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "SQLite"],
    },
    {
      name: "DevOps",
      icon: <Cloud className="h-8 w-8 text-[#9c5de3]" />,
      items: ["Docker", "AWS", "CI/CD", "Jenkins", "GitHub Actions"],
    },
    {
      name: "Control de Versiones",
      icon: <GitBranch className="h-8 w-8 text-[#9c5de3]" />,
      items: ["Git", "GitHub"],
    },
    {
      name: "Lenguajes de Programación",
      icon: <Code className="h-8 w-8 text-[#9c5de3]" />,
      items: ["JavaScript", "TypeScript", "Python", "Java", "C#"],
    },
    {
      name: "Herramientas",
      icon: <Terminal className="h-8 w-8 text-[#9c5de3]" />,
      items: ["VS Code", "IntelliJ IDEA", "Postman", "Jira", "Trello"],
    },
    {
      name: "Web",
      icon: <Globe className="h-8 w-8 text-[#9c5de3]" />,
      items: ["REST API", "WebSockets", "OAuth", "JWT", "SOAP", "Microservicios"],
    },
    {
      name: "Otros",
      icon: <Cpu className="h-8 w-8 text-[#9c5de3]" />,
      items: ["TDD", "Design Patterns", "Microservices"],
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="bg-[#2d2d2d] p-6 rounded-lg border border-[#3a3a3a] hover:border-[#9c5de3] transition-all"
        >
          <div className="flex items-center mb-4">
            {skill.icon}
            <h3 className="text-xl font-semibold ml-3">{skill.name}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skill.items.map((item, idx) => (
              <span key={idx} className="px-3 py-1 bg-[#1e1e1e] text-sm rounded-full">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

