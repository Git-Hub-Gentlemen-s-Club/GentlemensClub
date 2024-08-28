// src/components/LocationHeader.jsx
import React from 'react';
import { LocationHeaderContainer, LocationTitle } from '../styled_components/LocationHeaderStyle';

const LocationHeader = ({ city }) => {
    return (
        <LocationHeaderContainer>
            <LocationTitle>Barbearia perto de você em {city}</LocationTitle>
        </LocationHeaderContainer>
    );
};

export default LocationHeader;
