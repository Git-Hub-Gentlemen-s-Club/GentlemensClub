// src/components/Pagination.jsx
import React from "react";
import { PaginationContainer, PageNumber, ArrowButton } from "../../../styles/home/body_style/PaginationStyle";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <PaginationContainer>
            <ArrowButton onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                <FontAwesomeIcon icon={faArrowLeft} size="sm" />
            </ArrowButton>
            {pages.map((page) => (
                <PageNumber key={page} active={page === currentPage} onClick={() => onPageChange(page)}>
                    {page}
                </PageNumber>
            ))}
            <ArrowButton onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                <FontAwesomeIcon icon={faArrowRight} size="sm" />
            </ArrowButton>
        </PaginationContainer>
    );
};

export default Pagination;
