package dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class AddressBarberDTO {
    private Long id;
    private String street;
    private String number;
    private String complement;
    private String neighborhood;
    private String zipCode;
    private String city;
    private String state;
    private String location;
    private Long branchId;
}
