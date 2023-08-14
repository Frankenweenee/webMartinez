import { useState, useEffect } from "react";
import Modal from "react-modal";
import style from "./worksPopUps.module.css";
import { PiGithubLogoThin } from "react-icons/pi";
import imagen1 from "../img/virtualWaiterImage.jpg";

Modal.setAppElement("#root");

export function WorksWide({ props }) {
    const item = props;

    const workDescription = (data) => {
        console.log(data);

        if (data.work === "virtualWaiter") {
            return (
                <p>
                    Proyecto de una carta virtual para pedir desde la mesa. Un
                    reto personal con el deseo que sea funcional y que sirva a
                    pequeños negocios.
                    <br /> Utiliza un backend en
                    <b> Django-Python</b> y un fronend con
                    <b> React</b> así como Axios para el consumo de la Api, todo
                    analizado para ser lo más intuitivo para el cliente interno
                    y externo. Si tienes un minuto te lo explico mejor.
                </p>
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
    };

    return (
        <div className={style.mainContainer}>
            <h3>FullStack Project</h3>
            <div className={style.contentContainer}>
                <div className={style.textContainer}>
                    {workDescription(item)}
                </div>
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
    );
}
