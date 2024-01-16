package com.example.instrumentshop.Users.Controller;

import com.example.instrumentshop.Users.DTO.CartDTO;
import com.example.instrumentshop.Users.Entity.Cart;
import com.example.instrumentshop.Users.Service.CartService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping
public class CartController {

    private final CartService cartService;

    @GetMapping("/cart")
    public List<Cart> findAllCart(){

        return cartService.findAllCart();
    }

    @GetMapping("/cart/{MEMBERUID}")
    public List<Cart> findCartByMEMBERUID(@PathVariable Long MEMBERUID){

        return cartService.findCartByMemberId(MEMBERUID);
    }

    @PostMapping("/cart/cartIn")
    public ResponseEntity<Cart> createCart(CartDTO cartDTO){

        List<Cart> cartList = cartService.findCartByMemberId(cartDTO.getUsers().getMEMBERUID());

        boolean eq = false;
        Cart eqCart = null;

        for(int i = 0; i < cartList.size(); i++){
            eq = Objects.equals(cartList.get(i).getGoodsName(), cartDTO.getGoodsName())
                    && Objects.equals(cartList.get(i).getGoodsOption(), cartDTO.getGoodsOption());
            if(eq){
                eqCart = cartList.get(i);
                break;
            }
        }

        if(eq){
            eqCart.setGoodsQuantity(eqCart.getGoodsQuantity() + cartDTO.getGoodsQuantity());

            Cart updateCart = cartService.updatedCart(eqCart);
            System.out.println(ResponseEntity.status(HttpStatus.CREATED).body(updateCart));

            return ResponseEntity.status(HttpStatus.CREATED).body(updateCart);

        } else {
            Cart newCart = cartService.createCart(cartDTO);
            System.out.println(ResponseEntity.status(HttpStatus.CREATED).body(newCart));

            return ResponseEntity.status(HttpStatus.CREATED).body(newCart);
        }

    }

    @GetMapping("/cart/sum/{MEMBERUID}")
    public Integer getSumByMEMBERUID(@PathVariable Long MEMBERUID){

        return cartService.getSumByMEMBERUID(MEMBERUID);
    }

    @DeleteMapping("/cart/delete/{cartNo}")
    public ResponseEntity<String> deleteCart(@PathVariable Long cartNo){

        try {
            cartService.deleteCartByCartNo(cartNo);
            return new ResponseEntity<>("Cart deleted successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to delete cart", HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

}
