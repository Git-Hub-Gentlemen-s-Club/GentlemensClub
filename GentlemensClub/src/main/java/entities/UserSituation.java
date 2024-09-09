package entities;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter

@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum UserSituation {

    ACTIVE ("A", "ACTIVE"),
    PENDING("P", "PENDING");

    private String code;
    private String description;

    @JsonCreator
    public static UserSituation valueCode(String code) {
        if (code.equals("A")) {
            return ACTIVE;
        } else {
            return PENDING;
        }
    }
}
