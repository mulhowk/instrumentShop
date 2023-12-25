package com.example.instrumentshop.Address.Service;

import com.example.instrumentshop.Address.DTO.AddressDTO;
import com.example.instrumentshop.Address.DTO.AddressResponseDTO;
import com.example.instrumentshop.Address.Entity.Address;
import com.example.instrumentshop.Address.Repositroy.AddressRepository;
import com.example.instrumentshop.Users.Entity.Users;
import com.example.instrumentshop.Users.Repositroy.UsersRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AddressService {

    private final AddressRepository addressRepository;
    private final UsersRepository usersRepository;

    // 특정 주소를 기본 주소로 설정하는 메서드
    @Transactional
    public void setPrimaryAddress(Long memberId, Long addressId) {
        Users user = usersRepository.findById(memberId)
                .orElseThrow(() -> new EntityNotFoundException("User not found"));

        List<Address> addresses = addressRepository.findByUsers(user);

        for (Address address : addresses) {
            if (address.getADDRESSID().equals(addressId)) {
                address.setUse(true);
            } else {
                address.setUse(false);
            }
        }

        addressRepository.saveAll(addresses);
    }
    @Transactional
    public List<AddressResponseDTO> getAddressesByUser(Long memberId) {
        Users users = usersRepository.findById(memberId)
                .orElseThrow(() -> new EntityNotFoundException("User not found"));

        return addressRepository.findByUsers(users).stream()
                .map(address -> AddressResponseDTO.builder()
                        .addressId(address.getADDRESSID())
                        .addressReceiver(address.getAddressReceiver())
                        .addressNickname(address.getAddressNickname())
                        .memberPhone(address.getUsers().getMemberPhone()) // 이 부분은 address 객체 구조에 따라 다를 수 있습니다.
                        .addressValue(address.getAddressValue())
                        .addressPostnumber(address.getAddressPostnumber())
                        .isUse(address.isUse())
                        .build())
                .collect(Collectors.toList());
    }

    @Transactional
    public void saveAddress(AddressDTO addressDTO) {
        // 먼저, User 엔티티를 찾는다
        Users users = usersRepository.findByMemberEmail(addressDTO.getMemberEmail())
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

    @Transactional
    public void updateAddressUse(String userEmail, Long newAddressId) {
        // 기존에 isUse가 true인 주소 찾기
        Users user = usersRepository.findByMemberEmail(userEmail)
                .orElseThrow(() -> new EntityNotFoundException("User not found"));

        List<Address> existingAddresses = addressRepository.findByUsersAndIsUse(user, true);
        for (Address address : existingAddresses) {
            address.setUse(false); // 기존 주소의 isUse를 false로 변경
            addressRepository.save(address); // 변경 사항 저장
        }

        // 새 주소의 isUse를 true로 설정
        Address newAddress = addressRepository.findById(newAddressId)
                .orElseThrow(() -> new EntityNotFoundException("Address not found"));
        newAddress.setUse(true);
        addressRepository.save(newAddress); // 변경 사항 저장
    }

}
