package entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//Conveniencia da Barbearia
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "CONVENIENCIA")
public class ConvenienceBarber {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private boolean wifi;
    private boolean parking;
    private boolean videoGame;
    private boolean bar;

    @OneToOne
    @JoinColumn(name = "id_filial", referencedColumnName = "id", unique = true)
    private Branches branches;

}
