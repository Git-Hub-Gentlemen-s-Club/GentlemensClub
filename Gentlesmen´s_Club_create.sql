-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2024-08-27 23:42:48.802

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
    id_barbeiro int  NOT NULL,
    id_usuario int  NOT NULL,
    CONSTRAINT AVALIACAO_BARBEIRO_pk PRIMARY KEY (id_avaliacao_barbeiro)
);

-- Table: BARBEARIA
CREATE TABLE BARBEARIA (
    id_barbearia serial  NOT NULL,
    nome_barbearia varchar(100)  NOT NULL,
    horario_funcionamento varchar(255)  NOT NULL,
    imagem varchar(255)  NOT NULL,
    tel_whatsapp varchar(15)  NOT NULL,
    id_cliente_parceiro int  NOT NULL,
    CONSTRAINT BARBEARIA_pk PRIMARY KEY (id_barbearia)
);

-- Table: CLIENTE_PARCEIRO
CREATE TABLE CLIENTE_PARCEIRO (
    id_cliente serial  NOT NULL,
    nota_privada int  NOT NULL,
    id_usuario int  NOT NULL,
    CONSTRAINT CLIENTE_PARCEIRO_pk PRIMARY KEY (id_cliente)
);

-- Table: CONVENIENCIA
CREATE TABLE CONVENIENCIA (
    id_conveniencia serial  NOT NULL,
    wi_fi boolean  NOT NULL,
    estacionamento boolean  NOT NULL,
    video_game boolean  NOT NULL,
    bar boolean  NOT NULL,
    id_barbearia int  NOT NULL,
    CONSTRAINT CONVENIENCIA_pk PRIMARY KEY (id_conveniencia)
);

-- Table: ENDERECO
CREATE TABLE ENDERECO (
    id_endereco serial  NOT NULL,
    logradouro varchar(255)  NOT NULL,
    numero varchar(255)  NOT NULL,
    complemento varchar(255)  NOT NULL,
    bairro varchar(255)  NOT NULL,
    cep varchar(15)  NOT NULL,
    cidade varchar(255)  NOT NULL,
    estado varchar(255)  NOT NULL,
    localizacao varchar(255)  NOT NULL,
    id_barbearia int  NOT NULL,
    CONSTRAINT ENDERECO_pk PRIMARY KEY (id_endereco)
);

-- Table: FRANQUIA
CREATE TABLE FRANQUIA (
    id_franquia serial  NOT NULL,
    nome varchar(255)  NOT NULL,
    status boolean  NOT NULL,
    id_barbearia int  NOT NULL,
    CONSTRAINT FRANQUIA_pk PRIMARY KEY (id_franquia)
);

-- Table: FUNCIONARIO
CREATE TABLE FUNCIONARIO (
    id_barbeiro serial  NOT NULL,
    nome varchar(100)  NOT NULL,
    especialidade varchar(255)  NOT NULL,
    foto varchar(255)  NOT NULL,
    data_criacao timestamp  NOT NULL,
    id_barbearia int  NOT NULL,
    CONSTRAINT email UNIQUE (especialidade) NOT DEFERRABLE  INITIALLY IMMEDIATE,
    CONSTRAINT FUNCIONARIO_pk PRIMARY KEY (id_barbeiro)
);

-- Table: HISTORICO
CREATE TABLE HISTORICO (
    id_historico serial  NOT NULL,
    valor_gasto decimal(10,2)  NOT NULL,
    id_usuario int  NOT NULL,
    CONSTRAINT HISTORICO_pk PRIMARY KEY (id_historico)
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
    tik_tok int  NOT NULL,
    youtube varchar(255)  NOT NULL,
    site_barbearia varchar(255)  NOT NULL,
    id_barbearia int  NOT NULL,
    CONSTRAINT REDE_SOCIAl_pk PRIMARY KEY (id_rede_social)
);

