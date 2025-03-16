import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import Link from "next/link"

export default function GroceryPage() {
  const stores = [
    {
      id: 1,
      name: "Fresh Market",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=60",
      rating: 4.7,
      type: "Supermarket",
      deliveryTime: "30-45 min",
      minOrder: "$30"
    },
    {
      id: 2,
      name: "Organic Valley",
      image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=800&auto=format&fit=crop&q=60",
      rating: 4.8,
      type: "Organic Store",
      deliveryTime: "35-50 min",
      minOrder: "$25"
    },
    {
      id: 3,
      name: "Asian Market",
      image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&auto=format&fit=crop&q=60",
      rating: 4.6,
      type: "Specialty Store",
      deliveryTime: "40-55 min",
      minOrder: "$20"
    },
    {
      id: 4,
      name: "Value Mart",
      image: "https://images.unsplash.com/photo-1601599963565-b7ba49346e47?w=800&auto=format&fit=crop&q=60",
      rating: 4.4,
      type: "Discount Store",
      deliveryTime: "35-45 min",
      minOrder: "$15"
    },
    {
      id: 5,
      name: "Farmers Market",
      image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&auto=format&fit=crop&q=60",
      rating: 4.9,
      type: "Local Market",
      deliveryTime: "40-60 min",
      minOrder: "$35"
    },
    {
      id: 6,
      name: "Euro Deli",
      image: "https://images.unsplash.com/photo-1595961666462-7395e5f7a092?w=800&auto=format&fit=crop&q=60",
      rating: 4.7,
      type: "Specialty Store",
      deliveryTime: "35-50 min",
      minOrder: "$25"
    }
  ]

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Grocery Stores</h1>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <Input
              placeholder="Search stores..."
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
                  <SelectItem value="minOrder">Minimum Order</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Store Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="supermarket">Supermarket</SelectItem>
                  <SelectItem value="organic">Organic Store</SelectItem>
                  <SelectItem value="specialty">Specialty Store</SelectItem>
                  <SelectItem value="discount">Discount Store</SelectItem>
                  <SelectItem value="local">Local Market</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stores.map((store) => (
            <Link href={`/grocery/${store.id}`} key={store.id}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={store.image}
                    alt={store.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{store.name}</h3>
                    <span className="text-sm font-medium">
                      Min: {store.minOrder}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {store.type}
                    </span>
                    <span className="text-sm font-medium">
                      ⭐ {store.rating}
                    </span>
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {store.deliveryTime}
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