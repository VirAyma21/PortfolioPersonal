import React from "react"; 

import ProjectItem from "./ProjectItem";

import agendaElectronica from '../../assets/agendaElectronica.png'
import peluqueria from '../../assets/peluqueria.png'
import calculadora from '../../assets/calculadora.png'
import maquetado from '../../assets/maquetado.png'
import calculadoraCientifica from '../../assets/calculadoraCientificaReact.png'
import editorMeme from '../../assets/editorMemes.png'


import './projects.css';

const Projects = () =>{
return (
    <div className="projects">
   
       <div className="projectsList">
        <ProjectItem url="https://github.com/VirAyma21/Java_IGU_app_escritorio_Agenda_Electr-nica" name="Agenda Electronica - JAVA" image={agendaElectronica}/>
        <ProjectItem url="https://github.com/VirAyma21/Java_MySQL_formulario_app_Escritorio" name="Base de datos Peluqueria Canina - JAVA" image={peluqueria}/>
        <ProjectItem url="https://virayma21.github.io/Calculadora_Javascript/" name="Calculadora - JavaScript" image={calculadora}/>
        <ProjectItem url="https://virayma21.github.io/MaquetadoMobile-HUMAYA-/" name="Maquetado - CSS - Bootstrap" image={maquetado}/>
        <ProjectItem url="https://63801f7d0c0bb20008f5b901--storied-tapioca-177c1c.netlify.app/" name="Calculadora Cientifica - React" image={calculadoraCientifica}/>
        <ProjectItem url="https://guileless-conkies-389131.netlify.app/" name="Editor de memes - React" image={editorMeme}/>
        
       </div>
    </div>
)
}

export default Projects;