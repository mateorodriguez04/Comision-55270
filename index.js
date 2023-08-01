class Empleado {
  constructor(nombre, peso, edad) {
    this.nombre = nombre;
    this.peso = peso;
    this.edad = edad;

  }

  cambiarNombre(nombre) {
    this.nombre = nombre;
    alert("EL nombre a sido cambiado con éxito");
  }

  cambiarEdad(edad) {
    if (isNaN(edad)) {
      return alert("La edad debe ser un valor numérico");
    }
    this.edad = edad;
    alert("La edad a sido cambiada con éxito");
  }
  cambiarPeso(peso) {
    if (isNaN(peso)) {
      return alert("La peso debe ser un valor numérico");
    }
    this.peso = peso;
    alert("La peso sido cambiada con éxito");
  }
}

let empleados = [
  new Empleado("Mateo", 52, 22),
  new Empleado("Jaque", 66, 32),
];
const mostrarEmpleados = (empleados) => {
  empleados.forEach( empleado => console.log(empleado));
};



mostrarEmpleados(empleados);




const agregarEmpleado = () => {

  let nombre = prompt("Ingrese el nombre del empleado");
  let peso = prompt("Ingrese el peso del empleado");
  let edad = parseInt(prompt("Ingrese la edad del empleado"));


  let empleado = new Empleado(nombre, edad, peso);


  empleados.push(empleado);


  mostrarEmpleados(empleados);
};


const eliminarEmpleado = () => {
  
  const empleadoBuscado = empleadoExiste()
  
  if(!empleadoBuscado) return

  const confirmacion = confirm(`Estas seguro que deseas eliminar el empleado ${empleadoBuscado.nombre} ?`)

  if(confirmacion) {
    empleados = empleados.filter( empleado => empleado.nombre.toLowerCase() !== empleadoBuscado.nombre.toLowerCase()); 
    mostrarEmpleados(empleados);
  } else {
    alert("Eliminación cancelada")
  }
  
};

const editarEmpleado = () => {
   
  const empleadoBuscado = empleadoExiste()
  
  if(!empleadoBuscado) return

  alert("Menú editar empleado:\n1 - Editar nombre\n2 - Editar peso\n3 - Editar edad");

  let opcion = parseInt(prompt("Ingrese una opción para editar"));

  switch (opcion) {
    case 1:
      let nombre = prompt("Ingrese el nombre del empleado");
      empleadoBuscado.cambiarNombre(nombre);
      break;
    case 2:
      let peso = parseInt(prompt("Ingrese el peso del empleado"));
      empleadoBuscado.cambiarPeso(peso);
      break;
    case 3:
      let edad = parseInt(prompt("Ingrese la edad del empleado"));
      empleadoBuscado.cambiarEdad(edad);
      break;
    default:
      alert("Ingrese una opción correcta");
  }

  mostrarEmpleados(empleados);
}
const empleadoExiste = () => {

  let nombreEmpleado = prompt("Ingrese el nombre del empleado");

  let indice = empleados.findIndex(
    (empleado) => empleado.nombre.toLowerCase() === nombreEmpleado.toLowerCase()
  );

  if (indice === -1) {

    return alert(`El empleado ${nombreEmpleado} no existe`);
  }

  return empleados[indice];
};

let encendido = true; 

while (encendido) {
  alert("Menú principal:\n1 - Agregar un empleado\n2 - Eliminar un empleado\n3 - Modificar empleado\n4 - Apagar");
  let opcion = parseInt(prompt("Ingrese una opción"));
  switch (opcion) {
    case 1:
      agregarEmpleado();
      break;
    case 2:
      eliminarEmpleado();
      break;
    case 3:
      editarEmpleado();
      break;
    case 4:
      encendido = false;
      break;
    default:
      alert("Inserte una opción correcta");
  }
}

alert("Gracias vuelva pronto");