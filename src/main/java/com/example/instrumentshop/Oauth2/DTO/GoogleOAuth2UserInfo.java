package com.example.instrumentshop.Oauth2.DTO;

import com.example.instrumentshop.Oauth2.Entity.OAuth2UserInfo;

import java.util.Map;

public class GoogleOAuth2UserInfo extends OAuth2UserInfo {

    public GoogleOAuth2UserInfo(Map<String, Object> attributes) {
        super(attributes);
    }

    @Override
    public String getMEMBERUID() {
        return (String) attributes.get("sub");
    }

    @Override
    public String getMember_name() {
        return (String) attributes.get("name");
    }

    @Override
    public String getImageUrl() {
        return (String) attributes.get("picture");
    }

}
