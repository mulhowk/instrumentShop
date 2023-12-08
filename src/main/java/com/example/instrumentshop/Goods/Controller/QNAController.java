package com.example.instrumentshop.Goods.Controller;

import com.example.instrumentshop.Goods.DTO.QnaDTO;
import com.example.instrumentshop.Goods.DTO.QnaReplyDTO;
import com.example.instrumentshop.Goods.Entity.QNA;
import com.example.instrumentshop.Goods.Entity.QnaReply;
import com.example.instrumentshop.Goods.Service.QNAService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping
public class QNAController {

    private final QNAService qnaService;

    // 문의 전체 조회 컨트롤러
    @GetMapping("/qna")
    public List<QNA> findAllQna(){

        return qnaService.getAllQna();
    }

    // 문의 댓글 전체 조회 컨트롤러
    @GetMapping("/qnaReply")
    public List<QnaReply> findAllQnaReply(){

        return qnaService.getAllQnaReply();
    }

    // Qna 정보 컨트롤러
    @GetMapping("/goodsDetails/qna/{goodsId}")
    public List<QNA> findQnaByGoodsId(@PathVariable Long goodsId){

        return qnaService.findQnaByGoodsId(goodsId);
    }

    // Qna 댓글 정보 컨트롤러
    @GetMapping("/goodsDetails/qnaReply/{goodsId}")
    public List<QnaReply> findQnaReplyByGoodsId(@PathVariable Long goodsId){

        return qnaService.findQnaReplyByGoodsId(goodsId);
    }

    // Qna 찾기 컨트롤러
    @GetMapping("/qna/{qnaNo}")
    public QNA findQnaByQnaNo(@PathVariable int qnaNo){

        return qnaService.findQnaByQnaNo(qnaNo);
    }

    // 문의 댓글 생성 컨트롤러
    @PostMapping("/goodsDetails/reply")
    public ResponseEntity<QnaReply> createQnaReply(@ModelAttribute QnaReplyDTO qnaReplyDTO){

        QnaReply newReply = qnaService.createQnaReply(qnaReplyDTO);

        System.out.println(ResponseEntity.status(HttpStatus.CREATED).body(newReply));

        return ResponseEntity.status(HttpStatus.CREATED).body(newReply);
    }

    // 문의 생성 컨트롤러
    @PostMapping("/goodsDetails/qnaWrite")
    public ResponseEntity<QNA> createQna(@ModelAttribute QnaDTO qnaDTO){

        QNA newQna = qnaService.createQna(qnaDTO);

        System.out.println(ResponseEntity.status(HttpStatus.CREATED).body(newQna));

        return ResponseEntity.status(HttpStatus.CREATED).body(newQna);
    }
}
