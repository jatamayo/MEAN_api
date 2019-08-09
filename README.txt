---- MEAN API ----

/* Arrancar un nuevo proyecto de node.js */
    
    MEAN_API/ npm init --yes

/* Instalar dependencias */

    MEAN_API/ npm install express
    MEAN_API/ npm install nodemon -D /* esta dependencia reinicia nuestro servidor automaticamente  -D significa que no es una dependencia, es un devDependency */
    MEAN_API/ npm install morgan /* Muestra en consola que es lo que el usuario esta pidiendo*/
    MEAN_API/ npm install mongoose /* modulo requerido por express para conectarse y modelar datos */


/* MAIN API FILES */

	controllers/employee.controller.js
	models/employee.js
	routes/employee.routes.js
	