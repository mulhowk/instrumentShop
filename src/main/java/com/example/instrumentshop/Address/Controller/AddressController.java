package com.example.instrumentshop.Address.Controller;

import com.example.instrumentshop.Address.DTO.AddressDTO;
import com.example.instrumentshop.Address.Entity.Address;
import com.example.instrumentshop.Address.Service.AddressService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/addresses")
@RequiredArgsConstructor
public class AddressController {

    private final AddressService addressService;

    // 특정 memberUid에 해당하는 모든 주소를 조회하는 엔드포인트
    @GetMapping("/{MEMBERUID}")
    public ResponseEntity<List<Address>> getAddressesByMemberUid(@PathVariable Long MEMBERUID) {
        List<Address> addresses = addressService.getAddressesByMEMBERUID(MEMBERUID);
        return ResponseEntity.ok(addresses);
    }

    // 주소를 등록하는 엔드포인트
    @PostMapping("/add")
    public ResponseEntity<Boolean> addAddress(@RequestBody AddressDTO addressDTO) {
        try {
            addressService.saveAddress(addressDTO);
            return new ResponseEntity<>(true, HttpStatus.OK);
        } catch (Exception e) {
            // 로그 기록, 에러 처리 등 필요한 작업 수행
            return new ResponseEntity<>(false, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}