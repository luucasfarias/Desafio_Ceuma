package com.ceuma.api.model;

import javax.persistence.Embeddable;

@Embeddable
public class Address {

	private String public_place;
	private String house_number;
	private String complement;
	private String neighborhood;
	private String cep;
	private String city;
	private String state;

	public String getPublic_place() {
		return public_place;
	}

	public void setPublic_place(String public_place) {
		this.public_place = public_place;
	}

	public String getHouse_number() {
		return house_number;
	}

	public void setHouse_number(String house_number) {
		this.house_number = house_number;
	}

	public String getComplement() {
		return complement;
	}

	public void setComplement(String complement) {
		this.complement = complement;
	}

	public String getNeighborhood() {
		return neighborhood;
	}

	public void setNeighborhood(String neighborhood) {
		this.neighborhood = neighborhood;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

}
