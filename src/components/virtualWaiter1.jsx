import style from "./worksPopUps.module.css";
import { PiGithubLogoThin } from "react-icons/pi";
import imagen1 from "../img/virtualWaiterImage.jpg";
import alarm from "../img/alarm.mp3";

export function VirtualWaiter() {
    /*const item = props;

    const workDescription = (data) => {
        console.log(data);

        if (data.work === "virtualWaiter") {
            return (
           
            );
        } else if (data.work === "myWeb") {
            return (
                <p>
                    Mi web es una representación de mi mismo, la idea es dar una
                    imagen moderna sin perder la elegancia, la organización y la
                    claridad, sin embargo hago tachones, corrijo.{" "}
                </p>
            );
        } else if (data.work === "mix") {
            return (
                <p>
                    Esta es una selección de pequeños proyectos, tanto
                    personales como relacionados con la programación, pero
                    siempre desde el punto de vista del creador
                </p>
            );
        }

        return null;
    };*/
/*const handleAlarm = () => {
        const audio = document.createElement("audio");
        audio.src = alarm;

        function sonarAlarma() {
            audio.play();
            console.log("¡Alarma!");
        }
        setTimeout(sonarAlarma, 10000);
    };*/
    return (
        <div className={style.mainContainer}>
            <div className={style.title}>
                <h1>Virtual Waiter</h1>
            </div>

            <div className={style.contentContainer}>
                <h3>FullStack Project</h3>
                <div className={style.textContainer}>
                    <p>
                        El proyecto consiste en una aplicación web que permite a
                        los clientes hacer pedidos desde la mesa usando el
                        móvil.
                    </p>
                    <p>
                        La aplicación muestra una carta virtual con los
                        productos disponibles, los precios y los precios en su
                        versión de bar, e imágenes y las descripciones en la
                        versión con comidas.
                    </p>
                    <p>
                        Los clientes pueden seleccionar los productos que
                        desean, añadirlos al carrito, y confirmar el pedido. La
                        aplicación envía el pedido al sistema del bar, donde el
                        personal puede verlo y prepararlo.
                    </p>
                </div>
                <div className={style.technologiesList}>
                    <ul>React</ul>
                    <ul>Javascript</ul>
                    <ul>Html</ul>
                    <ul>Css</ul>
                    <ul>
                        <a
                            className={style.gitButton}
                            href="https://github.com/Frankenweenee/Waiter-App">
                            <PiGithubLogoThin size={30} />
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
}
