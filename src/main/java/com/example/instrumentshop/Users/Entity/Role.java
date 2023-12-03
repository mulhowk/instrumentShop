package com.example.instrumentshop.Users.Entity;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum Role {

    GUEST("ROLE_GUEST"), USER("ROLE_USER"), ADMIN("ROLE_ADMIN"), MARKETER("ROLE_MARKETER");

    private final String key;

}