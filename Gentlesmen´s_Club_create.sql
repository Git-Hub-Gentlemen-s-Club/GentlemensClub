-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2024-08-18 00:47:36.44

-- tables
-- Table: AGENDAMENTO
CREATE TABLE AGENDAMENTO (
    id_agendamento serial  NOT NULL,
    id_usuario int  NOT NULL,
    id_barbearia int  NOT NULL,
    data_agendamento timestamp  NOT NULL,
    status char(50)  NOT NULL,
    CONSTRAINT AGENDAMENTO_pk PRIMARY KEY (id_agendamento)
);

-- Table: AVALIACAO
CREATE TABLE AVALIACAO (
    id_avaliacao serial  NOT NULL,
    nota smallint  NOT NULL,
    comentario text  NOT NULL,
    data_avaliacao timestamp  NOT NULL,
    id_usuario int  NOT NULL,
    id_barbearia int  NOT NULL,
    CONSTRAINT AVALIACAO_pk PRIMARY KEY (id_avaliacao)
);

-- Table: BARBEARIA
CREATE TABLE BARBEARIA (
    id_barbearia serial  NOT NULL,
    nome_barbearia varchar(100)  NOT NULL,
    endereco varchar(255)  NOT NULL,
    horario_funcionamento varchar(255)  NOT NULL,
    id_usuario_proprietario int  NOT NULL,
    CONSTRAINT BARBEARIA_pk PRIMARY KEY (id_barbearia)
);

-- Table: CLIENTE_PARCEIRO
CREATE TABLE CLIENTE_PARCEIRO (
    id_cliente serial  NOT NULL,
    nota_privada smallint  NOT NULL,
    id_usuario int  NOT NULL,
    id_barbearia int  NOT NULL,
    CONSTRAINT CLIENTE_PARCEIRO_pk PRIMARY KEY (id_cliente)
);

-- Table: FAVORITOS
CREATE TABLE FAVORITOS (
    id_favorito serial  NOT NULL,
    id_usuario int  NOT NULL,
    id_barbearia int  NOT NULL,
    CONSTRAINT FAVORITOS_pk PRIMARY KEY (id_favorito)
);

-- Table: PROMOCAO
CREATE TABLE PROMOCAO (
    id_promocao serial  NOT NULL,
    id_barbearia int  NOT NULL,
    descricao text  NOT NULL,
    data_inicio date  NOT NULL,
    data_fim date  NOT NULL,
    id_servico int  NOT NULL,
    CONSTRAINT PROMOCAO_pk PRIMARY KEY (id_promocao)
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

-- Table: SESSAO_AUTENTICACAO
CREATE TABLE SESSAO_AUTENTICACAO (
    id_sessao serial  NOT NULL,
    expiracao timestamp  NOT NULL,
    id_usuario int  NOT NULL,
    token varchar(255)  NOT NULL,
    CONSTRAINT SESSAO_AUTENTICACAO_pk PRIMARY KEY (id_sessao)
);

-- Table: USUARIO
CREATE TABLE USUARIO (
    id_usuario serial  NOT NULL,
    nome varchar(100)  NOT NULL,
    email varchar(100)  NOT NULL,
    senha_hash varchar(255)  NOT NULL,
    telefone varchar(15)  NOT NULL,
    data_nascimento date  NOT NULL,
    data_criacao timestamp  NOT NULL,
    CONSTRAINT email UNIQUE (email) NOT DEFERRABLE  INITIALLY IMMEDIATE,
    CONSTRAINT USUARIO_pk PRIMARY KEY (id_usuario)
);

-- foreign keys
-- Reference: AGENDAMENTO_BARBEARIA (table: AGENDAMENTO)
ALTER TABLE AGENDAMENTO ADD CONSTRAINT AGENDAMENTO_BARBEARIA
    FOREIGN KEY (id_barbearia)
    REFERENCES BARBEARIA (id_barbearia)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: AVALIACAO_BARBEARIA (table: AVALIACAO)
ALTER TABLE AVALIACAO ADD CONSTRAINT AVALIACAO_BARBEARIA
    FOREIGN KEY (id_barbearia)
    REFERENCES BARBEARIA (id_barbearia)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: AVALIACAO_USUARIO (table: AVALIACAO)
ALTER TABLE AVALIACAO ADD CONSTRAINT AVALIACAO_USUARIO
    FOREIGN KEY (id_usuario)
    REFERENCES USUARIO (id_usuario)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: BARBEARIA_USUARIO (table: BARBEARIA)
ALTER TABLE BARBEARIA ADD CONSTRAINT BARBEARIA_USUARIO
    FOREIGN KEY (id_usuario_proprietario)
    REFERENCES USUARIO (id_usuario)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: CLIENTE_PARCEIRO_BARBEARIA (table: CLIENTE_PARCEIRO)
ALTER TABLE CLIENTE_PARCEIRO ADD CONSTRAINT CLIENTE_PARCEIRO_BARBEARIA
    FOREIGN KEY (id_barbearia)
    REFERENCES BARBEARIA (id_barbearia)  
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

-- Reference: FAVORITOS_BARBEARIA (table: FAVORITOS)
ALTER TABLE FAVORITOS ADD CONSTRAINT FAVORITOS_BARBEARIA
    FOREIGN KEY (id_barbearia)
    REFERENCES BARBEARIA (id_barbearia)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: FAVORITOS_USUARIO (table: FAVORITOS)
ALTER TABLE FAVORITOS ADD CONSTRAINT FAVORITOS_USUARIO
    FOREIGN KEY (id_usuario)
    REFERENCES USUARIO (id_usuario)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: PROMOCAO_BARBEARIA (table: PROMOCAO)
ALTER TABLE PROMOCAO ADD CONSTRAINT PROMOCAO_BARBEARIA
    FOREIGN KEY (id_barbearia)
    REFERENCES BARBEARIA (id_barbearia)  
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

-- Reference: SERVICO_BARBEARIA (table: SERVICO)
ALTER TABLE SERVICO ADD CONSTRAINT SERVICO_BARBEARIA
    FOREIGN KEY (id_barbearia)
    REFERENCES BARBEARIA (id_barbearia)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: SESSAO_AUTENTICACAO_USUARIO (table: SESSAO_AUTENTICACAO)
ALTER TABLE SESSAO_AUTENTICACAO ADD CONSTRAINT SESSAO_AUTENTICACAO_USUARIO
    FOREIGN KEY (id_usuario)
    REFERENCES USUARIO (id_usuario)  
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

