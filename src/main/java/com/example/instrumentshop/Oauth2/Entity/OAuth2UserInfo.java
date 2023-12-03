package com.example.instrumentshop.Oauth2.Entity;

import java.util.Map;

public abstract class OAuth2UserInfo {

    protected Map<String, Object> attributes;

    public OAuth2UserInfo(Map<String, Object> attributes) {
        this.attributes = attributes;
    } // OAuth2User에서 반환하는 사용자 정보는 Map이기 때문에 값 하나하나를 변환해야만 한다.

    public abstract String getMEMBERUID();

    public abstract String getMember_name();

    public abstract String getImageUrl();

}
