import styled from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('/src/assets/LoginScreen_images/Login Cliente - Desktop.png');
  background-size: cover; 
  background-position: center;
  background-repeat: no-repeat;
  color:#101010;
`

export const Container = styled.div`
    position:relative;
    margin:0 auto;
    top:5vh;
    width:85vw;
    height:90vh;
    background-color:#1C1D20;
    border-radius:50px;
`

export const RightSide = styled.div`
    position: absolute;
    right:0;
    width:50%;
    height:100%;
    background-image: url('/src/assets/LoginScreen_images/Barber_pole_login.png');
    background-size: cover; 
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 0 50px 50px 0;
    /* background-color:blue; */
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
    color:#d48e00;
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
    position: absolute;
    left:0;
    width:50%;
    height:100%;
    border-radius:50px 0 0 50px;
`

export const Forms = styled.form`
    position: relative;
    display: flex;
    align-items:top;
    flex-direction: column;
    justify-content: center;
    margin:0 auto;
    margin-top:2.875rem;
    width:60%;
    & img{
        height:2.875rem;
        width:17rem;
    }
    & img.mini_logo{ // A cor ta meio fraca
        align-items:top;
        position:absolute;
        width:fit-content;
        left:-4.375rem;
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
    }
    & label{
        position:absolute;
        pointer-events:none;
        color:#777879;
        font-weight:600;
        height:2.25rem;
        align-content:center;
    }
`