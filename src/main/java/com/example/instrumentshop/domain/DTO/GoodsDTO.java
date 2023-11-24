package com.example.instrumentshop.domain.DTO;


import com.example.instrumentshop.domain.Entity.Options;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
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
    private Date goodsDate;
    private int goodsQuantity;
    private String goodsCountry;
    private String goodsBrand;
    private String goodsOption;
    private List<String> options;
}
