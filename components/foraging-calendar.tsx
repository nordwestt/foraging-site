"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, MapPin, Clock, Users, Leaf, MouseIcon as Mushroom, Flower2 } from "lucide-react"

interface ForagingEvent {
  id: number
  title: string
  date: Date
  time: string
  location: string
  type: "expedition" | "workshop" | "course"
  difficulty: "beginner" | "intermediate" | "advanced"
  maxParticipants: number
  currentParticipants: number
  description: string
  icon: "leaf" | "mushroom" | "flower"
}

const mockEvents: ForagingEvent[] = [
  {
    id: 1,
    title: "Wild Mushroom Identification",
    date: new Date(2024, 11, 8), // December 8, 2024
    time: "9:00 AM - 2:00 PM",
    location: "Cascade Forest Trail",
    type: "expedition",
    difficulty: "intermediate",
    maxParticipants: 12,
    currentParticipants: 8,
    description: "Learn to safely identify edible mushrooms in their natural habitat.",
    icon: "mushroom",
  },
  {
    id: 2,
    title: "Winter Foraging Basics",
    date: new Date(2024, 11, 12), // December 12, 2024
    time: "10:00 AM - 4:00 PM",
    location: "Mountain View Park",
    type: "course",
    difficulty: "beginner",
    maxParticipants: 20,
    currentParticipants: 15,
    description: "Discover what nature offers during the colder months.",
    icon: "leaf",
  },
  {
    id: 3,
    title: "Herbal Medicine Workshop",
    date: new Date(2024, 11, 15), // December 15, 2024
    time: "1:00 PM - 5:00 PM",
    location: "Community Center",
    type: "workshop",
    difficulty: "beginner",
    maxParticipants: 16,
    currentParticipants: 12,
    description: "Learn to prepare tinctures and teas from foraged plants.",
    icon: "flower",
  },
  {
    id: 4,
    title: "Advanced Foraging Expedition",
    date: new Date(2024, 11, 19), // December 19, 2024
    time: "8:00 AM - 4:00 PM",
    location: "Remote Wilderness Area",
    type: "expedition",
    difficulty: "advanced",
    maxParticipants: 8,
    currentParticipants: 6,
    description: "Full-day expedition for experienced foragers seeking rare finds.",
    icon: "leaf",
  },
  {
    id: 5,
    title: "Family Foraging Day",
    date: new Date(2024, 11, 22), // December 22, 2024
    time: "10:00 AM - 2:00 PM",
    location: "Riverside Park",
    type: "expedition",
    difficulty: "beginner",
    maxParticipants: 25,
    currentParticipants: 18,
    description: "Perfect introduction for families with children 8+.",
    icon: "flower",
  },
  {
    id: 6,
    title: "Seasonal Preservation Techniques",
    date: new Date(2024, 11, 26), // December 26, 2024
    time: "11:00 AM - 3:00 PM",
    location: "Teaching Kitchen",
    type: "workshop",
    difficulty: "intermediate",
    maxParticipants: 14,
    currentParticipants: 9,
    description: "Learn traditional methods to preserve your foraged treasures.",
    icon: "leaf",
  },
  {
    id: 7,
    title: "New Year Nature Walk",
    date: new Date(2025, 0, 2), // January 2, 2025
    time: "9:00 AM - 12:00 PM",
    location: "Sunset Ridge Trail",
    type: "expedition",
    difficulty: "beginner",
    maxParticipants: 30,
    currentParticipants: 22,
    description: "Start the new year with a peaceful nature connection.",
    icon: "flower",
  },
]

