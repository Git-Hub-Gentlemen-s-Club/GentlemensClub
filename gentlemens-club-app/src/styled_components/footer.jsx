import styled from "styled-components";

export const FooterDiv = styled.footer`
  /* display: relative; */
  justify-content:center;
  flex-direction: column;
  /* position: absolute; */
  bottom: 0;
  max-height: 30%;
  width: calc(100vw - 80px); 
  text-align: center;
  background-color: #161718; 
  padding: 40px;
  color: #B58934;
  overflow:hidden;
  
`

export const Line = styled.div`
border-top: 1px solid #414142;
color: white;

`
export const UPcontainer = styled.div`
    display: flex;
    position:relative;
    bottom:15px;    
    justify-content: space-between;
    width: 100%;
    align-items:center;
    @media (max-width: 500px) {
    flex-direction:column;
    justify-content:left;
  }
`


export const LinksList = styled.ul`
    list-style:none;
    display: flex;
    position:relative;
    margin:0;
    padding:0;
    flex-wrap:wrap;
    overflow:hidden;
    /* max-height:5rem; */
    @media (max-width: 400px) {
    display:none;
    
  }
`

export const Link = styled.a`
    color:inherit;
    text-decoration: none;
    display:flex;
    text-align:left;
    &:hover{
        cursor:pointer;
        text-decoration:underline;
        color: #655026;
    }
`
export const Item = styled.li`
    padding-right: 3em;
    margin-bottom:16px;
    @media (max-width: 500px) {
    margin-bottom:4px;
  }
`
export const SVGcontainer = styled.div`
display:flex;
justify-content:right;
gap:16px;
flex-wrap:wrap;
width:fit-content;
@media (max-width: 500px) {
    justify-content:left;
  }
`
export const SVGimage = styled.img`
width: 130px;
height: 49.13px;
right: 199px;
&:hover{
        cursor:pointer
    }
`
export const DOWNcontainer = styled.div`
display: flex;
margin-top:5px;
justify-content:space-between;
align-items:center;
@media (max-width: 500px) {
    flex-direction:column-reverse;
    gap:16px;
  }
`
export const MiniLogo = styled.img`
position: relative;
width: 37px;
height: 40px;
`
export const Rights = styled.p`
    color: #655026
`
export const StyledSVGcontainer = styled.div`
    display:flex;
    gap:16px;
`
export const StyledSVG = styled.img`
border-radius: 17.5px;
    background: #B58934;
    display: flex;
    padding: 9px;
    width: 40px;
    height: 40px;
    box-sizing: border-box;
    &:hover{
        cursor:pointer
    }
`