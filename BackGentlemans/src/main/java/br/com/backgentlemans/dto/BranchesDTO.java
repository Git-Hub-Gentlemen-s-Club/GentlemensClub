package br.com.backgentlemans.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class BranchesDTO {
    private Long id;
    private String name;
    private Boolean status;
    private Long barberShopId;
}
