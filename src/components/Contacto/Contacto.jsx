import {useRef, useState} from "react"; 

import emailjs from '@emailjs/browser';


import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './contacto.css'

import Swal from 'sweetalert2'


const Contacto = () =>{
    const [userName, setUserName] = useState('');
    const [userSurname, setUserSurname] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [message, setMenssage] = useState('');

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_m9e8dke', 'template_h1h5ucj', form.current, 'Od2MbniNQrXTJ6cnI')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };

      const mensajeEnviado = () =>{
        try{
            if ((userName=== '' || userEmail === '' || userSurname=== '' || message === '')) {
                Swal.fire('los campos deben se rellenados')
              } else {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Su comentario fué enviado con exito!',
                    showConfirmButton: false,
                    timer: 2000
                  })
              }
           
          }
         
        catch(error) {
            console.log(error.text);
          
      }
    }

    return (
    <div className="contacto">
         <h1>Contactame</h1>
         <div className="content">
            <div className="datos">
                <div><p><b>Email: </b><span>virginiaymararomero@gmail.com</span></p></div>
                <div><p><b>Telefono: </b><span>+54 379 5 000095</span></p></div>
            </div>
        <div className="formulario container ">
            <form ref= {form} onSubmit={sendEmail} >
                <div className="nombre row g-3">
                <div className="col-md-6">
                    <label for="inputName" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="inputName" name= "user_name" onChange={(event)=> {setUserName(event.target.value)}}/>
                </div>
                <div className="col-md-6">
                    <label for="inputSurname" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="inputSurname" name="user_surname" onChange={(event)=> {setUserSurname(event.target.value)}}/>
                </div>
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Correo Electrónico</label>
                    <input type="email" className="form-control" id="email" name="user_email" onChange={(event)=> {setUserEmail(event.target.value)}} />
                </div>
                <div className="mb-3">
                    <label for="mensaje" className="form-label">Comentario</label>
                    <textarea className="form-control" id="mensaje" rows="4" name="message" onChange={(event)=> {setMenssage(event.target.value)}}></textarea>
                </div>
                <button type="submit"  onClick={mensajeEnviado}  >Enviar</button>
            </form>
        </div>
        </div>


    </div>
    )
}

export default Contacto;