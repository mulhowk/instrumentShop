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
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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

        // 현재 시간을 지정된 형식의 문자열로 변환
        String loginTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd-HH-mm"));

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
                .loginDate(loginTime) // 로그인 시간
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

    public List<UsersDTO.UserAllInfoDTO> getAllUserAllInfo() {
        List<Users> usersList = usersRepository.findAll();

        return usersList.stream()
                .map(user -> UsersDTO.UserAllInfoDTO.builder()
                        .memberUid(user.getMEMBERUID())
                        .memberName(user.getMemberName())
                        .memberGender(user.getMemberGender())
                        .memberEmail(user.getMemberEmail())
                        .memberRole(user.getSocialRole())
                        .memberDate(user.getMemberDate())
                        .memberReserves(user.getMemberReserves())
                        .loginDate(user.getLoginDate())
                        .build())
                .collect(Collectors.toList());
    }

    @Transactional
    public void addReserves(Long MEMBERUID, int reserves) {
        usersRepository.updateMemberReserves(MEMBERUID, reserves);
    }

    @Transactional
    public int findReserves(Long MEMBERUID){

        return usersRepository.findMemberReserves(MEMBERUID);
    }

    // 해당 하는 회원의 권한을 바꾸는 메소드
    @Transactional
    public boolean updateUserRole(Long memberUid, Role role) {
        try {
            Optional<Users> userOptional = usersRepository.findById(memberUid);
            if (userOptional.isPresent()) {
                Users user = userOptional.get();
                user.setSocialRole(role); // 역할을 입력된 역할로 변경
                user.setRoles(Collections.singletonList(Authority.builder().name("ROLE_" + role.name()).build()));
                usersRepository.save(user); // 변경된 사용자 정보 저장
                return true;
            } else {
                throw new Exception("해당하는 멤버를 찾을 수 없습니다."); // 사용자를 찾을 수 없는 경우 예외 처리
            }
        } catch (Exception e) {
            return false; // 예외 발생 시 false 반환
        }
    }

}

