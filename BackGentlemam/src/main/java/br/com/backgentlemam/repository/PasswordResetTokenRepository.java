package br.com.backgentlemam.repository;

import br.com.backgentlemam.entities.PasswordResetToken;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PasswordResetTokenRepository extends JpaRepository<PasswordResetToken, Long> {
    public Optional<PasswordResetToken> findByToken(String token);
}
