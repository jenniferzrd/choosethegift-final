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

import com.cyg.models.User;
import com.cyg.service.UserService;
import com.cyg.util.RestResponse;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@CrossOrigin(origins="http://localhost:4200", allowedHeaders="*")
public class UserController {

	@Autowired
	protected UserService userService;
	protected ObjectMapper mapper;
	
	@RequestMapping(value = "/saveOrUpdate", method = RequestMethod.POST)
	public RestResponse saveOrUpdate(@RequestBody String userJson) 
	throws JsonParseException, JsonMappingException, IOException {
		
		this.mapper = new ObjectMapper();
		
		User user = this.mapper.readValue(userJson, User.class);
		
		if (!this.validate(user)) {
			return new RestResponse(HttpStatus.NOT_ACCEPTABLE.value(),
					"Veuillez remplir les champs");
		}
		this.userService.save(user);

		return new RestResponse(HttpStatus.OK.value(), "Succès");
	}

	@RequestMapping(value = "/getUsers", method = RequestMethod.GET)
	public List<User> getUsers() {
		return this.userService.findAll();
	}

	@RequestMapping(value = "/deleteUser", method = RequestMethod.POST)
	public void deleteUser(@RequestBody String userJson) throws Exception {
		this.mapper = new ObjectMapper();

		User user = this.mapper.readValue(userJson, User.class);

		if (user.getId() == null) {
			throw new Exception("Id null");
		}
		this.userService.deleteUser(user.getId());
	}

	
	private boolean validate(User user) {
		boolean isValid = true;

		if (StringUtils.trimToNull(user.getUsername()) == null) {
			isValid = false;
		}

		if (StringUtils.trimToNull(user.getUsername()) == null) {
			isValid = false;
		}

		return isValid;
	}
	
}
