package com.example.instrumentshop.Goods.DTO;

import com.example.instrumentshop.Goods.Entity.Goods;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class QnaDTO {

    private String qnaTitle;
    private String qnaContent;
    private MultipartFile qnaFile;
    private String qnaWriter;
    private Goods goods;
}
