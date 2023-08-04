//react libraries
import { useState, useEffect, useRef } from "react";
//css
import style from "./home.module.css";
//images
import backgroundContainer from "../img/container1.svg";
import backgroundContainer2 from "../img/container2.svg";
import backgroundContainer3 from "../img/container3.svg";
import backgroundContainerOblong from "../img/containerOblong.svg";
import backgroundContainerOblong2 from "../img/containerOblong2.svg";
import backgroundContainerOblong3 from "../img/containerOblong3.svg";
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
import {
    opacityEffectToHide,
    opacityEffectToShow,
    translateXgsapEffect,
    translateYgsapEffect,
    bounceUpGsapEffect,
    bounceUpGsapEffectNoTrigger,
} from "../components/gsapEffects/gsapEffect";
import { BallonContainer } from "../components/ballonContainer";
import pdf from "../pdfCv/franciscoMartinezCv.pdf";
//import { SayHello } from "../components/sayHello";

export function Home() {
    /* -- hello Word -- */

    console.log(
        "%c hecho con muchisimo amor por: EX MACHINA",
        "background:red; color: white;"
    );

    const mediaQuery = window.matchMedia("(max-width: 768px)");

    /* -- referencences and animations -- */

    const initContainerRef = useRef(null);
    const titleFirstScreenRefA = useRef(null);
    const titleFirstScreenRefB = useRef(null);
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

        const firstTitleBounceEfectA = {
            refElementToMove: titleFirstScreenRefA.current,
        };
        bounceUpGsapEffectNoTrigger(firstTitleBounceEfectA);

        const firstTitleBounceEfectB = {
            refElementToMove: titleFirstScreenRefB.current,
        };
        bounceUpGsapEffectNoTrigger(firstTitleBounceEfectB);

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

    const firtsAboutContainer ={
        mediaQuery: mediaQuery,
        paragraph: 'Tomo conocimientos UI/UX para crear una experiencia, analizo las posibilides, creo bocetos y estructuras.',
        wideContainer: backgroundContainerOblong2,
        mobileContainer: backgroundContainerOblong2}

       const secondAboutContainer ={
            mediaQuery: mediaQuery,
            paragraph: 'Hago uso de tecnologías como:.\
             -JavaScript    -HTML.\
             -SASS-Css      -Python.\
             -Django-Rest',
            wideContainer: backgroundContainerOblong3,
            mobileContainer: backgroundContainer3}

            const thirdAboutContainer ={
                mediaQuery: mediaQuery,
                paragraph: 'Hago uso de tecnologías como:.\
                 -JavaScript    -HTML.\
                 -SASS-Css      -Python.\
                 -Django-Rest',
                wideContainer: backgroundContainerOblong3,
                mobileContainer: backgroundContainer3}
            
            const theParagraph ={
                paragraph: 'Hago uso de tecnologías como:.\
                <li>JavaScript</li>    -HTML.\
                <li>SASS-Css</li>     -Python.\
                -Django-Rest',}

    /* -- portfolio buttons  --*/

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
                            {" "}
                            Developer
                        </h2>
                    </div>
                </div>
            </div>
            <div className={style.aboutMainContainer}>
                <div className={style.titleAndPharseFullContainer}>
                    <div className={style.titleAboutMeContainer}>
                        <h2 ref={titleAboutMeRef}>.ABOUT ME</h2>
                        <img
                            className={style.cancelLine}
                            src={cancelLine}
                        />
                    </div>
                    <div className={style.hacerPorTiContainer}>
                        <p className={style.handWriteToAddIdeas}>
                            Que puedo hacer yo por ti!
                        </p>
                    </div>
                </div>
                <div className={style.aboutContentContainer}>
                    <BallonContainer props={firtsAboutContainer}/>
                    <img className={style.arrowsAbout} src={arrow4} />
                    <BallonContainer props={secondAboutContainer}/>
                    <img className={style.arrowsAbout} src={arrow3} alt="" />
                    <BallonContainer props={thirdAboutContainer} paragraph={theParagraph.paragraph}/>
                    <img className={style.arrowsAbout} src={arrow3} alt="" />
                    
                </div>
                <div className={style.aboutContentBottomContainer}>
                    <div className={style.designerExplanationContainer}>
                        <p>
                            Pues eso, tienes un diseñador gráfico e industrial
                            con conocimientos en programación frontend y
                            backend. ¿quieres saber más de lo que hago?
                            <br />O si prefieres puedes descargar mi cv en .pdf{" "}
                        </p>
                    </div>
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
