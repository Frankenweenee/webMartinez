import { useState, useEffect } from "react";
import Modal from "react-modal";
import style from "./worksPopUps.module.css";
import { PiGithubLogoThin } from "react-icons/pi";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import imagen1 from "../img/imagen1.mobile.jpg";

export function WorksWide({ mediaQuery }) {
    const [modalAbierto, setModalAbierto] = useState(false);

    const abrirModal = () => {
        setModalAbierto(true);
    };

    const cerrarModal = () => {
        setModalAbierto(false);
    };

    const visitWeb = () =>
        (window.location.href = "https://estaeslaotrapagina.com/");
    const visitGithub = () => (window.location.href = "https://github.com/");

    useEffect(() => {
        if (mediaQuery.matches) {
            abrirModal();
        }
    }, [mediaQuery]);

    const Wide = () => {
        return (
            <div className={style.mainContainer}>
                <h3>FullStack Project</h3>
                <div className={style.contentContainer}>
                    <div className={style.textContainer}>
                        <p>
                            Proyecto de una carta virtual para pedir desde la
                            mesa.
                            <br /> Utiliza un backend en
                            <strong>Django-Python</strong> y un fronend con
                            <strong>React</strong> así como Axios para el
                            consumo de la Api.
                        </p>
                    </div>
                    <div className={style.imageContainer}>
                        <img src={imagen1} alt="" />
                    </div>
                </div>
                <div className={style.technologiesList}>
                    <ul>React</ul>
                    <ul>Javascript</ul>
                    <ul>Html</ul>
                    <ul>Css</ul>
                    <ul>
                        <button
                            className={style.gitButton}
                            onClick={visitGithub}>
                            <PiGithubLogoThin size={30} />
                        </button>
                    </ul>
                </div>
            </div>
        );
    };
    return (
        <>
            {mediaQuery.matches ? null : <Wide />}
            <Modal
                className={style.modalStyle}
                appElement={document.getElementById("root")}
                isOpen={modalAbierto}>
                <div className={style.mainContainer}>
                    <button className={style.backButton} onClick={cerrarModal}>
                        <IoChevronBackCircleSharp />
                    </button>
                    <h3>FullStack Project</h3>
                    <div className={style.contentContainer}>
                        <div className={style.textContainer}>
                            <p>
                                Proyecto de una carta virtual para pedir desde
                                la mesa.
                                <br /> Utiliza un backend en
                                <strong>Django-Python</strong> y un fronend con
                                <strong>React</strong> así como Axios para el
                                consumo de la Api.
                            </p>
                        </div>
                        <div className={style.imageContainer}>
                            <img src={imagen1} alt="" />
                        </div>
                    </div>
                    <div className={style.technologiesList}>
                        <ul>React</ul>
                        <ul>Javascript</ul>
                        <ul>Html</ul>
                        <ul>Css</ul>
                        <ul>
                            <button
                                className={style.gitButton}
                                onClick={visitGithub}>
                                <PiGithubLogoThin size={33} />
                            </button>
                        </ul>
                    </div>
                </div>
            </Modal>
        </>
    );
}
