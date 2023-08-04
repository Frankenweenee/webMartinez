import style from './ballonContainer.module.css'
export function BallonContainer({props, paragraph}) {

    const mediaQuery = props.mediaQuery;

    const backgroundContainerChoose = (mobile, wide) => {
        return mediaQuery.matches ? (
            <img
                className={style.backgroundImageSectionAbout2}
                src={mobile}
            />
        ) : (
            <img
                className={style.backgroundImageSectionAbout2}
                src={wide}
            />
        );
    };
   
    return (
        <div className={style.prueba}>
            <div className={style.aboutBallonContainer}>
                <p className={style.handWriteBallonContainer}>
                {props.paragraph }
                </p>
                <p dangerouslySetInnerHTML={{ __html: paragraph }} />
            </div>

            <>{backgroundContainerChoose(props.mobileContainer, props.wideContainer)}</>
        </div>
    );
}
