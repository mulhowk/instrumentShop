package com.example.instrumentshop.Address.Service;

import com.example.instrumentshop.Address.DTO.AddressDTO;
import com.example.instrumentshop.Address.Entity.Address;
import com.example.instrumentshop.Address.Repositroy.AddressRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddressService {

    private final AddressRepository addressRepository;

    @Autowired
    public AddressService(AddressRepository addressRepository) {
        this.addressRepository = addressRepository;
    }

    public List<Address> getAddressesByMEMBERUID(Long MEMBERUID) {
        return addressRepository.findByMEMBERUID(MEMBERUID);
    }

    @Transactional
    public Address saveAddress(AddressDTO addressDTO) {
        Address address = Address.builder()
                .MEMBERUID(addressDTO.getMemberUid())
                .addressReceiver(addressDTO.getAddressReceiver())
                .addressNickname(addressDTO.getAddressNickname())
                .memberPhone(addressDTO.getMemberPhone())
                .addressValue(addressDTO.getAddressValue())
                .addressPostnumber(addressDTO.getAddressPostnumber())
                .build();

        return addressRepository.save(address);
    }

}
