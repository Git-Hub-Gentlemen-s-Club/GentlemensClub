package br.com.backgentlemam.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ClientePartnerDTO {
    private Long id;
    private Integer privateRating;
    private Long userId;
}
