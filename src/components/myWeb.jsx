import { useRef } from "react";

import style from "./works.module.css";

import { PiGithubLogoThin } from "react-icons/pi";
import { CiCircleChevLeft } from "react-icons/ci";

const Content = () => {
    return (
        <div className={style.mainContainer}>
            <h3>Proyecto frontend</h3>
            <div className={style.textContainer}>
                <p>
                    Mi portafolio personal, desde su concepción debía cumplir con la premisa de sentirme identificado con el resultado y que fuera sencilla y de fácil navegación.
                </p>
                <p>
                   Ha sido todo un reto a nivel de programación. Ya que la idea es que sea escalable en la medida que mi experiencia crezca.
                </p>
                <p>
                    
                    Utilizo <b>React</b> y{" "}
                    <b>JavaScript</b> y sin olvidar la funcionalidad del la página el eje es el diseño. El énfasis ha sido que cada componente y elemento hiciera exactamente lo que quería que hiciera en la idea.
                </p>
                <p>
                    ¿Quieres ver como está hecho?{" "}
                    <a
                        className={style.gitButton}
                        href="https://github.com/Frankenweenee/webMartinez">
                        <PiGithubLogoThin size={30} />
                    </a>
                </p>
            </div>
            <div className={style.technologiesList}>
                <ul>React</ul>
                <ul>Javascript</ul>
                <ul>Html</ul>
                <ul>Css</ul>
            </div>
        </div>
    );
};

export function MyWeb() {
    const toMoveRef = useRef(null);

    return (
        <div ref={toMoveRef}>
            <Content />
        </div>
    );
}

export function MyWebMobile() {
    return (
        <>
            <a href={"/"} className={style.buttonBackHome}>
                <CiCircleChevLeft className={style.buttonBackIcon} /> To Home
            </a>

            <Content />
        </>
    );
}
