package com.example.instrumentshop.Address.Service;

import com.example.instrumentshop.Address.DTO.AddressDTO;
import com.example.instrumentshop.Address.Entity.Address;
import com.example.instrumentshop.Address.Repositroy.AddressRepository;
import com.example.instrumentshop.Users.Entity.Users;
import com.example.instrumentshop.Users.Repositroy.UsersRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AddressService {

    private final AddressRepository addressRepository;
    private final UsersRepository usersRepository;

    public List<Address> getAddressesByUser(Long memberId) {
        Users users = usersRepository.findById(memberId)
                .orElseThrow(() -> new EntityNotFoundException("User not found"));
        return addressRepository.findByUsers(users);
    }

    @Transactional
    public void saveAddress(AddressDTO addressDTO) {
        // 먼저, User 엔티티를 찾는다
        Users users = usersRepository.findById(addressDTO.getMemberUid())
                .orElseThrow(() -> new EntityNotFoundException("User not found"));

        // 동일한 User에 대한 'Y'로 설정된 주소가 있는지 확인한다
        boolean isPrimaryExists = addressRepository.existsByUsersAndIsUse(users, true);

        // Address 객체를 생성하고, User 엔티티를 연결한다
        Address address = Address.builder()
                .users(users) // 이 부분이 변경됨
                .addressReceiver(addressDTO.getAddressReceiver())
                .addressNickname(addressDTO.getAddressNickname())
                .memberPhone(addressDTO.getMemberPhone())
                .addressValue(addressDTO.getAddressValue())
                .addressPostnumber(addressDTO.getAddressPostnumber())
                .isUse(!isPrimaryExists)
                .build();

        addressRepository.save(address);
    }

}
