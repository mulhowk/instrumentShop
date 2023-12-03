package com.example.instrumentshop.Oauth2.DTO;

import com.example.instrumentshop.Oauth2.Entity.OAuth2UserInfo;

import java.util.Map;

public class KakaoOAuth2UserInfo extends OAuth2UserInfo {

    public KakaoOAuth2UserInfo(Map<String, Object> attributes) {
        super(attributes);
    }

    @Override
    public String getMEMBERUID() {
        return String.valueOf(attributes.get("id"));
    }

    @Override
    public String getMember_name() {
        Map<String, Object> account = (Map<String, Object>) attributes.get("kakao_account");
        Map<String, Object> profile = (Map<String, Object>) account.get("profile");

        if ( account == null || profile == null ) {
            return null;
        }

        return (String) profile.get("nickname");
    }

    @Override
    public String getImageUrl() {
        Map<String, Object> account = (Map<String, Object>) attributes.get("kakao_account");
        Map<String, Object> profile = (Map<String, Object>) account.get("profile");

        if ( account == null || profile == null ) {
            return null;
        }

        return (String) profile.get("profile_image_url");
    }


}

