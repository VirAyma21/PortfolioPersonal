import React from "react"
import LinkedinIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon  from '@mui/icons-material/GitHub'
import  WhatsApp  from "@mui/icons-material/WhatsApp"

import './footer.css'


 const Footer = () => {
    
    return ( 
        <div className="footer">
            <div className="socialMedia"> 
               <a href="https://www.linkedin.com/in/virginia-aymar%C3%A1-del-roc%C3%ADo-romero/" target="_blank"><LinkedinIcon/></a> 
               <a href="https://github.com/VirAyma21" target="_blank"><GitHubIcon/></a> 
                <WhatsApp/>
            </div> 
            <p> &copy; 2023 Virginia Romero </p>
        </div>
    ) }

export default Footer;