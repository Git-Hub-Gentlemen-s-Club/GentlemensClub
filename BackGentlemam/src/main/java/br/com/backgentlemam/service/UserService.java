package br.com.backgentlemam.service;

import br.com.backgentlemam.dto.LoginUser;
import br.com.backgentlemam.dto.PasswordDTO;
import br.com.backgentlemam.dto.UserDTO;
import br.com.backgentlemam.entities.PasswordResetToken;
import br.com.backgentlemam.entities.User;
import br.com.backgentlemam.entities.enumerate.Usersituation;
import br.com.backgentlemam.repository.PasswordResetTokenRepository;
import br.com.backgentlemam.repository.UserRepository;
import br.com.backgentlemam.repository.UserVeriferRepositoryEmail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;


import javax.naming.AuthenticationException;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserVeriferRepositoryEmail verifierRepositoryEmail;

    @Autowired
    UserVerifierService userVerifierService;

    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;

    EmailService emailService = new EmailService();

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
        userDTO.setUserSituation(Usersituation.PENDING);

        User user = fromUser(userDTO);
        userRepository.save(user);
        userVerifierService.userVerifier(user);
        return true;
    }

    public UserDTO loginUser(LoginUser loginUser) throws AuthenticationException {

        Optional<User> user = findByEmail(loginUser.getEmail());
        User user1 = user.get();

        if(vifierLogin(user1, loginUser)){
            return fromDTO(user1);
        }

        throw new AuthenticationException("Invalid email or password");





    }

    public boolean vifierLogin (User user, LoginUser loginUser) {
        if(user.getEmail().equals(loginUser.getEmail())  && user.getPassword().equals(loginUser.getPassword()) && user.getSituation().equals(Usersituation.ACTIVE) )  {
            return true;
        }
        return false;
    }


    //Transformar User em DTO
    public UserDTO fromDTO(User user) {
        UserDTO userDTO = new UserDTO();

        user.setId(userDTO.getId());
        userDTO.setName(userDTO.getName());
        userDTO.setEmail(userDTO.getEmail());
        userDTO.setBirthday(userDTO.getBirthday());
        userDTO.setDateCreated(userDTO.getDateCreated());
        userDTO.setUserSituation(user.getSituation());
        return userDTO;
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
            user.setSituation(Usersituation.valueCode(situationCode));
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
