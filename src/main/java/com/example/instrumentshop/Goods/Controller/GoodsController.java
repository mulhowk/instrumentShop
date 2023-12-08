package com.example.instrumentshop.Goods.Controller;

import com.example.instrumentshop.Goods.DTO.*;
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

    // 상품 전체 조회 컨트롤러
    @GetMapping("/goods")
    public List<Goods> findAllGoods(){

        return goodsService.getAllGoods();
    }

    // 상품 상세 정보 컨트롤러
    @GetMapping("/goodsDetails/goods/{goodsId}")
    public Goods findByGoodsId(@PathVariable Long goodsId){

        return goodsService.findGoodsByGoodsId(goodsId);
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

    // openMarket 상품 생성 컨트롤러
    @PostMapping("/openMarket/goodsControl")
    public ResponseEntity<Goods> createGoods(@ModelAttribute GoodsDTO requestDTO){

        Goods newGoods = goodsService.createGoods(requestDTO);

        System.out.println(ResponseEntity.status(HttpStatus.CREATED).body(newGoods));

        return ResponseEntity.status(HttpStatus.CREATED).body(newGoods);
    }

    // openMarket 상품 수정 컨트롤러
    @PostMapping("/openMarket/goodsControl/update")
    public ResponseEntity<Goods> updateGoods(@ModelAttribute GoodsUpdateDTO goodsUpdateDTO){

        Goods updateGoods = goodsService.updateGoods(goodsUpdateDTO);

        System.out.println(ResponseEntity.status(HttpStatus.OK).body(updateGoods));

        return ResponseEntity.status(HttpStatus.OK).body(updateGoods);
    }

    // openMarket 상품 요청 컨트롤러
    @GetMapping("/goodsList/openMarket/{brand}")
    public List<Goods> findGoodsByGoodsBrand(@PathVariable String brand){

        return goodsService.findGoodsByGoodsBrand(brand);
    }

    // openMarket 상품 삭제 컨트롤러
    @DeleteMapping("/openMarket/delete/{goodsId}")
    public ResponseEntity<String> deleteByGoodsId(@PathVariable Long goodsId){

        try {
            goodsService.deleteGoods(goodsId);
            return new ResponseEntity<>("Goods deleted successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to delete goods", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
