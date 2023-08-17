//react libraries
import { useState, useEffect, useRef } from "react";
import toast, { Toaster } from 'react-hot-toast'
import { HashLink as Link } from 'react-router-hash-link';
//css
import style from "./home.module.css";
//images
import arrow3 from "../img/arrow3.svg";
import arrow4 from "../img/arrow4.svg";
import cancelLine from "../img/cancel.svg";
//icons
import {
    PiEnvelopeLight,
    PiLinkedinLogoLight,
    PiGithubLogoLight,
} from "react-icons/pi";
import { AiFillStar } from "react-icons/ai";
//components
import {
    VirtualWaiter,
} from "../components/virtualWaiter";
import { MyWeb } from "../components/myWeb";
import { Form } from "../components/Form";
import * as effect from "../components/gsapEffect";
import pdf from "../pdfCv/franciscoMartinezCv.pdf";
import { SayHello } from "../components/sayHello";
import { Projects } from "../components/Projects";

export function Home() {
    /* -- hello Word -- */

    console.log("%c hecho por : EX MACHINA", "background:red; color: white;");
    const isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        );

    function setFullscreen() {
        if (isMobile) {
            window.scrollTo(0, 1);
        }
    }

    window.onload = setFullscreen;

    const mediaQuery = window.matchMedia("(max-width: 768px)");

    /* -- referencences and animations -- */

    // init container
    const initContainerRef = useRef(null);
    const titleFirstScreenRefA = useRef(null);
    const titleFirstScreenRefB = useRef(null);
    const esMasChickRef = useRef(null);
    // about container
    const titleAboutMeRef = useRef(null);
    const cancelLineRef = useRef(null);
    const hacerPorTiRef = useRef(null);
    const firstBallonRef = useRef(null);
    const secondBallonRef = useRef(null);
    const thirdBallonRef = useRef(null);
    const firstArrowRef = useRef(null);
    const secondArrowRef = useRef(null);
    //works container
    const titleWorksTriggerRef = useRef(null);
    const titleWorksRef = useRef(null);
    const worksSpeechContainerRef = useRef(null);
    // contact container
    const contactTitleRef = useRef(null);
    const emailFormAndLinksRef = useRef(null);

    useEffect(() => {

        //init container

        const containerBeginOpacity = {
            refElementToMove: initContainerRef.current,
            firstTitle: titleFirstScreenRefA.current,
            secondTitle: titleFirstScreenRefB.current,
            joke: esMasChickRef.current,
        };
        effect.opacityEffectToShow(containerBeginOpacity);

        // about container

        const aboutTitleEffect = {
            refElementToMove: titleAboutMeRef.current,
            refTrigger: titleAboutMeRef.current,
            posStart: "center 85%",
            cancelLine: cancelLineRef.current,
            hacerPorTi: hacerPorTiRef.current,
            opacityTrigger: titleAboutMeRef.current,
            firstBallon: firstBallonRef.current,
            firstArrow: firstArrowRef.current,
            secondBallon: secondBallonRef.current,
            secondArrow: secondArrowRef.current,
            thirdBallon: thirdBallonRef.current,
        };
        effect.translateAboutEffect(aboutTitleEffect);

        //works container

        const worksTitleEffect = {
            refElementToMove: titleWorksRef.current,
            refTrigger: titleWorksTriggerRef.current,
            posStart: "bottom 70%",
        };
        effect.bounceUpGsapEffect(worksTitleEffect);

        //contact container

        if (mediaQuery.matches) {
            const contactTitleMobileEffect = {
                refElementToMove: contactTitleRef.current,
                refTrigger: contactTitleRef.current,
                posStart: "bottom 95%",
            };
            effect.translateXgsapEffect(contactTitleMobileEffect);
        } else {
            const contactTitleWideEffect = {
                refElementToMove: contactTitleRef.current,
                refTrigger: emailFormAndLinksRef.current,
                posStart: "center 60%",
            };
            effect.translateXRightGsapEffect(contactTitleWideEffect);
        }
    }, []);

    /* -- about buttons -- */

    const [showWork, setShowWork] = useState({ prop1: false, prop2: "" });

    const prop = showWork.prop1;

    const speech = (item) => {
        if (item === false)
            return (
                <>
                    {" "}
                    <p>
                        He escogido estos proyectos, ya que son todo el
                        recorrido desde la idea misma hasta su finalización.{" "}
                    </p>
                    <p>
                        Son una muestra tanto del diseño gráfico como la
                        creación del código en búsqueda de soluciones que
                        produzcan impacto y a su vez sean funcionales.{" "}
                    </p>
                    <p>
                        Pero sobre todo llevan la impronta de mis sensibilidades
                        y capacidades.
                    </p>{" "}
                </>
            );
    };
    
    
        const handleVirtualWaiter = () =>{
            effect.workBouncelong({refElementToMove:worksSpeechContainerRef.current});
            effect.workBounce({refElementToMove: titleWorksRef.current});
            setShowWork({ prop1: true, prop2: <VirtualWaiter /> });
        }
        const handleMyWeb = () => {
            effect.workBouncelong({refElementToMove:worksSpeechContainerRef.current});
            effect.workBounce({refElementToMove:titleWorksRef.current});
            setShowWork({ prop1: true, prop2: <MyWeb /> });
        };
        const handleDesigns = ()=>{
            effect.workBouncelong({refElementToMove:worksSpeechContainerRef.current}); 
            setShowWork({ prop1: true, prop2: <Projects /> });}
    

    /* -- writer machine effect -- */
    
    const phrase = mediaQuery.matches
    ? { phrase: "Y mucho más, pero eso...\neso es otra historia." }
    : { phrase: "Y mucho más, pero eso... eso es otra historia." };
    
    const success = () => toast.success('Cv descargado');
    return (
        <>
            <div
                className={style.initBackgroundContainer}
                ref={initContainerRef}>
                <div className={style.initContentContainer}>
                    <div className={style.hiddenContainer}>
                        <h2
                            className={style.designDeveloperTitle}
                            ref={titleFirstScreenRefA}>
                            DESIGNER <span className={style.andCompany}>&</span>
                        </h2>
                    </div>
                    <div className={style.hiddenContainer}>
                        <h2
                            className={style.designDeveloperTitle}
                            ref={titleFirstScreenRefB}>
                            DEVELOPER
                        </h2>
                        <p className={style.enIngles} ref={esMasChickRef}>
                            (¡En ingles. Que es más chic!)
                        </p>
                    </div>
                </div>
                <div className={style.noPolitePhraseContainer}> <SayHello phrase={phrase} />
                </div>
            </div>
            <div id='about' className={style.aboutMainContainer}>
                <div className={style.titleAndPharseFullContainer}>
                    <div className={style.titleAboutMeContainer}>
                        <div className={style.hiddenContainer}>
                            <div>
                                <img
                                    className={style.cancelLine}
                                    src={cancelLine}
                                    ref={cancelLineRef}
                                />
                            </div>
                            <h2 ref={titleAboutMeRef}>.SOBRE MI</h2>
                        </div>
                    </div>
                    <div
                        className={style.hacerPorTiContainer}
                        ref={hacerPorTiRef}>
                        <p className={style.handWriteToAddIdeas}>
                            ¡Que puedo hacer YO por ti!
                        </p>
                    </div>
                </div>
                <div className={style.aboutContentContainer}>
                    <div
                        className={style.backgroundContainerAboutOne}
                        ref={firstBallonRef}>
                        <p className={style.handWrite}>
                            Me encanta el <b>UI/UX</b>, boceto, pruebo, busco
                            soluciones, creo estructuras, analizo las
                            posibilidades, mirando todo desde la perspectiva del
                            usuario. Luego peleo mucho buscando el resultado...
                            eso sí...
                        </p>
                    </div>
                    <img
                        ref={firstArrowRef}
                        className={style.arrowsAbout}
                        src={arrow4}
                        alt="flecha"
                    />
                    <div
                        className={style.backgroundContainerAboutTwo}
                        ref={secondBallonRef}>
                        <p className={style.handWrite}>
                            Hago uso de tecnologías como:
                            <br />
                            <AiFillStar size={16} />
                            JavaScript <AiFillStar size={16} />
                            HTML <br />
                            <AiFillStar size={16} />
                            SASS-Css <AiFillStar size={16} />
                            Python <br />
                            <AiFillStar size={16} />
                            Django-Rest
                        </p>
                    </div>
                    <img
                        ref={secondArrowRef}
                        className={style.arrowsAbout}
                        src={arrow3}
                        alt={"flecha"}
                    />
                    <div
                        className={style.backgroundContainerAboutThree}
                        ref={thirdBallonRef}>
                        <p className={style.handWrite}>
                            Finalmente llegamos a un producto eficiente e
                            inolvidable puliendo una y otra vez, buscando
                            detalles, intentando que todo sea perfecto. Esto es
                            la artesanía moderna.
                        </p>
                    </div>
                </div>
                <div className={style.aboutContentBottomContainer}>
                    <div className={style.designerExplanationContainer}>
                        <p>
                            En resumen, soy un diseñador gráfico e industrial
                            con conocimientos en programación frontend y
                            backend.{" "}
                            <Link to={"/miCv#top"} className={style.buttonToCv}>
                                Aquí tienes mi Cv online
                            </Link>
                            <br />O si prefieres puedes descargar{" "}
                            <a
                                className={style.buttonToCv}
                                onClick={success}
                                    href={pdf} download="Cv_Francisco_Martinez.pdf" >
                                mi cv
                            </a>{" "}
                            en .pdf
                        </p>
                    </div>
                    <Toaster
  position="bottom-right"
  reverseOrder={false}
/>
                </div>
            </div>
            <div id='works' className={style.worksMainContainer}>
                <div className={style.worksContainerTitleAndSpeech}>
                    <div
                        className={style.hiddenContainer}
                        ref={titleWorksTriggerRef}>
                        <h2 ref={titleWorksRef}>.PROYECTOS</h2>
                    </div>

                    <div
                        className={style.worksSpeechContainer}
                        ref={worksSpeechContainerRef}>
                        {speech(prop)}
                        {showWork.prop1 && showWork.prop2}
                    </div>
                </div>
                <div className={style.worksPortfolioLinkContainer}>
                    <div>
                        {mediaQuery.matches ? (
                            <Link className={style.worksButton} to={"/virtual_waiter"}>
                                Virtual Waiter
                            </Link>
                        ) : (
                            <button
                                className={style.worksButton}
                                onClick={handleVirtualWaiter}>
                                Virtual Waiter
                            </button>
                        )}
                        <p className={style.worksExplanationLine}>
                            -- Design, development and backend --
                        </p>
                    </div>
                    <div>
                        {mediaQuery.matches ? (
                            <Link className={style.worksButton} to={"/mi_web"}>
                                My Web
                            </Link>
                        ) : (
                            <button
                                className={style.worksButton}
                               onClick={handleMyWeb}>
                               my Web
                            </button>
                        )}
                        <p className={style.worksExplanationLine}>
                            -- Website design and development --
                        </p>
                    </div>
                    <div>
                    {mediaQuery.matches ? (
                            <Link className={style.worksButton} to={"/mini_proyectos"}>
                                Proyectos
                            </Link>
                        ) : (
                            <button
                                className={style.worksButton}
                               onClick={handleDesigns}>
                               Proyectos
                            </button>
                        )}
                        <p className={style.worksExplanationLine}>
                            -- Design --
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.contactMainContainer}>
                <div className={style.hiddenContactContainer}>
                    <h2 ref={contactTitleRef}>.CONTACTO</h2>
                </div>
                <div
                    className={style.iconLinkNetworksContainer}
                    ref={emailFormAndLinksRef}>
                    <div>
                        <div className={style.divIconLinkNetworks}>
                            <PiEnvelopeLight className={style.reactIcons} />
                            <p className={style.buttonLinkNetworks}>
                                FRAN.MARTINEZ.CLAVIJO@GMAIL.COM
                            </p>
                        </div>
                        <div className={style.divIconLinkNetworks}>
                            <PiLinkedinLogoLight className={style.reactIcons} />
                            <a
                                className={style.buttonLinkNetworks}
                                href="https://www.linkedin.com/in/francisco-javier-mart%C3%ADnez-clavijo-b4943a266/">
                                LINDEKN
                            </a>
                        </div>
                        <div className={style.divIconLinkNetworks}>
                            <PiGithubLogoLight className={style.reactIcons} />
                            <a
                                className={style.buttonLinkNetworks}
                                href="https://github.com/Frankenweenee">
                                GITHUB
                            </a>
                        </div>
                    </div>
                    <Form />
                </div>
            </div>
        </>
    );
}