-- Table: SERVICO
CREATE TABLE SERVICO (
    id_servico serial  NOT NULL,
    id_barbearia int  NOT NULL,
    nome_servico varchar(255)  NOT NULL,
    descricao varchar(255)  NOT NULL,
    preco decimal(10,2)  NOT NULL,
    duracao_minutos int  NOT NULL,
    disponivel boolean  NOT NULL,
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
-- Reference: AGENDAMENTO_FUNCIONARIO (table: AGENDAMENTO)
ALTER TABLE AGENDAMENTO ADD CONSTRAINT AGENDAMENTO_FUNCIONARIO
    FOREIGN KEY (id_barbeiro)
    REFERENCES FUNCIONARIO (id_barbeiro)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: AGENDAMENTO_SERVICO (table: AGENDAMENTO)
ALTER TABLE AGENDAMENTO ADD CONSTRAINT AGENDAMENTO_SERVICO
    FOREIGN KEY (id_servico)
    REFERENCES SERVICO (id_servico)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: AVALIACAO_BARBEIRO_FUNCIONARIO (table: AVALIACAO_BARBEIRO)
ALTER TABLE AVALIACAO_BARBEIRO ADD CONSTRAINT AVALIACAO_BARBEIRO_FUNCIONARIO
    FOREIGN KEY (id_barbeiro)
    REFERENCES FUNCIONARIO (id_barbeiro)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: AVALIACAO_BARBEIRO_USUARIO (table: AVALIACAO_BARBEIRO)
ALTER TABLE AVALIACAO_BARBEIRO ADD CONSTRAINT AVALIACAO_BARBEIRO_USUARIO
    FOREIGN KEY (id_usuario)
    REFERENCES USUARIO (id_usuario)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: BARBEARIA_CLIENTE_PARCEIRO (table: BARBEARIA)
ALTER TABLE BARBEARIA ADD CONSTRAINT BARBEARIA_CLIENTE_PARCEIRO
    FOREIGN KEY (id_cliente_parceiro)
    REFERENCES CLIENTE_PARCEIRO (id_cliente)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: CLIENTE_PARCEIRO_USUARIO (table: CLIENTE_PARCEIRO)
ALTER TABLE CLIENTE_PARCEIRO ADD CONSTRAINT CLIENTE_PARCEIRO_USUARIO
    FOREIGN KEY (id_usuario)
    REFERENCES USUARIO (id_usuario)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: CONVENIENCIA_BARBEARIA (table: CONVENIENCIA)
ALTER TABLE CONVENIENCIA ADD CONSTRAINT CONVENIENCIA_BARBEARIA
    FOREIGN KEY (id_barbearia)
    REFERENCES BARBEARIA (id_barbearia)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: ENDERECO_BARBEARIA (table: ENDERECO)
ALTER TABLE ENDERECO ADD CONSTRAINT ENDERECO_BARBEARIA
    FOREIGN KEY (id_barbearia)
    REFERENCES BARBEARIA (id_barbearia)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: FRANQUIA_BARBEARIA (table: FRANQUIA)
ALTER TABLE FRANQUIA ADD CONSTRAINT FRANQUIA_BARBEARIA
    FOREIGN KEY (id_barbearia)
    REFERENCES BARBEARIA (id_barbearia)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: FUNCIONARIO_BARBEARIA (table: FUNCIONARIO)
ALTER TABLE FUNCIONARIO ADD CONSTRAINT FUNCIONARIO_BARBEARIA
    FOREIGN KEY (id_barbearia)
    REFERENCES BARBEARIA (id_barbearia)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: HISTORICO_USUARIO (table: HISTORICO)
ALTER TABLE HISTORICO ADD CONSTRAINT HISTORICO_USUARIO
    FOREIGN KEY (id_usuario)
    REFERENCES USUARIO (id_usuario)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: PROMOCAO_SERVICO (table: PROMOCAO)
ALTER TABLE PROMOCAO ADD CONSTRAINT PROMOCAO_SERVICO
    FOREIGN KEY (id_servico)
    REFERENCES SERVICO (id_servico)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: REDES_SOCIAl_BARBEARIA (table: REDE_SOCIAl)
ALTER TABLE REDE_SOCIAl ADD CONSTRAINT REDES_SOCIAl_BARBEARIA
    FOREIGN KEY (id_barbearia)
    REFERENCES BARBEARIA (id_barbearia)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: SERVICO_BARBEARIA (table: SERVICO)
ALTER TABLE SERVICO ADD CONSTRAINT SERVICO_BARBEARIA
    FOREIGN KEY (id_barbearia)
    REFERENCES BARBEARIA (id_barbearia)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: client_purchase (table: AGENDAMENTO)
ALTER TABLE AGENDAMENTO ADD CONSTRAINT client_purchase
    FOREIGN KEY (id_usuario)
    REFERENCES USUARIO (id_usuario)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- End of file.

