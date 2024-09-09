package repository;

import entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserVerifierRepositoryEmail extends JpaRepository<User, Long> {
    boolean existsByEmail (String email);
}
