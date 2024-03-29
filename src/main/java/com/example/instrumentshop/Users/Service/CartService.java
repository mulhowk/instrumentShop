package com.example.instrumentshop.Users.Service;

import com.example.instrumentshop.Users.DTO.CartDTO;
import com.example.instrumentshop.Users.DTO.CartUpdateDTO;
import com.example.instrumentshop.Users.Entity.Cart;
import com.example.instrumentshop.Users.Repositroy.CartRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Transactional
@Service
@RequiredArgsConstructor
public class CartService {

    private final CartRepository cartRepository;

    public List<Cart> findAllCart(){

        return cartRepository.findAll();
    }

    public List<Cart> findCartByMemberId(Long MEMBERUID){

        return cartRepository.findByUsers_MEMBERUID(MEMBERUID);
    }

    public Cart createCart(CartDTO cartDTO){

        Cart newCart = Cart.builder()
                .goods(cartDTO.getGoods())
                .goodsPrice(cartDTO.getGoodsPrice())
                .goodsQuantity(cartDTO.getGoodsQuantity())
                .goodsName(cartDTO.getGoodsName())
                .users(cartDTO.getUsers())
                .goodsImg(cartDTO.getGoodsImg())
                .goodsOption(cartDTO.getGoodsOption())
                .build();

        cartRepository.save(newCart);

        return cartRepository.save(newCart);
    }

    public Cart updatedCart(Cart cart){

        Cart updateCart = Cart.builder()
                .cartNo(cart.getCartNo())
                .goods(cart.getGoods())
                .goodsPrice(cart.getGoodsPrice())
                .goodsQuantity(cart.getGoodsQuantity())
                .goodsName(cart.getGoodsName())
                .users(cart.getUsers())
                .goodsImg(cart.getGoodsImg())
                .goodsOption(cart.getGoodsOption())
                .build();

        cartRepository.save(updateCart);

        return cartRepository.save(updateCart);

    }

    public Integer getSumByMEMBERUID(Long MEMBERUID){

        return cartRepository.countByUsers_MEMBERUID(MEMBERUID);
    }

    public void deleteCartByCartNo(Long cartNo){

        cartRepository.deleteByCartNo(cartNo);
    }

}
