import style from "./myCv.module.css";
import photoCv from "../img/photoCv.jpg";
import clip from "../img/paperClip.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import data from "./jobs.json";
import { useEffect } from "react";
import { CiCircleChevLeft, CiHospital1 } from "react-icons/ci";

gsap.registerPlugin(ScrollTrigger);

export function MyCv() {
    const mediaQuery = window.matchMedia("(max-width:768px)");
    const jobs = data;

    function handleId(item) {
        return `year-${item}`;
    }

    function handleIdContainer(item) {
        return `container-${item}`;
    }

    useEffect(() => {
        jobs.forEach((item) => {
            const xMove = item.id % 2 === 0 ? 800 : -800;
            gsap.from(`#${handleIdContainer(item.id)}`, {
                x: xMove,
                scrollTrigger: {
                    trigger: `#${handleId(item.id)}`,
                    start: "center 80%",
                    end: "center 50%",
                   /* markers: {
                        startColor: "aqua",
                        endColor: "green",
                        fontSize: '3vh',
                    },*/
                },
            });
        });
    }, [jobs]);

    const right = style.jobContainerRight;
    const left = style.jobContainerLeft;
    const handleContainer = (value) => {
        return value % 2 === 0 ? right : left;
    };

    return (
        <div className={style.mainContainer}>
            <a href={"/"} className={style.buttonBackHome}>
                <CiCircleChevLeft className={style.buttonBackIcon} /> To Home
            </a>
            <div className={style.personalCard}>
                <div className={style.personalCardInfo}>
                    <p>
                        <b>NOMBRE:</b> Francisco Javier <br /> Martínez Clavijo
                    </p>
                    <br />
                    <p>
                        <b>UBICACIÓN:</b> Madrid - Esp.
                    </p>
                    <br />
                    <p>
                        <b>PROFESIÓN:</b> Diseñador y desarrollador
                    </p>
                    <br />
                    <p>IDIOMAS: Español, Ingles e Italiano en alto nivel.</p>
                </div>
                <img
                    className={style.photoCv}
                    src={photoCv}
                    alt="La cara de Francisco Martínez, en resumen tupé y nariz"
                />
                <img className={style.clip} src={clip} />
            </div>
            <main className={style.cronologyContainer}>
                <h2>CRONOLOGIA</h2>
                <div className={style.line}></div>
                {jobs.map((item) => (
                    <div className={style.yearContainer} key={item.id}>
                        <h3 className={style.year} id={handleId(item.id)}>
                            {item.year}
                        </h3>
                        <div
                            className={`${style.jobContainer} ${handleContainer(
                                item.id
                            )}`}
                            id={handleIdContainer(item.id)}>
                            <div className={style.titleInJobContainer}>
                                {item.jobType}
                            </div>
                            <div>
                                <span className={style.titleInJobContainer}>
                                    Empresa:{" "}
                                </span>
                                {item.company}
                            </div>
                            <div>
                                <span className={style.titleInJobContainer}>
                                    Tareas:{" "}
                                </span>
                                {item.description}
                            </div>
                        </div>
                        <div className={style.line}></div>
                    </div>
                ))}
            </main>
        </div>
    );
}
