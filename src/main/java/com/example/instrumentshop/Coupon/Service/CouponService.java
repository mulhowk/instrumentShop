package com.example.instrumentshop.Coupon.Service;

import com.example.instrumentshop.Coupon.Entity.Coupon;
import com.example.instrumentshop.Coupon.Repository.CouponRepository;
import lombok.RequiredArgsConstructor;
import net.bytebuddy.asm.Advice;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CouponService {

    private final CouponRepository couponRepository;

    // 쿠폰 전체 조회
    public List<Coupon> getAllCoupon() {
        return couponRepository.findAll();
    }

    // 쿠폰 ID별 조회
    public Coupon getCouponByCouponId(Long couponId) {
        return couponRepository.findByCouponId(couponId);
    }

    // 쿠폰 발급 일자별 조회
    public List<Coupon> getCouponByCouponCreateAt(LocalDate date) {
        return couponRepository.findByCouponCreateAt(date);
    }

    // 쿠폰 상태별로 조회
    public List<Coupon> getCouponByCouponState(String couponState) {
        return couponRepository.findByCouponState(couponState);
    }

    // 쿠폰 생성
    @Transactional
    public Coupon createCoupon(Coupon coupon) {
        // 기본 상태를 '사용 가능'(1)으로 설정
        coupon.setCouponState("1");
        coupon.setCouponCreateAt(LocalDate.now());

        return couponRepository.save(coupon);
    }


    // 쿠폰 삭제
    @Transactional
    public void deleteCoupon(Long couponId) {
        couponRepository.deleteById(couponId);
    }

}
