package com.example.instrumentshop.Address.Entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Builder
@Table(name = "Address")
@AllArgsConstructor
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ADDRESSID", nullable = false)
    private Long ADDRESSID;

    @Column(name = "MEMBERUID", nullable = false)
    private Long MEMBERUID;

    @Column(nullable = false, length = 10)
    private String addressReceiver;

    @Column(length = 15)
    private String addressNickname;
    private String memberPhone; // 전화번호
    @Column(nullable = false)
    private String addressValue; // 주소
    private String addressPostnumber; // 우편번호

}
