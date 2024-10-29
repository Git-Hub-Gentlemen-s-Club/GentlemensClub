import { ModalBackground, WhenFilter, Schedule, Clean, CloseButton, ButtonsWrapper, PreferredTime, CalendarContainer } from "../styled_components/when_filter/WhenFilterStyle";

import { IoMdClose } from "react-icons/io";

import Calendar from 'react-calendar';

import { useState } from 'react';

function WhenFilterModal({ isOpen, setOpenModal}) {
    const [date, setDate] = useState(new Date());
    
    const [buttonClean, setButtonClean] = useState(false);

    const handleDayClick = () => {
        setButtonClean(!buttonClean);
    }

    if (isOpen) {
        return (
            <ModalBackground>
                <WhenFilter>

                    <PreferredTime>Horário preferido</PreferredTime>

                    <CloseButton onClick={setOpenModal}><IoMdClose /></CloseButton>

                    <CalendarContainer>
                        <Calendar 
                        onChange={date => setDate(date)} 
                        value={date} onClickDay={handleDayClick} 
                        minDate={new Date()}
                        />
                    </CalendarContainer>

                    <ButtonsWrapper button={buttonClean}>
                        <Schedule>Agendar</Schedule>
                        { buttonClean && <Clean /> }
                    </ButtonsWrapper>

                </WhenFilter>
            </ModalBackground>
        );
    }
}

export default WhenFilterModal;