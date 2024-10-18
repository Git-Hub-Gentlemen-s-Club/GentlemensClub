package entities;

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
    private Long id;
    private String street;
    private String number;
    private String complement;
    private String neighborhood;
    private String cep;
    private String city;
    private String state;
    private String location;

    @OneToOne
    @JoinColumn(name = "id_filial", referencedColumnName = "id", unique = true)
    private Branches branches;

}
