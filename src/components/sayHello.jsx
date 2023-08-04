
export function SayHello() {

    const startingPhrase = 'Y muchas cosas más, pero eso esas historias son para un after work un viernes por la tarde.'

    function rendeWithDelay(text, delay) {
        const firstLoop = text.replace(/ /g, '\u00a0');
        const caracter = firstLoop.split("");
        caracter.map((caracter, index) => {
            setTimeout(() => {
                document.getElementById("myElement").innerText += caracter;
            }, index * delay);
        });
        
    }

    rendeWithDelay(startingPhrase, 30);
  

  return (
    <p id="myElement"/>
  );
}




