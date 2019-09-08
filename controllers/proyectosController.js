exports.proyectosHome = (req, res) => {
  res.render('index', {
    nombrePagina : 'Proyectos'
  });
};

exports.formularioProyecto = (req, res) => {
  res.render('nuevoProyecto', {
    nombrePagina: 'Nuevo Proyecto'
  })
};

exports.nuevoProyecto = (req, res) => {
  // console.log(req.body);
  // validar que tengamos algo en el input
  const { nombre } = req.body;

  let errores = [];

  if (!nombre) {
    errores.push({'texto': 'Agrega un nombre al proyecto'})
  }
  // si hay errores
  if(errores.length > 0){
    res.render('nuevoProyecto', {
      nombrePagina: 'Nuevo Proyecto',
      errores
    })
  }else {
    // no hay errores
    // insertar en la BD
  }
};
