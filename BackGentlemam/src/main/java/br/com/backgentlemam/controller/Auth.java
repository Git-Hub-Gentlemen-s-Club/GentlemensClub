package br.com.backgentlemam.controller;

import br.com.backgentlemam.dto.*;
import br.com.backgentlemam.entities.BarberBranch;
import br.com.backgentlemam.entities.PasswordResetToken;
import br.com.backgentlemam.entities.User;
import br.com.backgentlemam.entities.UserVerifier;
import br.com.backgentlemam.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.naming.AuthenticationException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/auth")
public class Auth {

    @Autowired
    UserService userService;

    EmailService emailService = new EmailService();

    @Autowired
    PasswordResetTokenService passwordResetTokenService;

    @Autowired
    private BarberShopService barberShopService;

    @Autowired
    UserVerifierService userVerifier;

    @GetMapping("/test")
    public ResponseEntity<String> testeT() {
        return ResponseEntity.ok("Funcinou");
    }

    //Controller CadastroUser
    @PostMapping(value = "/save")
    public ResponseEntity<UserDTO> saveUser(@RequestBody UserDTO userDTO) {
        boolean userSave = userService.insertUser(userDTO);
        return userSave ? ResponseEntity.ok().body(userDTO) : ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }

    //Controller LoginUser
    @PostMapping("/login")
    public ResponseEntity<UserDTO> login(@RequestBody LoginUser loginUser) throws AuthenticationException {
        UserDTO userDTO = userService.loginUser(loginUser);
        return userDTO != null ? ResponseEntity.ok().body(userDTO) : ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }

    // Controller UpdateUser
    @PutMapping(value = "/update/{id}")
    public ResponseEntity<UserDTO> updateProfile(@PathVariable Long id, @RequestBody UserDTO userDTO) {
        boolean updated = userService.updateUser(id, userDTO);
        return updated ? ResponseEntity.ok().body(userDTO) : ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    // Controller  quando estiver logado
    @PutMapping(value = "/update-password-logged/{id}")
    public ResponseEntity<Void> updatePassword(@PathVariable Long id, @RequestBody PasswordDTO passwordDTO) {
        boolean updated = userService.updatePasswordLogged(id, passwordDTO);
        return updated ? ResponseEntity.noContent().build() : ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @PostMapping("/password/reset/request")
    public ResponseEntity<String> requestPasswordReset(@RequestBody String email) {
        Optional<User> user = userService.findByEmail(email);
        if (user.isPresent()) {
            String token = UUID.randomUUID().toString();
            userService.createPasswordResetToken(user.get(), token);

            // Defina o assunto e o conteúdo do e-mail de redefinição de senha
            String subject = "Redefinição de senha";
            String content = "<p>Olá, " + user.get().getName() + ".</p>" +
                    "<p>Clique no link abaixo para redefinir sua senha:</p>" +
                    "<a href=\"http://localhost:8080/password/reset/confirm?token=" + token + "\">Redefinir senha</a>";

            emailService.sendEmailResetPassword(user.get().getEmail(), subject, content);

            return ResponseEntity.ok("Email de redefinição de senha enviado.");
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuário não encontrado.");
    }


    @GetMapping("/password/reset/confirm")
    public ResponseEntity<String> confirmResetToken(@RequestParam("token") String token) {
        Optional<PasswordResetToken> resetToken = passwordResetTokenService.validatePasswordResetToken(token);
        if (resetToken.isPresent()) {
            return ResponseEntity.ok("Token válido, por favor insira sua nova senha.");
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Token inválido ou expirado.");
    }

    @PostMapping("/password/reset/complete")
    public ResponseEntity<String> resetPassword(@RequestBody PasswordChangeDTO passwordChangeDTO) {
        if (passwordChangeDTO.getNewPassword().equals(passwordChangeDTO.getConfirmPassword()) &&
                userService.isValidPassword(passwordChangeDTO.getNewPassword())) {

            Optional<PasswordResetToken> resetToken = passwordResetTokenService.validatePasswordResetToken(passwordChangeDTO.getToken());
            if (resetToken.isPresent()) {
                userService.updatePassword(resetToken.get().getUser(), passwordChangeDTO.getNewPassword());
                passwordResetTokenService.deleteToken(resetToken.get());
                return ResponseEntity.ok("Senha alterada com sucesso.");
            }
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Falha na redefinição de senha.");
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

    /*
    // Endpoint para listar todas as barbearias
    @GetMapping(value = "/barbearias/list")
    public ResponseEntity<List<BarberShopDTO>> getAllBarberShops() {
        List<BarberShopDTO> barberShops = barberShopService.getAllBarberShops();
        return ResponseEntity.ok(barberShops);
    }
    */

    @GetMapping(value = "/verificacao/{uuid}")
    public String verificacao(@PathVariable String uuid) {
        return  userVerifier.verifierAccount(uuid);
    }

    @GetMapping(value = "/barbearias/list")
    public ResponseEntity<List<BarberBranch>> getAllBarberBranches() {
        List<BarberBranch> barberShops = barberShopService.getAllBarberBranches();
        return ResponseEntity.ok(barberShops);
    }

}
