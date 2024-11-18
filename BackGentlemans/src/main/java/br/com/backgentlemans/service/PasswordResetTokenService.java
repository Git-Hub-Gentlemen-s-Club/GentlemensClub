package br.com.backgentlemans.service;

import br.com.backgentlemans.entities.PasswordResetToken;
import br.com.backgentlemans.repository.PasswordResetTokenRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.time.Instant;
import java.util.Optional;




@Service
public class PasswordResetTokenService {

    @Autowired
    PasswordResetTokenRepository passwordResetTokenRepository;

    public Optional<PasswordResetToken> validatePasswordResetToken(String token) {
        Optional<PasswordResetToken> resetToken = passwordResetTokenRepository.findByToken(token);
        if (resetToken.isPresent() && resetToken.get().getExpiryDate().isAfter(Instant.now())) {
            return resetToken;
        }
        return Optional.empty();
    }

    public void deleteToken(PasswordResetToken token) {
        passwordResetTokenRepository.delete(token);
    }

}
