import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-2 flex flex-col'>
        <SearchInput/>
        <div className='divider h-0.5 mt-1 bg-black'></div>
        <Conversations/>
        <LogoutButton/>
    
    </div> 
  )
}

export default Sidebar