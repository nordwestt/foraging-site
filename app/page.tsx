import { Calendar, MapPin, Users, Leaf, Mountain, Phone, Mail, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import ForagingCalendar from "@/components/foraging-calendar"

export default function ForagingWebsite() {
  const teamMembers = [
    {
      name: "Elena Moss",
      role: "Lead Forager & Botanist",
      image: "/placeholder.svg?height=300&width=300",
      bio: "With 15 years of experience in wild plant identification, Elena leads our weekly expeditions and teaches sustainable foraging practices.",
    },
    {
      name: "River Stone",
      role: "Mycologist & Guide",
      image: "/placeholder.svg?height=300&width=300",
      bio: "River specializes in mushroom identification and has been studying fungi for over a decade. They ensure safe and ethical harvesting.",
    },
    {
      name: "Sage Willow",
      role: "Herbalist & Workshop Leader",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Sage combines traditional knowledge with modern herbalism, teaching participants how to use foraged plants for wellness.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-green-100/30 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-amber-100/20 to-transparent rounded-full"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-green-200/10 to-transparent rounded-full"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Lush forest with morning light filtering through trees, showcasing wild plants and mushrooms"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/40 via-green-800/30 to-green-700/50"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8 inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
            <Leaf className="w-5 h-5 text-green-600" />
            <span className="text-green-800 font-medium">Wild Harvest Collective</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Discover Nature's
            <span className="block text-green-200">Hidden Treasures</span>
          </h1>

          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join us every week as we explore the wilderness, learn sustainable foraging practices, and connect with the
            natural world around us.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg shadow-xl"
            >
              Join Our Next Adventure
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 rounded-full text-lg backdrop-blur-sm bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Decorative Mountain Silhouettes */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-900/60 to-transparent">
          <svg viewBox="0 0 1200 120" className="absolute bottom-0 w-full h-full">
            <path
              d="M0,120 L0,80 L200,20 L400,60 L600,10 L800,50 L1000,30 L1200,70 L1200,120 Z"
              fill="rgba(34, 197, 94, 0.3)"
            />
            <path
              d="M0,120 L0,90 L150,40 L350,70 L550,25 L750,55 L950,35 L1200,75 L1200,120 Z"
              fill="rgba(34, 197, 94, 0.2)"
            />
          </svg>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">The Art of Wild Foraging</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-green-700 leading-relaxed">
                For thousands of years, humans have lived in harmony with nature, gathering wild foods and medicines
                from the land. Our foraging collective continues this ancient tradition, teaching sustainable practices
                that honor both the earth and our ancestors.
              </p>

              <p className="text-lg text-green-700 leading-relaxed">
                Every week, we venture into pristine wilderness areas to discover edible plants, medicinal herbs, and
                fungi. Our experienced guides ensure safe identification while teaching ecological principles that
                preserve these precious resources for future generations.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
                  <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-green-800">150+</div>
                  <div className="text-green-600">Active Members</div>
                </div>
                <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
                  <Mountain className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-green-800">200+</div>
                  <div className="text-green-600">Expeditions Led</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-200 to-amber-200 rounded-3xl opacity-30"></div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Hands gently holding freshly foraged mushrooms and wild herbs"
                width={600}
                height={500}
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-100/50 to-amber-100/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">Upcoming Adventures</h2>
            <p className="text-xl text-green-700 max-w-2xl mx-auto">
              Join us for weekly foraging expeditions, workshops, and special events throughout the season.
            </p>
          </div>

          <ForagingCalendar />
        </div>
      </section>

      {/* Sign Up Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-green-200">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">Begin Your Journey</h2>
            <p className="text-xl text-green-700 mb-8 max-w-2xl mx-auto">
              Ready to connect with nature and learn the ancient art of foraging? Join our community of nature
              enthusiasts and start your wild food adventure today.
            </p>

            <form className="max-w-md mx-auto space-y-4">
              <Input
                type="text"
                placeholder="Your Name"
                className="rounded-full border-green-300 focus:border-green-500 py-3 px-6"
              />
              <Input
                type="email"
                placeholder="Email Address"
                className="rounded-full border-green-300 focus:border-green-500 py-3 px-6"
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                className="rounded-full border-green-300 focus:border-green-500 py-3 px-6"
              />
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-full text-lg shadow-lg">
                Join the Collective
              </Button>
            </form>

            <p className="text-sm text-green-600 mt-4">
              No experience necessary • All skill levels welcome • Equipment provided
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-green-50 to-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">Meet Our Guides</h2>
            <p className="text-xl text-green-700 max-w-2xl mx-auto">
              Our experienced team combines decades of botanical knowledge with a deep respect for nature's wisdom.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-white/70 backdrop-blur-sm border-green-200 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-green-800 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-4">{member.role}</p>
                  <p className="text-green-700 leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="py-16 px-4 bg-green-800 text-white relative overflow-hidden">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100">
            <defs>
              <pattern id="floral" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="currentColor" />
                <path d="M10,5 Q15,10 10,15 Q5,10 10,5" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#floral)" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Leaf className="w-8 h-8 text-green-300" />
                Wild Harvest Collective
              </h3>
              <p className="text-green-100 text-lg mb-8 leading-relaxed">
                Connecting people with nature through sustainable foraging practices and wilderness education. Join us
                in preserving ancient wisdom for future generations.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-green-300" />
                  <span className="text-green-100">Pacific Northwest Region</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-green-300" />
                  <span className="text-green-100">(555) 123-WILD</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-green-300" />
                  <span className="text-green-100">hello@wildharvestcollective.org</span>
                </div>
              </div>
            </div>

            <div className="text-center md:text-right">
              <h4 className="text-xl font-semibold mb-6 text-green-200">Follow Our Journey</h4>
              <div className="flex justify-center md:justify-end gap-4 mb-8">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-green-300 text-green-300 hover:bg-green-300 hover:text-green-800 bg-transparent"
                >
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-green-300 text-green-300 hover:bg-green-300 hover:text-green-800 bg-transparent"
                >
                  <Calendar className="w-5 h-5" />
                </Button>
              </div>

              <p className="text-green-200 text-sm">
                © 2024 Wild Harvest Collective. All rights reserved.
                <br />
                Foraging responsibly • Leaving no trace • Honoring the land
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
