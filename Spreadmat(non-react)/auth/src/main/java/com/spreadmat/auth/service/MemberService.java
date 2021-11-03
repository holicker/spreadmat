package com.spreadmat.auth.service;

import com.spreadmat.auth.domain.Member;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

public interface MemberService {

    Member save(Member member);

    Page<Member> findAll(Pageable pageable);

    Optional<Member> findOneById(String id);

    Optional<Member> findOneByEmail(String email);

    void delete(String Id);

    Member createMember(final Member member);

}
