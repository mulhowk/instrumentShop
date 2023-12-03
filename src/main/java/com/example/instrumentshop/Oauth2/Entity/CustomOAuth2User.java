package com.example.instrumentshop.Oauth2.Entity;

import com.example.instrumentshop.Users.Entity.Role;
import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;

import java.util.Collection;
import java.util.Map;

@Getter
public class CustomOAuth2User extends DefaultOAuth2User {

    private String member_email;
    private Role socialRole;

    public CustomOAuth2User(Collection<? extends GrantedAuthority> authorities,
                            Map<String, Object> attributes, String nameAttributeKey, String member_email, Role socialRole) {
        super(authorities, attributes, nameAttributeKey);
        this.member_email = member_email;
        this.socialRole = socialRole;
    }

}

