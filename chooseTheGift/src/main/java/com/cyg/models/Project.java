package com.cyg.models;


import javax.persistence.Access;
import javax.persistence.AccessType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="project")
@Access(AccessType.FIELD)

public class Project extends IdEntity {
	
	@Column(name = "title",length = 45)
	private String title;
	@Column(name = "totalmoney")
	private int totalMoney;
	@Column(name = "comment")
	private String comment;
	
	public Project() {}
	
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	
	public int getTotalmoney() {
		return totalMoney;
	}
	public void setTotalmoney(int totalMoney) {
		this.totalMoney = totalMoney;
	}
	
	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public Project(String title, int totalMoney, String comment) {
	this.title = title;
	this.totalMoney = totalMoney;
	this.comment = comment;
}
	
	public String toString(){
		String info = String.format("Project %s : %s", this.getId(), this.title);
		return info;
}

}
