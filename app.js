//console.log("Editar datos del alumno");

//Imprime un mensaje de bienvenida en la consola.
console.log("Sistema EBAC de Registro de Alumnos");

//Se define un arreglo de registro con datos de alumnos en EBAC
var registro = [

    //Se muestra una lista de alumnos por medio de objetos
    {nombre: "Salvador Mora", edad: "30", zonaResidencia: "CDMX", nombrePrograma: "Desarrollador Front End De Cero a Pro", email: "salvadormora@ebac.mx", numeroTelefono: "456123789", estatusAlumno: "Activo"},
    {nombre: "Maria Hubert", edad: "34", zonaResidencia: "Edo Mex", nombrePrograma: "Desarrollador Back End con Python", email: "maria@ebac.mx", numeroTelefono: "652987415", estatusAlumno: "Activo"},
    {nombre: "Pablo Arguelles", edad: "29", zonaResidencia: "Aguas calientes", nombrePrograma: "Analista de datos", email: "PArguelles@ebac.mx", numeroTelefono: "216584962", estatusAlumno: "Inactivo"},
    {nombre: "Ramon Calles", edad: "31", zonaResidencia: "Sonora", nombrePrograma: "Desarrollador Full Stack Java", email: "CallesR@ebac.mx", numeroTelefono: "124845627", estatusAlumno: "Activo"},
    {nombre: "Carlos Moreno", edad: "33", zonaResidencia: "Monterrey", nombrePrograma: "Cientifico de datos", email: "CarMor@ebac.mx", numeroTelefono: "134658975", estatusAlumno: "Inactivo"},
];

//Funcion que pide informacion para agregar a un nuevo alumno, almacenandola como la variable nuevoAlumno, agregandola al registro existente y mostrando un mensaje de operacion exitosa al final
function agregarAlumno(){

    //Se le solicita informacion al usuario para el registro de nuevo alumno
    var nombre = prompt("Ingresa el nombre del nuevo alumno");
    var zonaResidencia = prompt("Ingresa la zona de residencia del alumno");
    var edad = prompt("Edad");
    var nombrePrograma = prompt("Programa a estudiar");
    var email = prompt("Correo electrónico");
    var numeroTelefono = prompt("Ingresa el numero de telefono del alumno");
    var estatusAlumno = prompt("Estatus del alumno (Activo o Inactivo)");

    //Crea un objeto que se llama nuevoAlumno con los datos ingresados
    var nuevoAlumno = {nombre: nombre, zonaResidencia: zonaResidencia, edad: edad, nombrePrograma: nombrePrograma, email: email, numeroTelefono: numeroTelefono, estatusAlumno: estatusAlumno}
    
    //Agrega la informacion de nuevoAlumno al arreglo
    registro.push(nuevoAlumno)

    alert("Alumno agregado exitosamente.");
};

//Funcion que muestra el registro de los alumnos existentes en el registro en la consola del navegador
function consultarRegistros(){

    //Este ciclo for itera sobre cada uno de los registros del arreglo
    for(var i = 0; i < registro.length; i++){

        //Esta lista de console.log permite ver al usuario el registro en la consola
        console.log("Nombre: " + registro[i].nombre);
        console.log("Edad: " + registro[i].edad);
        console.log("Zona de residencia: " + registro[i].zonaResidencia);
        console.log("Programa: " + registro[i].nombrePrograma);
        console.log("Email: " + registro[i].email);
        console.log("Numero de Telefono: " + registro[i].numeroTelefono);
        console.log("Estatus de alumno: " + registro[i].estatusAlumno);
        console.log("\n");
    };
};

//Funcion que muestra cuantos alumnos de edad especifica hay
function consultarEdad(){
    var edadConsultada = prompt("Ingresa la edad a consultar");
    var edadMatch = 0;
    
    for(var i = 0; i < registro.length; i++){
        if (registro[i].edad === edadConsultada){
            edadMatch++;
        }      
    }
    console.log("Existen " + edadMatch + " alumnos de " + edadConsultada + " años")
}

//Funcion que muestra cuantos alumnos activos hay
function consultarActivos(){
    var alumnosActivos = 0;
    
    for(var i = 0; i < registro.length; i++){
        if (registro[i].estatusAlumno === "Activo"){
            alumnosActivos++;
        }      
    }
    console.log("Existen " + alumnosActivos + " alumnos activos")
}

//Funcion que permite generar un nuevo arreglo que no contenga la informacion del alumno deseado
function eliminarAlumno(){

    //Solicita al usuario el nombre del alumno a eliminar
    var nombreAEliminar = prompt("Ingresa el nombre del alumno a eliminar");

    //Utiliza el metodo filter para crear un nuevo arreglo sin el alumno a eliminar
    registro = registro.filter(alumno => alumno.nombre !== nombreAEliminar);
}

//Ciclo do while permite repetir el menu cuando es indicado hasta que no se cumpla la condicion
do{

    //Variable que toma la eleccion del usuario para ejecutar la funcion indicada
    var opcion = prompt("Seleccione una opción: \n1. Agregar registro \n2. Consultar registro de alumnos \n3. Eliminar registro \n4. Salir");

    //Se declara este if para dar a elegir al usuario la opcion que requiera
    if (opcion === "1"){
        alert("Agregar alumno nuevo");
        agregarAlumno();
    } else if(opcion ==="2"){
        alert("Registro de alumnos");
        consultarRegistros();
    }  else if(opcion ==="3"){
        eliminarAlumno();
    }  else if(opcion ==="4"){
        alert("Salir del sistema");
        break;
    }  else{
        alert("Opción inválida, elige otra");
    }

    //Esta variable nos permite elegir si hacemos otra accion o si cerramos el ciclo
    var continuar = prompt("¿Deseas hacer otra acción? (S/N)")

    //While que se encarga de cerrar el ciclo
} while(continuar === "s");