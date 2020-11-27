import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = ()=>{
    return(
        <nav>
            <div>
                <ul>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/vlogs'>Vlogs</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/mongoForm'>MongoForm/AdminLogin</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar