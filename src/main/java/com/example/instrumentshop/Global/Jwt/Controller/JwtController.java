package com.example.instrumentshop.Global.Jwt.Controller;

import com.example.instrumentshop.Global.Jwt.Util.JwtProvider;
import com.example.instrumentshop.Users.Entity.Users;
import com.example.instrumentshop.Users.Repositroy.UsersRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/jwt")
@RequiredArgsConstructor
public class JwtController {

    private final JwtProvider jwtProvider;

    private final UsersRepository usersRepository;

    private static final Logger logger = org.slf4j.LoggerFactory.getLogger(JwtController.class);

    @PostMapping("/refresh-token")
    public ResponseEntity<?> refreshToken(@RequestParam String refreshToken) {
        // 리프레시 토큰 검증
        if (!jwtProvider.validateToken("BEARER " + refreshToken)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid refresh token");
        }

        // DB에서 리프레시 토큰 확인
        Users users = usersRepository.findByRefreshToken(refreshToken).orElseThrow(() ->
                new BadCredentialsException("Invalid refresh token"));

        // 새로운 액세스 토큰 생성
        String newAccessToken = jwtProvider.createToken(users.getMemberEmail()
                , users.getSocialRole(), users.getMemberName()
                , users.getMEMBERUID(), users.getOpenMarketBrand(), users.getMemberPhone());
        logger.info("newAccessToken: " + newAccessToken);

        return ResponseEntity.ok(newAccessToken);
    }

}