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

import com.cyg.models.Project;
import com.cyg.service.ProjectService;
import com.cyg.util.RestResponse;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@CrossOrigin(origins="http://localhost:4200", allowedHeaders="*")
public class ProjectController {

	@Autowired
	protected ProjectService projectService;
	protected ObjectMapper mapper;
	
	@RequestMapping(value = "/getProjects", method = RequestMethod.GET)
	public List<Project> getProjects() {
		return this.projectService.findAll();
	}
	
	@RequestMapping(value = "/deleteProject", method = RequestMethod.POST)
	public void deleteProject(@RequestBody String deleteJson) throws Exception {
		this.mapper = new ObjectMapper();

		Project project = this.mapper.readValue(deleteJson, Project.class);

		if (project.getId() == null) {
			throw new Exception("Id null");
		}
		this.projectService.deleteProject(project.getId());
	}
	
	@RequestMapping(value = "/saveOrUpdateProject", method = RequestMethod.POST)
	public RestResponse saveOrUpdate(@RequestBody String projectJson) 
	throws JsonParseException, JsonMappingException, IOException {
		
		this.mapper = new ObjectMapper();
		
		Project project = this.mapper.readValue(projectJson, Project.class);
		
		if (!this.validate(project)) {
			return new RestResponse(HttpStatus.NOT_ACCEPTABLE.value(),
					"Veuillez remplir les champs");
		}
		this.projectService.save(project);

		return new RestResponse(HttpStatus.OK.value(), "Succès");
	}
	
	private boolean validate(Project project) {
		boolean isValid = true;

		if (StringUtils.trimToNull(project.getTitle()) == null) {
			isValid = false;
		}

		return isValid;
	}

}
