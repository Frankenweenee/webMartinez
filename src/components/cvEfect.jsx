import style from "./myCv.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import data from "./jobs.json";

gsap.registerPlugin(ScrollTrigger);

export function JobsComponent() {
   const jobs = data;

    function handleId(item) {
        return `year-${item}`;
    }

    function handleIdContainer(item) {
        return `container-${item}`;
    }

   
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


    const right = style.jobContainerRight;
    const left = style.jobContainerLeft;
    const handleContainer = (value) => {
        return value % 2 === 0 ? right : left;
    };
    return(
        <>
        <h1>hola</h1>
            {" "}
            {jobs.map((item) => (
                <div  className={style.yearContainer} key={item.id}>
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
        </>
   )
}
