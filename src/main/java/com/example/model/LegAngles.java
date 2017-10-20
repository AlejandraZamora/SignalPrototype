package 
		com.example.model;
	    
	    import javax.persistence.*;
	    import java.util.Calendar;
	    @Entity
	    @Table(name = "legAngless", schema = "application")
public class LegAngles {
	public LegAngles(){}
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "legAngles_id")
	private Long id;
		
	public Long getId() {
	return id;
	}
	
	public void setId(Long id) {
	this.id = id;
	}
@Column(name = "upperAngle")
private Integer upperAngle;

public Integer getUpperAngle() {
return upperAngle;
}

public void setUpperAngle(Integer upperAngle) {
this.upperAngle = upperAngle;
}
@Column(name = "lowerAngle")
private Integer lowerAngle;

public Integer getLowerAngle() {
return lowerAngle;
}

public void setLowerAngle(Integer lowerAngle) {
this.lowerAngle = lowerAngle;
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
