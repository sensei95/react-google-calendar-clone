import dayjs from 'dayjs'
import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext';

const CalendarDay = ({day, rowIndex}) => {


  const {setSelectedDay, setShowCreateEventModal} = useContext(GlobalContext)
  const getCurrentDayClass = ( ) => (day.format("DD-MM-YY")) === dayjs().format("DD-MM-YY") ? "bg-blue-600 text-white w-8 h-8 rounded-full" : "";

  return (
    <li className="flex flex-col border-b cursor-pointer first:border-l" onClick={() => {
      setSelectedDay(day)
      setShowCreateEventModal(true)
    }}>
      <header className="flex flex-col items-center py-4 gap-y-4 ">
        {rowIndex === 0 && <p>{day.format("ddd").toUpperCase()}</p>}
        <p className={`flex flex-col justify-center items-center text-sm text-center ${getCurrentDayClass()}`}>{day.format("DD")}</p>
      </header>
    </li>
  )
}

export default CalendarDay