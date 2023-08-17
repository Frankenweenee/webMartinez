import { useEffect } from 'react';
import style from './sayHello.module.css'

export function SayHello({phrase}) {

  

  useEffect(() => {
    const startingPhrase = phrase.phrase
   
    function rendeWithDelay(text, delay) {
        const firstLoop = text.replace(/ /g, '\u00a0');
        const caracter = firstLoop.split("");
        caracter.map((caracter, index) => {
            setTimeout(() => {
                document.getElementById("myElement").innerText += caracter;
            }, index * delay);
        });
        
    }

    setTimeout(()=>{
      rendeWithDelay(startingPhrase, 30)},1000)

    }, [])
  
  
  return (
    <p className={style.sayHelloParagraph} id="myElement"/>
  );
}




