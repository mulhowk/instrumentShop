package com.example.instrumentshop.Order.DTO;

import com.example.instrumentshop.Goods.Entity.Goods;
import com.example.instrumentshop.Users.Entity.Users;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class OrdersDTO {

    private List<Integer> goodsId;
    private Users users;
    private List<Integer> goodsQuantity;
    private List<String> options;
    private int totalPrice;
    private String orderMsg;
    private String deliverMsg;
    private String orderName;
    private String orderEmail;
    private String orderPhone;
    private String deliverName;
    private String deliverPhone;
    private String payInformation;

}
