// src/components/LocationHeader.jsx
import React from 'react';
import { LocationHeaderContainer, LocationTitle, LocationIcon } from '../styled_components/LocationHeaderStyle';

const LocationHeader = ({ city }) => {
    return (
        <LocationHeaderContainer>
            <LocationTitle>
                <span>Barbearia perto de você em</span>
                <span>{city}</span>
                <span>(4)</span>
                <LocationIcon />
            </LocationTitle>
        </LocationHeaderContainer>
    );
};

export default LocationHeader;
