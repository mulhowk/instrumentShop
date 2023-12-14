package com.example.instrumentshop.Users.DTO;


import com.example.instrumentshop.Goods.Entity.Goods;
import com.example.instrumentshop.Users.Entity.Users;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class CartDTO {

    private Goods goods;
    private Users users;
    private int goodsQuantity;
    private int goodsPrice;
    private String goodsName;
    private String goodsImg;
    private String goodsOption;
}
