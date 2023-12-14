package com.example.instrumentshop.Users.DTO;

import com.example.instrumentshop.Goods.Entity.Goods;
import com.example.instrumentshop.Users.Entity.Users;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class WishListDTO {

    private Goods goods;
    private Users users;
}
