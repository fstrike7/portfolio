import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Star } from "lucide-react"
import Link from "next/link"

interface Repository {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string
  stargazers_count: number
  language: string
  topics: string[]
  fork: boolean
}

async function getRepositories(username: string): Promise<Repository[]> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 3600 }, // Revalidate every hour
    })

    if (!response.ok) {
      throw new Error("Failed to fetch repositories")
    }

    const repos = await response.json()

    // Filter out forked repositories and those without descriptions
    return repos
      .filter((repo: Repository) => !repo.fork && repo.description)
      .sort((a: Repository, b: Repository) => b.stargazers_count - a.stargazers_count)
  } catch (error) {
    console.error("Error fetching repositories:", error)
    return []
  }
}

export default async function ProjectsSection({ username }: { username: string }) {
  const repositories = await getRepositories(username)

  if (repositories.length === 0) {
    return (
      <div className="text-center py-12">
        <p>No se pudieron cargar los proyectos. Por favor, intenta más tarde.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {repositories.map((repo) => (
        <Card
          key={repo.id}
          className="bg-[#2d2d2d] p-6 rounded-lg border border-[#3a3a3a] hover:border-[#9c5de3] transition-all"
        >
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl text-[#9c5de3]">{repo.name}</CardTitle>
            {repo.language && (
              <Badge className="w-fit">
                {repo.language}
              </Badge>
            )}
          </CardHeader>
          <CardContent className="p-0 pb-4">
            <CardDescription className="text-gray-300 mb-4">{repo.description}</CardDescription>
            <div className="flex flex-wrap gap-2 mt-2">
              {repo.topics &&
                repo.topics.slice(0, 3).map((topic) => (
                  <Badge key={topic} className="px-3 py-1 bg-[#1e1e1e] text-sm rounded-full border-none">
                    {topic}
                  </Badge>
                ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between p-0">
            <div className="flex items-center">
              <Star className="h-4 w-4 mr-1 text-yellow-400" />
              <span className="text-sm">{repo.stargazers_count}</span>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link href={repo.html_url} target="_blank">
                  <Github className="h-4 w-4 mr-1" />
                  Código
                </Link>
              </Button>
              {repo.homepage && (
                <Button variant="default" size="sm" className="bg-[#9c5de3] hover:bg-[#8a4fd0]" asChild>
                  <Link href={repo.homepage} target="_blank">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Demo
                  </Link>
                </Button>
              )}
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

