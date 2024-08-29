-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2024-08-29 01:05:06.791

-- tables
-- Table: AGENDAMENTO
CREATE TABLE AGENDAMENTO (
    id_agendamento serial  NOT NULL,
    id_usuario int  NOT NULL,
    data_agendamento timestamp  NOT NULL,
    status varchar(50)  NOT NULL,
    id_barbeiro int  NOT NULL,
    id_servico int  NOT NULL,
    CONSTRAINT AGENDAMENTO_pk PRIMARY KEY (id_agendamento)
);

-- Table: AVALIACAO_BARBEIRO
CREATE TABLE AVALIACAO_BARBEIRO (
    id_avaliacao_barbeiro serial  NOT NULL,
    nota int  NOT NULL,
    comentario text  NOT NULL,
    data_avaliacao timestamp  NOT NULL,
    id_agendamento int  NOT NULL,
    CONSTRAINT AVALIACAO_BARBEIRO_pk PRIMARY KEY (id_avaliacao_barbeiro)
);

-- Table: BARBEARIA
CREATE TABLE BARBEARIA (
    id_barbearia serial  NOT NULL,
    cnpj varchar(25)  NOT NULL,
    razao_social varchar(150)  NOT NULL,
    id_cliente int  NOT NULL,
    CONSTRAINT BARBEARIA_pk PRIMARY KEY (id_barbearia)
);

-- Table: CLIENTE_PARCEIRO
CREATE TABLE CLIENTE_PARCEIRO (
    id_cliente serial  NOT NULL,
    nota_privada int  NOT NULL,
    id_usuario int  NULL,
    CONSTRAINT CLIENTE_PARCEIRO_pk PRIMARY KEY (id_cliente)
);

-- Table: CONVENIENCIA
CREATE TABLE CONVENIENCIA (
    id_conveniencia serial  NOT NULL,
    wi_fi boolean  NOT NULL,
    estacionamento boolean  NOT NULL,
    video_game boolean  NOT NULL,
    bar boolean  NOT NULL,
    id_filial int  NOT NULL,
    CONSTRAINT CONVENIENCIA_pk PRIMARY KEY (id_conveniencia)
);

-- Table: ENDERECO
CREATE TABLE ENDERECO (
    id_endereco serial  NOT NULL,
    logradouro varchar(255)  NOT NULL,
    numero varchar(50)  NOT NULL,
    complemento varchar(255)  NOT NULL,
    bairro varchar(255)  NOT NULL,
    cep varchar(15)  NOT NULL,
    cidade varchar(255)  NOT NULL,
    estado varchar(255)  NOT NULL,
    localizacao varchar(255)  NOT NULL,
    id_filial int  NOT NULL,
    CONSTRAINT ENDERECO_pk PRIMARY KEY (id_endereco)
);

-- Table: FILIAL
CREATE TABLE FILIAL (
    id_filial serial  NOT NULL,
    nome varchar(255)  NOT NULL,
    status boolean  NOT NULL,
    id_barbearia int  NOT NULL,
    CONSTRAINT FILIAL_pk PRIMARY KEY (id_filial)
);

-- Table: FUNCIONARIO
CREATE TABLE FUNCIONARIO (
    id_barbeiro serial  NOT NULL,
    nome varchar(100)  NOT NULL,
    especialidade varchar(255)  NOT NULL,
    foto varchar(255)  NOT NULL,
    data_criacao timestamp  NOT NULL,
    id_filial int  NOT NULL,
    CONSTRAINT email UNIQUE (especialidade) NOT DEFERRABLE  INITIALLY IMMEDIATE,
    CONSTRAINT FUNCIONARIO_pk PRIMARY KEY (id_barbeiro)
);

-- Table: PROMOCAO
CREATE TABLE PROMOCAO (
    id_promocao serial  NOT NULL,
    descricao text  NOT NULL,
    data_inicio date  NOT NULL,
    data_fim date  NOT NULL,
    status boolean  NOT NULL,
    id_servico int  NOT NULL,
    CONSTRAINT PROMOCAO_pk PRIMARY KEY (id_promocao)
);

-- Table: REDE_SOCIAl
CREATE TABLE REDE_SOCIAl (
    id_rede_social serial  NOT NULL,
    instagram varchar(255)  NOT NULL,
    facebook varchar(255)  NOT NULL,
    linkedin varchar(255)  NOT NULL,
    tik_tok varchar(50)  NOT NULL,
    youtube varchar(255)  NOT NULL,
    site_barbearia varchar(255)  NOT NULL,
    id_filial int  NOT NULL,
    CONSTRAINT REDE_SOCIAl_pk PRIMARY KEY (id_rede_social)
);

-- Table: SERVICO
CREATE TABLE SERVICO (
    id_servico serial  NOT NULL,
    nome_servico varchar(255)  NOT NULL,
    descricao varchar(255)  NOT NULL,
    preco decimal(10,2)  NOT NULL,
    duracao_minutos int  NOT NULL,
    disponivel boolean  NOT NULL,
    id_filial int  NOT NULL,
    CONSTRAINT SERVICO_pk PRIMARY KEY (id_servico)
);

