import React, { useState } from 'react';
import { useTable } from 'react-table';
import { FaCalendarAlt } from 'react-icons/fa'; // Ícone de calendário
import { Container, LogoContainer, FilterContainer, FilterButtonContainer, TitleContainer, TableContainer, Table, Th, Td } from '../styled_components/ClientSchedulingStyle'; // Importando estilos
import logo from '../assets/ClientScheduling/LogoTelaAgendamento.png';
import { FaCut, FaUser, FaBuilding, FaBriefcase, FaFilter } from 'react-icons/fa'; // Importando ícones
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Importando estilos do DatePicker

const ClientScheduling = () => {
    const [filter, setFilter] = useState({
        barberShop: '',
        service: '',
        professional: '',
        client: '',
        startDate: null,
        endDate: null,
    });

    const data = React.useMemo(
        () => [
            { barberShop: 'Juninho Barbearia SP', service: 'Corte de Cabelo', professional: 'Juninho', client: 'Carlos', date: '2024-09-25', value: '50', status: 'Agendado' },
        ],
        []
    );

    const columns = React.useMemo(
        () => [
            { Header: 'Barbearia', accessor: 'barberShop' },
            { Header: 'Serviço', accessor: 'service' },
            { Header: 'Profissional', accessor: 'professional' },
            { Header: 'Cliente', accessor: 'client' },
            { Header: 'Data', accessor: 'date' },
            { Header: 'Valor', accessor: 'value' },
            { Header: 'Status', accessor: 'status' },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    return (
        <Container>
            <LogoContainer>
                <img src={logo} alt="Logo G" />
            </LogoContainer>
            <FilterContainer>
                <TitleContainer>
                    <h3>Histórico de Agendamentos</h3>
                    <p>Aplique os filtros Barbearia, Serviço, Profissional, Cliente e Intervalo do Período para uma melhor filtragem.</p>
                </TitleContainer>

                <div>
                    <h4>Barbearia</h4>
                    <div className="input-container">
                        <FaBuilding className="icon" />
                        <input
                            type="text"
                            placeholder="Barbearia"
                            value={filter.barberShop}
                            onChange={(e) => setFilter({ ...filter, barberShop: e.target.value })}
                        />
                    </div>
                </div>

                <div>
                    <h4>Serviço</h4>
                    <div className="input-container">
                        <FaCut className="icon" />
                        <input
                            type="text"
                            placeholder="Serviço"
                            value={filter.service}
                            onChange={(e) => setFilter({ ...filter, service: e.target.value })}
                        />
                    </div>
                </div>

                <div>
                    <h4>Profissional</h4>
                    <div className="input-container">
                        <FaBriefcase className="icon" />
                        <input
                            type="text"
                            placeholder="Profissional"
                            value={filter.professional}
                            onChange={(e) => setFilter({ ...filter, professional: e.target.value })}
                        />
                    </div>
                </div>

                <div>
                    <h4>Cliente</h4>
                    <div className="input-container">
                        <FaUser className="icon" />
                        <input
                            type="text"
                            placeholder="Cliente"
                            value={filter.client}
                            onChange={(e) => setFilter({ ...filter, client: e.target.value })}
                        />
                    </div>
                </div>

                <div>
                    <h4>Intervalo do Período</h4>
                    <div className="input-container">
   
                        <div className="date-picker-container">
                            <FaCalendarAlt className="date-icon" />
                            <DatePicker
                                selected={filter.startDate}
                                onChange={(date) => setFilter({ ...filter, startDate: date })}
                                placeholderText="Data Inicial"
                                className="date-input"
                            />
                        </div>

                        <span>Até</span>

                        <div className="date-picker-container">
                            <FaCalendarAlt className="date-icon" />
                            <DatePicker
                                selected={filter.endDate}
                                onChange={(date) => setFilter({ ...filter, endDate: date })}
                                placeholderText="Data Final"
                                className="date-input"
                            />
                        </div>
                    </div>
                </div>

                <FilterButtonContainer onClick={() => {/* lógica para filtrar os dados */}}>
                    <FaFilter style={{ marginRight: '8px' }} /> {/* Ícone de filtro */}
                    FILTRAR
                </FilterButtonContainer>
            </FilterContainer>

            <TableContainer>
                <h4>Sua Agenda</h4>
                <p>Consulte os seus cortes de cabelo agendados por periodo</p>
                <Table {...getTableProps()}>
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <Th {...column.getHeaderProps()}>{column.render('Header')}</Th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map(row => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => (
                                        <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
                <button>Excluir</button>
                <button>Cancelar</button>
            </TableContainer>
        </Container>
    );
};

export default ClientScheduling;
