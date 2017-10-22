# SignalPrototype
___

![Logo](https://github.com/AlejandraZamora/HealthImages/blob/master/imagenes/logo.png)![Logo ECI](https://github.com/AlejandraZamora/HealthImages/blob/master/imagenes/logoEscuela.jpg)

___

## Efficient and scalable Architecture for stream processing of health signals

## Aplicación desplegada:
 [Signal Protoype](https://signalprotoype.herokuapp.com)


## Guía para el desarrollador
___

## API REST

Tipo de datos manejado:  ***JSON***

### Recursos

El API ofrece el siguiente recurso principal:

- patient

Este se puede usar así:

### Componentes de los recursos

| Recurso | Metodo | Descripción | Parametro | Retorno |
| :------ | :----- | :---------- | :-------- | :------ |
| `/patient/` | **GET** | Retorna todas las personas (Pacientes, Profesionales de salud e investigadores) registradas. | | **List \<DataPOJO>** |
| `/patient/new/` | **POST** | Guarda una persona nueva. | **DataPOJO** | |
| `/patient/` | **PUT** | Actualiza la información de una persona registrada. | **DataPOJO** | |
| `/patient/{patientId}/` | **GET** | Retorna el recurso de persona específicado por el id| **Long** | **DataPOJO** |

### Parametros de URL

| Nombre | Tipo | Descripción |
| :----- | :--- | :---------- |
| *patientId* | **Long**| Número de identificación de la persona o paciente. |

____

El API para señales ofrece el siguiente recurso principal:

- signal

Este se puede usar así:

### Componentes de los recursos

| Recurso | Topico | Descripción | Parametro | Retorno |
| :------ | :----- | :---------- | :-------- | :------ |
| `/signal/frequencyBloodOxygen/{pId}/` | `/signal/topic/BloodOxygensignaltoclient/` | Retorna la frecuancia de la señal de saturación de oxígeno en la sangre del paciente especificado con el id. |**Long**,**DataPOJO** | **DataPOJO** |
| `/signal/beginBloodOxygen/{pId}/` | `/signal/topic/BloodOxygensignaltoclient/` | Retorna el valor de la señal de saturación de oxígeno en la sangre del paciente especificado con el id. |**Long** | **DataPOJO** |
| `/signal/saveBloodOxygen/{pId}/` | `/signal/topic/BloodOxygensignaltoserver/` | Guarda el valor de la señal de saturación de oxígeno en la sangre del paciente especificado con el id. |**Long**,**DataPOJO** | |
| `/signal/saveBloodOxygenfrequency/{pId}/` | `/signal/topic/BloodOxygensignaltoserver/` | Guarda la frecuancia de la señal de saturación de oxígeno en la sangre del paciente especificado con el id. |**Long**,**Integer** | |
| `/signal/frequencyECG/{pId}/` | `/signal/topic/ECGsignaltoclient/` | Retorna la frecuancia de la señal ECG del paciente especificado con el id. |**Long**,**DataPOJO** | **DataPOJO** |
| `/signal/beginECG/{pId}/` | `/signal/topic/ECGsignaltoclient/` | Retorna el valor de la señal ECG del paciente especificado con el id. |**Long** | **DataPOJO** |
| `/signal/saveECG/{pId}/` | `/signal/topic/ECGsignaltoserver/` | Guarda el valor de la señal ECG del paciente especificado con el id. |**Long**,**DataPOJO** | |
| `/signal/saveECGfrequency/{pId}/` | `/signal/topic/ECGsignaltoserver/` | Guarda la frecuancia de la señal ECG del paciente especificado con el id. |**Long**,**Integer** | |

### Parametros de URL

| Nombre | Tipo | Descripción |
| :----- | :--- | :---------- |
| *pId* | **Long**| Número de identificación del paciente. |

_______

### Manual de descarga, instalación y despliegue de la aplicación
_______

Para realizar el proceso es necesario contar previamente con:
- git ([descargar](https://git-scm.com/downloads))
- maven ([descargar](https://maven.apache.org/download.cgi))
- bower ([descargar](https://bower.io/#install-bower))
- heroku ([descargar](https://devcenter.heroku.com/articles/heroku-cli))
- Tener una cuenta activa en Heroku y en GitHub

_______

#### Descarga de la aplicación

Para descargar la aplicación siga estas instrucciones:

1. Abrir el repositorio de la aplicación en GitHub. [Signal Prototype](https://github.com/AlejandraZamora/SignalPrototype.git)

2. Copiar el enlace para clonar el proyecto

3. Abrir la terminal y ubicarse en el directorio en donde se desea guardar el proyecto con el comando cd:
	- cd Directorio deseado

4. Una vez ubicados en el directorio deseado procedemos a clonar el proyecto con el comando git clone y la dirección copiada anteriormente en la página del repositorio:
	- git clone https://github.com/AlejandraZamora/SignalPrototype.git

#### Ejecutar el proyecto de manera local

1. para poder ejecutar el proyecto vamos a utilizar el comando de maven para compilarlo y después de este el comando para correrlo:
	- mvn compile
	- mvn spring-boot:run
Debemos ubicarnos en el directorio del proyecto:
	- cd SignalPrototype/

2. Para probar el funcionamiento de la aplicación abrimos en el browser la dirección:
	- http://localhost:8080/app/index.html

3. Para detener el servidor volvemos a la terminal en la que se encuentra corriendo el proyecto y oprimimos ctrl+c lo que detendrá el proceso.

#### Despliegue de la aplicación en Heroku

1. Entrar a la página de [heroku](https://www.heroku.com/) e iniciar sesión, escoger la opción de crear una nueva aplicación y poner el nombre que deseamos.

2. Crear una nueva carpeta en la que se va a crear el proyecto para desplegar, para esto nos ubicamos en el directorio deseado y creamos la carpeta desde la terminal:
	- cd DirectorioDeseado
	- mkdir NombreCarpeta

3. En la carpeta creada se deben copiar los archivos del repositorio (https://github.com/AlejandraZamora/SignalPrototype.git) a excepción de la carpeta .git, el archivo README.md y el archivo .gitignore que se encuentran en el directorio raíz del proyecto.

4. Abrir la terminal y ubicarnos en el directorio de la carpeta creada antes con el comando cd:
	- cd DirectorioProyecto

5. Iniciar sesión en la cuenta de heroku con el comando:
	- heroku login

6. Crear un nuevo repositorio en GitHub y conectarlo con heroku:
	- git init
	- heroku git:remote -a NombreDeMiAplicación (nombre de la aplicación creada en el paso 1)

7. Si desea realizar cambios en el proyecto puede realizarlos ahora.

8. Después de realizar los cambios se debe hacer commit de los mismos en el nuevo repositorio:
	- git add .
	- git commit -am "Descripción del commit"
	
9. Desplegar la aplicación en heroku:
	- git push heroku master

10. Para acceder a la aplicación desplegada nos dirijimos al link https://NombreDeMiAplicación.herokuapp.com/

_______
