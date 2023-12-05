package com.example.instrumentshop.Goods.DTO;

import com.example.instrumentshop.Goods.Entity.Goods;
import com.example.instrumentshop.Goods.Entity.QNA;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class QnaReplyDTO {

    private QNA qna;
    private Goods goods;
    private String replyContent;

}
