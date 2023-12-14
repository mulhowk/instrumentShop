package com.example.instrumentshop.Users.Controller;


import com.example.instrumentshop.Users.DTO.WishListDTO;
import com.example.instrumentshop.Users.Entity.WishList;
import com.example.instrumentshop.Users.Service.WishListService;
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
public class WishListController {

    private final WishListService wishListService;

    @GetMapping("/wishList/{MEMBERUID}")
    public List<WishList> findByMEMBERUID(@PathVariable Long MEMBERUID){

        return wishListService.findWishListByMEMBERUID(MEMBERUID);
    }

    @PostMapping("/wishList/add")
    public ResponseEntity<WishList> createWishList(@ModelAttribute WishListDTO wishListDTO){

        WishList newWishList = wishListService.createWishList(wishListDTO);
        System.out.println(ResponseEntity.status(HttpStatus.CREATED).body(newWishList));

        return ResponseEntity.status(HttpStatus.CREATED).body(newWishList);
    }

    @DeleteMapping("/wishList/delete/{wishNo}")
    public ResponseEntity<String> deleteWishList(@PathVariable Long wishNo){

        try {
            wishListService.deleteWishList(wishNo);
            return new ResponseEntity<>("WishList deleted successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to delete wishList", HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

}
