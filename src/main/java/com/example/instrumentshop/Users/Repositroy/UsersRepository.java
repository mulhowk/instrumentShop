package com.example.instrumentshop.Users.Repositroy;

import com.example.instrumentshop.Users.Entity.Role;
import com.example.instrumentshop.Users.Entity.SocialType;
import com.example.instrumentshop.Users.Entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UsersRepository extends JpaRepository<Users, Long> {

    Optional<Users> findByMemberEmail(String memberEmail);
    /**
     * 리프레시 토큰으로 유저를 찾기 위한 메소드
     * @param refreshToken
     * @return
     */
    Optional<Users> findByRefreshToken(String refreshToken);

    /**
     * 소셜 로그인한 유저를 찾기 위한 메소드
     * @param socialType
     * @param socialId
     * @return
     */
    Optional<Users> findBySocialTypeAndSocialId(SocialType socialType, String socialId);

    Optional<Users> findByMemberName(String memberName);

    // USER 역할을 가진 사용자 조회
    List<Users> findBySocialRole(String socialRole);

    Users findByMEMBERUID(Long MEMBERUID);

    @Modifying
    @Query("UPDATE Users u SET u.memberReserves = u.memberReserves + :reserves WHERE u.MEMBERUID = :MEMBERUID")
    int updateMemberReserves(@Param("MEMBERUID") Long MEMBERUID, @Param("reserves") int reserves);

    @Query("select u.memberReserves from Users u where u.MEMBERUID = :MEMBERUID")
    int findMemberReserves(Long MEMBERUID);

    @Query("SELECT u FROM Users u JOIN u.roles a WHERE a.name = :name")
    List<Users> findByAuthorityName(@Param("name") String name);
}
