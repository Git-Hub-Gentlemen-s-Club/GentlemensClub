package br.com.backgentlemans.entities.enumerate;

import com.fasterxml.jackson.annotation.JsonCreator;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter

@NoArgsConstructor
@AllArgsConstructor
public enum Usersituation {
    ACTIVE ("A", "ACTIVE"),
    PENDING("P", "PENDING");

    private String code;
    private String description;

    @JsonCreator
    public static Usersituation valueCode(String code) {
        if (code.equals("A")) {
            return ACTIVE;
        } else {
            return PENDING;
        }
    }
}
