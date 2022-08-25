import { createContext } from "react";

const GlobalContext = createContext({
    monthIndex: 0,
    setMonthIndex: (index) => {},
    goToPrevMonth: (e) => {},
    goToNextMonth: (e) => {},
    goToCurrentDate: (e) => {},
    findMonthByIndex: (index) => {},
    selectedDay: null,
    setSelectedDay: (day) => {},
    showCreateEventModal: false,
    setShowCreateEventModal: (state) => {},
    dispatchCalendarEvent: ({type, payload}) => {}
})

export default GlobalContext