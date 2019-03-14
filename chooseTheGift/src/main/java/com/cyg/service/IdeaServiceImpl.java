package com.cyg.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cyg.dao.IdeaRepo;
import com.cyg.models.Idea;


@Service
public class IdeaServiceImpl implements IdeaService {

	@Autowired
	private IdeaRepo ideaRepository;

	@Override
	public List<Idea> findAll() {
		return this.ideaRepository.findAll();
	}

	@Override
	public Idea save(Idea idea) {
	return this.ideaRepository.save(idea);
	}
	
	@Override
	public void deleteIdea(Long id) {
		this.ideaRepository.deleteById(id);
	}

}
