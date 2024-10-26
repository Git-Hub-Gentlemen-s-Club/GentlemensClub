package entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "barbershop")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class BarberShop {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_barbershop")
    private Long id;

    @Column(name = "name", nullable = false, length = 150)
    private String name;

    @Column(name = "logo_url", nullable = true)
    private String logoUrl;

    // Relação com a entidade Address
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_address", referencedColumnName = "id_address")
    private AddresBarber address;

    @Column(name = "google_maps_link")
    private String googleMapsLink;

    // Relação com redes sociais (social media)
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_social_media", referencedColumnName = "id_social_media")
    private SocialBarber social;

    @Column(name = "whatsapp_number", nullable = false, length = 15)
    private String whatsappNumber;

    // Relacionamento com Filiais (Branches)
    @OneToMany(mappedBy = "barberShop", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Branches> branches;
}
