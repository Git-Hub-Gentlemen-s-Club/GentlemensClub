// src/components/InformationCard.jsx
import React from "react";
import { CardContainer, Heading, Paragraph, Image } from "../styled_components/body/InformationCardStyle";
import desenho from "../assets/img/iconeInformationCard.png"; // Certifique-se de que o caminho está correto

const InformationCard = ({ city }) => {
    return (
        <CardContainer>
            <Image src={desenho} alt="Desenho" /> {/* Adicione a imagem */}
            <Heading>Renove Seu Estilo nas Barbearias de {city}</Heading>
            <Paragraph>
                Itapecerica da Serra, conhecida por sua natureza exuberante e tranquilidade, também se destaca quando se trata de "barbearias".
            </Paragraph>
            <Paragraph>
                Se você está em Itapecerica da Serra ou necessita encontrar uma "barbearia próxima em Itapecerica da Serra" que ofereça serviços de alta qualidade, a Gentlemen's Club ajuda você a encontrar os profissionais mais recomendados da região, assegurando que cada visita seja uma experiência única de estilo e bem-estar.
            </Paragraph>
            <Heading>Tome Decisões Baseadas em Avaliações Confiáveis</Heading>
            <Paragraph>
                A escolha de uma "barbearia próxima em Itapecerica da Serra" se torna fácil com o apoio das avaliações disponíveis na Gentlemen's Club. As experiências compartilhadas oferecem insights valiosos sobre a qualidade dos serviços, permitindo que você faça uma escolha informada e segura, garantindo a satisfação com o atendimento recebido.
            </Paragraph>
            <Heading>Agendamento Online Fácil e Conveniente</Heading>
            <Paragraph>
                Com a Gentlemen's Club, agendar um horário em uma das "barbearias em Itapecerica da Serra" é simples e rápido. Nossa plataforma intuitiva facilita a busca pelos melhores estabelecimentos, comparação de serviços, verificação de disponibilidade de horários e reserva de sua visita, tudo isso em poucos cliques. A praticidade do agendamento online elimina a necessidade de ligações telefônicas, otimizando seu tempo.
            </Paragraph>
            <Heading>Uma Diversidade de Serviços Para Atender Todos os Gostos</Heading>
            <Paragraph>
                As barbearias de Itapecerica da Serra disponíveis na Gentlemen's Club oferecem uma ampla gama de serviços, atendendo a todos os estilos e preferências. Desde cortes tradicionais a tratamentos modernos para barba, os profissionais encontrados em nossa plataforma utilizam técnicas atualizadas e produtos de qualidade, garantindo que seu visual esteja sempre alinhado às suas expectativas.
            </Paragraph>
            <Heading>Por Que Escolher a Gentlemen's Club Para Encontrar Sua Barbearia em Itapecerica da Serra?</Heading>
            <Paragraph>
                Optar pela Gentlemen's Club significa escolher a maneira mais eficiente e satisfatória de descobrir e agendar serviços nas melhores barbearias de Itapecerica da Serra. Com avaliações honestas, uma ampla seleção de profissionais e a facilidade do agendamento online, oferecemos uma experiência de qualidade superior, facilitando o cuidado com seu estilo e aparência.
            </Paragraph>
            <Paragraph>
                Não espere mais para cuidar do seu visual. Use a Gentlemen's Club para explorar as melhores opções de barbearia em Itapecerica da Serra e agende seu próximo serviço com toda a confiança e comodidade que nossa plataforma pode oferecer. Com os melhores profissionais a apenas alguns cliques de distância, sua satisfação é garantida. Agende hoje mesmo e redescubra a arte do cuidado pessoal masculino com a Gentlemen's Club!
            </Paragraph>
        </CardContainer>
    );
};

export default InformationCard;
