package br.com.backgentlemam.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "horario")
public class Time {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_horario")
    private Long id;

    @Column(name = "horario")
    private LocalTime time;

    @ManyToOne
    @JoinColumn(name = "id_barbeiro")
    private EmployeeBarber employeeBarber;
}