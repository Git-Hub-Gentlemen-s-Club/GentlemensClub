package br.com.backgentlemam.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "FILIAL")
public class Branches {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_filial")
    private Long id;

    @Column(name = "nome")
    private String name;

    @Column(name = "status")
    private boolean status;

    @ManyToOne
    @JoinColumn(name = "id_usuario", referencedColumnName = "id_usuario")
    private User user_barber;

    // Adicione esta linha
    @ManyToOne
    @JoinColumn(name = "id_barbershop", referencedColumnName = "id_barbershop", nullable = false) // Referência à BarberShop
    private BarberShop barberShop;

}
