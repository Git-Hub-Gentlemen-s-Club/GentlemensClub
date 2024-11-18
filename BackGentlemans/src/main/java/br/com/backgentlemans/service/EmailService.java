package br.com.backgentlemans.service;

import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;

import java.util.UUID;


public class EmailService {

    private JavaMailSender javaEmailSender;

    @Value("${spring.mail.username}")
    private String sender;

    public void sendEmail(String to, UUID uuid) {

        String urlHTML = ""+uuid;

        String htmlContent = "<p>Olá!</p><p>Por favor, clique no link abaixo para verificar seu cadastro:</p>"
                + "<a href=\"" + urlHTML + "\"><button>Clique AQUI</button></a>";

        try {
            MimeMessage mimeMessage = javaEmailSender.createMimeMessage();
            MimeMessageHelper help = new MimeMessageHelper(mimeMessage, true, "UTF-8");
            help.setTo(to);
            help.setFrom(sender);
            help.setSubject("Verificar Cadastro");
            help.setText(htmlContent, true);
            javaEmailSender.send(mimeMessage);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void sendEmailResetPassword(String to, String subject, String content) {
        try {
            MimeMessage mimeMessage = javaEmailSender.createMimeMessage();
            MimeMessageHelper help = new MimeMessageHelper(mimeMessage, true, "UTF-8");
            help.setTo(to);
            help.setFrom(sender);
            help.setSubject(subject);
            help.setText(content, true);
            javaEmailSender.send(mimeMessage);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


}
