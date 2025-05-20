import { Skeleton } from "@/components/ui/skeleton"

interface EventSkeletonProps {
  type: "grid" | "list" | "calendar"
  count?: number
}

export default function EventSkeleton({ type, count = 6 }: EventSkeletonProps) {
  if (type === "grid") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <Skeleton className="h-48 w-full" />
            <div className="p-4 space-y-3">
              <div className="flex gap-2">
                <Skeleton className="h-5 w-16" />
                <Skeleton className="h-5 w-20" />
              </div>
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (type === "list") {
    return (
      <div className="flex flex-col gap-4">
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className="flex flex-col sm:flex-row gap-4 p-4 border rounded-lg">
            <Skeleton className="w-full sm:w-48 h-32" />
            <div className="flex-1 space-y-3">
              <div className="flex gap-2">
                <Skeleton className="h-5 w-16" />
                <Skeleton className="h-5 w-20" />
              </div>
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <div className="flex flex-wrap gap-4 mt-auto">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-4 w-36" />
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (type === "calendar") {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-8 w-40" />
          <div className="flex gap-1">
            <Skeleton className="h-8 w-8" />
            <Skeleton className="h-8 w-8" />
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 7 }).map((_, index) => (
            <Skeleton key={index} className="h-8" />
          ))}

          {Array.from({ length: 35 }).map((_, index) => (
            <Skeleton key={`day-${index}`} className="h-24" />
          ))}
        </div>

        <Skeleton className="h-64 w-full mt-4" />
      </div>
    )
  }

  return null
}
