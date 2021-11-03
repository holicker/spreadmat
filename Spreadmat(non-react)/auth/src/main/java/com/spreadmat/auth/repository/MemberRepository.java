package com.spreadmat.auth.repository;

import com.spreadmat.auth.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MemberRepository  extends JpaRepository<Member, String> {

    Optional<Member> findByEmail(String email);
    Optional<Member> findByEmailAndPassword(String email, String password);
    boolean existsByEmail(String email);

}
