// src/components/SortButton.jsx
import React, { useState, useEffect, useRef } from 'react';
import { SortButtonContainer, IconWrapper, AccordionContainer, AccordionContent, SortOptions, SortOption } from '../../../styles/home/body_style/SortButtonStyle';
import { FaSort, FaThumbsUp, FaMapMarkerAlt, FaStar } from 'react-icons/fa';

const SortButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('sort-recommended'); // Default sort option
  const ref = useRef();

  const toggleAccordion = () => setIsOpen(!isOpen);

  const handleSortChange = (sort) => setSelectedSort(sort);

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <SortButtonContainer ref={ref} onClick={toggleAccordion}>
      <IconWrapper>
        <FaSort className="icon" />
      </IconWrapper>
      Ordenar
      {isOpen && (
        <AccordionContainer>
          <AccordionContent>
            <SortOptions>
              <SortOption>
                <FaThumbsUp className="icon" />
                <label htmlFor="sort-recommended">Recomendados primeiro</label>
                <input 
                  type="radio" 
                  id="sort-recommended" 
                  name="sort" 
                  checked={selectedSort === 'sort-recommended'}
                  onChange={() => handleSortChange('sort-recommended')} 
                />
              </SortOption>
              <SortOption>
                <FaMapMarkerAlt className="icon" />
                <label htmlFor="sort-distance">Distância (mais perto primeiro)</label>
                <input 
                  type="radio" 
                  id="sort-distance" 
                  name="sort" 
                  checked={selectedSort === 'sort-distance'}
                  onChange={() => handleSortChange('sort-distance')} 
                />
              </SortOption>
              <SortOption>
                <FaStar className="icon" />
                <label htmlFor="sort-rating">Avaliações (melhores avaliações primeiro)</label>
                <input 
                  type="radio" 
                  id="sort-rating" 
                  name="sort" 
                  checked={selectedSort === 'sort-rating'}
                  onChange={() => handleSortChange('sort-rating')} 
                />
              </SortOption>
            </SortOptions>
          </AccordionContent>
        </AccordionContainer>
      )}
    </SortButtonContainer>
  );
};

export default SortButton;
