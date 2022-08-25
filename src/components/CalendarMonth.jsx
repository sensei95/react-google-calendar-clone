import React from 'react'
import CalendarDay from './CalendarDay'

const CalendarMonth = ({month}) => {
  return (
    <ul className='col-start-2 col-span-1 grid grid-cols-7 grid-rows-5 divide-x'>
      {month.map((row,rowIndex) => (
        <React.Fragment key={rowIndex}>
          {row.map((day, dayIndex) => (
            <CalendarDay day={day} key={dayIndex} rowIndex={rowIndex} />
          ))}
        </React.Fragment>
      ))}
    </ul>
  )
}

export default CalendarMonth