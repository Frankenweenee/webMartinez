import style from "./ballonContainer.module.css";
export function BallonContainer({ paragraph }) {
    if (paragraph === firstParagraph) {
        const style = style.backgroundContainerOne;
    }
    return (
        <div className={style}>
            <p
                className={style.handWrite}
                dangerouslySetInnerHTML={{ __html: paragraph }}
            />
        </div>
    );
}
