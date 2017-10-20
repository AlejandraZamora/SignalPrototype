package 
		com.example.model;
	    
	    import javax.persistence.*;
	    import java.util.Calendar;
	    @Entity
	    @Table(name = "heartHealths", schema = "application")
public class HeartHealth {
	public HeartHealth(){}
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "heartHealth_id")
	private Long id;
		
	public Long getId() {
	return id;
	}
	
	public void setId(Long id) {
	this.id = id;
	}
@Column(name = "systolicPressure")
private Integer systolicPressure;

public Integer getSystolicPressure() {
return systolicPressure;
}

public void setSystolicPressure(Integer systolicPressure) {
this.systolicPressure = systolicPressure;
}
@Column(name = "diastolicPressure")
private Integer diastolicPressure;

public Integer getDiastolicPressure() {
return diastolicPressure;
}

public void setDiastolicPressure(Integer diastolicPressure) {
this.diastolicPressure = diastolicPressure;
}
@Column(name = "bloodCholesterol")
private Integer bloodCholesterol;

public Integer getBloodCholesterol() {
return bloodCholesterol;
}

public void setBloodCholesterol(Integer bloodCholesterol) {
this.bloodCholesterol = bloodCholesterol;
}
@Column(name = "heartRate")
private Integer heartRate;

public Integer getHeartRate() {
return heartRate;
}

public void setHeartRate(Integer heartRate) {
this.heartRate = heartRate;
}
@Column(name = "date")
private Calendar date;

public Calendar getDate() {
return date;
}

public void setDate(Calendar date) {
this.date = date;
}
        }
