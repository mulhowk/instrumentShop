package com.example.instrumentshop.Goods.DTO;

import com.example.instrumentshop.Goods.Entity.Goods;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ReviewDTO {

    private double reviewScore;
    private String reviewTitle;
    private String reviewContent;
    private MultipartFile reviewFile;
    private String reviewWriter;
    private Goods goods;

}
