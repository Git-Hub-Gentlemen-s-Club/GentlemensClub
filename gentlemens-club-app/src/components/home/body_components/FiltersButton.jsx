import React, { 
  useState, 
  useEffect, 
  useRef 
} from 'react';

import { 
  FaFilter, 
  FaTag, 
  FaMobileAlt, 
  FaGlobe 
} from 'react-icons/fa';

import {
   FiltersButtonContainer, 
   IconWrapper, 
   AccordionContainer, 
   AccordionContent, 
   FilterOptions, 
   FilterOption, 
   ButtonContainer 
} from '../../../styles/home/body_style/FiltersButtonStyle';

const FiltersButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  const toggleAccordion = () => setIsOpen(!isOpen);

  const handleFilterChange = (filter, e) => {
    e.stopPropagation(); // Impede que o clique nos filtros feche a janela
    setSelectedFilters(prevFilters =>
      prevFilters.includes(filter)
        ? prevFilters.filter(f => f !== filter)
        : [...prevFilters, filter]
    );
  };

  const handleApplyFilters = () => {
    // Lógica para aplicar filtros
    console.log('Aplicar filtros:', selectedFilters);
    setIsOpen(false); // Fecha a janela de filtros somente ao clicar em "Aplicar Filtros"
  };

  const handleClearFilters = () => {
    setSelectedFilters([]);
  };

  const handleClickOutside = (e) => {
    // Fecha a janela somente se o clique for fora do container de filtros
    if (containerRef.current && !containerRef.current.contains(e.target) && !contentRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <FiltersButtonContainer ref={containerRef}>
      <div onClick={toggleAccordion}>
        <IconWrapper>
          <FaFilter />
        </IconWrapper>
        Filtros
      </div>
      {isOpen && (
        <AccordionContainer>
          <AccordionContent ref={contentRef}>
            <FilterOptions>
              <FilterOption>
                <FaTag />
                <label htmlFor="special-offers">Ofertas especiais</label>
                <input 
                  type="checkbox" 
                  id="special-offers" 
                  name="filter" 
                  checked={selectedFilters.includes('special-offers')}
                  onChange={(e) => handleFilterChange('special-offers', e)} 
                />
              </FilterOption>
              <FilterOption>
                <FaMobileAlt />
                <label htmlFor="mobile-services">Serviços móveis</label>
                <input 
                  type="checkbox" 
                  id="mobile-services" 
                  name="filter" 
                  checked={selectedFilters.includes('mobile-services')}
                  onChange={(e) => handleFilterChange('mobile-services', e)} 
                />
              </FilterOption>
              <FilterOption>
                <FaGlobe />
                <label htmlFor="online-services">Serviços online</label>
                <input 
                  type="checkbox" 
                  id="online-services" 
                  name="filter" 
                  checked={selectedFilters.includes('online-services')}
                  onChange={(e) => handleFilterChange('online-services', e)} 
                />
              </FilterOption>
            </FilterOptions>
            <ButtonContainer>
              <button 
                type="button" 
                onClick={handleClearFilters} 
                className={selectedFilters.length > 0 ? 'active' : ''}
              >
                Limpar Tudo
              </button>
              <button type="button" onClick={handleApplyFilters}>Aplicar Filtros</button>
            </ButtonContainer>
          </AccordionContent>
        </AccordionContainer>
      )}
    </FiltersButtonContainer>
  );
};

export default FiltersButton;
