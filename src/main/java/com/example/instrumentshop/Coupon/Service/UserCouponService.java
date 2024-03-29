package com.example.instrumentshop.Coupon.Service;

import com.example.instrumentshop.Coupon.DTO.UserCouponDTO;
import com.example.instrumentshop.Coupon.Entity.Coupon;
import com.example.instrumentshop.Coupon.Entity.UserCouponMap;
import com.example.instrumentshop.Coupon.Repository.CouponRepository;
import com.example.instrumentshop.Coupon.Repository.UserCouponRepository;
import com.example.instrumentshop.Users.Entity.Role;
import com.example.instrumentshop.Users.Entity.Users;
import com.example.instrumentshop.Users.Repositroy.UsersRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
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
        coupon.setCouponState(true);
        coupon.setCouponCreateAt(LocalDate.now());
        Coupon savedCoupon = couponRepository.save(coupon);

        // USER 역할을 가진 모든 사용자 조회
        List<Users> usersWithRoleUser = usersRepository.findByAuthorityName(Role.USER.getKey());

        // 모든 유저에게 쿠폰 할당
        for (Users user : usersWithRoleUser) {
            distributeCouponToUser(savedCoupon, user);
        }
    }

    @Transactional
    public UserCouponMap updateUserCoupon(UserCouponDTO userCouponDTO){

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate localDate = LocalDate.parse(getCurrentTimeString(), formatter);

        UserCouponMap newUserCouponMap = UserCouponMap.builder()
                .Id(userCouponDTO.getId())
                .users(userCouponDTO.getUsers())
                .used(userCouponDTO.isUsed())
                .coupon(userCouponDTO.getCoupon())
                .assignedDate(userCouponDTO.getAssignedDate())
                .usedDate(localDate)
                .build();

        userCouponRepository.save(newUserCouponMap);

        return userCouponRepository.save(newUserCouponMap);

    }

    // 개별 유저에게 쿠폰 매핑
    @Transactional
    public void distributeCouponToUser(Coupon coupon, Users user) {
        UserCouponMap userCouponMap = new UserCouponMap();
        userCouponMap.setUsers(user);
        userCouponMap.setCoupon(coupon);
        userCouponMap.setUsed(false);
        userCouponMap.setAssignedDate(LocalDate.now());

        userCouponRepository.save(userCouponMap);
    }

    // 이미 생성된 쿠폰 받기
    @Transactional
    public void assignCouponToUser(Long couponId, Long userId) {
        Coupon coupon = couponRepository.findById(couponId)
                .orElseThrow(() -> new RuntimeException("쿠폰을 찾을 수 없습니다."));
        Users user = usersRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("사용자를 찾을 수 없습니다."));

        distributeCouponToUser(coupon, user);
    }

    @Transactional
    public List<UserCouponMap> getUserCouponByUser(Long MEMBERUID){

        return userCouponRepository.findByUsers_MEMBERUID(MEMBERUID);
    }

    @Transactional
    public Long getCountUserCouponNoUse(Long MEMBERUID){

        return userCouponRepository.countByUsers_MEMBERUIDAndUsed(MEMBERUID, false);
    }

    // 현재 시간 구하는 서비스
    private static String getCurrentTimeString(){
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

        return now.format(formatter);
    }

}
