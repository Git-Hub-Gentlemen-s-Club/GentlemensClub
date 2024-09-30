import React, { useState } from 'react';
import { useTable } from 'react-table';
import { FaCalendarAlt, FaSearch, FaTrashAlt, FaTimes } from 'react-icons/fa'; 
import { Container, LogoContainer, FilterContainer, FilterButtonContainer, TitleContainer, NavBarContainer, TitleSubtitleContainer, TableContainer, Table, Th, Td, SearchContainer, InputContainer, ButtonContainer, FooterContainer, StatusContainer, CheckboxContainer } from '../styled_components/ClientSchedulingStyle';
import logo from '../assets/ClientScheduling/LogoTelaAgendamento.png';
import { FaCut, FaUser, FaBuilding, FaBriefcase, FaFilter } from 'react-icons/fa'; 
import DatePicker from 'react-datepicker';
import { ptBR } from 'date-fns/locale';
import { parse, isAfter, isBefore } from 'date-fns';
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
        { id: 2, barberShop: 'Sr. Costa Barbershop', service: 'Corte de Cabelo', professional: 'Juninho', client: 'Carlos', date: '30/09/2024', value: 'R$50', status: 'CANCELADO' },
        { id: 3, barberShop: 'Barbearia da vila', service: 'Corte de Cabelo', professional: 'Juninho', client: 'Carlos', date: '30/09/2024', value: 'R$50', status: 'CONCLUIDO' },
        { id: 4, barberShop: 'Consolação Barbearia', service: 'Corte de Cabelo', professional: 'Juninho', client: 'Carlos', date: '30/09/2024', value: 'R$50', status: 'CONCLUIDO' },
        { id: 5, barberShop: 'Barbearia sei lá', service: 'Corte de Cabelo', professional: 'Juninho', client: 'Carlos', date: '30/09/2024', value: 'R$50', status: 'CONCLUIDO' },
        { id: 6, barberShop: 'Barbearia tal', service: 'Corte de Cabelo', professional: 'Juninho', client: 'Carlos', date: '30/09/2024', value: 'R$50', status: 'CONCLUIDO' },
        { id: 7, barberShop: 'Outra Barbearia', service: 'Corte de Cabelo', professional: 'Juninho', client: 'Carlos', date: '30/09/2024', value: 'R$50', status: 'CONCLUIDO' },
        { id: 8, barberShop: 'já cansei barbearia', service: 'Corte de Cabelo', professional: 'Juninho', client: 'Carlos', date: '30/09/2024', value: 'R$50', status: 'CONCLUIDO' },
    ]);

    const [filteredData, setFilteredData] = useState(data);

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
    } = useTable({ columns, data: filteredData });

    const handleFilter = () => {
        let filtered = data;

        // Filtrando os dados com base nos filtros
        if (filter.barberShop) {
            filtered = filtered.filter(item => 
                item.barberShop.toLowerCase().includes(filter.barberShop.toLowerCase())
            );
        }
        if (filter.service) {
            filtered = filtered.filter(item => 
                item.service.toLowerCase().includes(filter.service.toLowerCase())
            );
        }
        if (filter.professional) {
            filtered = filtered.filter(item => 
                item.professional.toLowerCase().includes(filter.professional.toLowerCase())
            );
        }
        if (filter.client) {
            filtered = filtered.filter(item => 
                item.client.toLowerCase().includes(filter.client.toLowerCase())
            );
        }
        if (filter.startDate) {
            filtered = filtered.filter(item => {
                const itemDate = parse(item.date, 'dd/MM/yyyy', new Date());
                return isAfter(itemDate, filter.startDate) || itemDate.getTime() === filter.startDate.getTime();
            });
        }
        
        if (filter.endDate) {
            filtered = filtered.filter(item => {
                const itemDate = parse(item.date, 'dd/MM/yyyy', new Date());
                return isBefore(itemDate, filter.endDate) || itemDate.getTime() === filter.endDate.getTime();
            });
        }       

        setFilteredData(filtered);
    };

    const handleSelect = (id) => {
        setSelectedIds((prevSelected) => 
            prevSelected.includes(id) 
                ? prevSelected.filter(selectedId => selectedId !== id) 
                : [...prevSelected, id]
        );
    };

    const [searchTerm, setSearchTerm] = useState('');

    const handleDelete = () => {
        // Excluir itens que têm status "CONCLUIDO" ou "CANCELADO"
        const updatedData = data.filter(item => {
            return !selectedIds.includes(item.id) || (item.status !== 'CONCLUIDO' && item.status !== 'CANCELADO');
        });
    
        setData(updatedData);
    
        // Atualizar também o estado de filteredData para garantir que a tabela filtrada reflita a remoção
        const updatedFilteredData = filteredData.filter(item => {
            return !selectedIds.includes(item.id) || (item.status !== 'CONCLUIDO' && item.status !== 'CANCELADO');
        });
    
        setFilteredData(updatedFilteredData);
        setSelectedIds([]);
    };
    
    const handleCancel = () => {
        const updatedData = data.map(item => {
            if (selectedIds.includes(item.id) && item.status === 'AGENDADO') {
                return { ...item, status: 'CANCELADO' };
            }
            return item;
        });
    
        setData(updatedData);
    
        // Atualizar também o estado de filteredData
        const updatedFilteredData = filteredData.map(item => {
            if (selectedIds.includes(item.id) && item.status === 'AGENDADO') {
                return { ...item, status: 'CANCELADO' };
            }
            return item;
        });
    
        setFilteredData(updatedFilteredData);
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
                                locale={ptBR}
                                dateFormat="dd/MM/yyyy"
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
                                locale={ptBR}
                                dateFormat="dd/MM/yyyy"
                                className="date-input"
                            />
                        </div>
                    </div>
                </div>

                <FilterButtonContainer onClick={handleFilter}>
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
                    <h1>Sua agenda</h1>
                    <p>Gerencie seus agendamentos de forma eficiente.</p>
                </TitleSubtitleContainer>

                <SearchContainer>
                    <InputContainer>
                        <FaSearch className="icon" />
                        <input
                            type="text"
                            placeholder="Pesquise por Barbearia, Seriviço, Profissonal, Cliente, Data, Valor ou Status."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
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