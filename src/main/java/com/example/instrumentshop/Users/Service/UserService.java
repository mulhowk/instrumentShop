package com.example.instrumentshop.Users.Service;

import com.example.instrumentshop.Global.Jwt.Util.JwtProvider;
import com.example.instrumentshop.Users.DTO.ReservesDTO;
import com.example.instrumentshop.Users.DTO.UsersDTO;
import com.example.instrumentshop.Users.Entity.Authority;
import com.example.instrumentshop.Users.Entity.Role;
import com.example.instrumentshop.Users.Entity.Users;
import com.example.instrumentshop.Users.Repositroy.UsersRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Collections;

@Slf4j
@Transactional
@Service
@RequiredArgsConstructor // final이 선언된 모든 필드를 인자값으로 하는 생성자를 생성
public class UserService {

    private final UsersRepository usersRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtProvider jwtProvider;

    public UsersDTO.SignResponse login(UsersDTO.SignRequest request) throws Exception {
        Users users = usersRepository.findByMemberEmail(request.getMember_email()).orElseThrow(() ->
                new BadCredentialsException("잘못된 계정정보입니다."));

        if (!passwordEncoder.matches(request.getMember_pwd(), users.getMemberPwd())) {
            throw new BadCredentialsException("잘못된 비밀번호입니다.");
        }

        String token = jwtProvider.createRefreshToken(); // 리프레시 토큰 생성

        users.updateRefreshToken(token); // 토큰 업데이트

        return UsersDTO.SignResponse.builder()
                .MEMBERUID(users.getMEMBERUID())
                .member_email(users.getMemberEmail())
                .member_name(users.getMemberName())
                .socialRole(users.getSocialRole())
                .roles(users.getRoles())
                .token(jwtProvider.createToken(users.getMemberEmail(), users.getRoles()
                        , users.getMemberName(), users.getMEMBERUID(), users.getOpenMarketBrand()
                        , users.getMemberPhone())) //
                .refreshToken(token) // 리프레시 토큰
                .build();
    }



    public boolean register(UsersDTO.SignRequest request) throws Exception {
        try {
            Users user = Users.builder()
                    .memberEmail(request.getMember_email())
                    .memberPwd(passwordEncoder.encode(request.getMember_pwd()))
                    .memberName(request.getMember_name())
                    .memberBirth(request.getMember_birth())
                    .memberGender(request.getMember_gender())
                    .memberPhone(request.getMember_phone())
                    .memberDate(LocalDate.now().toString()) // 현재날짜
                    .socialRole(Role.USER) // 일반 회원가입
                    .build();

            user.setRoles(Collections.singletonList(Authority.builder().name("ROLE_USER").build()));

            usersRepository.save(user);
        } catch (Exception e) {
            throw new Exception("회원가입 실패");
        }

        return true;
    }

    public UsersDTO.SignResponse getUser(Long memberUid) throws Exception {
        Users users = usersRepository.findByMEMBERUID(memberUid);

        return new UsersDTO.SignResponse(users);
    }

    public Users addReserves(ReservesDTO reservesDTO){
        Users users = usersRepository.findByMEMBERUID(reservesDTO.getMEMBERUID());

        int addReserves = reservesDTO.getMemberReserves();
        users.setMemberReserves(users.getMemberReserves() + addReserves);

        return usersRepository.save(users);

    }
}

