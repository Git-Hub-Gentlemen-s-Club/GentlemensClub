import styled from "styled-components";

export const Background = styled.div`
  width: 100vw;
  min-height:fit-content;
  height: 100vh;
  background-image: url('/src/assets/LoginScreen_images/Login Cliente - Desktop.png');
  background-size: cover; 
  background-position: center;
  background-repeat: no-repeat;
  color:#101010;
  overflow-y:auto;
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
    position:relative;
    margin:0 auto;
    margin-top:5vh;
    margin-bottom:5vh;
    max-width:85vw;
    background-color:#1C1D20;
    border-radius:50px;
    @media (max-width: 810px) {
        position:relative;
        flex-direction:column;
        height:fit-content;
        width:100vw;
        margin:0;
        max-width:none;
        border-radius:0;
    }
`

export const RightSide = styled.div`
    position: relative;
    width:100%;
    min-width:50%;
    height:100%;
    min-height:50rem;
    background-image: url('/src/assets/LoginScreen_images/Barber_pole_login.png');
    background-size: 100% 100%; 
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 0 50px 50px 0;
    @media (max-width: 810px) {
        /* display:none; */
        border-radius:0;
    }
`

export const ImageLabel = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    position: absolute;
    bottom: 10%;
    width:100%;
    height:12%;
    background-color:#1C1D21;
    color:#B58934;
    text-align:center;
    & h1 {
        font-family:'Playfair Display', serif;
        font-size:2rem;
        line-height:2.75rem;
        letter-spacing:-.04rem;
    }
    & p {
        display:inline-block;
        position:relative;
        bottom:0;
        align-content:center;
        height:calc(100% - 2.75rem);
        /* line-height:100%; */
        font-weight:500;
        font-size:1.125rem;
        letter-spacing:-.04rem;
    }
`

export const LeftSide = styled.div`
    display:flex;
    flex-direction:column;
    position: relative;
    width:100%;
    min-width:50;
    height:100%;
    min-height:fit-content;
    border-radius:50px 0 0 50px;
    margin:0 auto;
    margin-top:2.875rem;
    @media (max-width: 810px) {
        border-radius:0;
    }
`

export const Forms = styled.form`
    position: relative;
    display: flex;
    align-items:top;
    flex-direction: column;
    min-height:fit-content;
    margin:0 auto;
    
    width:60%;
    overflow:visible;

    & img{
    display: inline-block;
    vertical-align: top;
    height: 36px; 
    object-fit:none;
    width: 0;
    min-width: 17rem; 
    /* min-width: fit-content;  */
  }

    & img.mini_logo{ // A cor ta meio fraca
        all:unset;
        align-items:top;
        position:absolute;
        width:fit-content;
        left:-15%;
        transform:translate(-50%);
        top:0;
        
    }
    & h1{ //O G dessa fonte está diferente da letra G do figma, qual fonte usar?
        color: #D2D2D2;
        font-size:3rem;
        height:fit-content;
        margin-top:1rem;
    }
    & p{
        font-size:1rem;
        font-weight:bold;
        color:#9C9C9C;
        margin-top:1rem;
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
        margin-top:2rem;
        flex-direction:column;
        gap:2rem;
    }
    & .showPassword{
        all:unset;
        position:absolute;
        bottom:0;
        right:0;
        transform:translate(-50%, -50%);
        width:1.5rem;
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
`

export const OtherLinks = styled.div`
    display:flex;
    margin:0 auto;
    position:relative;
    width:60%;
    margin-top:4rem;
    gap:4rem;
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
            min-width:200px;
            max-width:100px;
            display: flex;
            justify-content: center;
            margin: 0;
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
        margin-bottom:8rem;
        & button{
            background-color:#2F3032;
            color:#9C9C9C;
            width:auto;
            padding:1rem;

        }
    }
        
    
`

