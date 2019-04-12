package com.ceuma.api.config.property;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties("ceumapi")
public class ApiProperty {
	
	private String allowedOrigin = "http://localhost:8000";

	private Security security = new Security();
	
	
	public String getAllowedOrigin() {
		return allowedOrigin;
	}

	public void setAllowedOrigin(String allowedOrigin) {
		this.allowedOrigin = allowedOrigin;
	}

	public Security getSecurity() {
		return security;
	}

	public static class Security {
		private boolean enableHttps;

		public boolean isEnableHttps() {
			return enableHttps;
		}

		public void setEnableHttps(boolean enableHttps) {
			this.enableHttps = enableHttps;
		}

	}
}
