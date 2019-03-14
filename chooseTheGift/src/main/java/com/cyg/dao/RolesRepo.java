package com.cyg.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cyg.models.Rolename;
import com.cyg.models.Roles;

public interface RolesRepo extends JpaRepository<Roles, Long> {
	    Optional<Roles> findByName(Rolename roleName);

}
