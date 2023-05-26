var mi_bd = null;

// Función para inicializar la base de datos
function inicializarBD() {
    // Verificar si la variable global ya está definida
    if (mi_bd == null) {
      // Crear una nueva instancia de la base de datos
      mi_bd = openDatabase('DVTutoring', '1.0', 'This is a client side database', 2 * 1024 * 1024);
  
      // Realizar cualquier otra operación que necesites, como crear tablas o inicializar valores por defecto
      mi_bd.transaction(function(tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS Usuarios (id INTEGER PRIMARY KEY, Name VARCHAR, MailID VARCHAR, Password VARCHAR, Age INTEGER, Sexo VARCHAR, Address VARCHAR, CP INTEGER, Turno VARCHAR)');
  });
    }
  }
  

function Insertar(){
var name = document.getElementById("name").value;
  var MailID = document.getElementById("email").value;
  var password = document.getElementById("pass").value;
  var age = document.getElementById("edad").value;
  var sexo = document.getElementById("sexo").value;
  var Address = document.getElementById("latlng").value;
  var CP = document.getElementById("CP").value;
  var Turno = document.getElementById("horario").value;

  // Guardar los valores en sessionStorage
  sessionStorage.setItem('correo', MailID);
  sessionStorage.setItem('password', password);
  sessionStorage.setItem('edad', age);

  mi_bd.transaction(function (tran) {
    tran.executeSql('INSERT INTO Usuarios (Name, MailID, Password, Age, Sexo, Address, CP, Turno) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [name, MailID, password, age, sexo, Address, CP, Turno], function (tx, result) {
      // Verificar si se realizó la inserción correctamente
      if (result.rowsAffected > 0) {
        // Redirigir a la página "DatosUsuario.html" después de completar la inserción
        window.location.assign("DatosUsuario.html");
      }
    });
  });
}

function abrir() {
  
}

function abrirDos() {
  window.location.assign("inicio.html"); 
}


function session(){
    inicializarBD();
    // Definir el nombre de usuario que se va a buscar
    var nombreUsuario = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Guardar los valores en sessionStorage
sessionStorage.setItem('username', username);
sessionStorage.setItem('password', password);

    // Ejecutar la consulta
    mi_bd.transaction(function(tx) {
      tx.executeSql('SELECT * FROM Usuarios WHERE MailID = ? AND Password = ?', [nombreUsuario,password], function(tx, results) {
        if (results.rows.length > 0) {
          window.location.href="inicio.html"
        } else {
          alert("El correo no esta registrado en la base de datos")
        }
      });
    });
    
}    
function mostrardatos(){
  var nombre = sessionStorage.getItem('username');
  var correo = sessionStorage.getItem('correo');
  var edad = sessionStorage.getItem('edad');

  var spanUno = document.getElementById('nombre');
  var spanDos = document.getElementById('edad');
  var spanTres = document.getElementById('correo');

  spanUno.innerHTML = nombre;
  spanDos.innerHTML = correo;
  spanTres.innerHTML = edad;
}
