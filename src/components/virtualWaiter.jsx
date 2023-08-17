import { useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";

import style from "./works.module.css";

import { PiGithubLogoThin } from "react-icons/pi";
import { CiCircleChevLeft } from "react-icons/ci";

const Content = () => {
    return (
        <div className={style.mainContainer}>
            <h3>FullStack Project</h3>
            <div className={style.textContainer}>
                <p>
                    El proyecto consiste en una aplicación web que permite a los
                    clientes hacer pedidos desde la mesa usando el móvil.
                </p>
                <p>
                    Es una ayuda a pequeños negocios que no tengan sistemas POS.
                    Convierte el móvil tanto en carta como pasarela de pago y el
                    propietario puede llevar su inventario desde el móvil o un
                    portátil.
                </p>
                <p>
                    El cliente va a la aplicación usando un QR, lee, pide y paga
                    desde el móvil y recibe una confirmación y un tiempo medio
                    de espera.
                </p>
                <p>
                    Consume a través de <b>Aixos</b> un <b>API</b> creada en{" "}
                    <b>Django</b>. En front utilizo <b>React</b> y{" "}
                    <b>JavaScript</b> para darle estructura.
                    <Link
                        className={style.gitButton}
                        to={"https://exmachina.es/carta"}
                        target="_blank">
                        {" "}
                        ¿Quieres probar como funciona?
                    </Link>
                </p>
                <p>
                    ¿O ver como está hecho?{" "}
                    <Link
                        className={style.gitButton}
                        to="https://github.com/Frankenweenee/Waiter-App.git" 
                        target="_blank">
                        <PiGithubLogoThin size={30} />
                    </Link>
                </p>
            </div>
            <div className={style.technologiesList}>
                <ul>React</ul>
                <ul>Javascript</ul>
                <ul>Html</ul>
                <ul>Css</ul>
                <ul>Phyton-Django-Rest</ul>
            </div>
        </div>
    );
};

export function VirtualWaiter() {
    const toMoveRef = useRef(null);

    return (
        <div>
            <Content />
        </div>
    );
}

export function VirtualWaiterMobile() {
    return (
        <>
            <Link to={"/#works"} className={style.buttonBackHome}>
                <CiCircleChevLeft className={style.buttonBackIcon} /> To Home
            </Link>

            <Content />
        </>
    );
}
