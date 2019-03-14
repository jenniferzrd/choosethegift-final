package com.cyg.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cyg.dao.ProjectRepo;
import com.cyg.models.Project;

@Service
public class ProjectServiceImpl implements ProjectService {
	
	@Autowired
	private ProjectRepo projectRepository;
	
	@Override
	public List<Project> findAll() {
		return this.projectRepository.findAll();
	}
	
	@Override
	public void deleteProject(Long id) {
		this.projectRepository.deleteById(id);
	}
	
	@Override
	public Project save(Project project) {
	return this.projectRepository.save(project);
	}
}
