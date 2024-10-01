import 'react-calendar/dist/Calendar.css';

import { ModalBackground, WhenFilter } from "../styled_components/when_filter/WhenFilterStyle";

import { IoMdClose } from "react-icons/io";

import Calendar from 'react-calendar';

import { useState } from 'react';

function WhenFilterModal({ isOpen, setOpenModal}) {
    const [date, setDate] = useState(new Date());
    
    if (isOpen) {
        return (
            <ModalBackground>
                <WhenFilter>
                    <h3 style={{color: 'black'}}>Horário preferido</h3>
                    <button onClick={setOpenModal}><IoMdClose /></button>
                    <Calendar onChange={date => setDate(date)} value={date} />
                    <button>Agendar</button>
                </WhenFilter>
            </ModalBackground>
        );
    }
}

export default WhenFilterModal;