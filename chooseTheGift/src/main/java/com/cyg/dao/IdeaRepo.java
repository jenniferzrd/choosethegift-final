package com.cyg.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cyg.models.Idea;


public interface IdeaRepo extends JpaRepository<Idea, Long> {

	@SuppressWarnings("unchecked")
	Idea save(Idea idea);
}
