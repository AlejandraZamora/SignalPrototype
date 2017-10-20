package 
		com.example.model;
	    
	    import javax.persistence.*;
	    import java.util.Calendar;
	    @Entity
	    @Table(name = "physicalActivitys", schema = "application")
public class PhysicalActivity {
	public PhysicalActivity(){}
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "physicalActivity_id")
	private Long id;
		
	public Long getId() {
	return id;
	}
	
	public void setId(Long id) {
	this.id = id;
	}
@Column(name = "exerciseName")
private String exerciseName;

public String getExerciseName() {
return exerciseName;
}

public void setExerciseName(String exerciseName) {
this.exerciseName = exerciseName;
}
@Column(name = "seriesNumber")
private Integer seriesNumber;

public Integer getSeriesNumber() {
return seriesNumber;
}

public void setSeriesNumber(Integer seriesNumber) {
this.seriesNumber = seriesNumber;
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
