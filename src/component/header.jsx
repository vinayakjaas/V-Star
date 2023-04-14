import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Appstate } from '../App';

function Header(){
    const useAppstate=useContext(Appstate);
    

    return(
        <div className=" text-3xl flex justify-between items-center text-red-500 font-extrabold p-3 border-b-2 border-gray-500 ">
            
            <Link to={'/'}><div className='cursor-pointer'><span>Filmy<span className="text-white">Verse</span></span></div></Link>
            {useAppstate.login ?
            <Link to={'/addMovie'}><Button className='text-white'><h1 className="text-lg text-blue-500 flex items-center cursor-pointer"><AddIcon className='mr-2 text'/><span className='text-white'>Add New</span></h1></Button></Link>
            :
            <Link to={'/login'}><Button className='text-white'><h1 className="text-lg text-black bg-green-400 flex items-center cursor-pointer">Login </h1></Button></Link> 
            }
        </div>
    )
}



export default Header;
