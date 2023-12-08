package com.example.instrumentshop.Goods.Controller;

import com.example.instrumentshop.Goods.DTO.ReviewDTO;
import com.example.instrumentshop.Goods.Entity.Review;
import com.example.instrumentshop.Goods.Service.ReviewService;
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
public class ReviewController {

    private final ReviewService reviewService;

    // 리뷰 전체 조회 컨트롤러
    @GetMapping("/review")
    public List<Review> findAllReview(){

        return reviewService.getAllReviews();
    }

    // 리뷰 정보 컨트롤러
    @GetMapping("/goodsDetails/review/{goodsId}")
    public List<Review> findReviewByGoodsId(@PathVariable Long goodsId){

        return reviewService.findReviewByGoodsId(goodsId);
    }

    // 리뷰 데이터 요청 컨트롤러
    @GetMapping("/goodsList/review/{goodsId}")
    public List<Double> findGoodsReviewInfo(@PathVariable Long goodsId){
        List<Double> reviewInfo = new ArrayList<>();
        Double avgScore = reviewService.getGoodsReviewAvgScoreByGoodsId(goodsId);
        Double reviewCount = reviewService.getGoodsReviewCountByGoodsId(goodsId).doubleValue();
        reviewInfo.add(avgScore);
        reviewInfo.add(reviewCount);
        reviewInfo.add(goodsId.doubleValue());

        return reviewInfo;
    }

    // review 생성 컨트롤러
    @PostMapping("/goodsDetails/reviewWrite")
    public ResponseEntity<Review> createReview(@ModelAttribute ReviewDTO reviewDTO){

        Review newReview = reviewService.createReview(reviewDTO);

        System.out.println(ResponseEntity.status(HttpStatus.CREATED).body(newReview));

        return ResponseEntity.status(HttpStatus.CREATED).body(newReview);
    }

}
