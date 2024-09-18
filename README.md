Este es un proyecto realizado para el examen final del Módulo 4 del Bootcamp Adalab. En él, se requiría crear una API desde Workbench y hacer ciertas llamadas desde un proyecto, comprobando desde la aplicación Postman,
su buena realicación. 

En el proyecto se encontrará los diferentes enpoint, corespondientes las llamadas (por orden):

GET - Que llama a todos los elementos de la API.
POST - Que envia un elemento nuevo a la API, rellanando los campos necesarios, corespondientes a la tabla realizada anteriormente en Workbench, donde se alamcena la información.
PUT - Que modifica un elemento EXISTENTE de la tabla, rellenado los campos que se desean cambiar (estos han de corresponder como en el caso anterior a las KEY de la tabla creada en Workbench).
DELETE - Elimina un elemento deseado, ya exitente, de la API.

Para poder observar si estos cambios son realizados, se han echo diferentes llamadas a Postamn y se ha contemplado directamente estos cambios en la Base de Datos. 
El proyecto también inclue una carpeta BD donde se adjunta el archivo Script creado en Workbench, donde, en caso de desar probarlo, se puede mirar el nobmre de la tabla y los elementos de ellas, para poder seguir
probando los diferentes enpoints creados. 

En caso de problemas, se ha creado un manejador de errores, que le indicará si algo no está correctamente en el momento de hacer la llamada.

Por temas de seguridad, se ha "encriptado" la ruta y contraseña de la base de datos personal. Gracias.
