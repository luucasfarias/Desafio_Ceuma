package com.ceuma.api.security.util;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class GeneratedPassword {

	public static void main(String[] args) {
		BCryptPasswordEncoder password = new BCryptPasswordEncoder();
		System.out.println(password.encode("QUalquer senha aqui, isso é apenas teste"));
	}
}
