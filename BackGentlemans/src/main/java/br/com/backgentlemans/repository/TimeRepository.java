package br.com.backgentlemans.repository;

import br.com.backgentlemans.entities.Time;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TimeRepository extends JpaRepository<Time, Long> {
}
