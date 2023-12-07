package com.example.instrumentshop.Coupon.DTO;

import com.example.instrumentshop.Coupon.Entity.Coupon;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class CouponDTO {

    private Coupon coupon;
    private List<Long> userIds;


}
