import React from "react";



const ProjectItem = ({image,name,url}) =>{
    return (
        <div className="projectItem">
          <div style={{backgroundImage: `url(${image})`}} className="bgImage"/>
          <a target="blank" href={url}>{name}</a>
      
        </div>
    )
    }
    
    export default ProjectItem;