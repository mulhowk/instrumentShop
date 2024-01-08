package com.example.instrumentshop.Coupon.Repository;

import com.example.instrumentshop.Coupon.Entity.Coupon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface CouponRepository extends JpaRepository<Coupon, Long> {

    // 전체 쿠폰 조회
    List<Coupon> findAll();

    // 쿠폰 ID별 조회
    Coupon findByCouponId(Long couponId);

    // 발급 일자별 조회
    List<Coupon> findByCouponCreateAt(LocalDate date);

    // 쿠폰 상태별로 조회
    List<Coupon> findByCouponState(boolean couponState);

    // 쿠폰 생성 및 수정은 JpaRepository에서 제공하는 save 메서드를 사용
    // 삭제는 JpaRepository에서 제공하는 delete 메서드를 사용

}