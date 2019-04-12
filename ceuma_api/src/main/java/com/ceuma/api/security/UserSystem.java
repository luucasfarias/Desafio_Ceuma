package com.ceuma.api.security;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;

import org.springframework.security.core.userdetails.User;

public class UserSystem extends User {

	private static final long serialVersionUID = 1L;

	private com.ceuma.api.model.User usuario;

	public UserSystem(com.ceuma.api.model.User usuario, Collection<? extends GrantedAuthority> authorities) {
		super(usuario.getEmail(), usuario.getPasswordUser(), authorities);
		this.usuario = usuario;

	}
	
	public com.ceuma.api.model.User getUsuario() {
		return usuario;
	}

}
