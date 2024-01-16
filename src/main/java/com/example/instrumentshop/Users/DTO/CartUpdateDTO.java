package com.example.instrumentshop.Users.DTO;


import com.example.instrumentshop.Goods.Entity.Goods;
import com.example.instrumentshop.Users.Entity.Users;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class CartUpdateDTO {

    private Long cartNo;
    private Goods goods;
    private Users users;
    private int goodsQuantity;
    private int goodsPrice;
    private String goodsName;
    private String goodsImg;
    private String goodsOption;
}
