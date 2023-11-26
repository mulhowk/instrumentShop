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
@RequestMapping(consumes = "multipart/form-data")
public class GoodsController {

    private final GoodsService goodsService;

    @PostMapping("/openMarket/goodsControl")
    public ResponseEntity<Goods> createGoods(@ModelAttribute GoodsDTO requestDTO){

        Goods newGoods = goodsService.createGoods(requestDTO);

        System.out.println(ResponseEntity.status(HttpStatus.CREATED).body(newGoods));

        return ResponseEntity.status(HttpStatus.CREATED).body(newGoods);
    }

    @GetMapping("/goodsList/category/{category}")
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

}
