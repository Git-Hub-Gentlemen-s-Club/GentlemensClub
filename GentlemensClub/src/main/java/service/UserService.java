package service;

import dto.UserDTO;
import entities.User;
import entities.UserSituation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import repository.UserRepository;
import repository.UserVerifierRepositoryEmail;

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

    public boolean deleteUser(Long id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return true;
        }
        return false;
    }

}
