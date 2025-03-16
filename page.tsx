import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const features = [
    {
      title: "Workout Planning",
      description: "Create and track custom workout routines tailored to your goals",
      icon: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Nutrition Tracking",
      description: "Log meals, track macros, and monitor your daily nutrition goals",
      icon: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Community Support",
      description: "Connect with like-minded individuals and share your fitness journey",
      icon: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop&q=60"
    }
  ]

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1600&auto=format&fit=crop&q=60"
          alt="Fitness background"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Your Journey to Better Health
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Track your workouts, plan your meals, and connect with a supportive community
            </p>
            <div className="space-x-4">
              <Button size="lg" asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Everything you need to reach your fitness goals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}