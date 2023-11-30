package com.example.instrumentshop.Goods.DTO;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class GoodsDTO {

    private MultipartFile goodsImg;
    private String parentCategory;
    private String childCategory;
    private String goodsName;
    private int goodsPrice;
    private String goodsDetail;
    private int goodsQuantity;
    private String goodsCountry;
    private String goodsBrand;
    private String goodsOption;
    private List<String> options;
    private MultipartFile goodsDetailImg;
}
