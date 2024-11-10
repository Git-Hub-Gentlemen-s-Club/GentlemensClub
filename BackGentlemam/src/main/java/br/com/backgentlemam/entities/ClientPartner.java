package br.com.backgentlemam.entities;


//Cliente Parceiro

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "cliente_parceiro")
public class ClientPartner {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_cliente")
    private Long id;

    @Column(name = "nota_privada")
    private byte ratingPrivacy;

    @ManyToOne
    @JoinColumn(name = "id_usuario", nullable = true)
    private User user;

}
