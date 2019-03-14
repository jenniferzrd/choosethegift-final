package com.cyg.controller;

import java.io.IOException;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cyg.models.Idea;
import com.cyg.service.IdeaService;
import com.cyg.util.RestResponse;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@CrossOrigin(origins="http://localhost:4200", allowedHeaders="*")
public class IdeaController {
	
	@Autowired
	protected IdeaService ideaService;
	protected ObjectMapper mapper;
	
	@RequestMapping(value = "/getIdeas", method = RequestMethod.GET)
	public List<Idea> getIdeas() {
		return this.ideaService.findAll();
	}
	
	@RequestMapping(value = "/saveOrUpdateIdea", method = RequestMethod.POST)
	public RestResponse saveOrUpdate(@RequestBody String ideaJson) 
	throws JsonParseException, JsonMappingException, IOException {
		
		this.mapper = new ObjectMapper();
		
		Idea idea = this.mapper.readValue(ideaJson, Idea.class);
		
		if (!this.validate(idea)) {
			return new RestResponse(HttpStatus.NOT_ACCEPTABLE.value(),
					"Veuillez remplir les champs");
		}
		this.ideaService.save(idea);

		return new RestResponse(HttpStatus.OK.value(), "Succès");
	}

	@RequestMapping(value = "/deleteIdea", method = RequestMethod.POST)
	public void deleteIdea(@RequestBody String ideaJson) throws Exception {
		this.mapper = new ObjectMapper();

		Idea idea = this.mapper.readValue(ideaJson, Idea.class);

		if (idea.getId() == null) {
			throw new Exception("Id null");
		}
		this.ideaService.deleteIdea(idea.getId());
	}
	
	private boolean validate(Idea idea) {
		boolean isValid = true;

//		if (StringUtils.trimToNull(idea.getTitle()) == null) {
//			isValid = false;
//		}

		return isValid;
	}

}
