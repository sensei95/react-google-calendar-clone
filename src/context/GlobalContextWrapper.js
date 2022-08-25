import dayjs from 'dayjs'
import React, { useEffect, useReducer, useState } from 'react'
import savedEventsReducer from '../reducers/EventReducer'
import GlobalContext from './GlobalContext'

const GlobalContextWrapper = ({children}) => {

  const [monthIndex,setMonthIndex] = useState(dayjs().month())
  const [selectedDay,setSelectedDay] = useState(dayjs())
  const [showCreateEventModal,setShowCreateEventModal] = useState(false)


  const initEvents = () => {
    const storageEvents = localStorage.getItem('savedEvents')
    const parsedEvents = storageEvents ? JSON.parse(storageEvents) : []
    return parsedEvents
  }

  const [savedEvents, dispatchCalendarEvent] = useReducer(savedEventsReducer, [], initEvents)

  useEffect(() => {
    localStorage.setItem('savedEvents',JSON.stringify(savedEvents))
  },[savedEvents])

  const goToPrevMonth = (e) => {
      e.preventDefault()
      setMonthIndex((prevMonthIndex) => prevMonthIndex - 1)
  }

  const goToNextMonth = (e) => {
      e.preventDefault()
      setMonthIndex((prevMonthIndex) => prevMonthIndex + 1)
  }

  const goToCurrentDate = (e) => {
    e.preventDefault()
    setMonthIndex(dayjs().month())
  }

  const findMonthByIndex = (monthIndex) => {
    setMonthIndex(monthIndex)
  }

  return (
    <GlobalContext.Provider value={{
        monthIndex,
        setMonthIndex,
        goToPrevMonth,
        goToNextMonth,
        goToCurrentDate,
        findMonthByIndex,
        selectedDay,
        setSelectedDay,
        showCreateEventModal,
        setShowCreateEventModal,
        dispatchCalendarEvent
    }}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextWrapper