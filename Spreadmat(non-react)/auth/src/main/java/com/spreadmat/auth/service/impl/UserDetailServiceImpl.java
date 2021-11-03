package com.spreadmat.auth.service.impl;

import com.spreadmat.auth.domain.Member;
import com.spreadmat.auth.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserDetailServiceImpl implements UserDetailsService {

    @Autowired private MemberRepository memberRepository;

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        Member member = memberRepository.findByEmail(s).get();
        List<GrantedAuthority> authorities = new ArrayList<>();
        GrantedAuthority role = new SimpleGrantedAuthority("ROLE_USER");
        authorities.add(role);

        return new User(member.getEmail(), member.getPassword(), authorities);

    }
}
