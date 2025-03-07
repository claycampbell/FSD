'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ReferenceDataView from '@/components/views/reference-data'
import ReportingCalendarView from '@/components/views/reporting-calendar'
import ESMARegistersView from '@/components/views/esma-registers'

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">FIRDS Management Interface</h1>
      
      <Tabs defaultValue="reference" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="reference">Reference Data</TabsTrigger>
          <TabsTrigger value="calendar">Reporting Calendar</TabsTrigger>
          <TabsTrigger value="registers">ESMA Registers</TabsTrigger>
        </TabsList>
        
        <TabsContent value="reference">
          <Card>
            <CardContent className="p-6">
              <ReferenceDataView />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="calendar">
          <Card>
            <CardContent className="p-6">
              <ReportingCalendarView />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="registers">
          <Card>
            <CardContent className="p-6">
              <ESMARegistersView />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}