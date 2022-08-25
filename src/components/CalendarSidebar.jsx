import React from 'react'
import CreateEventButton from './Event/CreateEventButton'
import SmallCalendar from './SmallCalendar'

const CalendarSidebar = () => {
  return (
    <div className="col-span-1 flex flex-col items-start px-4 py-6 gap-y-4">
      <CreateEventButton />
      <SmallCalendar />
    </div>
  )
}

export default CalendarSidebar