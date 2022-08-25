import React, { useContext } from 'react'
import {PlusIcon} from '@heroicons/react/20/solid';
import GlobalContext from '../../context/GlobalContext';
const CreateEventButton = () => {

  const {setShowCreateEventModal} = useContext(GlobalContext)

  const onClick = (e) => {
    e.preventDefault()
    setShowCreateEventModal((prevState) => !prevState)
  }

  return (
    <>
        <button onClick={onClick} className="inline-flex items-center px-4 py-2 border rounded-full shadow-md gap-x-2 hover:shadow-2xl">
            <PlusIcon height={15} />
            New Event
        </button>
    </>
  )
}

export default CreateEventButton