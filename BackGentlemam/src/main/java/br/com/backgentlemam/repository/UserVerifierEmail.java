package br.com.backgentlemam.repository;

import br.com.backgentlemam.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserVerifierEmail extends JpaRepository<User, Long> {
}
