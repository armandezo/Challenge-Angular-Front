# EntrevistaFront

## Para ejecutar el programa del frontend
(Antes de ejecse debera ejecutar el backend para que se pueda realizar el consumo del servicio); 

Por parte del frontend
Ejecutar en la terminal → 

1. `npm install`
2. `npm start` o `ng serve` 

para que aparecer el linkeo a  `http://localhost:4200/`. (automaticamente los redijira al login)

# Nota
* Todo el contenido en cuando decisiones técnicas será por la parte del Front para las del backend dirigirse al anterior enlace, donde hace referencia del backend.
* Descargar directamente este repositorio para probar la aplicación

## Decisiones técnicas
* En cuanto al diseño por cuestión de tiempo decidí emplear un template de terceros, de esta forma algún que otro defecto a nivel de maquetación me seria mas facil poder solucionarlo. Esto me permitió ganar más tiempo para invertirlo en la parte de la creación del backend y consumo de las API.
* Cuando comencé a crear mis servicios (services component) emplee el servicio HttpClient (para el consumo de las API), emple operadores rxjs para simplificar la obtención de la data, y tambien lo emplee para poder guardar el token el usuario e email (guardado en el localstorage) los datos fueron enviados por el backend usando JWT. 
* La proteccion de rutas emplee canActivated y canLoad (Guards) para que se respete la seguridad de las paginas ajenas al login y el registro.
* Sistema de rutas empleando LazyLoad para la carga efectiva de los componentes. 
* Los formularios son reactivos (nuevas características de angular).
* Uso de clases e interfaces en casos especiales (dependiendo el uso).

# Problemas durante el desarrollo
* Cuento con conocimientos de testing en angular y docker, pero por el tiempo no implemente en su mayoría estos puntos ya que como bien se realizar la parte del testing puedo demorar igual o más que el propio del desarrollo del front y back.


# Imagenes del proyecto (Escritorio)
# Registro
![image](https://user-images.githubusercontent.com/85316618/215914846-5adaa51b-dbfa-4839-a2e0-f3e84da6b836.png)
# Login
![image](https://user-images.githubusercontent.com/85316618/215914890-97934ca8-c904-4071-8900-7e59832466fb.png)

# Imagenes del proyecto (Mobile desing)

# Registro
![image](https://user-images.githubusercontent.com/85316618/215915302-4decec39-d3ce-4b0d-a9bd-75578083e192.png)
# Login
![image](https://user-images.githubusercontent.com/85316618/215915319-3734d1ed-4be3-4ec4-86c9-22991dd39827.png)







