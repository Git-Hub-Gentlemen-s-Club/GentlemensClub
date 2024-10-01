package dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ConvenienceBarberDTO {
    private Long id;
    private Boolean wifi;
    private Boolean parking;
    private Boolean videoGame;
    private Boolean bar;
    private Long branchId;
}
