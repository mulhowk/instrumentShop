package com.example.instrumentshop.Coupon.Controller;

import com.example.instrumentshop.Coupon.Entity.Coupon;
import com.example.instrumentshop.Coupon.Entity.UserCouponMap;
import com.example.instrumentshop.Coupon.Repository.CouponRepository;
import com.example.instrumentshop.Coupon.Repository.UserCouponRepository;
import com.example.instrumentshop.Coupon.Service.UserCouponService;
import com.example.instrumentshop.Users.Entity.Users;
import com.example.instrumentshop.Users.Repositroy.UsersRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class UserCouponControllerTest {

    @Mock
    private UserCouponRepository userCouponRepository;
    @Mock
    private UsersRepository usersRepository;
    @Mock
    private CouponRepository couponRepository;

    @InjectMocks
    private UserCouponService userCouponService;

/*    @Test
    public void testCreateAndDistributeCoupon() {
        // 가정: 쿠폰과 유저 ID 리스트를 설정
        Coupon mockCoupon = new Coupon(); // 쿠폰의 세부 정보 설정
        List<Long> userIds = List.of(1L, 2L, 3L); // 유저 ID 리스트


        // 목 사용자 객체 생성
        Users mockUser1 = Mockito.mock(Users.class);
        Users mockUser2 = Mockito.mock(Users.class);
        Users mockUser3 = Mockito.mock(Users.class);
        List<Users> mockUsers = List.of(mockUser1, mockUser2, mockUser3);

        // 유저 정보 목 객체 설정
        when(usersRepository.findAllById(userIds)).thenReturn(mockUsers);

        // 테스트 실행
        userCouponService.createAndDistributeCoupon(mockCoupon, userIds);

        // 검증: 쿠폰이 각 사용자에게 정확히 할당되었는지 확인
        verify(userCouponRepository, times(mockUsers.size())).save(any(UserCouponMap.class));
    }*/
}