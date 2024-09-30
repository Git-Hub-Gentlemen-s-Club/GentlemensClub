import React, { useState } from 'react';
import { useTable } from 'react-table';
import { FaCalendarAlt, FaSearch, FaTrashAlt, FaTimes } from 'react-icons/fa'; 
import { Container, LogoContainer, FilterContainer, FilterButtonContainer, TitleContainer, NavBarContainer, TitleSubtitleContainer, TableContainer, Table, Th, Td, SearchContainer, InputContainer, ButtonContainer, FooterContainer, StatusContainer, CheckboxContainer } from '../styled_components/ClientSchedulingStyle';
import logo from '../assets/ClientScheduling/LogoTelaAgendamento.png';
import { FaCut, FaUser, FaBuilding, FaBriefcase, FaFilter } from 'react-icons/fa'; 
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 

const ClientScheduling = () => {
    const [filter, setFilter] = useState({
        barberShop: '',
        service: '',
        professional: '',
        client: '',
        startDate: null,
        endDate: null,
    });

    const [selectedIds, setSelectedIds] = useState([]);

    const [data, setData] = useState([
        { id: 1, barberShop: 'Juninho Barbearia SP', service: 'Corte de Cabelo', professional: 'Juninho', client: 'Carlos', date: '30/09/2024', value: 'R$50', status: 'AGENDADO' },
        { id: 2, barberShop: 'Juninho Barbearia SP', service: 'Corte de Cabelo', professional: 'Juninho', client: 'Carlos', date: '30/09/2024', value: 'R$50', status: 'CANCELADO' },
        { id: 3, barberShop: 'Juninho Barbearia SP', service: 'Corte de Cabelo', professional: 'Juninho', client: 'Carlos', date: '30/09/2024', value: 'R$50', status: 'CONCLUIDO' },
    ]);

    const columns = React.useMemo(
        () => [
            {
                Header: 'Selecionar',
                accessor: 'select',
                Cell: ({ row }) => (
                    <CheckboxContainer>
                        <input
                            type="checkbox"
                            checked={selectedIds.includes(row.original.id)}
                            onChange={() => handleSelect(row.original.id)}
                        />
                    </CheckboxContainer>
                )
            },
            { Header: 'Barbearia', accessor: 'barberShop' },
            { Header: 'Serviço', accessor: 'service' },
            { Header: 'Profissional', accessor: 'professional' },
            { Header: 'Cliente', accessor: 'client' },
            { Header: 'Data', accessor: 'date' },
            { Header: 'Valor', accessor: 'value' },
            { Header: 'Status', accessor: 'status', Cell: ({ value }) => (
                <StatusContainer className={value.toLowerCase()}>
                    {value}
                </StatusContainer>
            )}
        ],
        [selectedIds]
    );
    

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    const handleSelect = (id) => {
        setSelectedIds((prevSelected) => 
            prevSelected.includes(id) 
                ? prevSelected.filter(selectedId => selectedId !== id) 
                : [...prevSelected, id]
        );
    };

    const handleDelete = () => {
        // Excluir itens que têm status "Concluído" ou "CANCELADO"
        const newData = data.filter(item => {
            return !selectedIds.includes(item.id) || (item.status !== 'CONCLUIDO' && item.status !== 'CANCELADO');
        });
        setData(newData);
        setSelectedIds([]);
    };

    const handleCancel = () => {
        // Cancelar itens que têm status "AGENDADO"
        const updatedData = data.map(item => {
            if (selectedIds.includes(item.id) && item.status === 'AGENDADO') {
                return { ...item, status: 'CANCELADO' };
            }
            return item;
        });
        setData(updatedData);
        setSelectedIds([]);
    };

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
                    <FaFilter style={{ marginRight: '8px' }} />
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
                    <h1>Serviços</h1>
                    <p>Gerencie seus agendamentos de forma eficiente.</p>
                </TitleSubtitleContainer>

                <SearchContainer>
                    <InputContainer>
                        <FaSearch className="icon" />
                        <input
                            type="text"
                            placeholder="Pesquisar"
                            value={filter.client}
                            onChange={(e) => setFilter({ ...filter, client: e.target.value })}
                        />
                    </InputContainer>
                    <ButtonContainer>
                        <button onClick={handleDelete}>
                            <FaTrashAlt style={{ marginRight: '8px' }} />
                            Excluir
                        </button>
                        <button className="cancel-button" onClick={handleCancel}>
                            <FaTimes style={{ marginRight: '8px' }} />
                            Cancelar
                        </button>
                    </ButtonContainer>
                </SearchContainer>

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
                        Página: 1 de 1
                    </div>
                </FooterContainer>
            </TableContainer>
        </Container>
    );
};

export default ClientScheduling;