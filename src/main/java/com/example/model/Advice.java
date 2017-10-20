package 
		com.example.model;
	    
	    import javax.persistence.*;
	    import java.util.Calendar;
	    @Entity
	    @Table(name = "advices", schema = "application")
public class Advice {
	public Advice(){}
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "advice_id")
	private Long id;
		
	public Long getId() {
	return id;
	}
	
	public void setId(Long id) {
	this.id = id;
	}
@Column(name = "title")
private String title;

public String getTitle() {
return title;
}

public void setTitle(String title) {
this.title = title;
}
@Column(name = "instructions")
private String instructions;

public String getInstructions() {
return instructions;
}

public void setInstructions(String instructions) {
this.instructions = instructions;
}
@Column(name = "priority")
private Integer priority;

public Integer getPriority() {
return priority;
}

public void setPriority(Integer priority) {
this.priority = priority;
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
