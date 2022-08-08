import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import {IconButton} from '@mui/material';

import './Header.css';
function Header() {
  return (
    <div className='tinder-header'>
       <IconButton className='header-icons' fontSize='large'>
        <PersonIcon  fontSize='large'/>
        </IconButton >
       <img src='https://th.bing.com/th/id/R.fae8fae231447ccedc994b618aadc437?rik=HstoaDJru90GpQ&riu=http%3a%2f%2ftous-logos.com%2fwp-content%2fuploads%2f2018%2f04%2flogo-Tinder.png&ehk=uhmCYJ8tcC%2fqj6mzHv0SeOccq7tjs2f3dv3pIWrUJ88%3d&risl=&pid=ImgRaw&r=0' />
       <IconButton className='header-icons'  fontSize='large'>
       <InsertCommentIcon  fontSize='large'/>
       </IconButton>
        
    </div>
  )
}

export default Header
