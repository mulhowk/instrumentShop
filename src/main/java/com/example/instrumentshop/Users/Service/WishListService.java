package com.example.instrumentshop.Users.Service;


import com.example.instrumentshop.Users.DTO.WishListDTO;
import com.example.instrumentshop.Users.Entity.WishList;
import com.example.instrumentshop.Users.Repositroy.WishListRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Transactional
@Service
@RequiredArgsConstructor
public class WishListService {

    private final WishListRepository wishListRepository;

    public List<WishList> findWishListByMEMBERUID(Long MEMBERUID){

        return wishListRepository.findByUsers_MEMBERUID(MEMBERUID);
    }

    public WishList createWishList(WishListDTO wishListDTO){

        WishList newWishList = WishList.builder()
                .goods(wishListDTO.getGoods())
                .users(wishListDTO.getUsers())
                .build();

        wishListRepository.save(newWishList);

        return wishListRepository.save(newWishList);
    }

    public void deleteWishList(Long wishNo){

        wishListRepository.deleteByWishNo(wishNo);
    }
}
