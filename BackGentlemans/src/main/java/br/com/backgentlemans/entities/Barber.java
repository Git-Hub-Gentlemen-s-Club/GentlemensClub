package br.com.backgentlemans.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//Barbearia do Cliente Parceiro

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "barbearia")
public class Barber {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column (name = "id_barbearia")
    private Long id;

    @Column(name = "cnpj")
    private String cpj;

    @Column(name = "razao_social")
    private String CompanyName;

    @OneToOne
    @JoinColumn(name = "id_usuario", referencedColumnName = "id_usuario", unique = true)
    private User user;
}