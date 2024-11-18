package br.com.backgentlemans.entities.view;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "vw_barbearia_filial")
public class BarberBranch {

    @Id
    private Long idBarbearia;

    private String cnpj;

    private String nome;

    private String status;

    private Long idFilial;
}
