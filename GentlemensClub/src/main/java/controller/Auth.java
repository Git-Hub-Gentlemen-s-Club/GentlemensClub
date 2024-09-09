package controller;

import dto.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
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




}