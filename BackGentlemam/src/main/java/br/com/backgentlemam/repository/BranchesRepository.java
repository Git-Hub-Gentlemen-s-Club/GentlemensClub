package br.com.backgentlemam.repository;

import br.com.backgentlemam.entities.Branches;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BranchesRepository extends JpaRepository<Branches, Long> {
}
