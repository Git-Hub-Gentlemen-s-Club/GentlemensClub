import styled from "styled-components"

export const BarberShop = styled.div`
    background-color: #000;
    `
export const Header = styled.header`
    /* background-color: #161718;
    display: flex;
    flex-direction: row;*/
    color: #B58934;
    font-family: Rye, sans-serif;
    margin: 0 auto;
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr 5fr;
    background-color: #161718;
    /* @media only screen and (max-width: 1166px) {
        height: 4rem;
        max-width: 100%;
    } */
    `
export const LogoDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 15%; */
    `
export const LogoBarbaDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 1.5rem;
    align-items: center;
    width: 15%;
`;

export const HeaderDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 85%;
    `
export const ImgDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    button{
        background-color: #B58934;
        width: 20%;
        height: 2.5rem;
        border: none;
        border-radius: 5px;
        padding: 0;
        font-weight: 600;
        margin-left: 5%;
        cursor: pointer;
    }
    `
export const ImgEnderecoDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 45%;

    h2{
        font-size: 1.25rem;
        font-weight: 400;
        letter-spacing: 1px;
        font-family:'Inter', sans-serif; 
    }
    p{
        font-size: 0.75rem;
        font-family: 'Inter', sans-serif;
    }
`
export const DivIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

export const LogoImg = styled.img`
    width: auto;
    
    `
export const LogoBarbershop = styled.img`
    width: auto;
    height: 3rem;
    border-radius: 50%;
    `
export const LinkDiv = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    gap: 3rem;
    align-items: center;
    padding-top: 1rem;
    `
export const Link = styled.a`
    font-size: 0.7rem;
    padding-bottom: 1rem;
    box-sizing: border-box;
    border-bottom: 1px solid transparent;

    &:hover{
        cursor:pointer;
        color: #655026;
        border-bottom: 1px solid #B58934;
    }
    `
export const Body = styled.div`
    display: flex;
    flex-direction: row;

    h2{
        font-weight: 400;
    }
`
export const Section = styled.section`
    width: 65%;
    margin-left: 2rem;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
`
export const BarberShopImgDiv = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 2rem 0 0rem;
`
export const LogoBarbershopPrincipal = styled.img`
    width: 100%;
    height: 45rem;
    border-radius: 5px;
`
export const Avaliation = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    background-color: #B58934;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 0.5rem;

    h2{
        width: 100%;
        text-align: center;
    }

    p{
        width: 100%;
        text-align: center;
        font-size: 0.8rem;
    }
`
export const BarberShopEnderecoDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const NameDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 80%;
    padding: 1rem 0 1rem 0;
    
    h2{
        color: #B58934;
    }
    p{
        color: rgba(255,255,255, 0.5);
        font-size: 0.7rem;
    }
`
export const DivIconsII = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    width: 20%;
    gap: 1rem;
`
export const DestaqueDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
    margin-bottom: 1rem;
    
    span{
        display: flex;
        font-size: 0.7rem;
        color: white;
        padding: 1rem 0 1rem 0;
        gap: 0.4rem;
    }

    button{
        border: none;
        background-color: #B58934;
        border-radius: 10px;
        padding: 5px 20px;
        font-size: 0.6rem;
        font-weight: 600;
    }
`
export const BuscaDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* margin-left: 2rem; */
    margin-right: 2rem;
    font-weight: 400;
    margin-bottom: 1rem;

    h2{
        color: #B58934;
    }

    input{
        width: 20rem;
        border-radius: 8px;
        padding: 2px 10px;
    }
`

export const ServicosDiv = styled.div`
    margin-top: 1rem;
    color: white;
`

export const Aside = styled.aside`
    width: 35%;
    color: #ffffff;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 1rem;

    p{
        font-size: 0.8rem;
        font-weight: 400;
        padding-top: 1rem;
        padding-bottom: 1rem;
        padding-left: 1rem;
    }

    h3{
        color: #B58934;
        font-size: 0.8rem;
        font-weight: 400;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
    hr{
        border: none;
        border-top: 1px solid #B58934;
    }
`

