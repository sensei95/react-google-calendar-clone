import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/20/solid'
import dayjs from 'dayjs'
import React, { useContext, useEffect, useState } from 'react'
import { getMonth } from '../utils'
import GlobalContext from '../context/GlobalContext';

const SmallCalendar = () => {

    const [currenMonth, setCurrenMonth] = useState(getMonth())
    const [currenMonthIndex, setCurrenMonthIndex] = useState(dayjs().month())

    useEffect(() => {
        setCurrenMonth(getMonth(currenMonthIndex))
    },[currenMonthIndex])

    const {findMonthByIndex,setSelectedDay,selectedDay} = useContext(GlobalContext)

    const handlePrevMonth = (e) => {
        e.preventDefault()
        setCurrenMonthIndex(currenMonthIndex - 1);
    }

    const handleNextMonth = (e) => {
        e.preventDefault()
        setCurrenMonthIndex(currenMonthIndex + 1);
    }

    const getDayClass = (day) => {
        const format = "DD-MM-YY"
        const nowDay = dayjs().format(format)
        const currentDay = day.format(format)

        const slcDay = selectedDay?.format(format)

        return nowDay === currentDay ? "bg-blue-500 rounded-full text-white" : currentDay === slcDay ? "bg-blue-100 rounded-full text-blue-600 font-bold":""
    }

  return (
    <div className='w-full mt-9'>
        <header className="flex items-center justify-between mb-3 gap-x-4">
            <p className="font-bold text-slate-500">
                {dayjs(new Date(dayjs().year(), currenMonthIndex)).format("MMMM YYYY")}
            </p>
            <div className="flex items-center gap-5">
                <button onClick={handlePrevMonth} className="cursor-pointer text-slate-600">
                    <ChevronLeftIcon height={20} />
                </button>
                <button onClick={handleNextMonth} className="cursor-pointer text-slate-600">
                    <ChevronRightIcon height={20} />
                </button>
            </div>
        </header>
        <ul className="grid grid-cols-7 grid-rows-6 gap-1">
            {currenMonth[0].map((day, index) => (
                <li key={index} className="py-1 mb-1.5 text-sm font-semibold text-center text-slate-700">
                    <span>{day.format('dd').charAt(0)}</span>
                </li>
            ))}
            {currenMonth.map((row, rowIndex) => (
                 <React.Fragment key={rowIndex}>
                    {row.map((day, dayIndex) => (
                        <li key={dayIndex} className="text-slate-600">
                            <button onClick={() => {
                                findMonthByIndex(currenMonthIndex)
                                setSelectedDay(day)
                            }} className={`py-1 w-full text-[13px] font-medium  ${getDayClass(day)}`}>
                                {day.format('D')}
                            </button>
                        </li>
                    ))}
                 </React.Fragment>
            ))}
        </ul>
    </div>
  )
}

export default SmallCalendar