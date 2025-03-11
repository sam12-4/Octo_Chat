import{ React,  useState } from 'react'
import { SearchIcon } from 'lucide-react'
import { Plus } from 'lucide-react'
import { Notifications, Logout, Group, Menu } from '@mui/icons-material'
import {CrossIcon } from 'lucide-react'
import SearchDialog from '../dialogs/SearchDialog'
import NotificationDialog from '../dialogs/NotificationDialog'
import AddGroups from '../dialogs/AddGroups'
import ManageGroups from '../dialogs/ManageGroups'
import { sampleUsers } from '../constants/sampleData'
import AddFriends from '../dialogs/AddFriends'


const Header = () => {
    const [isMobile, setIsMobile] = useState(false)
    const [notification, setNotification] = useState(false)
    const [hamburger, setHamburger] = useState(true)
    
    const [users, setUsers] = useState(sampleUsers)

    const handleSearch =() =>{
        console.log('');
    }

    const handleNewGroup =() =>{
        console.log('search');
    }

    const colllapseNavbar =() =>{
        setHamburger(prev=>!prev)
    }

    const handleNotification =() =>{
        setNotification(prev=>!prev);
        console.log(notification);
        console.log('notification');
    }

    const handleLogout =() =>{
        console.log('search');
    }

    


  return (
 <header className=' my-5 ml-3 mr-3 p-5 shadow-2xl border-2 border-white rounded-2xl flex justify-between items-center '>
        <div className='md:flex md:visible hidden '>
            ChatApp
        </div>   
        <div  className='md:hidden flex'>
            <Menu onClick={colllapseNavbar}/>
        </div>
    <div className={`md:flex gap-5 items-center md:flex-row md:relative flex flex-col absolute bg-gradient-to-tr  w-[50vw] md:w-fit top-5 duration-300 py-5 md:py-0 md:bg-transparent md:top-0 rounded-lg h-full md:h-fit border-white   ${window.innerWidth<=768  && (hamburger? "-left-100" : "left-0")} }`}>
    
            {/* <SearchIcon className='cursor-pointer hover:bg-gray-500 text-center rounded-2xl duration-150' onClick={handleSearch}/>
             */}
             <CrossIcon className='rotate-45 md:hidden absolute top-2 right-2' onClick={colllapseNavbar}/>
             <SearchDialog />
            <AddFriends users={users}/>
            <AddGroups users={users} />
            {/* <Notifications className='cursor-pointer hover:bg-gray-500 rounded-2xl duration-150' onClick={handleNotification}/>
            
            */}
            <NotificationDialog />
            <Logout className='cursor-pointer  rounded-2xl duration-150' onClick={handleLogout}/>
        </div>
    </header>
  )
}

export default Header
