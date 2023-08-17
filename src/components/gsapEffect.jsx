import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function opacityEffectToShow(options) {
    const tl = gsap.timeline();
    tl.fromTo(
        options.refElementToMove,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 }
    )
        .fromTo(
            options.firstTitle,
            { y: 300 },
            { duration: 0.4, ease: "power3.out", y: 0 }
        )
        .fromTo(
            options.secondTitle,
            { y: 300 },
            { duration: 0.4, ease: "power3.out", y: 0 }
        )
        .fromTo(options.joke, { opacity: 0 }, { opacity: 1, duration: 1.5 });
}

export function translateXgsapEffect(options) {
    gsap.fromTo(
        options.refElementToMove,
        { x: -520 },
        {
            translateX: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: options.refTrigger,
                start: options.posStart,
                /*markers: {
                    startColor: "violet",
                    endColor: "red",
                    fontSize: "2rem",
                },*/
            },
        }
    );
}

export function translateXRightGsapEffect(options) {
    gsap.fromTo(
        options.refElementToMove,
        { x: 500 },
        {
            translateX: 0,
            duration: 0.5,
            scrollTrigger: {
                trigger: options.refTrigger,
                start: options.posStart,
                /* markers: {
            startColor: "aqua",
            fontSize: "2rem",
          },*/
            },
        }
    );
}

export function bounceUpGsapEffect(options) {
    gsap.fromTo(
        options.refElementToMove,
        { y: 300 },
        {
            duration: 0.8,
            ease: "power3.out",
            y: 0,
            scrollTrigger: {
                trigger: options.refTrigger,
                start: options.posStart,
                /*markers: {
                    startColor: "yellow",
                    fontSize: "2rem",
                },*/
            },
        }
    );
}

export function translateAboutEffect(options) {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: options.refTrigger,
            start: options.posStart,
        },
    });
    tl.fromTo(options.refElementToMove, { x: -400 }, { x: 0, duration: 0.6 });
    tl.fromTo(options.cancelLine, { x: 600 }, { x: 0, duration: 0.5 }, "-=90%");
    tl.fromTo(
        options.hacerPorTi,
        { opacity: 0 },
        { opacity: 1, duration: 1.5 },
        "-=50%"
    );
    tl.fromTo(
        options.firstBallon,
        { opacity: 0 },
        { opacity: 1, duration: 1.5 },
        "-=90%"
    );
    tl.fromTo(
        options.firstArrow,
        { opacity: 0 },
        { opacity: 1, duration: 1.5 },
        "-=90%"
    );
    tl.fromTo(
        options.secondBallon,
        { opacity: 0 },
        { opacity: 1, duration: 1.5 },
        "-=90%"
    );
    tl.fromTo(
        options.secondArrow,
        { opacity: 0 },
        { opacity: 1, duration: 1.5 },
        "-=90%"
    );
    tl.fromTo(
        options.thirdBallon,
        { opacity: 0 },
        { opacity: 1, duration: 1.5 },
        "-=90%"
    );
}

export function workBounce(options) {
    gsap.to(
        options.refElementToMove,
        { y: -200, ease: "power3.out", duration: 0.5 }
    );
}

export function workBouncelong(options) {
    const tl = gsap.timeline();
    tl.fromTo(
        options.refElementToMove,
        { opactity: 0 },
        {
            opacity: 1,
            duration: 1,
        }
    );
    tl.fromTo(
        options.refElementToMove,
        { y: 400 },
        {
            y: "-21%",
            ease: "power3.out",
        },  "-=150%"
    ) 
 
}
