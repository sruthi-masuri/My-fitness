import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import Link from "next/link"

export default function RestaurantsPage() {
  const restaurants = [
    {
      id: 1,
      name: "Burger House",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=60",
      rating: 4.5,
      cuisine: "American",
      deliveryTime: "20-30 min",
      priceRange: "$$"
    },
    {
      id: 2,
      name: "Sushi Master",
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&auto=format&fit=crop&q=60",
      rating: 4.8,
      cuisine: "Japanese",
      deliveryTime: "25-35 min",
      priceRange: "$$$"
    },
    {
      id: 3,
      name: "Pizza Palace",
      image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=800&auto=format&fit=crop&q=60",
      rating: 4.3,
      cuisine: "Italian",
      deliveryTime: "30-40 min",
      priceRange: "$$"
    },
    {
      id: 4,
      name: "Thai Spice",
      image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&auto=format&fit=crop&q=60",
      rating: 4.6,
      cuisine: "Thai",
      deliveryTime: "25-35 min",
      priceRange: "$$"
    },
    {
      id: 5,
      name: "Taco Fiesta",
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&auto=format&fit=crop&q=60",
      rating: 4.4,
      cuisine: "Mexican",
      deliveryTime: "20-30 min",
      priceRange: "$"
    },
    {
      id: 6,
      name: "Indian Curry House",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&auto=format&fit=crop&q=60",
      rating: 4.7,
      cuisine: "Indian",
      deliveryTime: "30-40 min",
      priceRange: "$$"
    }
  ]

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Restaurants</h1>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <Input
              placeholder="Search restaurants..."
              className="max-w-sm"
            />
            <div className="flex gap-4">
              <Select defaultValue="rating">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="deliveryTime">Delivery Time</SelectItem>
                  <SelectItem value="priceRange">Price Range</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Cuisine" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Cuisines</SelectItem>
                  <SelectItem value="american">American</SelectItem>
                  <SelectItem value="japanese">Japanese</SelectItem>
                  <SelectItem value="italian">Italian</SelectItem>
                  <SelectItem value="thai">Thai</SelectItem>
                  <SelectItem value="mexican">Mexican</SelectItem>
                  <SelectItem value="indian">Indian</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {restaurants.map((restaurant) => (
            <Link href={`/restaurant/${restaurant.id}`} key={restaurant.id}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={restaurant.image}
                    alt={restaurant.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{restaurant.name}</h3>
                    <span className="text-sm font-medium">
                      {restaurant.priceRange}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {restaurant.cuisine}
                    </span>
                    <span className="text-sm font-medium">
                      ⭐ {restaurant.rating}
                    </span>
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {restaurant.deliveryTime}
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