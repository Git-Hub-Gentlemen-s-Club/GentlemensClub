package br.com.backgentlemans.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "filial")
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
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_barbershop") // Referência à BarberShop
    private BarberShop barberShop;

    @OneToMany(mappedBy = "branch", cascade = CascadeType.ALL)
    private List<EmployeeBarber> employees;

}
