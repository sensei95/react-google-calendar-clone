import { useContext, useEffect, useState } from "react";
import CalendarHeader from "./components/CalendarHeader";
import CalendarMonth from "./components/CalendarMonth";
import CalendarSidebar from "./components/CalendarSidebar";
import { getMonth } from "./utils";
import GlobalContext from './context/GlobalContext'
import CreateEventModal from "./components/Event/CreateEventModal";

function App() {
  const [currentMonth,setCurrentMonth] = useState(getMonth())

  const {monthIndex, showCreateEventModal} = useContext(GlobalContext)

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex))
  },[monthIndex])
  
  return (
   <>
   {showCreateEventModal && <CreateEventModal />}
    <div className="h-screen grid grid-cols-[256px_1fr] divide-y">
      <CalendarHeader/>
      <CalendarSidebar />
      <CalendarMonth month={currentMonth}/>
    </div>
   </>
  );
}

export default App;
