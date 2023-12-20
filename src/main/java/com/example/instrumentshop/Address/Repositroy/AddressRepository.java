package com.example.instrumentshop.Address.Repositroy;

import com.example.instrumentshop.Address.Entity.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {

    // 특정 memberUid에 해당하는 모든 주소를 조회하는 메서드
    List<Address> findByMEMBERUID(Long MEMBERUID);

}
