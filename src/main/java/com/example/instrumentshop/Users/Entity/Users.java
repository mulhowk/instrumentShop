package com.example.instrumentshop.Users.Entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;
import java.util.List;

    @Getter
    @Setter
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    @Entity
    @Builder
    @Table(name = "USERS")
    @AllArgsConstructor
    public class Users {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "MEMBERUID")
        private Long MEMBERUID; // UID
        private String memberEmail; // 이메일
        private String memberName; // 이름
        private String memberPwd; // 비밀번호
        private String memberGender; // 성별
        private String memberBirth; // 생년월일
        private String memberPhone; // 전화번호
        private String imageUrl; // 프로필 이미지
        private String city; // 사는 도시
        @OneToMany(mappedBy = "users", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
        @Builder.Default
        private List<Authority> roles = new ArrayList<>();
        @Enumerated(EnumType.STRING)
        private SocialType socialType; // KAKAO, NAVER, GOOGLE
        @Enumerated(EnumType.STRING) // JPA로 데이터베이스를 저장할 때 Enum 값을 어떤 형태로 저장할지 결정합니다.
        private Role socialRole;
        private String openMarketBrand;
        private String loginDate; // 마지막 로그인 일자
        private String memberDate; // 회원가입 일자
        private String socialId; // 로그인한 소셜 타입의 식별자 값 (일반 로그인인 경우 null)
        private int memberReserves; // 적립금
        private String refreshToken; // 리프레시 토큰
        private String memberAddress; // 기본주소

        public void setRoles(List<Authority> role) {
            this.roles = role;
            role.forEach(o -> o.setMember(this));
        }


        // 유저 권한 설정 메소드
        public void authorizeUser() {
            this.socialRole = Role.USER;
        }

        // 비밀번호 암호화 메소드
        public void passwordEncode(PasswordEncoder passwordEncoder) {
            this.memberPwd = passwordEncoder.encode(this.memberPwd);
        }

        public void updateRefreshToken(String updateRefreshToken) {
            this.refreshToken = updateRefreshToken;
        }

}
