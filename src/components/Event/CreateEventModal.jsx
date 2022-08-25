import React, { useContext, useState } from 'react'
import {Bars2Icon, XMarkIcon, ClockIcon, Bars3BottomRightIcon, BookmarkIcon, CheckIcon} from '@heroicons/react/24/outline';
import GlobalContext from '../../context/GlobalContext';


const CreateEventModal = () => {


  const labelsClasses = ["indigo","slate","blue","red","purple"];
  
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [selectedLabel, setSelectedLabel] = useState(labelsClasses[0])

  const {setShowCreateEventModal, selectedDay,dispatchCalendarEvent} = useContext(GlobalContext)

  const closeModal = (e) => {
    e.preventDefault()
    setShowCreateEventModal((prevState) => !prevState)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const calendarEvent = {
      title,
      description,
      label: selectedLabel,
      day: selectedDay.valueOf(),
      id: Date.now()
    }

    console.log(calendarEvent)

    dispatchCalendarEvent({type:"push", payload: calendarEvent})
    setShowCreateEventModal(false)

  }

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-[rgba(0,0,0,0.3)]">
        <form className="w-1/4 bg-white rounded-lg shadow-2xl">
            <header className="flex items-center justify-between px-4 py-2 bg-slate-200">
                <span className="cursor-pointer text-slate-500">
                  <Bars2Icon height={20} />
                </span>
                <button onClick={closeModal} className="cursor-pointer text-slate-500">
                    <XMarkIcon height={20} />
                </button>
            </header>
            <div className="p-3">
              <div className="grid items-end grid-cols-1/5 gap-y-7">
                <div></div>
                <input type="text" name='title' className='w-full pt-3 text-xl font-semibold border-0 border-b-2 text-slate-600 border-slate-300 focus:outline-none focus:ring-0 focus:border-blue-500' placeholder='Add title' onChange={(e) => setTitle(e.target.value)} value={title} required/>
                <span className='text-slate-500'>
                  <ClockIcon height={18} />
                </span>
                <p>{selectedDay?.format("ddd, MMMM DD")}</p>
                <span className='text-slate-500'>
                  <Bars3BottomRightIcon height={18} />
                </span>
                <input type="text" name='description' className='w-full pt-3 text-xl font-semibold border-0 border-b-2 text-slate-600 border-slate-300 focus:outline-none focus:ring-0 focus:border-blue-500' placeholder='Add descripttion' onChange={(e) => setDescription(e.target.value)} value={description} required/>
                <span className='text-slate-500'>
                  <BookmarkIcon height={18} />
                </span>
                <div className="flex gap-x-2">
                  {labelsClasses.map((labelClass, index) => (
                    <button onClick={(e) => {
                      e.preventDefault()
                      setSelectedLabel(labelClass)
                    }} key={index} className={`bg-${labelClass}-500 text-white h-6 w-6 rounded-full flex items-center justify-center cursor-pointer`}>
                      {selectedLabel === labelClass && <CheckIcon height={14} />}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <footer className='flex justify-end w-full p-3 mt-5 border-t'>
              <button onClick={handleSubmit} type='submit' className='px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600'>
                Save
              </button>
            </footer>
        </form>
    </div>
  )
}

export default CreateEventModal