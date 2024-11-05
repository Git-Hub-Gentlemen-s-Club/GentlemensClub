package br.com.backgentlemam.entities;


import br.com.backgentlemam.entities.enumerate.Usersituation;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "usuario")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_usuario")
    private Long id;

    @Column(name = "nome")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "senha")
    private String password;

    @Column(name = "data_nascimento")
    private LocalDate birthday;

    @Column(name = "data_criacao")
    private LocalDateTime dateCreated;

    @Enumerated(EnumType.STRING)
    @Column(name = "situation")
    private Usersituation situation;

    @ManyToOne
    @JoinColumn(name = "id_filial")
    private Branches branch;
}
