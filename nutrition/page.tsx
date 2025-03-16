import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import Link from "next/link"

export default function NutritionPage() {
  const meals = [
    {
      id: 1,
      name: "Protein-Packed Breakfast Bowl",
      image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=800&auto=format&fit=crop&q=60",
      calories: 450,
      protein: "32g",
      carbs: "45g",
      fats: "18g",
      category: "Breakfast"
    },
    {
      id: 2,
      name: "Mediterranean Lunch Plate",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=60",
      calories: 550,
      protein: "28g",
      carbs: "65g",
      fats: "22g",
      category: "Lunch"
    },
    {
      id: 3,
      name: "Lean Dinner Steak",
      image: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?w=800&auto=format&fit=crop&q=60",
      calories: 520,
      protein: "45g",
      carbs: "35g",
      fats: "20g",
      category: "Dinner"
    },
    {
      id: 4,
      name: "Green Smoothie Bowl",
      image: "https://images.unsplash.com/photo-1638437447451-6e73a2a19743?w=800&auto=format&fit=crop&q=60",
      calories: 320,
      protein: "15g",
      carbs: "48g",
      fats: "12g",
      category: "Snack"
    },
    {
      id: 5,
      name: "Quinoa Power Bowl",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=60",
      calories: 480,
      protein: "22g",
      carbs: "68g",
      fats: "16g",
      category: "Lunch"
    },
    {
      id: 6,
      name: "Healthy Chicken Dinner",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&auto=format&fit=crop&q=60",
      calories: 490,
      protein: "42g",
      carbs: "38g",
      fats: "19g",
      category: "Dinner"
    }
  ]

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Meal Planning & Nutrition</h1>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <Input
              placeholder="Search meals..."
              className="max-w-sm"
            />
            <div className="flex gap-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Meal Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Meals</SelectItem>
                  <SelectItem value="breakfast">Breakfast</SelectItem>
                  <SelectItem value="lunch">Lunch</SelectItem>
                  <SelectItem value="dinner">Dinner</SelectItem>
                  <SelectItem value="snack">Snacks</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="calories">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="calories">Calories</SelectItem>
                  <SelectItem value="protein">Protein</SelectItem>
                  <SelectItem value="carbs">Carbs</SelectItem>
                  <SelectItem value="fats">Fats</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {meals.map((meal) => (
            <Link href={`/nutrition/${meal.id}`} key={meal.id}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={meal.image}
                    alt={meal.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{meal.name}</h3>
                    <span className="text-sm font-medium">
                      {meal.calories} cal
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {meal.category}
                    </span>
                  </div>
                  <div className="mt-2 grid grid-cols-3 gap-2 text-sm">
                    <div>
                      <span className="font-medium">Protein:</span> {meal.protein}
                    </div>
                    <div>
                      <span className="font-medium">Carbs:</span> {meal.carbs}
                    </div>
                    <div>
                      <span className="font-medium">Fats:</span> {meal.fats}
                    </div>
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