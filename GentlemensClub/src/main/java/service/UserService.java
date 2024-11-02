package service;

import dto.PasswordDTO;
import dto.UserDTO;
import entities.PasswordResetToken;
import entities.User;
import entities.UserSituation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import repository.PasswordResetTokenRepository;
import repository.UserRepository;
import repository.UserVerifierRepositoryEmail;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserVerifierRepositoryEmail verifierRepositoryEmail;

    @Autowired
    UserVerifierService userVerifierService;

    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    EmailService emailService;

    @Autowired
    PasswordResetTokenRepository passwordResetTokenRepository;

    public boolean existsUseremail(String email) {
        return verifierRepositoryEmail.existsByEmail(email);
    }

    public boolean insertUser(UserDTO userDTO) {

        if(existsUseremail(userDTO.getEmail())) {
            return false;
        }

        userDTO.setPassword(bCryptPasswordEncoder.encode(userDTO.getPassword()));
        userDTO.setUserSituation(UserSituation.PENDING);

        User user = fromUser(userDTO);
        userRepository.save(user);
        userVerifierService.userVerifier(user);
        return true;
    }


    //Transformar UsuarioDTO em User
    public User fromUser(UserDTO userDTO) {
        User user = new User();
        user.setId(userDTO.getId());
        user.setName(userDTO.getName());
        user.setEmail(userDTO.getEmail());
        user.setPassword(userDTO.getPassword());
        user.setBirthday(userDTO.getBirthday());
        user.setDateCreated(userDTO.getDateCreated());
        return user;
    }

    public boolean updateUser(Long id, UserDTO userDTO) {
        return userRepository.findById(id).map(user -> {
            user.setName(userDTO.getName());
            user.setEmail(userDTO.getEmail());
            user.setBirthday(userDTO.getBirthday());
            userRepository.save(user);
            return true;
        }).orElse(false);
    }

    public boolean updatePasswordLogged(Long id, PasswordDTO passwordDTO) {
        return userRepository.findById(id).map(user -> {
            if (bCryptPasswordEncoder.matches(passwordDTO.getOldPassword(), user.getPassword())) {
                user.setPassword(bCryptPasswordEncoder.encode(passwordDTO.getNewPassword()));
                userRepository.save(user);
                return true;
            }
            return false;
        }).orElse(false);
    }

    public boolean updatePassword(User user, String newPassword) {
        user.setPassword(bCryptPasswordEncoder.encode(newPassword));
        userRepository.save(user);
        return true;
    }

    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }


    public boolean isValidPassword(String password) {
        // Verificar tamanho mínimo, se contém números, símbolos, etc.
        return password.length() >= 8 && password.matches(".*\\d.*") && password.matches(".*[!@#$%^&*].*");
    }

    public void sendPasswordResetEmail(User user, String token) {
        String url = "http://localhost:8080/password/reset/confirm?token=" + token;
        String message = "<p>Olá, " + user.getName() + "</p>" +
                "<p>Para redefinir sua senha, clique no link abaixo:</p>" +
                "<a href=\"" + url + "\">Redefinir Senha</a>" +
                "<p>O link expira em 1 hora.</p>";
        emailService.sendEmailResetPassword(user.getEmail(), "Redefinir Senha", message);
    }


    public void createPasswordResetToken(User user, String token) {
        PasswordResetToken resetToken = new PasswordResetToken(token, user, Instant.now().plus(1, ChronoUnit.HOURS));
        passwordResetTokenRepository.save(resetToken);
    }


    public boolean updateSituation(Long id, String situationCode) {
        return userRepository.findById(id).map(user -> {
            user.setSituation(UserSituation.valueCode(situationCode));
            userRepository.save(user);
            return true;
        }).orElse(false);
    }

    public boolean deleteUser(Long id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return true;
        }
        return false;
    }

}
