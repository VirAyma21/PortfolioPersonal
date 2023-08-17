import React, { useEffect, useState } from "react"

import {Link, useLocation} from 'react-router-dom'

import ReorderIcon from '@mui/icons-material/Reorder'

import './navbar.css'
import Swal from 'sweetalert2'



const Navbar= () =>{
    const [expandNavbar, setExpandNavbar] = useState(false)

    const location = useLocation();

    useEffect(()=>{
        setExpandNavbar(false);
    },[location])

    const modalConstruction= () =>{
        Swal.fire({
            title: 'Proximamente',
            text: 'Página en construcción.',
            imageUrl: 'https://cdn.icon-icons.com/icons2/3151/PNG/512/web_development_maintenance_construction_teamwork_icon_192840.png',
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: 'Custom image',
          })
    }
    return(
        <div className="navbar" id={expandNavbar ? "open" : "close"}>

            <div className="toggleButton">
                <button onClick={()=>{setExpandNavbar((prev)=> !prev);}}>
                <ReorderIcon/>
                </button>

            </div>
            <div className="links">
             <Link to='/' >Home</Link>
             <Link to='/projects' >Mis Proyectos</Link>
             <Link to='/contacto' >Contacto</Link>
            </div>
        </div>
    )
}

export default Navbar;
