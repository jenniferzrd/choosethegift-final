package com.cyg.service;

import java.util.List;

import com.cyg.models.Idea;

public interface IdeaService {

	List<Idea> findAll();

	Idea save(Idea idea);
	
	void deleteIdea(Long id);
	
}
