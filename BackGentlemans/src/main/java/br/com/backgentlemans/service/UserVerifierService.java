package br.com.backgentlemans.service;

import br.com.backgentlemans.entities.User;
import br.com.backgentlemans.entities.UserVerifier;
import br.com.backgentlemans.entities.enumerate.Usersituation;
import br.com.backgentlemans.repository.UserVerifierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.UUID;

@Service
public class UserVerifierService {

    @Autowired
    UserVerifierRepository userVerifierRepository;


    private EmailService emailService = new EmailService();


    public void userVerifier(User user) {

        UserVerifier userVerifier = new UserVerifier();
        userVerifier.setUser(user);
        userVerifier.setUuid(UUID.randomUUID());
        userVerifier.setVerifiedAt(Instant.now().plusMillis(300000));

        userVerifierRepository.save(userVerifier);

        emailService.sendEmail(user.getEmail(), userVerifier.getUuid());
    }

    public String verifierAccount(String uuid) {

        try {
            UserVerifier userVerifier = userVerifierRepository.findByUuid(UUID.fromString(uuid)).get();
            if (userVerifier != null && userVerifier.getVerifiedAt().compareTo(Instant.now()) > 0) {

                User userVerifierNew = userVerifier.getUser();
                userVerifierNew.setSituation(Usersituation.ACTIVE);
                userVerifierRepository.save(userVerifier);
                return "User Verified!";
            } else {

                userVerifierRepository.delete(userVerifier);
                return "User not found or code expired!";
            }

        } catch (Exception e) {
            return "User not found!";
        }
    }
}
