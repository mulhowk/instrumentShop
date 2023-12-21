package com.example.instrumentshop.Coupon.DTO;

import com.example.instrumentshop.Coupon.Entity.Coupon;
import com.example.instrumentshop.Users.Entity.Users;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserCouponDTO {

    private Long Id;
    private Users users;
    private Coupon coupon;
    private boolean used;
    private LocalDate assignedDate;

}
