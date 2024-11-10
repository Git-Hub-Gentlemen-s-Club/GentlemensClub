package br.com.backgentlemam.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class BarberShopDTO {
    private Long id;
    private String name;
    private String logoUrl;

    private AddresBarberDTO address;

    private String googleMapsLink;

    private SocialBarberDTO socialProfiles;

    private String whatsappNumber;

    public boolean isValidWhatsappNumber() {
        return whatsappNumber != null && whatsappNumber.matches("^\\+?[1-9][0-9]{7,14}$");
    }

    public boolean isValidGoogleMapsLink() {
        return googleMapsLink != null && googleMapsLink.contains("google.com/maps");
    }
}
