package com.example.instrumentshop.Coupon.Entity;

import com.example.instrumentshop.Users.Entity.Users;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;


@Entity
@Table(name = "UserCouponMap")
@Getter
@Setter
public class UserCouponMap {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @ManyToOne
    @JoinColumn(name = "MEMBERUID")
    private Users users;

    @ManyToOne
    @JoinColumn(name = "couponId")
    private Coupon coupon;

    @Column(nullable = false)
    private boolean used;

    @Column(nullable = false)
    private LocalDate assignedDate;

    private LocalDate usedDate;


}
