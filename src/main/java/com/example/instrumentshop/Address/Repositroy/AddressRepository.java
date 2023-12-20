package com.example.instrumentshop.Address.Repositroy;

import com.example.instrumentshop.Address.Entity.Address;
import com.example.instrumentshop.Users.Entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {

    // User 엔티티를 이용한 조회 메서드
    List<Address> findByUsers(Users user);

    boolean existsByUsersAndIsUse(Users user, boolean isUse);

}
