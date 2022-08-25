import React, { useContext } from 'react'
import logo from '../assets/google-calendar.svg'
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/20/solid'
import GlobalContext from '../context/GlobalContext'
import dayjs from 'dayjs'

const CalendarHeader = () => {

  const {
    monthIndex,
    goToNextMonth,
    goToPrevMonth,
    goToCurrentDate
  } = useContext(GlobalContext)


  return (
    <header className="flex items-center col-span-2 px-4 py-2 gap-x-7">
      <img src={logo} alt="Logo" className="w-12 h-12" />
      <h1 className="text-xl font-medium text-slate-400">Calendar</h1>
      <button onClick={goToCurrentDate} className="px-4 py-2 border rounded-md">
        Today
      </button>
      <div className="flex items-center gap-5">
        <button onClick={goToPrevMonth} className="cursor-pointer text-slate-600">
          <ChevronLeftIcon height={20} width={20} />
        </button>
        <button onClick={goToNextMonth} className="cursor-pointer text-slate-600">
          <ChevronRightIcon height={20} width={20} />
        </button>
      </div>
      <h2 className="text-xl font-bold text-slate-500">{dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}</h2>
    </header>
  )
}

export default CalendarHeader