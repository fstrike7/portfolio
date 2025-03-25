import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function LoadingProjects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <Card key={i} className="bg-[#2d2d2d] p-6 rounded-lg border border-[#3a3a3a]">
          <CardHeader className="p-0 pb-4">
            <Skeleton className="h-6 w-3/4 bg-[#3a3a3a]" />
            <Skeleton className="h-4 w-1/4 mt-2 bg-[#3a3a3a]" />
          </CardHeader>
          <CardContent className="p-0 pb-4">
            <Skeleton className="h-4 w-full bg-[#3a3a3a] mb-2" />
            <Skeleton className="h-4 w-5/6 bg-[#3a3a3a] mb-2" />
            <Skeleton className="h-4 w-4/6 bg-[#3a3a3a]" />
            <div className="flex gap-2 mt-4">
              <Skeleton className="h-5 w-16 bg-[#3a3a3a]" />
              <Skeleton className="h-5 w-16 bg-[#3a3a3a]" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between p-0">
            <Skeleton className="h-8 w-8 bg-[#3a3a3a]" />
            <div className="flex gap-2">
              <Skeleton className="h-9 w-20 bg-[#3a3a3a]" />
              <Skeleton className="h-9 w-20 bg-[#3a3a3a]" />
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

