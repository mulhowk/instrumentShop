package com.example.instrumentshop.Coupon.Controller;

import com.example.instrumentshop.Coupon.DTO.CouponDTO;
import com.example.instrumentshop.Coupon.Service.UserCouponService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/coupons")
@RequiredArgsConstructor
public class UserCouponController {

    private final UserCouponService userCouponService;

    // 쿠폰 생성 및 사용자에게 배포
    @PostMapping("/distribute")
    public ResponseEntity<String> createAndDistributeCoupon(@RequestBody CouponDTO request) {
        try {
            userCouponService.createAndDistributeCoupon(request.getCoupon(), request.getUserIds());
            return ResponseEntity.ok("Coupon successfully distributed to users");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error distributing coupon: " + e.getMessage());
        }
    }

}
