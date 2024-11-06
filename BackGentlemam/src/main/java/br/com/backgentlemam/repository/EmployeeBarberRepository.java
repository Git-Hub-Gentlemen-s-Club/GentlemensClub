package br.com.backgentlemam.repository;

import br.com.backgentlemam.entities.EmployeeBarber;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import br.com.backgentlemam.entities.EmployeeBarber;


import java.util.Optional;

public interface EmployeeBarberRepository extends JpaRepository<EmployeeBarber, Long> {
    @Query("SELECT e FROM funcionario e WHERE e.id = :id")
    EmployeeBarber findFuncionarioWithoutBarberShop(@Param("id") Long id);


}
