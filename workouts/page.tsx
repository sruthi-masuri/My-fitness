import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import Link from "next/link"

export default function WorkoutsPage() {
  const workouts = [
    {
      id: 1,
      name: "Full Body Strength",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=60",
      duration: "60 min",
      difficulty: "Intermediate",
      type: "Strength",
      equipment: "Full Gym"
    },
    {
      id: 2,
      name: "HIIT Cardio",
      image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=800&auto=format&fit=crop&q=60",
      duration: "30 min",
      difficulty: "Advanced",
      type: "Cardio",
      equipment: "Minimal"
    },
    {
      id: 3,
      name: "Yoga Flow",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=60",
      duration: "45 min",
      difficulty: "Beginner",
      type: "Flexibility",
      equipment: "Mat"
    },
    {
      id: 4,
      name: "Core Crusher",
      image: "https://images.unsplash.com/photo-1616803689943-5601631c7fec?w=800&auto=format&fit=crop&q=60",
      duration: "20 min",
      difficulty: "Intermediate",
      type: "Core",
      equipment: "Minimal"
    },
    {
      id: 5,
      name: "Upper Body Power",
      image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=800&auto=format&fit=crop&q=60",
      duration: "45 min",
      difficulty: "Advanced",
      type: "Strength",
      equipment: "Full Gym"
    },
    {
      id: 6,
      name: "Lower Body Focus",
      image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&auto=format&fit=crop&q=60",
      duration: "50 min",
      difficulty: "Intermediate",
      type: "Strength",
      equipment: "Full Gym"
    }
  ]

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Workouts</h1>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <Input
              placeholder="Search workouts..."
              className="max-w-sm"
            />
            <div className="flex gap-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Workout Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="strength">Strength</SelectItem>
                  <SelectItem value="cardio">Cardio</SelectItem>
                  <SelectItem value="flexibility">Flexibility</SelectItem>
                  <SelectItem value="core">Core</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout) => (
            <Link href={`/workouts/${workout.id}`} key={workout.id}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{workout.name}</h3>
                    <span className="text-sm font-medium">
                      {workout.duration}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {workout.type}
                    </span>
                    <span className="text-sm font-medium">
                      {workout.difficulty}
                    </span>
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    Equipment: {workout.equipment}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}