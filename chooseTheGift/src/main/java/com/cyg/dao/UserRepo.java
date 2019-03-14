package com.cyg.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.cyg.models.User;


public interface UserRepo extends JpaRepository<User, Long> {
	
	@SuppressWarnings("unchecked")
	User save(User user);
    Optional<User> findByUsername(String username);
    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);
	
}
