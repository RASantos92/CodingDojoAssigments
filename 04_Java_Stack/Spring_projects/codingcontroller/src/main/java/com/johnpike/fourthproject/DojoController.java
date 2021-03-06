package com.johnpike.fourthproject;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DojoController {
	@RequestMapping("/m/{var}")
	public String dojo(@PathVariable("var") String var) {
		return "The " + var + " is awesome!";
	}

	@RequestMapping("/m/{var}-{var1}")
	public String location(@PathVariable("var") String var, @PathVariable("var1") String var1) {
		return var + " " + var1 + " is located in Southern California.";
	}

	@RequestMapping("/m/burbank")
	public String location1(@PathVariable("var") String var, @PathVariable("var1") String var1) {
		return var + " " + var1 + " is the headquarters.";
	}

	public String location2(@PathVariable("var") String var, @PathVariable("var1") String var1) {
		return var + " " + " is the best location!";
	}
}
