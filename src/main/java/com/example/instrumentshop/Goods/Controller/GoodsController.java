package com.example.instrumentshop.Goods.Controller;

import com.example.instrumentshop.Goods.DTO.GoodsDTO;
import com.example.instrumentshop.Goods.Entity.*;
import com.example.instrumentshop.Goods.Service.GoodsService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping
public class GoodsController {

    private final GoodsService goodsService;

    // 상품 상세 정보 컨트롤러
    @GetMapping("/goodsDetails/goods/{goodsId}")
    public Goods findByGoodsId(@PathVariable Long goodsId){

        return goodsService.findGoodsByGoodsId(goodsId);
    }

    // 리뷰 정보 컨트롤러
    @GetMapping("/goodsDetails/review/{goodsId}")
    public List<Review> findReviewByGoodsId(@PathVariable Long goodsId){

        return goodsService.findReviewByGoodsId(goodsId);
    }

    // Qna 정보 컨트롤러
    @GetMapping("/goodsDetail/qna/{goodsId}")
    public List<QNA> findQnaByGoodsId(@PathVariable Long goodsId){

        return goodsService.findQnaByGoodsId(goodsId);
    }

    // Qna 댓글 정보 컨트롤러
    @GetMapping("/goodsDetail/qnaReply/{goodsId}")
    public List<QnaReply> findQnaReplyByGoodsId(@PathVariable Long goodsId){

        return goodsService.findQnaReplyByGoodsId(goodsId);
    }

    // 부모 카테고리 밑 서브 카테고리 상품 개수 카운트 컨트롤러
    @GetMapping("/goodsList/cate/{category}")
    public List<Long> findChildCategory(@PathVariable String category){
        List<Category> childCategory = goodsService.findChildCategoryByParentCategory(category);
        Category child = childCategory.get(0);
        List<Long> childCount = new ArrayList<>();
        childCount.add(goodsService.getCountOfGoodsByChildCategory(child.getChildCategory1()));
        childCount.add(goodsService.getCountOfGoodsByChildCategory(child.getChildCategory2()));
        childCount.add(goodsService.getCountOfGoodsByChildCategory(child.getChildCategory3()));
        childCount.add(goodsService.getCountOfGoodsByChildCategory(child.getChildCategory4()));
        childCount.add(goodsService.getCountOfGoodsByChildCategory(child.getChildCategory5()));
        childCount.add(goodsService.getCountOfGoodsByChildCategory(child.getChildCategory6()));

        return childCount;
    }

    // 부모 카테고리 요청 컨트롤러
    @GetMapping("/goodsList/{categoryId}")
    public List<Goods> findByParentCategory(@PathVariable String categoryId){

        return goodsService.getGoodsByParentCategory(categoryId);
    }

    // 서브 카테고리 상품 요청 컨트롤러
    @GetMapping("/goodsList/sub/{subCategoryId}")
    public List<Goods> findByChildCategory(@PathVariable String subCategoryId){

        return goodsService.findByChildCategory(subCategoryId);
    }

    // 검색 결과 요청 컨트롤러
    @GetMapping("/goodsList/query/{query}")
    public List<Goods> findByKeyword(@PathVariable String query){

        return goodsService.findByQuery(query);
    }

    // 리뷰 데이터 요청 컨트롤러
    @GetMapping("/goodsList/review/{goodsId}")
    public List<Double> findGoodsReviewInfo(@PathVariable Long goodsId){
        List<Double> reviewInfo = new ArrayList<>();
        double avgScore = goodsService.getGoodsReviewAvgScoreByGoodsId(goodsId);
        double reviewCount = goodsService.getGoodsReviewCountByGoodsId(goodsId).doubleValue();
        reviewInfo.add(avgScore);
        reviewInfo.add(reviewCount);
        reviewInfo.add(goodsId.doubleValue());

        return reviewInfo;
    }

    // openMarket 상품 생성 컨트롤러
    @PostMapping("/openMarket/goodsControl")
    public ResponseEntity<Goods> createGoods(@ModelAttribute GoodsDTO requestDTO){

        Goods newGoods = goodsService.createGoods(requestDTO);

        System.out.println(ResponseEntity.status(HttpStatus.CREATED).body(newGoods));

        return ResponseEntity.status(HttpStatus.CREATED).body(newGoods);
    }

}
