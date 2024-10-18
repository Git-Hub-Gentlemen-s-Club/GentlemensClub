import 'react-calendar/dist/Calendar.css';

import { ModalBackground, WhenFilter, Schedule, Clean, CloseButton, ButtonsWrapper } from "../styled_components/when_filter/WhenFilterStyle";

import { IoMdClose } from "react-icons/io";

import Calendar from 'react-calendar';

import { useState } from 'react';

function WhenFilterModal({ isOpen, setOpenModal}) {
    const [date, setDate] = useState(new Date());
    
    const [clicked, setClicked] = useState(false);

    if (isOpen) {
        return (
            <ModalBackground>
                <WhenFilter>
                    <h3 style={{color: 'black'}}>Horário preferido</h3>

                    <CloseButton onClick={setOpenModal}><IoMdClose /></CloseButton>

                    <Calendar onChange={date => setDate(date)} value={date} />

                    <ButtonsWrapper>
                        <Clean >Limpar</Clean>
                        <Schedule onClick={() => setClicked(!clicked)}>Agendar</Schedule>
                    </ButtonsWrapper>

                </WhenFilter>
            </ModalBackground>
        );
    }
}

export default WhenFilterModal;