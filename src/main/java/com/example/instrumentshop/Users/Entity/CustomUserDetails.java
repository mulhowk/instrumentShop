package com.example.instrumentshop.Users.Entity;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.stream.Collectors;

@RequiredArgsConstructor
public class CustomUserDetails implements UserDetails {

    private final Users users;

    public final Users getUser() {
        return users;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return users.getRoles().stream().map(o -> new SimpleGrantedAuthority(o.getName()))
                .collect(Collectors.toList());
    }

    @Override
    public String getPassword() {
        return users.getMemberPwd();
    }

    @Override
    public String getUsername() {
        return users.getMemberEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}
