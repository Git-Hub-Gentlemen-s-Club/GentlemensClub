package br.com.backgentlemans.repository;

import br.com.backgentlemans.entities.Branches;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BranchesRepository extends JpaRepository<Branches, Long> {
}
