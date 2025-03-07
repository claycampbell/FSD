import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

interface CalendarEvent {
  id: string
  title: string
  date: Date
  type: 'filing' | 'deadline' | 'notice'
}

export default function ReportingCalendarView() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [events] = useState<CalendarEvent[]>([
    {
      id: '1',
      title: 'Daily Filing Due',
      date: new Date(2025, 2, 8),
      type: 'filing'
    },
    {
      id: '2',
      title: 'Monthly Report Deadline',
      date: new Date(2025, 2, 31),
      type: 'deadline'
    },
    // More events would be added here from API
  ])

  const selectedDateEvents = events.filter(event => 
    selectedDate && event.date.toDateString() === selectedDate.toDateString()
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Reporting Calendar</h2>
        <Button variant="outline" size="sm">
          <Download className="w-4 h-4 mr-2" />
          Export Schedule
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-[300px_1fr]">
        <Card>
          <CardContent className="p-4">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              initialFocus
            />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-4">
              {selectedDate ? selectedDate.toLocaleDateString() : 'Select a date'}
            </h3>
            <div className="space-y-2">
              {selectedDateEvents.map(event => (
                <div
                  key={event.id}
                  className="p-3 rounded-md border bg-card hover:bg-accent"
                >
                  <div className="font-medium">{event.title}</div>
                  <div className="text-sm text-muted-foreground">
                    Type: {event.type}
                  </div>
                </div>
              ))}
              {selectedDateEvents.length === 0 && (
                <p className="text-muted-foreground">No events scheduled</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}