package com.example.instrumentshop.Coupon.Controller;

import com.example.instrumentshop.Coupon.Entity.Coupon;
import com.example.instrumentshop.Coupon.Service.CouponService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/coupons")
@RequiredArgsConstructor
public class CouponController {

    private final CouponService couponService;

    // 쿠폰 전체 조회
    @GetMapping("/all")
    public List<Coupon> getAllCoupons() {
        return couponService.getAllCoupon();
    }


}
