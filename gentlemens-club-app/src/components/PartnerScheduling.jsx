import React, { 
    useState, 
    useMemo
} from 'react';

import DatePicker from 'react-datepicker';

import { 
    FaCalendarAlt, 
    FaCut, 
    FaDollarSign 
} from 'react-icons/fa';

import { 
    LuUserSquare2 
} from 'react-icons/lu';

import { 
    PiSunHorizonBold, 
    PiCloudSunBold, 
    PiMoonStarsBold 
} from 'react-icons/pi';

import logo from '../assets/ClientScheduling/LogoTelaAgendamento.png';

import {
    Container, 
    LogoContainer, 
    AppointmentContainer, 
    AppointmentButtonContainer,
    TitleContainer, 
    TableContainer, 
    CustomInput, 
    TimeGrid, 
    AppointmentList
} from '../styles/PartnerSchedulingStyle';
import 'react-datepicker/dist/react-datepicker.css';

const PartnerScheduling = () => {
    const [appointment, setAppointment] = useState({
        client: '',
        service: '',
        price: '',
        appointmentDate: null,
    });

    const [accordionItem, setAccordionItem] = useState({});

    const AccordionItems = useMemo(() => [
        [ // Manhã
            { time: '09:00', client: 'Leonardo Huck', professional: 'Gustavo Paiva', service: 'Corte + Barba', yield: 'R$ 120,00' },
            { time: '10:00', client: 'Helenaldo Silva', professional: 'Pedro Ferreira', service: 'Corte', yield: 'R$ 70,00' }
        ],
        [ // Tarde
            { time: '13:00', client: 'Leonardo Huck', professional: 'Gustavo Paiva', service: 'Corte + Barba', yield: 'R$ 120,00' }
        ],
        [ // Noite
            { time: '19:00', client: 'Helenaldo Silva', professional: 'Pedro Ferreira', service: 'Corte', yield: 'R$ 70,00' }
        ]
    ], []);

    const daylySchedule = useMemo(() => [
        ["09:00", "10:00", "11:00", "12:00"],
        ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
        ["19:00", "20:00", "21:00"]
    ], []);

    const toggleAccordion = (key) => {
        
        setAccordionItem(prevState => ({
            ...prevState,
            [key]: !prevState[key]
        }));
        const split = key.split('-')
        for (let reserves of daylySchedule[split[0]]) {
            if (reserves === split[1]){
                if (!accordionItem[key]) {
                    document.getElementById(split[1]).className = 'selected';
                } else {
                    document.getElementById(split[1]).className = 'reserved';
                }
            }
        }
        
    };


    const setClass = (time, period) => {
        for (let reserve in AccordionItems[period]) {
            if (AccordionItems[period][reserve].time == time) {
                return "reserved"
            }
        }
        return "vacant"
    }

    return (
        <Container>
            <LogoContainer>
                <img src={logo} alt="Logo G" />
            </LogoContainer>
            <AppointmentContainer>
                <TitleContainer>
                    <h3>Cancele um atendimento</h3>
                    <p>Selecione data e horário para exibir informações e liberar a opção de cancelar agendamento.</p>
                </TitleContainer>

                <div>
                    <h4>Data</h4>
                    <CustomInput>
                        <div className="date-picker-container">
                            <FaCalendarAlt className="date-icon" />
                            <DatePicker
                                selected={appointment.appointmentDate}
                                onChange={(date) => setAppointment({ ...appointment, appointmentDate: date })}
                                placeholderText="Selecione uma data"
                                className="date-input"
                            />
                        </div>
                    </CustomInput>
                </div>

                <div>
                    <h4>Horários</h4>
                    {daylySchedule.map((schedule, period) => (
                        <div key={period}>
                            <p>{period === 0 ? 'Manhã' : period === 1 ? 'Tarde' : 'Noite'}</p>
                            <TimeGrid>
                                {schedule.map((time) => (
                                    <button key={time} id={time} className={setClass(time, period)} onClick={() => {toggleAccordion(`${period}-${time}`)}}>{time}</button>
                                ))}
                            </TimeGrid>
                        </div>
                    ))}
                </div>

                <div>
                    <h4>Cliente</h4>
                    <div className="input-container">
                        <LuUserSquare2 className="icon" />
                        <input
                            type="text"
                            placeholder="Nome do Cliente"
                            value={appointment.client}
                            onChange={(e) => setAppointment({ ...appointment, client: e.target.value })}
                        />
                    </div>
                </div>

                <div>
                    <h4>Serviço</h4>
                    <div className="input-container">
                        <FaCut className="icon" />
                        <input
                            type="text"
                            placeholder="Tipo de serviço"
                            value={appointment.service}
                            onChange={(e) => setAppointment({ ...appointment, service: e.target.value })}
                        />
                    </div>
                </div>

                <div>
                    <h4>Valor</h4>
                    <div className="input-container">
                        <FaDollarSign className="icon" />
                        <input
                            type="text"
                            placeholder="Valor do serviço"
                            value={appointment.price}
                            onChange={(e) => setAppointment({ ...appointment, price: e.target.value })}
                        />
                    </div>
                </div>

                <AppointmentButtonContainer>
                    CANCELAR
                </AppointmentButtonContainer>
            </AppointmentContainer>

            <TableContainer>
                {AccordionItems.map((items, period) => (
                    <AppointmentList key={period}>
                        <header>
                            <div>
                                {period === 0 ? <PiSunHorizonBold className="AppointmentIcon" /> :
                                    period === 1 ? <PiCloudSunBold className="AppointmentIcon" /> :
                                        <PiMoonStarsBold className="AppointmentIcon" />}
                                <p>{period === 0 ? 'Manhã' : period === 1 ? 'Tarde' : 'Noite'}</p>
                            </div>
                            <div className="HeaderList">
                                {daylySchedule[period][0]} - {daylySchedule[period].slice(-1)}
                            </div>
                        </header>
                        <ul className="accordion">
                            {items.map((item, index) => (
                                <li key={`${period}-${index}`}>
                                    <div className="AppointmentTitle" onClick={() => toggleAccordion(`${period}-${item.time}`)}>
                                        <div>
                                            <span>{item.time}</span> {item.client}
                                        </div>
                                        <img
                                            src="src/assets/PartnerScheuling/DownArrow.png"
                                            alt="Seta para baixo"
                                            style={{ transform: accordionItem[`${period}-${item.time}`] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                        />
                                    </div>
                                    <ul style={{ display: accordionItem[`${period}-${item.time}`] ? 'block' : 'none' }}>
                                        <li className="AppointmentIndex">
                                            <header><h3>Detalhes:</h3></header>
                                            <div><h3>Profissional:</h3><p>{item.professional}</p></div>
                                            <div><h3>Serviço:</h3><p>{item.service}</p></div>
                                            <div><h3>Lucro:</h3><p>{item.yield}</p></div>
                                        </li>
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </AppointmentList>
                ))}
            </TableContainer>
        </Container>
    );
};

export default PartnerScheduling;
