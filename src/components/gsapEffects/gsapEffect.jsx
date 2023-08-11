import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function opacityEffectToHide(options) {
    gsap.to(options.refElementToMove, {
        opacity: 0,
        scrollTrigger: {
            trigger: options.refTrigger,
            scrub: 2,
            start: options.posStart,
            end: options.posEnd,
        },
    });
}

export function opacityEffectToShow(options) {
    const tl = gsap.timeline();
    tl.fromTo(
        options.refElementToMove,
        { opacity: 0 },
        { opacity: 1, duration: 1 }
    )
        .fromTo(
            options.firstTitle,
            { y: 300 },
            { duration: 0.5, ease: "power3.out", y: 0 }
        )
        .fromTo(
            options.secondTitle,
            { y: 300 },
            { duration: 0.5, ease: "power3.out", y: 0 }
        );
}

export function translateXgsapEffect(options) {
    gsap.fromTo(
        options.refElementToMove,
        { x: -520 },
        {
            translateX: 0,
            duration: 1.3,
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

export function translateYgsapEffect(options) {
    gsap.fromTo(
        options.refElementToMove,
        { rotate: 270, y: -250 },
        {
            translateY: 300,
            duration: 1,
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

export function bounceUpGsapEffectNoTrigger(options) {
    gsap.fromTo(
        options.refElementToMove,
        { y: 500 },
        {
            duration: 1.5,
            ease: "power3.out",
            y: 0,
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
    tl.fromTo(options.refElementToMove, { x: -400 }, { x: 0, duration: 0.5 });
    tl.fromTo(options.cancelLine, { x: 600 }, { x: 0, duration: 0.5 });
    tl.fromTo(
        options.hacerPorTi,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 }
    );
    tl.fromTo(
        options.firstBallon,
        { opacity: 0 },
        { opacity: 1, duration: 0.2 }
    );
    tl.fromTo(
        options.firstArrow,
        { opacity: 0 },
        { opacity: 1, duration: 0.2 }
    );
    tl.fromTo(
        options.secondBallon,
        { opacity: 0 },
        { opacity: 1, duration: 0.2 }
    );
    tl.fromTo(
        options.secondArrow,
        { opacity: 0 },
        { opacity: 1, duration: 0.2 }
    );
    tl.fromTo(
        options.thirdBallon,
        { opacity: 0 },
        { opacity: 1, duration: 0.2 }
    );
}
