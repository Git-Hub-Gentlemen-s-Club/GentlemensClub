import React from "react"

import {
    FooterDiv,
    LinksList,
    Item,
    Link,
    Line,
    SVGimage,
    UPcontainer,
    SVGcontainer,
    Rights,
    StyledSVG,
    DOWNcontainer,
    StyledSVGcontainer,
    MiniLogo
} from "../styles/home/footer_style/Footer"

// Função principal que será exportada para o App.jsx
const Footer = () => {

    return (<>
            {/* Componente que contempla todo o espaço ocupado pelo footer em si. */}
            <FooterDiv>
                {/* Div que contempla os itens que ficam acima da linha do meio do footer */}
                <UPcontainer>
                    {/* Lista de links da parte de cima do footer (tag <ul>) */}
                    <LinksList>
                    {/* Nesse caso <Item> é a tag <li> e Link é a tag <a> (poderia trocar pra prop onClick quando programar as rotas)*/}
                        <Item><Link href="#">Blog</Link></Item>
                        <Item><Link href="#">Sobre nós</Link></Item>
                        <Item><Link href="#">FAQ</Link></Item>
                        <Item><Link href="#">Política de Privacidade</Link></Item>
                        <Item><Link href="#">Termos de Serviço</Link></Item>
                        <Item><Link href="#">Trabalho Conosco</Link></Item>
                        <Item><Link href="#">Contato</Link></Item>
                    </LinksList>
                    {/* Container com as imagens de link para download */}
                    <SVGcontainer>
                    {/* Imagens dos links pra Apple Store ou Play Store, no formato SVG (opcional, poderia ser png ou jpg) */}
                        <Link href="#"><SVGimage src="\src\assets\footer_svg\appstore_icon.svg"></SVGimage></Link>
                        <Link href="#"><SVGimage src="\src\assets\footer_svg\playstore_icon.svg"></SVGimage></Link>
                    </SVGcontainer>
                </UPcontainer>
                {/* Linha do meio */}
                <Line />
                {/* Div que contempla os itens que ficam abaixo da linha do meio do footer */}
                <DOWNcontainer>
                    {/* Aquele "G" que fica no canto inferior direito do footer */}
                    <MiniLogo src="\src\assets\img\mini_logo.png"/>
                    {/* Mensagem sobre os direitos autoriais */}
                    <Rights> &copy; 2024 Gentlemen's Club. Todos os direitos reservados</Rights>
                    {/* Container com as imagens que encaminham para as redes sociais */}
                    <StyledSVGcontainer>
                        {/* Imagens dos links para as redes socias , no formato SVG (opcional, poderia ser png ou jpg) */}
                        <Link href="#"><StyledSVG src="\src\assets\footer_svg\instagram_icon.svg"></StyledSVG></Link>
                        <Link href="#"><StyledSVG src="\src\assets\footer_svg\facebook_icon.svg"></StyledSVG></Link>
                        <Link href="#"><StyledSVG src="\src\assets\footer_svg\twitter_icon.svg"></StyledSVG></Link>
                    </StyledSVGcontainer>
                </DOWNcontainer>
            </FooterDiv>
    </>)
}
export default Footer