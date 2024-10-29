import styled from "styled-components";

export const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.75);
    z-index: 100;
`;

export const CalendarContainer = styled.div`
    .react-calendar {
        font-family: 'Open Sans', sans-serif;
    }

    .react-calendar__navigation {
    display: flex;

    .react-calendar__navigation__label {
      font-weight: bold;
      padding: 1rem;
    }

    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
    }
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
  }

  .react-calendar__month-view__weekdays abbr{
    color: black;
    font-family: 'Open Sans', sans-serif;
    text-decoration: none;
  }

  button {
    background: none;
    border: none;
    border-radius: 5px;
    margin: 5px;
    &:hover {
      background-color: #cacaca;
    }
    &:active {
      background-color: #B58934;
    }

  }

/* Foi usado o !important, pois a estilização do react calendar é feita inline */
  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr !important; 
  }

  .react-calendar__month-view__days__day {
    width: 2rem !important;
    padding: 10px;
    margin: 7px !important;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.5;
  }
  
  .react-calendar__month-view__days__day--weekend {
    color: red;
  }

  .react-calendar__month-view__days__day--weekend:disabled {
    opacity: 0.5;
  }

  .react-calendar__tile--range {
    background-color: #B58934;
  }

  .react-calendar__year-view__months, 
  .react-calendar__decade-view__years, 
  .react-calendar__century-view__decades {
    display: grid !important;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    &.react-calendar__year-view__months {
      grid-template-columns: 1fr 1fr 1fr;
    }

    .react-calendar__tile {
      max-width: initial !important;
    }
  }
`;

export const WhenFilter = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    border-radius: 3px;
    padding: 1.5rem;
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
`;

export const Schedule = styled.button`
    width: 100%;
    margin-top: 3rem;
    margin-bottom: 1rem;
    border: none;
    background-color: #B58934;
    color: white;
    padding: 1rem;
    border-radius: 5px; 
    cursor: pointer;
    &:hover {
      background-color: #A17A2F;
    }
    &:active {
      background-color: #B58934;
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    border: none;
    background-color: #B58934;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    &:hover {
      background-color: #A17A2F;
    }
    &:active {
      background-color: #B58934;
    }
`;

export const Clean = styled.button`
    width: 100%;
    margin: 1rem 1rem 1rem 0;
    border: none;
    background-color: #B58934;
    color: white;
    padding: 1rem;
    border-radius: 5px; 
    cursor: pointer;
`;

export const ButtonsWrapper = styled.div`
    display: grid;
    grid-template-columns: ${({ button }) => { button ? '1fr 1fr' : '1fr' }};
    grid-gap: 5px;
`;

export const PreferredTime = styled.h3`
    font-size: 20px;
    font-family: 'Open Sans', sans-serif;
    color: black;
`;