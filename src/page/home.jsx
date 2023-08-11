//react libraries
import { useState, useEffect, useRef } from "react";
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

//components
import { Form } from "../components/Form";
import { WorksWide } from "../components/worksPopUps";
import * as effect from "../components/gsapEffects/gsapEffect";
import pdf from "../pdfCv/franciscoMartinezCv.pdf";
import { SayHello } from "../components/sayHello";

export function Home() {
    /* -- hello Word -- */
    console.log(
        "%c hecho con muchisimo amor por: EX MACHINA",
        "background:red; color: white;"
    );

    const mediaQuery = window.matchMedia("(max-width: 768px)");

    /* -- referencences and animations -- */

    // init container
    const initContainerRef = useRef(null);
    const titleFirstScreenRefA = useRef(null);
    const titleFirstScreenRefB = useRef(null);
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
    // contact container
    const contactTitleRef = useRef(null);
    const emailFormAndLinksRef = useRef(null);

    useEffect(() => {

        //init container

        const containerBeginOpacity ={
        refElementToMove: initContainerRef.current,
        firstTitle: titleFirstScreenRefA.current,
        secondTitle: titleFirstScreenRefB.current
        }
        effect.opacityEffectToShow(containerBeginOpacity)

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
            effect.translateYgsapEffect(contactTitleWideEffect);
        }
    }, []);

    /* -- about buttons -- */

    const handleClickDownloadCv = ()=>{
        
    }

    /* -- portfolio buttons --*/

    const [showWorks, setShowWorks] = useState({ prop1: false, prop2: "" });

    const virtualWaiter = <WorksWide mediaQuery={mediaQuery} />;

    const elCamino = mediaQuery.matches ? (
        <p>soy una chorrada</p>
    ) : (
        <p>soy el camino grande</p>
    );

    const camperWord = mediaQuery.matches ? (
        <p>soy camper pequeño</p>
    ) : (
        <p>soy camper grande</p>
    );

    const handleClickWaiter = () => {
        setShowWorks({ prop1: true, prop2: virtualWaiter });
    };
    const handleClickElCamino = () => {
        setShowWorks({ prop1: true, prop2: elCamino });
    };
    const handleClickCamper = () => {
        setShowWorks({ prop1: true, prop2: camperWord });
    };
  /* -- writer machne effect -- */

    const phrase = {
        phrase: "Y mucho más, pero eso... eso es otra historia.",
    };

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
                            Designer &
                        </h2>
                    </div>
                    <div className={style.hiddenContainer}>
                        <h2
                            className={style.designDeveloperTitle}
                            ref={titleFirstScreenRefB}>
                            Developer
                        </h2>
                    </div>
                </div>
                <div className={style.noPolitePhraseContainer}>
                    <SayHello phrase={phrase} />
                </div>
            </div>
            <div className={style.aboutMainContainer}>
                <div className={style.titleAndPharseFullContainer}>
                    <div className={style.titleAboutMeContainer}>
                        <div className={style.hiddenContainer}>
                            <div>
                                <img
                                    className={style.cancelLine}
                                    src={cancelLine} ref={cancelLineRef}
                                />
                            </div>
                            <h2 ref={titleAboutMeRef}>.ABOUT ME</h2>
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
                            Tomo conocimientos <b>UI/UX</b> para crear una experiencia,
                            analizo las posibilides, creo bocetos y estructuras.
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
                            <br />
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>SASS-Css</li>
                            <li>Python</li>
                            <li>Django-Rest</li>
                        </p>
                    </div>
                    <img
                        ref={secondArrowRef}
                        className={style.arrowsAbout}
                        src={arrow3}
                        alt={"flecha"}
                    />
                    <div
                        className={style.backgroundContainerAbouThree}
                        ref={thirdBallonRef}>
                        <p className={style.handWrite}>
                            y lo que obtienes es un resultado eficiente único e
                            innolvidable
                        </p>
                    </div>
                </div>
                <div className={style.aboutContentBottomContainer}>
                    <div className={style.designerExplanationContainer}>
                        <p>
                            Pues eso, tienes un diseñador gráfico e industrial
                            con conocimientos en programación frontend y
                            backend.{' '}
                            <a href={'/MiCv'} className={style.buttonToCv}>
                                 ¿quieres saber más de lo que hago?
                            </a>
                            <br />O si prefieres puedes descargar{' '}
                            <button onClick={handleClickDownloadCv} className={style.buttonToCv}>
                                mi cv
                            </button>{" "}
                            en .pdf
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.worksMainContainer}>
                <div
                    className={style.hiddenContainer}
                    ref={titleWorksTriggerRef}>
                    <h2 ref={titleWorksRef}>.WORKS</h2>
                </div>
                <div className={style.worksContentContainer}>
                    <div>{showWorks.prop1 && showWorks.prop2}</div>
                    <div className={style.worksPortfolioLinkContainer}>
                        <div>
                            <button
                                className={style.worksButton}
                                onClick={handleClickWaiter}>
                                Virtual Waiter
                            </button>
                            <p className={style.worksExplanationLine}>
                                -- Website design and development --
                            </p>
                        </div>
                        <div>
                            <button
                                className={style.worksButton}
                                onClick={handleClickElCamino}>
                                El camino
                            </button>
                            <p className={style.worksExplanationLine}>
                                -- Design, development and backend --
                            </p>
                        </div>
                        <div>
                            <button
                                className={style.worksButton}
                                onClick={handleClickCamper}>
                                Camper World
                            </button>
                            <p className={style.worksExplanationLine}>
                                -- Design and development --
                            </p>
                        </div>
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
