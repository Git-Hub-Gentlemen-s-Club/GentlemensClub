package br.com.backgentlemans.repository;

import br.com.backgentlemans.entities.EmployeeBarber;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface EmployeeBarberRepository extends JpaRepository<EmployeeBarber, Long> {
    @Query("SELECT e FROM funcionario e WHERE e.id = :id")
    EmployeeBarber findFuncionarioWithoutBarberShop(@Param("id") Long id);


}
