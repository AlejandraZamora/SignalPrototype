package 
		com.example.model;
	    
	    import javax.persistence.*;
	    import java.util.Calendar;
	    @Entity
	    @Table(name = "nHISSs", schema = "application")
public class NHISS {
	public NHISS(){}
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "nHISS_id")
	private Long id;
		
	public Long getId() {
	return id;
	}
	
	public void setId(Long id) {
	this.id = id;
	}
@Column(name = "date")
private Calendar date;

public Calendar getDate() {
return date;
}

public void setDate(Calendar date) {
this.date = date;
}
@Column(name = "synthomsBegin")
private Calendar synthomsBegin;

public Calendar getSynthomsBegin() {
return synthomsBegin;
}

public void setSynthomsBegin(Calendar synthomsBegin) {
this.synthomsBegin = synthomsBegin;
}
@Column(name = "nivelDeConciencia")
private String nivelDeConciencia;

public String getNivelDeConciencia() {
return nivelDeConciencia;
}

public void setNivelDeConciencia(String nivelDeConciencia) {
this.nivelDeConciencia = nivelDeConciencia;
}
@Column(name = "ordenesMotoras")
private String ordenesMotoras;

public String getOrdenesMotoras() {
return ordenesMotoras;
}

public void setOrdenesMotoras(String ordenesMotoras) {
this.ordenesMotoras = ordenesMotoras;
}
@Column(name = "miradaConjugada")
private String miradaConjugada;

public String getMiradaConjugada() {
return miradaConjugada;
}

public void setMiradaConjugada(String miradaConjugada) {
this.miradaConjugada = miradaConjugada;
}
@Column(name = "camposVisuales")
private String camposVisuales;

public String getCamposVisuales() {
return camposVisuales;
}

public void setCamposVisuales(String camposVisuales) {
this.camposVisuales = camposVisuales;
}
@Column(name = "paresiaFacial")
private String paresiaFacial;

public String getParesiaFacial() {
return paresiaFacial;
}

public void setParesiaFacial(String paresiaFacial) {
this.paresiaFacial = paresiaFacial;
}
@Column(name = "paresiaDeBrazoIzquierdo")
private String paresiaDeBrazoIzquierdo;

public String getParesiaDeBrazoIzquierdo() {
return paresiaDeBrazoIzquierdo;
}

public void setParesiaDeBrazoIzquierdo(String paresiaDeBrazoIzquierdo) {
this.paresiaDeBrazoIzquierdo = paresiaDeBrazoIzquierdo;
}
@Column(name = "paresiaDeBrazoDerecho")
private String paresiaDeBrazoDerecho;

public String getParesiaDeBrazoDerecho() {
return paresiaDeBrazoDerecho;
}

public void setParesiaDeBrazoDerecho(String paresiaDeBrazoDerecho) {
this.paresiaDeBrazoDerecho = paresiaDeBrazoDerecho;
}
@Column(name = "paresiaDePiernaIzquierda")
private String paresiaDePiernaIzquierda;

public String getParesiaDePiernaIzquierda() {
return paresiaDePiernaIzquierda;
}

public void setParesiaDePiernaIzquierda(String paresiaDePiernaIzquierda) {
this.paresiaDePiernaIzquierda = paresiaDePiernaIzquierda;
}
@Column(name = "paresiaDePiernaDerecha")
private String paresiaDePiernaDerecha;

public String getParesiaDePiernaDerecha() {
return paresiaDePiernaDerecha;
}

public void setParesiaDePiernaDerecha(String paresiaDePiernaDerecha) {
this.paresiaDePiernaDerecha = paresiaDePiernaDerecha;
}
@Column(name = "ataxiaDeLasExtremidades")
private String ataxiaDeLasExtremidades;

public String getAtaxiaDeLasExtremidades() {
return ataxiaDeLasExtremidades;
}

public void setAtaxiaDeLasExtremidades(String ataxiaDeLasExtremidades) {
this.ataxiaDeLasExtremidades = ataxiaDeLasExtremidades;
}
@Column(name = "sensibilidad")
private String sensibilidad;

public String getSensibilidad() {
return sensibilidad;
}

public void setSensibilidad(String sensibilidad) {
this.sensibilidad = sensibilidad;
}
@Column(name = "lenguaje")
private String lenguaje;

public String getLenguaje() {
return lenguaje;
}

public void setLenguaje(String lenguaje) {
this.lenguaje = lenguaje;
}
@Column(name = "disartria")
private String disartria;

public String getDisartria() {
return disartria;
}

public void setDisartria(String disartria) {
this.disartria = disartria;
}
@Column(name = "extincionNegligenciaInatencion")
private String extincionNegligenciaInatencion;

public String getExtincionNegligenciaInatencion() {
return extincionNegligenciaInatencion;
}

public void setExtincionNegligenciaInatencion(String extincionNegligenciaInatencion) {
this.extincionNegligenciaInatencion = extincionNegligenciaInatencion;
}
        }
