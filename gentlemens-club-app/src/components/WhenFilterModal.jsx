import { ModalBackground, WhenFilter } from "../styled_components/when_filter/WhenFilterStyle";

function WhenFilterModal({ isOpen, setOpenModal}) {
    if (isOpen) {
        return (
            <ModalBackground>
                <WhenFilter>
                    olá, mundo!
                </WhenFilter>
                <button onClick={setOpenModal}>X</button>
            </ModalBackground>
        );
    }
}

export default WhenFilterModal;