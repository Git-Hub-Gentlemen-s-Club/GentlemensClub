import styled from "styled-components";

export const Background = styled.div`
    background-color:#1C1D20;
    height:100vh;
    width:100vw;
    padding:5rem;
    & h1{
        font-family: 'Rye', sans-serif;
        font-size: clamp(1.5rem, 10vw, 3rem); 
        max-width:80%;
        text-align:center;
        margin: 0 auto;
        color:#B58934;
    }
    & hr{
        position:relative;
        border:none;
        width:90%;
        margin: 0 auto;
        margin-top:0.5rem;
        background: radial-gradient(#B58934, #1C1D20 90%);
        padding-top:1px;
        box-shadow:none;
    }
    & p{
        font-size:1rem;
        font-weight:bold;
        color:#9C9C9C;
        margin-top:1rem;
        margin-bottom:2rem;
        text-align:center;
    }
    & form{
        position:relative;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        height:20vh;
        width:40rem;
        max-width:70%;
        margin:0 auto;

    }
    & button{
        width:100%;
        background-color: #B58934;
        color:#D2D2D2;
        border:none;
        border-radius:2px;
        padding: 0.2rem 0;
        font-size:1.2rem;
        margin:0 auto;
        cursor: pointer;
    }

    & label{
        position:relative;
        pointer-events:none;
        color:#777879;
        font-weight:600;
        height:2.25rem;
        align-content:center;
    }
    @media (max-width: 600px) {
        padding:1rem;
        padding-top:3rem;
        }
`
export const StyledInput = styled.input`
    background:none;
    border: none;
    border-bottom: 1px solid;
    border-color:${(props) => (props.invalidwarning == "true" ? "#951212" : "#777879")};
    color: #777879;
    font-size:1rem;
    font-weight:600;
    height:1.5rem;
    width:100%;
    &::placeholder{
    font-weight:600;
    }           
`
export const OtherLinks = styled.div`
    position:absolute;
    display:flex;
    flex-direction:column-reverse;
    bottom:2vh;
    height:5vh;
    margin:0 auto;
    width: fit-content;
    gap: 1rem;
    
    
    & button{
        display:flex;
        align-items:center;
        width: fit-content;
        background-color:#2F3032;
        color:#9C9C9C;
        padding:0.5rem;
        margin:0;
        border-radius:5px;
        
    }
`
export const ArrowIcon = styled.div`
color: #9C9C9C;
position:relative;
bottom:0;
right:0;
width:1.5rem;
margin-right:0.5rem;
`;