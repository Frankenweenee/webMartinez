//libraries
import { HashLink as Link } from 'react-router-hash-link';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { gsap } from "gsap";
//styles
import style from "./myCv.module.css";
//images
import photoCv from "../img/photoCv.jpg";
import clip from "../img/paperClip.svg";
//data
import data from "./jobs.json";
//icons
import { CiCircleChevLeft } from "react-icons/ci";

gsap.registerPlugin(ScrollTrigger);

export function MyCv() {
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
        <>
        <div id="top" className={style.mainContainer}>
            <Link to={"/#about"} className={style.buttonBackHome}>
                <CiCircleChevLeft className={style.buttonBackIcon} /> To Home
            </Link>
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
                    <p><b>IDIOMAS:</b> Español, Ingles e Italiano en alto nivel.</p>
                </div>
                <img
                    className={style.photoCv}
                    src={photoCv}
                    alt="La cara de Francisco Martínez, en resumen tupé y nariz"
                />
                <img className={style.clip} src={clip} />
            </div>
            <main className={style.cronologyContainer}>
                <h3 className={style.title}>QUE HE HECHO</h3>
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
         
         </>
    );
}
