import React, { useEffect, useState } from 'react';
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

    const [accordionItem, setAccordionItem] = useState({}); // Inicializa como objeto vazio

    const AccordionItems = React.useMemo(
        () => [
            [ // Horários da manhã
                {
                    time: '11:00',
                    client: 'Leonardo Huck',
                    professional: 'Gustavo Paiva',
                    service: 'Corte + Barba',
                    yield: 'R$ 120.00'
                },
                {
                    time: '12:00',
                    client: 'Helenaldo Silva',
                    professional: 'Pedro Ferreira',
                    service: 'Corte',
                    yield: 'R$ 70.00'
                }
            ],
            [ // Horários da tarde
            ],
            [ // Horários da noite
            ]
        ], []
    );

    const daylySchedule = React.useMemo(
        () => [
            ["09:00", "10:00", "11:00", "12:00"],
            ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
            ["19:00", "20:00", "21:00"]
        ], []
    );

    const OpenItem = (index) => {
        // Atualiza o estado do acordeão
        setAccordionItem(prevState => ({
            ...prevState,
            [index]: !prevState[index] // Alterna o valor do índice
        }));
    };

    return (
        <Container>
            <LogoContainer>
                <img src={logo} alt="Logo G" />
            </LogoContainer>
            <AppointmentContainer>
                <TitleContainer>
                    <h3 onClick={() => { console.log(accordionItem) }}>Cancele um atendimento</h3>
                    <p>Selecione data, horário e para exibir as informações e liberar a opção de cancelar agendamento.</p>
                </TitleContainer>

                <div>
                    <h4>Data</h4>
                    <CustomInput>
                        <div className="date-picker-container">
                            <FaCalendarAlt className="date-icon" />
                            <DatePicker
                                selected={appointment.appointmentDate}
                                onChange={(date) => setAppointment({ ...appointment, appointmentDate: date })}
                                placeholderText="Data Final"
                                className="date-input"
                            />
                        </div>
                    </CustomInput>
                </div>

                <div>
                    <h4>Horários</h4>
                    {daylySchedule.map((schedule, idx) => (
                        <div key={idx}>
                            <p>{idx === 0 ? 'Manhã' : idx === 1 ? 'Tarde' : 'Noite'}</p>
                            <TimeGrid>
                                {schedule.map(time => (
                                    <button
                                        key={time}
                                        id={time}
                                        onClick={() => { }}
                                    >{time}</button>
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
                                selected={appointment.appointmentDate}
                                onChange={(date) => setAppointment({ ...appointment, appointmentDate: date })}
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
                        {AccordionItems[0].map((item, index) => (
                            <li key={index}>
                                <div className={`AppointmentTitle`} onClick={() => OpenItem(index)}>
                                    <div>
                                        <span>{item.time}</span>{item.client}
                                    </div>
                                    <img src="src/assets/PartnerScheuling/DownArrow.png" alt="Seta para baixo" />
                                </div>
                                <ul style={{ display: accordionItem[index] ? 'block' : 'none' }}>
                                    <li id={index} className='AppointmentIndex'>
                                        <header><h3>Detalhes:</h3></header>
                                        <div>
                                            <h3>Profissional: </h3><p>{item.professional}</p>
                                        </div>
                                        <div>
                                            <h3>Serviço: </h3><p>{item.service}</p>
                                        </div>
                                        <div>
                                            <h3>Lucro c/ desconto: </h3><p>{item.yield}</p>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        ))}
                    </ul>
                </AppointmentList>
                <AppointmentList>
                    <header>
                        <div className='HeaderList'>
                            <PiSunHorizonBold className="AppointmentIcon" />
                            <p>Manhã</p>
                        </div>
                        <div className='HeaderList'>
                            {daylySchedule[1][0]} - {daylySchedule[1][daylySchedule[0].length - 1]}
                        </div>
                    </header>
                    <ul className="accordion">
                        {AccordionItems[1].map((item, index) => (
                            <li key={index}>
                                <div className={`AppointmentTitle`} onClick={() => OpenItem(index)}>
                                    <div>
                                        <span>{item.time}</span>{item.client}
                                    </div>
                                    <img src="src/assets/PartnerScheuling/DownArrow.png" alt="Seta para baixo" />
                                </div>
                                <ul style={{ display: accordionItem[index] ? 'block' : 'none' }}>
                                    <li id={index} className='AppointmentIndex'>
                                        <header><h3>Detalhes:</h3></header>
                                        <div>
                                            <h3>Profissional: </h3><p>{item.professional}</p>
                                        </div>
                                        <div>
                                            <h3>Serviço: </h3><p>{item.service}</p>
                                        </div>
                                        <div>
                                            <h3>Lucro c/ desconto: </h3><p>{item.yield}</p>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        ))}
                    </ul>
                </AppointmentList>
                <AppointmentList>
                    <header>
                        <div className='HeaderList'>
                            <PiSunHorizonBold className="AppointmentIcon" />
                            <p>Manhã</p>
                        </div>
                        <div className='HeaderList'>
                            {daylySchedule[2][0]} - {daylySchedule[2][daylySchedule[0].length - 1]}
                        </div>
                    </header>
                    <ul className="accordion">
                        {AccordionItems[2].map((item, index) => (
                            <li key={index}>
                                <div className={`AppointmentTitle`} onClick={() => OpenItem(index)}>
                                    <div>
                                        <span>{item.time}</span>{item.client}
                                    </div>
                                    <img src="src/assets/PartnerScheuling/DownArrow.png" alt="Seta para baixo" />
                                </div>
                                <ul style={{ display: accordionItem[index] ? 'block' : 'none' }}>
                                    <li id={index} className='AppointmentIndex'>
                                        <header><h3>Detalhes:</h3></header>
                                        <div>
                                            <h3>Profissional: </h3><p>{item.professional}</p>
                                        </div>
                                        <div>
                                            <h3>Serviço: </h3><p>{item.service}</p>
                                        </div>
                                        <div>
                                            <h3>Lucro c/ desconto: </h3><p>{item.yield}</p>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        ))}
                    </ul>
                </AppointmentList>
                {/* Adicione seções para Tarde e Noite aqui, de forma semelhante à seção da Manhã */}
            </TableContainer>
        </Container>
    );
};

export default PartnerScheduling;