import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageSquare, ThumbsUp, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CommunityPage() {
  const posts = [
    {
      id: 1,
      user: {
        name: "Sarah Johnson",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60",
        role: "Fitness Enthusiast"
      },
      content: "Just completed my first marathon! 🏃‍♀️ Six months of training paid off. Remember, consistency is key!",
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&auto=format&fit=crop&q=60",
      likes: 248,
      comments: 42,
      category: "Success Story"
    },
    {
      id: 2,
      user: {
        name: "Mike Chen",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60",
        role: "Certified Trainer"
      },
      content: "Quick tip: For better squat form, imagine you're sitting back into a chair. Keep your chest up and core engaged! 💪",
      image: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?w=800&auto=format&fit=crop&q=60",
      likes: 156,
      comments: 28,
      category: "Fitness Tips"
    },
    {
      id: 3,
      user: {
        name: "Emma Davis",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60",
        role: "Nutritionist"
      },
      content: "Meal prep Sunday! Here's my go-to high-protein lunch recipe that takes just 15 minutes to prepare. 🥗",
      image: "https://images.unsplash.com/photo-1547496502-affa22d38842?w=800&auto=format&fit=crop&q=60",
      likes: 324,
      comments: 56,
      category: "Nutrition"
    },
    {
      id: 4,
      user: {
        name: "Alex Thompson",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60",
        role: "Weight Loss Journey"
      },
      content: "-30 lbs in 6 months! Sharing my journey and what worked for me. Ask me anything! 🎉",
      image: "https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?w=800&auto=format&fit=crop&q=60",
      likes: 892,
      comments: 145,
      category: "Success Story"
    }
  ]

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Community</h1>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <Input
              placeholder="Search posts..."
              className="max-w-sm"
            />
            <div className="flex gap-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Posts</SelectItem>
                  <SelectItem value="success">Success Stories</SelectItem>
                  <SelectItem value="tips">Fitness Tips</SelectItem>
                  <SelectItem value="nutrition">Nutrition</SelectItem>
                  <SelectItem value="questions">Questions</SelectItem>
                </SelectContent>
              </Select>
              <Button>Create Post</Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={post.user.image}
                    alt={post.user.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{post.user.name}</h3>
                    <p className="text-sm text-muted-foreground">{post.user.role}</p>
                  </div>
                </div>
                <p className="text-lg mb-4">{post.content}</p>
                <div className="relative h-[300px] mb-4">
                  <Image
                    src={post.image}
                    alt="Post image"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex items-center gap-6">
                  <Button variant="ghost" className="gap-2">
                    <ThumbsUp className="h-5 w-5" />
                    {post.likes}
                  </Button>
                  <Button variant="ghost" className="gap-2">
                    <MessageSquare className="h-5 w-5" />
                    {post.comments}
                  </Button>
                  <Button variant="ghost">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}