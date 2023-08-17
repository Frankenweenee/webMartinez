//images
import image1 from '../img/keepWorking.jpg'
//styles
import style from './keepWorking.module.css'
//components
import { SayHello } from './sayHello'

export function KeepWorking() {

  const phrase = 'Estamos trabajando en ello'
  return (
    <>
    <div className={style.mainContainer}>
        <img src={image1} alt="Boceto de un robot dibujando en una mesa" />
    </div>
    <h1><SayHello phrase={phrase}/></h1>
    </>
  )
}

