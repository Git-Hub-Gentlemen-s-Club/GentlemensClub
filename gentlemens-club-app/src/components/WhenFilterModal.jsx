import { ModalBackground, WhenFilter, Schedule, Clean, CloseButton, ButtonsWrapper, PreferredTime, CalendarContainer } from "../styled_components/when_filter/WhenFilterStyle";

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
                    <PreferredTime>Horário preferido</PreferredTime>

                    <CloseButton onClick={setOpenModal}><IoMdClose /></CloseButton>


                    <CalendarContainer>
                        <Calendar onChange={date => setDate(date)} value={date} />
                    </CalendarContainer>

                    <Schedule onClick={() => setClicked(!clicked)}>Agendar</Schedule>
                
                </WhenFilter>
            </ModalBackground>
        );
    }
}

export default WhenFilterModal;