package br.com.backgentlemans.entities;

//Rede Social da Barbearia Filia

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "REDE_SOCIAL")
public class SocialBarber {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_social_media") // Esta coluna deve corresponder ao nome que você usou em BarberShop
    private Long id;

    private String instagram;
    private String facebook;
    private String linkedin;
    private String tiktok;
    private String youtube;
    private String website;
    private Long branchId;

    @OneToOne
    @JoinColumn(name = "id_filial", referencedColumnName = "id_filial", unique = true)
    private Branches branches;

}
