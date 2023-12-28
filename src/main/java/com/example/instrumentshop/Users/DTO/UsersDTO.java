package com.example.instrumentshop.Users.DTO;

import com.example.instrumentshop.Users.Entity.Authority;
import com.example.instrumentshop.Users.Entity.Role;
import com.example.instrumentshop.Users.Entity.SocialType;
import com.example.instrumentshop.Users.Entity.Users;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

public class UsersDTO {

    @Getter
    @Setter
    public static class SignRequest { // 회원가입시 필요한 정보

        private Long MEMBERUID;
        private String member_email;
        private String member_pwd;
        private String member_name;
        private String member_gender;
        private String member_birth;
        private String member_phone;
        private SocialType socialType;
        private Role socialRole;
    }

    @Getter
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class SignResponse { //

        private Long MEMBERUID;

        private String member_name;

        private String member_email;

        private String member_gender;

        private String member_birth;

        private String member_phone;

        private List<Authority> roles = new ArrayList<>();

        private SocialType socialType;

        private Role socialRole;

        private String token;

        private String refreshToken;

        private int memberReserves;

        public SignResponse(Users users) {
            this.MEMBERUID = users.getMEMBERUID();
            this.member_name = users.getMemberName();
            this.member_email = users.getMemberEmail();
            this.member_birth = users.getMemberBirth();
            this.member_gender = users.getMemberGender();
            this.member_phone = users.getMemberPhone();
            this.roles = users.getRoles();
            this.socialRole = users.getSocialRole();
            this.refreshToken = users.getRefreshToken();
            this.memberReserves = users.getMemberReserves();
        }
    }

    @NoArgsConstructor // 기본 생성자 자동 추가
    @Getter
    public static class UserSignUpDto {

        private String member_email;
        private String member_pwd;
        private String member_name;
        private int age;
        private String city;

    }

    @NoArgsConstructor
    @Data // @Getter, @Setter, @RequiredArgsConstructor, @ToString, @EqualsAndHashCode을 한꺼번에 설정해주는 어노테이션
    public static class UserLoginDto {

        private String email;
        private String password;

    }
    @NoArgsConstructor
    @Data
    public static class UserInfoDTO {
        private Long memberUid;
    }

    @Data
    @NoArgsConstructor
    public static class UserMyInfoDTO {
        private int reserves;
        private int couponCount;
        private int orderCount;
    }

}
