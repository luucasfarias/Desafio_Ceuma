package com.ceuma.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import com.ceuma.api.config.property.ApiProperty;

@SpringBootApplication
@EnableConfigurationProperties(ApiProperty.class)
public class CeumaApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(CeumaApiApplication.class, args);
	}

}
