package com.cyg.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cyg.models.Project;

public interface ProjectRepo extends JpaRepository<Project, Long> {

}
