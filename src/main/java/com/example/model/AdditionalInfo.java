package 
		com.example.model;
	    
	    import javax.persistence.*;
	    import java.util.Calendar;
	    @Embeddable
public class AdditionalInfo {
	public AdditionalInfo(){}
@Column(name = "hobbies")
private String hobbies;

public String getHobbies() {
return hobbies;
}

public void setHobbies(String hobbies) {
this.hobbies = hobbies;
}
@Column(name = "favouriteFood")
private String favouriteFood;

public String getFavouriteFood() {
return favouriteFood;
}

public void setFavouriteFood(String favouriteFood) {
this.favouriteFood = favouriteFood;
}
@Column(name = "heigth")
private Integer heigth;

public Integer getHeigth() {
return heigth;
}

public void setHeigth(Integer heigth) {
this.heigth = heigth;
}
        }
