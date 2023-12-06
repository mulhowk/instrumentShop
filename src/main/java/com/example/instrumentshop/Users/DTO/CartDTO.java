package com.example.instrumentshop.Users.DTO;


import com.example.instrumentshop.Goods.Entity.Goods;
import com.example.instrumentshop.Users.Entity.Users;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class CartDTO {

    private Goods goods;
    private Users MEMBERUID;
    private int goodsQuantity;
    private int goodsPrice;
    private int goodsName;
}
