import styled from "styled-components";
import Slider from 'react-slick';


export const Background = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width: 100vw;
  height: 100vh;
  background-image: url('/src/assets/LoginScreen_images/Login Cliente - Desktop.png');
  background-size: cover; 
  background-position: center;
  background-repeat: no-repeat;
  color:#101010;
  flex-wrap:wrap;

  & button{
    &:hover{
        cursor:pointer;
    }
  }
`

export const Container = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:row;
    align-items:center;
    position:relative;
    margin:0 auto;
    width: 70vw;
    height:90vh;
    background-color:#1C1D20;
    border-radius:50px;
    @media (max-width: 810px), (max-height:510px)  {
        position:absolute;
        flex-direction:column;
        width:100vw;
        margin:0;
        max-width:none;
        border-radius:0;
        height:100vh;
    }
    @media (max-height:510px) {
    }
`

export const RightSide = styled.div`
    position: relative;
    width: 100%;
    min-width: 50%;
    height: 100%;
    border-radius: 0 50px 50px 0;
    margin: 0;
    background-color:unset;
    @media (max-width: 810px) {
        display:none;
        border-radius: 0;
    }
    @media (max-height:510px) {
        display:none;
    }
`;

export const CarouselContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: none;
    border-radius: 0 50px 50px 0;
    padding: 0;
`;
export const StyledCarousel = styled(Slider)`
  .slick-prev,
  .slick-next {
    position: absolute;
    z-index: 1;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: rgb(69, 69, 69);
    font-size: 24px;
    /* text-shadow: 0 0 5px black; */

    &::before {
      all: unset;

    }
  }

  .slick-prev {
    left: 1%; 
  }

  .slick-next {
    right: 1%;
  }

  .slick-dots {
      transform:translateY(-350%);
    li {
      position:relative;
      width: 10px; /* Largura dos dots */
      height: 5px; /* Altura dos dots */
      font-size:0;
      button {
        all:unset;
        width: 15px;
        height: 5px;
        border-radius: 4px; /* Bordas arredondadas */
        background-color: rgba(255, 255, 255, 0.5); /* Cor padrão dos dots */
        transition: background-color 0.3s ease;

        &::before {
          content: none; /* Remove a bolinha padrão */
        }
      }

      &.slick-active button {
        background-color: #B58934; /* Cor do dot selecionado */
      }
    }
  }
`;


export const ImageSlide = styled.div`
    background-image: url(${(props) => (props.show)});
    background-size:cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    width: 100%;
    height: 90vh;
    border-radius: 0 50px 50px 0;
    @media (max-width: 810px), (max-height:510px) {
        border-radius: 0;
    }
`;

// export const Image = styled.img`
//     width: 100%;
//     height: 100%;
    
// `;

export const ImageLabel = styled.div`
    position: absolute;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    bottom: 10%;
    width: 100%;
    min-height: 12%;
    height:fit-content;
    background-color: #1C1D21;
    color: #B58934;
    text-align: center;
    padding: 0 1rem;
    box-sizing: border-box;
    z-index:1;
    & h1 {
        font-family: 'Playfair Display', serif;
        font-size: 2rem;
        line-height: 2.75rem;
        letter-spacing: -0.04rem;
        margin: 0;
    }
    & p {
        font-weight: 500;
        font-size: 1.125rem;
        letter-spacing: -0.04rem;
        margin: 0;
    }
`;



export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50px 0 0 50px;
    margin: 0 auto;
    overflow-y:auto;
    scrollbar-color: #757575 #1C1D20;
    min-width:fit-content;
    @media (max-width: 810px) {
        /* overflow:unset; */
        border-radius: 0;
        height:100%;
    }
`;

export const Forms = styled.form`
    position: relative;
    display: flex;
    align-items: top;
    flex-direction: column;
    min-height: fit-content;
    margin: 0 auto;
    width: 60%;
    padding: 36px;
    margin-top: 20px; /* Espaço adicional na parte superior */
    & img{
        display: inline-block;
        vertical-align: top;
        height: 36px; 
        object-fit: none;
        width: 0;
        min-width: 17rem; 
    }

    & img.mini_logo{ // A cor ta meio fraca
        all:unset;
        align-items:top;
        position:absolute;
        width:fit-content;
        transform:translate(-200%, 100%);
        top:0;
        z-index:2;        
        @media (max-width: 1000px) {
            display:none;
        }
    }
    & h1{ //O G dessa fonte está diferente da letra G do figma, qual fonte usar?
        color: #D2D2D2;
        font-size:3rem;
        height:fit-content;
    }
    & p{
        font-size:1rem;
        font-weight:bold;
        color:#9C9C9C;
        margin-top:1rem;
        margin-bottom:2rem;
    }
    & input{
        background:none;
        border: none;
        border-bottom: 1px solid #777879;
        height:2.25rem;
        color: #777879;
        font-size:1rem;
        font-weight:600;
        width:100%;
        &::placeholder{
        font-weight:600;
        }   
    }
    & label{
        position:absolute;
        pointer-events:none;
        color:#777879;
        font-weight:600;
        height:2.25rem;
        align-content:center;
    }
    & div{
        display:flex;
        /* width:fit */
        justify-content:center;
        position:relative;
        flex-direction:column;
        gap:2rem;
    }
    & a{
        text-decoration:none;
        color:#777879;
        font-weight:600;
        &:hover{
            text-decoration:underline;
        }
    }
    & button{
        width:100%;
        max-width:40rem;
        background-color: #B58934;
        color:#D2D2D2;
        border:none;
        border-radius:12px;
        padding: 1rem 0;
        font-size:1.2rem;
        margin:0 auto;
    }
    @media (max-width: 810px), (max-height:510px) {
        height:fit-content;
    }
`

export const OtherLinks = styled.div`
    display:flex;
    margin:0 auto;
    position:relative;
    width:60%;
    gap:3rem;
    flex-direction:column;
    & div{
        display:flex;
        flex-direction:column;
        gap:1rem;
        width:100%;
    }
    & button{
        /* text-align:center; */
        display:flex;
        justify-content:center;
        align-content:left;
        width:100%;
        max-width:40rem;
        max-height:55px;
        margin:0 auto;
        background-color: #D2D2D2;
        color:#000;
        border:none;
        border-radius:12px;
        padding: 1rem 0;
        font-size:1.2rem;
        & img{
            position:relative;
            margin-right:8px;
            transform:translateY(-15%)
        }
        & p {
            display: flex;
            position: relative;
            justify-content: center;
            margin: 0;
            align-self:center;
        }
    }
    & p.BottomText{
        font-size:1rem;
        font-weight:400;
        align-content:center;
        color:#9C9C9C;
        } 
    & div.BottomDiv{
        flex-direction:row;
        margin-bottom:3rem;
        & button{
            background-color:#2F3032;
            color:#9C9C9C;
            width:auto;
            padding:1rem;
        & p {
            @media (max-width: 810px), (max-height:510px) {
                transform:translateY(-20%)
            }
        }
    }
}   
`
export const Icon = styled.div`
color: #9C9C9C;
font-size: 18px; 
position:absolute;
bottom:0;
right:0;
transform:translate(-50%, -50%);
width:1.5rem;
z-index:2;
`;

