package br.com.backgentlemans.entities;

//Endereço da barbearia Filial

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "ENDERECO")
public class AddresBarber {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_address")
    private Long id;

    @Column(name = "Rua")
    private String street;

    @Column(name = "numero")
    private String number;

    @Column(name = "complemento")
    private String complement;

    @Column(name = "bairro")
    private String neighborhood;

    @Column(name = "cep")
    private String zipCode;

    @Column(name = "cidade")
    private String city;

    @Column(name = "estado")
    private String state;

    @Column(name = "localizacao")
    private String location;

    @Column(name = "id_filial")
    private Long branchId;

    @OneToOne
    @JoinColumn(name = "id_filial", updatable = false, insertable=false)
    private Branches branches;


}
