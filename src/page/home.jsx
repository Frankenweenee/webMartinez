import style from "./home.module.css";
import image1 from "../img/image1.jpg";
import fondo1 from "../img/fondo1.jpg";
import {
    PiEnvelopeLight,
    PiLinkedinLogoLight,
    PiGithubLogoLight,
} from "react-icons/pi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState, useEffect, useRef } from "react";
import { Form } from "../components/Form";

import { WorksWide } from "../components/worksPopUps";
import {
    opacityEffectToHide,
    opacityEffectToShow,
    translateXgsapEffect,
    translateYgsapEffect,
    bounceUpGsapEffect,
} from "../components/gsapEffects/gsapEffect";

gsap.registerPlugin(ScrollTrigger);

export function Home() {
    /* -- query tamaño pantalla -- */
    

    const mediaQuery = window.matchMedia("(max-width: 768px)");

    /* -- referencences and animations -- */

    const initContainerRef = useRef(null);
    const titleAboutMeRef = useRef(null);
    const contactTitleRef = useRef(null);
    const contactTriggerRef = useRef(null);
    const firstImageAboutSectionRef = useRef(null);
    const firstParagraphContainerAboutRef = useRef(null);
    const secondImageAboutSectionRef = useRef(null);
    const secondParagraphContainerAboutRef = useRef(null);
    const titleWorksRef = useRef(null);
    const emailFormAndLinksRef = useRef(null);

    useEffect(() => {
        const mainContainerBackgroundEffect = {
            refElementToMove: initContainerRef.current,
            refTrigger: titleAboutMeRef.current,
            posStart: "center 40%",
            posEnd: "center 30%",
        };
        opacityEffectToHide(mainContainerBackgroundEffect);

        const aboutTitleEffect = {
            refElementToMove: titleAboutMeRef.current,
            refTrigger: titleAboutMeRef.current,
            posStart: "center 85%",
        };
        translateXgsapEffect(aboutTitleEffect);

        const aboutFirstImageBounceEfect = {
            refElementToMove: firstImageAboutSectionRef.current,
            refTrigger: titleAboutMeRef.current,
            posStart: "110% 80%",
        };
        bounceUpGsapEffect(aboutFirstImageBounceEfect);

        const firstContainerParagraphInAbout = {
            refElementToMove: firstParagraphContainerAboutRef.current,
            refTrigger: firstParagraphContainerAboutRef.current,
            posStart: "top 80%",
        };
        opacityEffectToShow(firstContainerParagraphInAbout);

        const aboutSecondImageBounceEfect = {
            refElementToMove: secondImageAboutSectionRef.current,
            refTrigger: firstParagraphContainerAboutRef.current,
            posStart: "bottom 80%",
        };
        bounceUpGsapEffect(aboutSecondImageBounceEfect);

        const secondContainerParagraphInAbout = {
            refElementToMove: secondParagraphContainerAboutRef.current,
            refTrigger: secondParagraphContainerAboutRef.current,
            posStart: "top 80%",
        };
        opacityEffectToShow(secondContainerParagraphInAbout);

        const worksTitleEffect = {
            refElementToMove: titleWorksRef.current,
            refTrigger: secondParagraphContainerAboutRef.current,
            posStart: "bottom 70%",
        };
        bounceUpGsapEffect(worksTitleEffect);

        if (mediaQuery.matches) {
            const contactTitleMobileEffect = {
                refElementToMove: contactTitleRef.current,
                refTrigger: contactTriggerRef.current,
                posStart: "bottom 95%",
            };
            translateXgsapEffect(contactTitleMobileEffect);
        } else {
            const contactTitleWideEffect = {
                refElementToMove: contactTitleRef.current,
                refTrigger: emailFormAndLinksRef.current,
                posStart: "center 60%",
            };
            translateYgsapEffect(contactTitleWideEffect);
        }
    }, []);

    /* -- botones del portfolio --*/

    const [showWorks, setShowWorks] = useState({ prop1: false, prop2: "" });

    const virtualWaiter = <WorksWide mediaQuery={mediaQuery} />;

    const elCamino = mediaQuery.matches ? (
        <p>soy el camino pequeño</p>
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
    const inverseAboutContainer =
        style.aboutContentContainer + " " + style.mediaQueryInverseAbout;
    return (
        <>
        <p>{window.innerWidth}</p>
            <div
                className={style.initBackgroundContainer}
                ref={initContainerRef}>
                <div className={style.initContentContainer}>
                    <h2>
                        <span>Designer</span> &
                        <br />
                        Developer
                    </h2>
                </div>
            </div>
            <div className={style.aboutMainContainer}>
                <div className={style.titleAboutMeContainer}>
                    <h2 ref={titleAboutMeRef}>.ABOUT ME</h2>
                </div>
                <div className={style.aboutContentContainer}>
                    <img
                        ref={firstImageAboutSectionRef}
                        className={style.medium}
                        src={image1}
                        alt="Una escena de de un café donde se ve una mesa y encima un ordenador portatil"
                    />
                    <div
                        className={style.paragraphContainer}
                        ref={firstParagraphContainerAboutRef}>
                        <h4 className={style.titleSkillInAbout}>CREATIVIDAD</h4>
                        <p>
                            Siempre creando. Y tomo creatividad como el proceso
                            desde que se toma una idea o problema, se
                            transiciona a través de tomar diferentes
                            herramientas para llegar a una solución intentanto
                            de que sea lo más eficaz y eficiente posible.
                        </p>
                    </div>
                </div>
                <div className={inverseAboutContainer}>
                    <div
                        className={style.paragraphContainer}
                        ref={secondParagraphContainerAboutRef}>
                        <h4 className={style.titleSkillInAbout}>CODING</h4>
                        <p>
                            Encuentro fasciante el mundo desde donde comandos
                            abstractos se convierten en elementos bellos y
                            estético o elementoos funcionales, aplicando
                            distintas tecnologías, así como conceptos de diseño
                            UX/UI tanto de <strong>FRONTEND</strong> como en
                            <strong>BACKEND</strong>
                        </p>
                    </div>
                    <img
                        className={style.medium}
                        src={fondo1}
                        alt=""
                        ref={secondImageAboutSectionRef}
                    />
                </div>
            </div>
            <div className={style.worksMainContainer}>
                <h2 ref={titleWorksRef}>.WORKS</h2>
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
                <div className={style.hiddenContainer} ref={contactTriggerRef}>
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
