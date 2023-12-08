package com.example.instrumentshop.Coupon.Service;

import com.example.instrumentshop.Coupon.Entity.Coupon;
import com.example.instrumentshop.Coupon.Entity.UserCouponMap;
import com.example.instrumentshop.Coupon.Repository.CouponRepository;
import com.example.instrumentshop.Coupon.Repository.UserCouponRepository;
import com.example.instrumentshop.Users.Entity.Users;
import com.example.instrumentshop.Users.Repositroy.UsersRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserCouponService {

    private final UserCouponRepository userCouponRepository;
    private final UsersRepository usersRepository;
    private final CouponRepository couponRepository;

    @Transactional
    public void createAndDistributeCoupon(Coupon coupon) {
        // 쿠폰 생성
        Coupon savedCoupon = couponRepository.save(coupon);

        // USER 역할을 가진 모든 사용자 조회
        List<Users> usersWithRoleUser = usersRepository.findBySocialRole("USER");

        // 모든 유저에게 쿠폰 할당
        for (Users user : usersWithRoleUser) {
            distributeCouponToUser(savedCoupon, user);
        }
    }

    // 개별 유저에게 쿠폰 매핑
    private void distributeCouponToUser(Coupon coupon, Users user) {
        UserCouponMap userCouponMap = new UserCouponMap();
        userCouponMap.setUser(user);
        userCouponMap.setCoupon(coupon);
        userCouponMap.setUsed(false);
        userCouponMap.setAssignedDate(LocalDate.now());

        userCouponRepository.save(userCouponMap);
    }

}
