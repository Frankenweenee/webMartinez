import { useState, useEffect } from "react";
import Modal from "react-modal";

export function EnElCamino({ mediaQuery }) {
    const [modalAbierto, setModalAbierto] = useState(false);

    const abrirModal = () => {
        setModalAbierto(true);
    };

    const cerrarModal = () => {
        setModalAbierto(false);
    };

    const visitWeb = () =>
        (window.location.href = "https://estaeslaotrapagina.com/");
    const visitGithub = () => (window.location.href = "https://github.com/");

    useEffect(() => {
      if (mediaQuery.matches) {
        abrirModal();
      }
    }, [mediaQuery]);
  

    const Wide = () => {
        return (
            <div>
                <h3>Full Stack project</h3>
                <p>Mi blog personal.<br/> Pagina integra en <strong>React</strong> .</p>
                <button onClick={visitWeb}>Prueba</button>
            <button onClick={visitGithub}>Github</button>
            </div>
        );
    };
    return (
        <>
            {mediaQuery.matches ? null : <Wide/>}
            <Modal
                className="modalStyle"
                appElement={document.getElementById("root")}
                isOpen={modalAbierto}>
                <button onClick={cerrarModal}>Cerrar</button>
                <div>
                    <div>
                        <h3>FullStack Project</h3>
                        <p>
                            Proyecto de una carta virtual para pedir desde la
                            mesa.
                        </p>
                    </div>
                    <button onClick={visitWeb}>Prueba Mobile</button>
                    <button onClick={visitGithub}>Github</button>
                </div>
            </Modal>
        </>
    );
}
