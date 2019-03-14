package com.cyg.service;

import java.util.List;

import com.cyg.models.Project;

public interface ProjectService {

	List <Project> findAll();
	
	void deleteProject(Long id);
	
	Project save (Project project);
}
