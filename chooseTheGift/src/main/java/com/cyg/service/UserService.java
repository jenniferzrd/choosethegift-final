package com.cyg.service;

import java.util.List;

import com.cyg.models.User;

public interface UserService {

	User save(User user);

	List<User> findAll();

	void deleteUser(Long id);
	
}
