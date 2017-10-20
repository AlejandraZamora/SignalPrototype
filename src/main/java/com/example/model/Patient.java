package 
		com.example.model;
	    
	    import javax.persistence.*;
	    import java.util.Calendar;
	    @SuppressWarnings("all")
	    @Entity
	    @Table(name = "patients", schema = "application")
public class Patient {
	public Patient(){}
	@Id
	@Column(name = "id")
	private Long id;
		
	public Long getId() {
	return id;
	}
	
	public void setId(Long id) {
	this.id = id;
	}
@Column(name = "name")
private String name;

public String getName() {
return name;
}

public void setName(String name) {
this.name = name;
}
@Column(name = "password")
private String password;

public String getPassword() {
return password;
}

public void setPassword(String password) {
this.password = password;
}
@Column(name = "role")
private String role;

public String getRole() {
return role;
}

public void setRole(String role) {
this.role = role;
}
@Column(name = "lastName")
private String lastName;

public String getLastName() {
return lastName;
}

public void setLastName(String lastName) {
this.lastName = lastName;
}
@OneToMany(cascade = CascadeType.ALL)
			@JoinColumns(
					{
							@JoinColumn(name = "feedback", referencedColumnName = "id", nullable = false),
					}
			)
			private java.util.List<com.example.model.Feedback> feedbacks =new java.util.ArrayList<com.example.model.Feedback>();
			public java.util.List<com.example.model.Feedback> getFeedbacks() {
			return feedbacks;
			}
			public void setFeedbacks(java.util.ArrayList<com.example.model.Feedback> feedbacks) {
			this.feedbacks = feedbacks;
			}
@Embedded
private com.example.model.Address address;

public com.example.model.Address getAddress() {
return address;
}

public void setAddress(com.example.model.Address address) {
this.address = address;
}
@OneToMany(cascade = CascadeType.ALL)
			@JoinColumns(
					{
							@JoinColumn(name = "heartHealth", referencedColumnName = "id", nullable = false),
					}
			)
			private java.util.List<com.example.model.HeartHealth> heartHealth =new java.util.ArrayList<com.example.model.HeartHealth>();
			public java.util.List<com.example.model.HeartHealth> getHeartHealth() {
			return heartHealth;
			}
			public void setHeartHealth(java.util.ArrayList<com.example.model.HeartHealth> heartHealth) {
			this.heartHealth = heartHealth;
			}
@OneToMany(cascade = CascadeType.ALL)
			@JoinColumns(
					{
							@JoinColumn(name = "armAngles", referencedColumnName = "id", nullable = false),
					}
			)
			private java.util.List<com.example.model.ArmAngles> armAngles =new java.util.ArrayList<com.example.model.ArmAngles>();
			public java.util.List<com.example.model.ArmAngles> getArmAngles() {
			return armAngles;
			}
			public void setArmAngles(java.util.ArrayList<com.example.model.ArmAngles> armAngles) {
			this.armAngles = armAngles;
			}
@OneToMany(cascade = CascadeType.ALL)
			@JoinColumns(
					{
							@JoinColumn(name = "legAngles", referencedColumnName = "id", nullable = false),
					}
			)
			private java.util.List<com.example.model.LegAngles> legAngles =new java.util.ArrayList<com.example.model.LegAngles>();
			public java.util.List<com.example.model.LegAngles> getLegAngles() {
			return legAngles;
			}
			public void setLegAngles(java.util.ArrayList<com.example.model.LegAngles> legAngles) {
			this.legAngles = legAngles;
			}
@OneToMany(cascade = CascadeType.ALL)
			@JoinColumns(
					{
							@JoinColumn(name = "physicalActivity", referencedColumnName = "id", nullable = false),
					}
			)
			private java.util.List<com.example.model.PhysicalActivity> physicalActivities =new java.util.ArrayList<com.example.model.PhysicalActivity>();
			public java.util.List<com.example.model.PhysicalActivity> getPhysicalActivities() {
			return physicalActivities;
			}
			public void setPhysicalActivities(java.util.ArrayList<com.example.model.PhysicalActivity> physicalActivities) {
			this.physicalActivities = physicalActivities;
			}
@Embedded
private com.example.model.Academic academicInfo;

public com.example.model.Academic getAcademicInfo() {
return academicInfo;
}

public void setAcademicInfo(com.example.model.Academic academicInfo) {
this.academicInfo = academicInfo;
}
@Column(name = "birthDate")
private Calendar birthDate;

public Calendar getBirthDate() {
return birthDate;
}

public void setBirthDate(Calendar birthDate) {
this.birthDate = birthDate;
}
@Embedded
private com.example.model.AdditionalInfo otherInfo;

public com.example.model.AdditionalInfo getOtherInfo() {
return otherInfo;
}

public void setOtherInfo(com.example.model.AdditionalInfo otherInfo) {
this.otherInfo = otherInfo;
}
@OneToMany(cascade = CascadeType.ALL)
			@JoinColumns(
					{
							@JoinColumn(name = "advice", referencedColumnName = "id", nullable = false),
					}
			)
			private java.util.List<com.example.model.Advice> advices =new java.util.ArrayList<com.example.model.Advice>();
			public java.util.List<com.example.model.Advice> getAdvices() {
			return advices;
			}
			public void setAdvices(java.util.ArrayList<com.example.model.Advice> advices) {
			this.advices = advices;
			}
@OneToMany(cascade = CascadeType.ALL)
			@JoinColumns(
					{
							@JoinColumn(name = "nHISS", referencedColumnName = "id", nullable = false),
					}
			)
			private java.util.List<com.example.model.NHISS> escalaNHISS =new java.util.ArrayList<com.example.model.NHISS>();
			public java.util.List<com.example.model.NHISS> getEscalaNHISS() {
			return escalaNHISS;
			}
			public void setEscalaNHISS(java.util.ArrayList<com.example.model.NHISS> escalaNHISS) {
			this.escalaNHISS = escalaNHISS;
			}
        }
