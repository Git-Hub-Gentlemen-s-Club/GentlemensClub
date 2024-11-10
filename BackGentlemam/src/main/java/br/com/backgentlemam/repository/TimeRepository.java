package br.com.backgentlemam.repository;

import br.com.backgentlemam.entities.Time;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TimeRepository extends JpaRepository<Time, Long> {
}