export default function ForagingCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date())

  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const emptyDays = Array.from({ length: firstDayOfMonth }, (_, i) => i)

  const getEventsForDate = (day: number) => {
    return mockEvents.filter(
      (event) =>
        event.date.getDate() === day &&
        event.date.getMonth() === currentMonth &&
        event.date.getFullYear() === currentYear,
    )
  }

  const getEventIcon = (iconType: string) => {
    switch (iconType) {
      case "mushroom":
        return <Mushroom className="w-4 h-4" />
      case "flower":
        return <Flower2 className="w-4 h-4" />
      default:
        return <Leaf className="w-4 h-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "expedition":
        return "bg-green-100 text-green-800 border-green-200"
      case "workshop":
        return "bg-amber-100 text-amber-800 border-amber-200"
      case "course":
        return "bg-blue-100 text-blue-800 border-blue-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "text-green-600"
      case "intermediate":
        return "text-amber-600"
      case "advanced":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1))
  }

  const prevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1))
  }

  return (
    <div className="space-y-8">
      {/* Calendar Header */}
      <div className="flex items-center justify-between bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-200">
        <Button
          variant="outline"
          size="icon"
          onClick={prevMonth}
          className="rounded-full border-green-300 text-green-700 hover:bg-green-100 bg-transparent"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <h3 className="text-2xl font-bold text-green-800">
          {monthNames[currentMonth]} {currentYear}
        </h3>

        <Button
          variant="outline"
          size="icon"
          onClick={nextMonth}
          className="rounded-full border-green-300 text-green-700 hover:bg-green-100 bg-transparent"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Calendar Grid */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-200">
        {/* Day Headers */}
        <div className="grid grid-cols-7 gap-2 mb-4">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center font-semibold text-green-700 py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-2">
          {emptyDays.map((day) => (
            <div key={`empty-${day}`} className="h-24"></div>
          ))}

          {days.map((day) => {
            const dayEvents = getEventsForDate(day)
            const isToday =
              new Date().getDate() === day &&
              new Date().getMonth() === currentMonth &&
              new Date().getFullYear() === currentYear

            return (
              <div
                key={day}
                className={`h-24 p-2 rounded-xl border-2 transition-all duration-200 hover:shadow-md ${
                  isToday
                    ? "bg-green-100 border-green-400"
                    : dayEvents.length > 0
                      ? "bg-amber-50 border-amber-200 hover:bg-amber-100"
                      : "bg-white border-green-100 hover:bg-green-50"
                }`}
              >
                <div className={`text-sm font-semibold mb-1 ${isToday ? "text-green-800" : "text-green-700"}`}>
                  {day}
                </div>

                {dayEvents.slice(0, 2).map((event) => (
                  <div
                    key={event.id}
                    className="text-xs bg-green-200 text-green-800 rounded-md px-1 py-0.5 mb-1 truncate flex items-center gap-1"
                  >
                    {getEventIcon(event.icon)}
                    <span className="truncate">{event.title}</span>
                  </div>
                ))}

                {dayEvents.length > 2 && (
                  <div className="text-xs text-green-600 font-medium">+{dayEvents.length - 2} more</div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Upcoming Events List */}
      <div className="space-y-4">
        <h4 className="text-2xl font-bold text-green-800 mb-6">Upcoming Events</h4>

        <div className="grid gap-4">
          {mockEvents.slice(0, 4).map((event) => (
            <Card
              key={event.id}
              className="bg-white/70 backdrop-blur-sm border-green-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-full text-green-600">{getEventIcon(event.icon)}</div>
                    <div>
                      <h5 className="text-xl font-bold text-green-800">{event.title}</h5>
                      <p className="text-green-600">{event.description}</p>
                    </div>
                  </div>

                  <Badge className={`${getTypeColor(event.type)} border`}>{event.type}</Badge>
                </div>

                <div className="grid md:grid-cols-2 gap-4 text-sm text-green-700">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>
                        {event.date.toLocaleDateString()} • {event.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>
                        {event.currentParticipants}/{event.maxParticipants} participants
                      </span>
                    </div>
                    <div className={`font-medium ${getDifficultyColor(event.difficulty)}`}>
                      {event.difficulty.charAt(0).toUpperCase() + event.difficulty.slice(1)} Level
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-green-200">
                  <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6">
                    Reserve Your Spot
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
