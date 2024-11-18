package br.com.backgentlemans.entities;

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
    @Column(name = "id_conveniencia")
    private long id;

    @Column(name = "wi_fi")
    private boolean wifi;

    @Column(name = "estacionamento")
    private boolean parking;

    @Column(name = "video_game")
    private boolean videoGame;

    @Column(name = "bar")
    private boolean bar;

    @OneToOne
    @JoinColumn(name = "id_filial", referencedColumnName = "id_filial", unique = true)
    private Branches branches;

}
