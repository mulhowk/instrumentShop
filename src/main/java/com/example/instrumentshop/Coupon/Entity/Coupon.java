package com.example.instrumentshop.Coupon.Entity;

import com.example.instrumentshop.Goods.Entity.Goods;
import com.example.instrumentshop.Users.Entity.Users;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "Coupon")
@Getter
@Setter
public class Coupon {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long couponId;

    @Column(nullable = false, length = 50)
    private String couponName;

    @Column(nullable = false)
    private double couponValue;

    @Column(nullable = false)
    private int couponDiscount;

    @Column(nullable = false)
    private int couponLimit;

    @Column(nullable = false)
    private boolean couponState;

    @Column(nullable = false)
    private LocalDate couponStartAt;

    @Column(nullable = false)
    private LocalDate couponCreateAt;

    @Column(nullable = false)
    private LocalDate couponEndAt;

}
