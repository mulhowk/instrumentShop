package com.example.instrumentshop.Coupon.Controller;

import com.example.instrumentshop.Coupon.DTO.CouponDTO;
import com.example.instrumentshop.Coupon.Entity.Coupon;
import com.example.instrumentshop.Coupon.Entity.UserCouponMap;
import com.example.instrumentshop.Coupon.Service.CouponService;
import com.example.instrumentshop.Coupon.Service.UserCouponService;
import com.example.instrumentshop.Users.Entity.Users;
import com.example.instrumentshop.Users.Repositroy.UsersRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/coupons")
@RequiredArgsConstructor
public class UserCouponController {

    private final UserCouponService userCouponService;
    private final CouponService couponService;

    // 쿠폰 생성 및 사용자에게 배포
    @PostMapping("/distribute")
    public ResponseEntity<String> createAndDistributeCoupon(@RequestBody CouponDTO request) {
        try {
            userCouponService.createAndDistributeCoupon(request.getCoupon());
            return ResponseEntity.ok("Coupon successfully distributed to users");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error distributing coupon: " + e.getMessage());
        }
    }

    @GetMapping("/users/coupons/{MEMBERUID}")
    public List<UserCouponMap> getUsersCoupon(@PathVariable Long MEMBERUID){

        return userCouponService.getUserCouponByUser(MEMBERUID);
    }

    @GetMapping("/coupons/{couponId}")
    public Coupon getCouponByCouponId(@PathVariable Long couponId){

        return couponService.getCouponByCouponId(couponId);
    }

}
