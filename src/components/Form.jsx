import style from './form.module.css'
import toast, { Toaster } from 'react-hot-toast'
export function Form() {

  /* --- pop ups toast --- */

  const notify = () => toast.success('Mensaje enviado');

  return (
    <div className={style.formContainer}>
      <Toaster
  position="bottom-right"
  reverseOrder={false}
/>
      <form className={style.form} action="https://formsubmit.co/18d151a4e97c26387b6596af7bb9b01b" method="POST">
        <input placeholder='Nombre' className={style.input} name='Nombre'/>
        <input type='email' placeholder='  Email' className={style.input} name='Email'/>
        <input placeholder='Asunto' className={style.input} name='Asunto'/>
        <textarea placeholder='Mensaje' className={style.textarea} name='Mensaje'/>
        <button className={style.buttonForm} type='submit' onClick={notify}>ENVIAR</button>
        <input type='hidden' name='_next' value='http://192.168.0.15:5173' />
        <input type='hidden' name='_captcha' value='false'/>
      </form>
      </div>
    );
  }