export const AsideGiftCard = styled.div`
    border: 1px solid #ffffff;
    border-radius: 5px;
    margin-right: 1rem;
    padding: 1rem;

    h4 {
        display: inline;
        margin-left: 5px;
        color: #B58934;
    }

    p{
        font-size: 0.8rem;
        margin-top: 1rem;
    }

    button {
        background-color: #B58934;
        height: 2rem;
        border: none;
        border-radius: 5px;
        padding: 0 5px 0 5px;
        font-weight: 600;
        font-size: 0.7rem;
        display: block;
        margin: 1rem 5px 5px 0;
        cursor: pointer;
    }
`;

export const AsideIframe = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    margin-top: 1rem;
    
    iframe{
        /* border-radius: 5px; */
        width: 97%;
        height: 13rem;
        border: none;
    }
`
export const MembrosEquipe = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 10px;
`
export const TeamMember = styled.div`
  border-radius: 10px;
  text-align: center;
  width: 150px;
`;

export const TeamImage = styled.img`
  width: 4rem;
  height: auto;
  border-radius: 50%;
`;

export const TeamName = styled.h4`
  margin-top: 0.5rem;
  color: white;
  font-size: 0.6rem;
  font-weight: 400;
`;

export const ContatoAside = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 0.8rem;
    padding-top: 2rem;
    padding-bottom: 2rem;

    div{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    button {
        background-color: #B58934;
        height: 2rem;
        width: 4rem;
        border: none;
        border-radius: 5px;
        padding: 0 5px 0 5px;
        font-weight: 600;
        font-size: 0.7rem;
        cursor: pointer;
    }
`
export const OpeningHoursContainer = styled.div`
  padding: 1rem;
  border-radius: 10px;
  margin-top: 1rem;
`;

export const Day = styled.div`
  padding: 0.5rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
`;

export const DayName = styled.div`
  font-weight: bold;
  color: #B58934;
`;

export const Hours = styled.div`
  display: flex;
  flex-direction: column;
  color: rgba(255,255,255,0.8);
`;

export const CardMap = styled.div`
    p {
        font-size: 0.75rem;
    }

    span {
        display: flex;
        flex-direction: column;
    }

    button {
        display: inline;
        background-color: transparent;
        border: none;
        cursor: pointer;
        border-left: 1px solid white;
    }
    background-color: #B58934;
    padding: 5px;
    border-radius: 5px;
    gap: 10px;
    display: grid;
    grid-template-columns: 1fr 6fr 1fr;
    width: 20rem;
    position: absolute;
    bottom: 1rem;
    left: 0;
    right: 0;
    margin: auto;
`
export const Accordion = styled.button`
  background-color: transparent;
  color: #ffff;
  cursor: pointer;
  padding-bottom: 1rem;
  padding-top: 1rem;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
  display: flex;
  justify-content: start;
  gap: 0.5rem;
  align-items: center;
  font-size: 1.2rem;

  &::before {
    content: '${props => (props.active ? '▲' : '▶')}';
    font-size: 12px;
    margin-left: 10px;
  }
`;

export const Panel = styled.div`
  padding: 0 18px;
  background-color: transparent;
  display: ${props => (props.active ? 'none' : 'block')};
  overflow: hidden;
`;

export const DivKeyPanel = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 0.8rem;
    color: rgba(255,255,255, 0.8);
    justify-content: space-between;
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
`
export const DivButton = styled.div`
    display:flex;
    gap: 1rem;

    button{
        background-color:#B58934 ;
        padding: 0px 10px 0px 10px;
        height: 1.8rem;
        border: none;
        border-radius: 5px;
        font-size: 0.8rem;
    }
`
export const DivPanel = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    
    h4{
        font-weight: 400;
        color: rgba(255,255,255, 0.7);
        
    }
    p{
        font-size: 0.7rem;
        color: rgba(255,255,255, 0.6);
    }
`

export const RegrasSaude = styled.div`
    color: white;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
    padding-top: 5rem;
    padding-bottom: 5rem;

    h2{
        width: 100%;
        color: #B58934;
        padding-bottom: 1rem;
    }

    div{
        width: 40%;
        display: flex;
        flex-direction: row;
        gap: 1rem;
        align-items: center;
    }
`

export const NossoTrabalho = styled.div`
    h2 {
        color: #B58934;
        padding-bottom: 2rem;
    }
    div {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
        gap: 1rem;
        background-color: #181818;
        border-radius: 10px;
        padding: 1rem;
        align-items: center;
        img {
            width: 100%;
            height: auto;
            border-radius: 5px;
        }
        img:first-child {
            height: 100%;
            width: 100%;
            grid-row: span 2;
            grid-column: span 2;
        }
    }
    button {
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        background-color: #B58934;
        border: none;
        border-radius: 5px;
        width: 100%;
        margin-bottom: 3rem;
        cursor: pointer;
        &:hover {
            background-color: #A4782C;
        }
    }
`;

export const ReviewContainer = styled.div`
  border-bottom: 1px solid #ccc;
  padding-bottom: 1rem;
  margin: 16px 0;
  color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;
export const ReviewContainerRating = styled.div`
    width: 70%;
`
export const ReviewContainerUser = styled.div`
    width: 30%;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: baseline;
    justify-content: flex-end;

    span{
        font-size: 2rem;
    }
`
export const ReviewContainerLike = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 1rem;

    div{
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }
`

export const ServiceTitle = styled.h3`
  margin: 0 0 8px 0;
  font-weight: 400;
  font-size: 0.8rem;
`;

export const Barber = styled.p`
  margin: 4px 0;
  font-weight: 400;
  font-size: 0.8rem;
  padding-bottom: 2rem;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
`;

export const Star = styled.span`
  color: ${props => (props.filled ? '#FF9400' : '#ccc')};
  margin-right: 4px;
  font-size: 2rem;
`;

export const Comment = styled.p`
  margin: 8px 0;
  width: 100%;
`;

export const User = styled.p`
  font-size: 0.8rem;
`;

export const Date = styled.p`
  font-size: 0.8rem;
`;

export const Like = styled.button`
    border: 1px solid white;
    border-radius: 50px;
    padding: 0.5rem 1rem;
    color: white;
    background-color: transparent;
    display: flex;
    gap: 1rem;
    align-items: center;
`
export const Report = styled.button`
    border: none;
    background-color:#B58934;
    display: flex;
    gap: 0.5rem;
    padding: 10px 5px;
    border-radius: 20px;
    align-items: center;
`;

export const Commodities = styled.div`
    color: white;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: 2rem;

    h2{
        color:#B58934 ;
        width: 100%;
    }
    h4{
        font-weight: 400;
        font-size: 0.9rem;
    }
    div{
        display: flex;
        flex-direction: row;
        width: 50%;
        gap: 1rem;
        align-items: center;
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
`

export const Reviews = styled.div`
    color: white;
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 3rem;
`

export const ReviewsText = styled.div`
    width: 50%;

    h2{
        color: #B58934;
        padding-bottom: 1rem;
    }
    p{
        font-size: 0.8rem;
    }
`

export const RateDiv = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid white;
    border-radius: 10px;
    text-align: center;
    align-items: center;
    width: 50%;
`
export const RateDivRate = styled.div`
    width: 40%;
    padding: 1rem;

    span{
        font-size: 1rem;
    }

    p{
        font-size: 0.8rem;
    }
`

export const Hrdiv = styled.div`
    display: flex;
    flex-direction: column;
    border-left: 1px solid #B58934;
    height: 100%;
    width: 60%;
    justify-content: center;
    padding: 0.5rem;
    font-size: 0.7rem;


    div{
        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: center;
        gap: 1.4rem;
    }
`