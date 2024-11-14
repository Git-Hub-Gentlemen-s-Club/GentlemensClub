package br.com.backgentlemans.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class SocialBarberDTO {
    private Long id;
    private String instagram;
    private String facebook;
    private String linkedin;
    private String tiktok;
    private String youtube;
    private String barberShopWebsite;
    private Long branchId;
}
