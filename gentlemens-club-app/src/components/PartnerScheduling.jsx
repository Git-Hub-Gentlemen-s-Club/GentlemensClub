import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa'; // Ícone de calendário
import { Container, LogoContainer, AppointmentContainer, AppointmentButtonContainer, TitleContainer, TableContainer, CustomInput, TimeGrid, AppointmentList } from '../styled_components/PartnerSchedulingStyle'; // Importando estilos
import logo from '../assets/ClientScheduling/LogoTelaAgendamento.png';
import { FaCut, FaDollarSign } from 'react-icons/fa'; // Importando ícones
import { LuUserSquare2 } from "react-icons/lu";
import { PiSunHorizonBold, PiCloudSunBold, PiMoonStarsBold } from "react-icons/pi";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Importando estilos do DatePicker

const PartnerScheduling = () => {
    const [appointment, setAppointment] = useState({
        client: '',
        service: '',
        price: '',
        appointmentDate: null,
    });




    const daylySchedule = React.useMemo(
        () => [
            ["09:00", "10:00", "11:00", "12:00"],
            ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
            ["19:00", "20:00", "21:00"]
        ], []
    );
    return (
        <Container>
            <LogoContainer>
                <img src={logo} alt="Logo G" />
            </LogoContainer>
            <AppointmentContainer>
                <TitleContainer>
                    <h3 onClick={() => { console.log(daylySchedule[0]) }}>Cancele um atendimento</h3>
                    <p>Selecione data, horário e para exibir as informações e liberar a opção de cancelar agendamento.</p>
                </TitleContainer>

                <div>
                    <h4>Data</h4>
                    <CustomInput>
                        <div className="date-picker-container">
                            <FaCalendarAlt className="date-icon" />
                            <DatePicker
                                selected={appointment.endDate}
                                onChange={(date) => setAppointment({ ...appointment, endDate: date })}
                                placeholderText="Data Final"
                                className="date-input"
                            />
                        </div>
                    </CustomInput>
                </div>

                <div>
                    <h4>Horários</h4>
                    <p>Manhã</p>
                    <TimeGrid>
                        {daylySchedule[0].map(time => (
                            <button
                                key={time}
                                id={time}
                                // className={'off'}
                                onClick={() => { }}
                            >{time}</button>
                        ))}
                    </TimeGrid>
                    <p>Tarde</p>
                    <TimeGrid>
                        {daylySchedule[1].map(time => (
                            <button
                                key={time}
                                id={time}
                                // className={'off'}
                                onClick={() => { }}
                            >{time}</button>
                        ))}
                    </TimeGrid>
                    <p>Noite</p>
                    <TimeGrid>
                        {daylySchedule[2].map(time => (
                            <button
                                key={time}
                                id={time}                            // className={'off'}
                                onClick={() => { }}
                            >{time}</button>
                        ))}
                    </TimeGrid>
                </div>

                <div>
                    <h4>Cliente</h4>
                    <div className="input-container">
                        <LuUserSquare2 className="icon" />
                        <input
                            type="text"
                            placeholder="Nome do Cliente"
                            value={appointment.professional}
                            onChange={(e) => setAppointment({ ...appointment, professional: e.target.value })}
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
                            value={appointment.Partner}
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
                            value={appointment.Partner}
                            onChange={(e) => setAppointment({ ...appointment, price: e.target.value })}
                        />
                    </div>
                </div>

                <AppointmentButtonContainer onClick={() => {/* lógica para filtrar os dados */ }}>
                    CANCELAR
                </AppointmentButtonContainer>
            </AppointmentContainer>

            <TableContainer>
                <div className="TableHead">
                    <div>
                        <h4>Sua Agenda</h4>
                        <p>Consulte os seus cortes de cabelo agendados por dia</p>
                    </div>
                    <CustomInput>
                        <div className="date-picker-container">
                            <FaCalendarAlt className="date-icon" />
                            <DatePicker
                                selected={appointment.endDate}
                                onChange={(date) => setAppointment({ ...appointment, endDate: date })}
                                placeholderText="Data Final"
                                className="date-input"
                            />
                        </div>
                    </CustomInput>
                </div>
                <AppointmentList>
                    <header>
                        <div className='HeaderList'>
                            <PiSunHorizonBold className="AppointmentIcon" />
                            <p>Manhã</p>
                        </div>
                        <div className='HeaderList'>
                            {daylySchedule[0][0]} - {daylySchedule[0][daylySchedule[0].length - 1]}
                        </div>
                    </header>
                    <ul className="accordion">
                        <li tabIndex="0"><div className='AppointmentTitle'><div><span>Horário</span> Cliente</div><img src= "src\assets\PartnerScheuling\DownArrow.png" alt="Seta para baixo" /></div>
                            <ul>
                                <li>Item 1.1</li>
                            </ul>
                        </li>
                        <li tabIndex="1"><div className='AppointmentTitle'><div><span>Horário</span> Cliente</div><img src= "src\assets\PartnerScheuling\DownArrow.png" alt="Seta para baixo" /></div>
                            <ul>
                                <li>Item 2.1</li>
                            </ul>
                        </li>
                    </ul>
                </AppointmentList>
                <AppointmentList>
                    <header>
                        <div className='HeaderList'>
                            <PiCloudSunBold className="AppointmentIcon" />
                            <p>Tarde</p>
                        </div>
                        <div className='HeaderList'>
                            {daylySchedule[1][0]} - {daylySchedule[1][daylySchedule[1].length - 1]}
                        </div>
                    </header>

                </AppointmentList>
                <AppointmentList>
                    <header>
                        <div className='HeaderList'>
                            <PiMoonStarsBold className="AppointmentIcon" />
                            <p>Noite</p>
                        </div>
                        <div className='HeaderList'>
                            {daylySchedule[2][0]} - {daylySchedule[2][daylySchedule[2].length - 1]}
                        </div>
                    </header>

                </AppointmentList>

            </TableContainer>
        </Container>
    );
};

export default PartnerScheduling;
