package entities;


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
@Entity
public class ClientPartner {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private byte ratingPrivacy;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = true)
    private User user;

}
