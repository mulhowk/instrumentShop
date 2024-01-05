package com.example.instrumentshop.Coupon.Repository;

import com.example.instrumentshop.Coupon.Entity.Coupon;
import com.example.instrumentshop.Coupon.Entity.UserCouponMap;
import com.example.instrumentshop.Users.Entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface UserCouponRepository extends JpaRepository<UserCouponMap, Long> {
    // 사용자별, 쿠폰별 또는 다른 기준으로 조회하는 메서드들을 추가할 수 있습니다.
    // 특정 사용자가 받은 모든 쿠폰 조회
    List<UserCouponMap> findByUsers_MEMBERUID(Long MEMBERUID);
    // 특정 쿠폰을 받은 모든 사용자 조회
    List<UserCouponMap> findByCoupon(Coupon coupon);

    // 특정 사용자가 사용한 모든 쿠폰 조회
    List<UserCouponMap> findByUsersAndUsed(Users user, boolean used);

    // 특정 날짜에 할당된 모든 쿠폰 조회
    List<UserCouponMap> findByAssignedDate(LocalDate date);

    // 특정 쿠폰을 받고 아직 사용하지 않은 사용자 조회
    List<UserCouponMap> findByCouponAndUsed(Coupon coupon, boolean used);
    // 특정 사용자가 아직 사용하지 않은 쿠폰의 개수 조회
    int countByUsersAndUsed(Users user, boolean used);
    // 특정 날짜에 사용된 모든 쿠폰 조회
    List<UserCouponMap> findByUsedDate(LocalDate usedDate);

    // 사용자가 사용하지 않은 쿠폰 조회
    Long countByUsers_MEMBERUIDAndUsed(Long MEMBERUID, boolean used);

}
