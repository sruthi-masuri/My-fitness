import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import Link from "next/link"

export default function ConveniencePage() {
  const stores = [
    {
      id: 1,
      name: "24/7 Express",
      image: "https://images.unsplash.com/photo-1613740105081-e88271c0211b?w=800&auto=format&fit=crop&q=60",
      rating: 4.5,
      type: "Convenience Store",
      deliveryTime: "15-25 min",
      status: "Open 24/7"
    },
    {
      id: 2,
      name: "Quick Stop",
      image: "https://images.unsplash.com/photo-1567958451986-2de427a4a0be?w=800&auto=format&fit=crop&q=60",
      rating: 4.3,
      type: "Mini Mart",
      deliveryTime: "20-30 min",
      status: "Open until 12 AM"
    },
    {
      id: 3,
      name: "City Mart",
      image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&auto=format&fit=crop&q=60",
      rating: 4.6,
      type: "Convenience Store",
      deliveryTime: "15-25 min",
      status: "Open until 11 PM"
    },
    {
      id: 4,
      name: "Corner Shop",
      image: "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=800&auto=format&fit=crop&q=60",
      rating: 4.4,
      type: "Mini Mart",
      deliveryTime: "20-30 min",
      status: "Open 24/7"
    },
    {
      id: 5,
      name: "Night Owl",
      image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=800&auto=format&fit=crop&q=60",
      rating: 4.7,
      type: "Convenience Store",
      deliveryTime: "15-25 min",
      status: "Open 24/7"
    },
    {
      id: 6,
      name: "Urban Market",
      image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&auto=format&fit=crop&q=60",
      rating: 4.5,
      type: "Mini Mart",
      deliveryTime: "20-30 min",
      status: "Open until 10 PM"
    }
  ]

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Convenience Stores</h1>
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
                  <SelectItem value="status">Status</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Store Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="convenience">Convenience Store</SelectItem>
                  <SelectItem value="minimart">Mini Mart</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stores.map((store) => (
            <Link href={`/convenience/${store.id}`} key={store.id}>
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
                    <span className="text-sm font-medium text-green-600">
                      {store.status}
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