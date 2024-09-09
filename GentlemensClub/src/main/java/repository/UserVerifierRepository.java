package repository;

import entities.UserVerifier;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface UserVerifierRepository extends JpaRepository<UserVerifier, Long> {
    Optional<UserVerifier> findByUuid(UUID uuid);
}
