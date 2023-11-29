package com.example.instrumentshop.Goods.controller;

import com.example.instrumentshop.Goods.DTO.GoodsDTO;
import com.example.instrumentshop.Goods.Entity.Category;
import com.example.instrumentshop.Goods.Entity.Goods;
import com.example.instrumentshop.Goods.service.GoodsService;
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

    @PostMapping("/openMarket/goodsControl")
    public ResponseEntity<Goods> createGoods(@ModelAttribute GoodsDTO requestDTO){

        Goods newGoods = goodsService.createGoods(requestDTO);

        System.out.println(ResponseEntity.status(HttpStatus.CREATED).body(newGoods));

        return ResponseEntity.status(HttpStatus.CREATED).body(newGoods);
    }

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

    @GetMapping("/goodsList/{categoryId}")
    public List<Goods> findByParentCategory(@PathVariable String categoryId){

        return goodsService.getGoodsByParentCategory(categoryId);
    }

    @GetMapping("/goodsList/sub/{subCategoryId}")
    public List<Goods> findByChildCategory(@PathVariable String subCategoryId){

        return goodsService.findByChildCategory(subCategoryId);
    }

    @GetMapping("/goodsList/query/{query}")
    public List<Goods> findByKeyword(@PathVariable String query){

        return goodsService.findByQuery(query);
    }

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

}
