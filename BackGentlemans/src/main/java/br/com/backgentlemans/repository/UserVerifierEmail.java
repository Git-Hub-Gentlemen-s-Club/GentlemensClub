package br.com.backgentlemans.repository;

import br.com.backgentlemans.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserVerifierEmail extends JpaRepository<User, Long> {
}
