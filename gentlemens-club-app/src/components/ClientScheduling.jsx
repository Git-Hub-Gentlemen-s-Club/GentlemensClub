import React, { useState } from 'react';
import { useTable } from 'react-table';
import { FaCalendarAlt, FaSearch, FaTrashAlt, FaTimes } from 'react-icons/fa'; // Ícones adicionais
import { Container, LogoContainer, FilterContainer, FilterButtonContainer, TitleContainer, NavBarContainer, TitleSubtitleContainer, TableContainer, Table, Th, Td, SearchContainer, InputContainer, ButtonContainer, FooterContainer } from '../styled_components/ClientSchedulingStyle'; // Importando estilos
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
            { barberShop: 'Juninho Barbearia SP', service: 'Corte de Cabelo', professional: 'Juninho', client: 'Carlos', date: '30/09/2024', value: 'R$50', status: 'Agendado' },
            { barberShop: 'Juninho Barbearia SP', service: 'Corte de Cabelo', professional: 'Juninho', client: 'Carlos', date: '30/09/2024', value: 'R$50', status: 'Agendado' },
            { barberShop: 'Juninho Barbearia SP', service: 'Corte de Cabelo', professional: 'Juninho', client: 'Carlos', date: '30/09/2024', value: 'R$50', status: 'Agendado' },
            { barberShop: 'Juninho Barbearia SP', service: 'Corte de Cabelo', professional: 'Juninho', client: 'Carlos', date: '30/09/2024', value: 'R$50', status: 'Agendado' },
            { barberShop: 'Juninho Barbearia SP', service: 'Corte de Cabelo', professional: 'Juninho', client: 'Carlos', date: '30/09/2024', value: 'R$50', status: 'Agendado' },
            { barberShop: 'Juninho Barbearia SP', service: 'Corte de Cabelo', professional: 'Juninho', client: 'Carlos', date: '30/09/2024', value: 'R$50', status: 'Agendado' }, 
            { barberShop: 'Juninho Barbearia SP', service: 'Corte de Cabelo', professional: 'Juninho', client: 'Carlos', date: '30/09/2024', value: 'R$50', status: 'Agendado' }, 
            { barberShop: 'Juninho Barbearia SP', service: 'Corte de Cabelo', professional: 'Juninho', client: 'Carlos', date: '30/09/2024', value: 'R$50', status: 'Agendado' }, 
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
                            placeholder="Sr. Costa  Barbershop"
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
                            placeholder="Corte simples"
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
                            placeholder="Não selecionado"
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
                            placeholder="Rafael Santos"
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
                <NavBarContainer>
                    <li>Home</li>
                    <li className="active">Agendamentos</li>
                    <li>Carteira</li>
                    <li>Planos e Preço</li>
                    <li>Perfil</li>
                </NavBarContainer>

                <TitleSubtitleContainer>
                    <h1>Sua Agenda</h1>
                    <p>Consulte os seus cortes de cabelo agendados por período</p>
                </TitleSubtitleContainer>

                <SearchContainer>
                    <InputContainer>
                        <FaSearch className="icon" />
                        <input type="text" placeholder="Pesquise por Barbearia, Seriviço, Profissonal, Cliente, Data, Valor ou Status..." />
                    </InputContainer>
                    <ButtonContainer>
                        <button><FaTrashAlt /> Excluir</button>
                        <button className="delete-button"><FaTimes /> Cancelar</button>
                    </ButtonContainer>
                </SearchContainer>

                {/* Estrutura da tabela */}
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

                <FooterContainer>
                    <div className="rows-per-page">
                        Linhas por página: <span>8</span>
                    </div>
                    <div className="pagination-info">
                        Página: 1 de 8
                    </div>
                </FooterContainer>
            </TableContainer>

        </Container>
    );
};

export default ClientScheduling;