-- Table: USUARIO
CREATE TABLE USUARIO (
    id_usuario serial  NOT NULL,
    nome varchar(100)  NOT NULL,
    email varchar(100)  NOT NULL,
    senha varchar(255)  NOT NULL,
    telefone varchar(15)  NOT NULL,
    data_nascimento date  NOT NULL,
    data_criacao timestamp  NOT NULL,
    CONSTRAINT USUARIO_pk PRIMARY KEY (id_usuario)
);

-- foreign keys
-- Reference: Copy_of_AGENDAMENTO_FUNCIONARIO (table: AGENDAMENTO)
ALTER TABLE AGENDAMENTO ADD CONSTRAINT Copy_of_AGENDAMENTO_FUNCIONARIO
    FOREIGN KEY (id_barbeiro)
    REFERENCES FUNCIONARIO (id_barbeiro)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: Copy_of_AGENDAMENTO_SERVICO (table: AGENDAMENTO)
ALTER TABLE AGENDAMENTO ADD CONSTRAINT Copy_of_AGENDAMENTO_SERVICO
    FOREIGN KEY (id_servico)
    REFERENCES SERVICO (id_servico)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: Copy_of_AVALIACAO_BARBEIRO_Copy_of_AGENDAMENTO (table: AVALIACAO_BARBEIRO)
ALTER TABLE AVALIACAO_BARBEIRO ADD CONSTRAINT Copy_of_AVALIACAO_BARBEIRO_Copy_of_AGENDAMENTO
    FOREIGN KEY (id_agendamento)
    REFERENCES AGENDAMENTO (id_agendamento)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: Copy_of_BARBEARIA_Copy_of_CLIENTE_PARCEIRO (table: BARBEARIA)
ALTER TABLE BARBEARIA ADD CONSTRAINT Copy_of_BARBEARIA_Copy_of_CLIENTE_PARCEIRO
    FOREIGN KEY (id_cliente)
    REFERENCES CLIENTE_PARCEIRO (id_cliente)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: Copy_of_CLIENTE_PARCEIRO_USUARIO (table: CLIENTE_PARCEIRO)
ALTER TABLE CLIENTE_PARCEIRO ADD CONSTRAINT Copy_of_CLIENTE_PARCEIRO_USUARIO
    FOREIGN KEY (id_usuario)
    REFERENCES USUARIO (id_usuario)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: Copy_of_CONVENIENCIA_Copy_of_FILIAL (table: CONVENIENCIA)
ALTER TABLE CONVENIENCIA ADD CONSTRAINT Copy_of_CONVENIENCIA_Copy_of_FILIAL
    FOREIGN KEY (id_filial)
    REFERENCES FILIAL (id_filial)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: Copy_of_ENDERECO_Copy_of_FILIAL (table: ENDERECO)
ALTER TABLE ENDERECO ADD CONSTRAINT Copy_of_ENDERECO_Copy_of_FILIAL
    FOREIGN KEY (id_filial)
    REFERENCES FILIAL (id_filial)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: Copy_of_FRANQUIA_BARBEARIA (table: FILIAL)
ALTER TABLE FILIAL ADD CONSTRAINT Copy_of_FRANQUIA_BARBEARIA
    FOREIGN KEY (id_barbearia)
    REFERENCES BARBEARIA (id_barbearia)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: Copy_of_FUNCIONARIO_Copy_of_FILIAL (table: FUNCIONARIO)
ALTER TABLE FUNCIONARIO ADD CONSTRAINT Copy_of_FUNCIONARIO_Copy_of_FILIAL
    FOREIGN KEY (id_filial)
    REFERENCES FILIAL (id_filial)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: Copy_of_PROMOCAO_SERVICO (table: PROMOCAO)
ALTER TABLE PROMOCAO ADD CONSTRAINT Copy_of_PROMOCAO_SERVICO
    FOREIGN KEY (id_servico)
    REFERENCES SERVICO (id_servico)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: Copy_of_REDE_SOCIAl_Copy_of_FILIAL (table: REDE_SOCIAl)
ALTER TABLE REDE_SOCIAl ADD CONSTRAINT Copy_of_REDE_SOCIAl_Copy_of_FILIAL
    FOREIGN KEY (id_filial)
    REFERENCES FILIAL (id_filial)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: Copy_of_SERVICO_Copy_of_FILIAL (table: SERVICO)
ALTER TABLE SERVICO ADD CONSTRAINT Copy_of_SERVICO_Copy_of_FILIAL
    FOREIGN KEY (id_filial)
    REFERENCES FILIAL (id_filial)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: Copy_of_client_purchase (table: AGENDAMENTO)
ALTER TABLE AGENDAMENTO ADD CONSTRAINT Copy_of_client_purchase
    FOREIGN KEY (id_usuario)
    REFERENCES USUARIO (id_usuario)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- End of file.

