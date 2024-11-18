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
    & span{
        font-family: 'Rye', sans-serif;
        color: #fff;
        
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
        & .success {
        color:#fff;
        scale:2;
}

    }
    & button{
        width:100%;
        max-width:15rem;
        background-color: #B58934;
        color:#000;
        border:none;
        border-radius:8px;
        padding: 0.2rem 0;
        font-size:1.2rem;
        margin:0 auto;
        padding:0.5rem;
        cursor: pointer;
    }

    & label {
        position:relative;
        pointer-events:none;
        color:#777879;
        font-weight:600;
        height:2.25rem;
        align-content:center;
    }

    & .LockIcon {
        position: absolute;
        scale:2;
        transform:translate(50%, 70%);
        color:#B58934;
    }
    @media (max-width: 600px) {
        padding:1rem;
        padding-top:3rem;
        }
`
export const StyledInput = styled.input`
    background:none;
    border: 1px solid;
    border-radius: 8px;
    padding: 1rem;
    padding-bottom:2rem;
    padding-left:3rem;
    border-color:${(props) => (props.invalidwarning == "true" ? "#951212" : "#777879")};
    color: #777879;
    font-size:1rem;
    font-weight:600;
    height:1.5rem;
    width:100%;
    margin-bottom:4rem;
    margin-top:8px;
    &::placeholder{
    font-weight:600;
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

export const StyledIcon = styled.div`
position: absolute;
scale:2;
transform:translate(-100%, 70%);
color:#B58934;

`

export const StyledPopUp = styled.div`
    all: unset;
    display:flex;
    background-color: #171821;
    color: #000;
    padding: 0 5rem 0 3rem;
    position: fixed;
    bottom: 10%;
    margin: 0 auto;
    transform:translateX(-50%);
    border-radius: 8px;
    white-space:nowrap;
    box-shadow: 15px 30px 40px;
    gap: 2rem;
    & h2 {
        color: #fff;
    }
    & p {
        color: #fff;
    }
    & button {
        all:unset;
        position: absolute;
        right:0;
        top:0;
        color: #fff;
        background-color:none;
        padding:0.4rem;
        /* margin-left: 20em; */
        /* font-weight: bold; */
        font-size:1.5rem;
        cursor:pointer;
    }
`

export const CheckImage = styled.div`
    width:95px;
    height: 78px;
    padding-left: 1rem;
    /* background-color: green; */
    background-image:${(props) => (props.submitResult ? "url('/src/assets/newPassword/successfullCheck.png')" : "url('/src/assets/newPassword/failedCheck.png')")};
    background-repeat: no-repeat;
`