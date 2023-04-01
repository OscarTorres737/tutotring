function session(){

// Crear una instancia de la base de datos
var db = openDatabase('mi_bd', '1.0', 'Mi base de datos', 2 * 1024 * 1024);

// Definir el nombre de usuario que se va a buscar
var nombreUsuario = document.getElementById("username").value;

// Ejecutar la consulta
db.transaction(function(tx) {
  tx.executeSql('SELECT * FROM usuarios WHERE nombre = ?', [nombreUsuario], function(tx, results) {
    if (results.rows.length > 0) {
      window.location("")
    } else {
      alert("El correo no esta registrado en la base de datos")
    }
  });
});

// Obtener los valores del nombre de usuario y contraseña
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;

// Guardar los valores en sessionStorage
sessionStorage.setItem('username', username);
sessionStorage.setItem('password', password);




}


