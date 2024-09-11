package controller;

import dto.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import service.UserService;

@Controller
public class Auth {

    @Autowired
    UserService userService;

    //Controller CadastroUser
    @PostMapping(value = "/save")
    public ResponseEntity<UserDTO> saveUser(@RequestBody UserDTO userDTO) {
        boolean userSave = userService.insertUser(userDTO);
        return userSave ? ResponseEntity.ok().body(userDTO) : ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }

    // Controller UpdateUser
    @PutMapping(value = "/update/{id}")
    public ResponseEntity<UserDTO> updateProfile(@PathVariable Long id, @RequestBody UserDTO userDTO) {
        boolean updated = userService.updateUser(id, userDTO);
        return updated ? ResponseEntity.ok().body(userDTO) : ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    // Controller UpdatePassword
    @PutMapping(value = "/update-password/{id}")
    public ResponseEntity<Void> updatePassword(@PathVariable Long id,
            @RequestBody PasswordChangeDTO passwordChangeDTO) {
        boolean updated = userService.updatePassword(id, passwordChangeDTO);
        return updated ? ResponseEntity.noContent().build() : ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    // Controller UpdateSituation
    @PutMapping(value = "/update-situation/{id}")
    public ResponseEntity<Void> updateSituation(@PathVariable Long id, @RequestBody String situationCode) {
        boolean updated = userService.updateSituation(id, situationCode);
        return updated ? ResponseEntity.noContent().build() : ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    // Controller DeletarUser
    @DeleteMapping(value = "/delete/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        boolean deleted = userService.deleteUser(id);
        return deleted ? ResponseEntity.noContent().build() : ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

}
