package com.example.instrumentshop.Users.Repositroy;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class EmailRequestDto {
    // 인증 코드에 대한 getter와 setter
    private String code;

    // 기본 생성자
    public EmailRequestDto() {
    }

}
