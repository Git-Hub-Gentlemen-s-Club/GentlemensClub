package br.com.backgentlemans.entities;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "funcionario")
public class EmployeeBarber {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_barbeiro")
    private Long id;

    @Column(name = "nome")
    private String name;

    @Column(name = "especialidade")
    private String especialist;

    @Column(name = "photo")
    private String photo;

    @Column(name = "data_criacao")
    private LocalDateTime dateCreated;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_filial")
    private Branches branch;

    @OneToMany(mappedBy = "employeeBarber", cascade = CascadeType.ALL)
    private List<Time> times;


}