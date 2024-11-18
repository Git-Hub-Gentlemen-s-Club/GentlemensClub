import React, { useState } from 'react';

import Calendar from 'react-calendar';

import { IoMdClose } from "react-icons/io";

import { 
    ModalBackground, 
    WhenFilter, 
    Button, 
    CloseButton, 
    ButtonsWrapper, 
    PreferredTime, 
    CalendarContainer, 
    TimeButtonWrapper, 
    TimeButton   
} from "../styles/when_filter/WhenFilterStyle";
import '../App.css';

function WhenFilterModal({ isOpen, setOpenModal}) {
    const [date, setDate] = useState(new Date());
    
    const [buttonClean, setButtonClean] = useState(false);

    const [when, setWhen] = useState(false);

    if (isOpen) {
        return (
            <ModalBackground>
                <WhenFilter>

                    <PreferredTime>Horário preferido</PreferredTime>

                    <CloseButton onClick={setOpenModal}><IoMdClose /></CloseButton>

                    <CalendarContainer>
                        <Calendar 
                        onChange={date => setDate(date)} 
                        value={date} 
                        onClickDay={() => {setButtonClean(true); setWhen(true)}}
                        minDate={new Date()}
                        />
                    </CalendarContainer>

                    {when && 
                        <TimeButtonWrapper>
                            <TimeButton when={when}>A qualquer momento</TimeButton>
                            <TimeButton when={when}>Manhã</TimeButton>
                            <TimeButton when={when}>Tarde</TimeButton>
                            <TimeButton when={when}>Noite</TimeButton>
                        </TimeButtonWrapper>                    
                    }

                    <ButtonsWrapper button={buttonClean}>

                        <Button onClick={() => {setOpenModal; window.location.reload()}}>
                            Agendar
                        </Button>

                        {
                        
                        buttonClean &&
                        <Button onClick={() => {setButtonClean(false); setWhen(false)}}>
                            Limpar
                        </Button>
                        
                        }

                    </ButtonsWrapper>

                </WhenFilter>
            </ModalBackground>
        );
    }
}

export default WhenFilterModal;