package com.example.instrumentshop.Users.Entity;

import jakarta.persistence.*;
import lombok.*;

    @Getter
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
        private String member_email; // 이메일
        private String member_name; // 이름
        private String member_pwd; // 비밀번호
        private String member_gender; // 성별
        private String member_birth; // 생년월일
        private String member_phone; // 전화번호
        private String imageUrl; // 프로필 이미지
        private String city; // 사는 도시
        @Enumerated(EnumType.STRING)
        private Role role;
        @Enumerated(EnumType.STRING)
        private SocialType socialType; // KAKAO, NAVER, GOOGLE
        private String login_date; // 마지막 로그인 일자
        private String member_date; // 회원가입 일자
        private String socialId; // 로그인한 소셜 타입의 식별자 값 (일반 로그인인 경우 null)
        private int member_reserves; // 적립금
        private String refreshToken; // 리프레시 토큰
        private String member_address; // 기본주소

        // 유저 권한 설정 메소드
        public void authorizeUser() {
            this.role = Role.USER;
        }

        // 비밀번호 암호화 메소드
/*        public void passwordEncode(PasswordEncoder passwordEncoder) {
            this.password = passwordEncoder.encode(this.password);
        }

        public void updateRefreshToken(String updateRefreshToken) {
            this.refreshToken = updateRefreshToken;
        }*/

}
