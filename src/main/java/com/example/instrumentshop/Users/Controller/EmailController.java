package com.example.instrumentshop.Users.Controller;

import com.example.instrumentshop.Users.Repositroy.EmailRequestDto;
import com.example.instrumentshop.Users.Service.EmailService;
import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/email")
public class EmailController {

    private final EmailService emailService;

    @GetMapping("/{email_addr}/authcode")
    public ResponseEntity<String> sendEmailPath(@PathVariable String email_addr) throws MessagingException {
        emailService.sendEmail(email_addr);
        return ResponseEntity.ok("이메일을 확인하세요");
    }

    @PostMapping("/{email_addr}/authcode")
    public ResponseEntity<Boolean> sendEmailAndCode(@PathVariable String email_addr, @RequestBody EmailRequestDto dto) {
        boolean isCodeValid = emailService.verifyEmailCode(email_addr, dto.getCode());
        return ResponseEntity.ok(isCodeValid);
    }
}