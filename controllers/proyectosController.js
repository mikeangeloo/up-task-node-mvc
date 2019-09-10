const Proyectos = require('../models/Proyectos');


exports.proyectosHome = async (req, res) => {
  const proyectos = await Proyectos.findAll();

  res.render('index', {
    nombrePagina : 'Proyectos',
    proyectos
  });
};

exports.formularioProyecto = (req, res) => {
  res.render('nuevoProyecto', {
    nombrePagina: 'Nuevo Proyecto'
  })
};

exports.nuevoProyecto = async(req, res) => {
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
    const proyecto = await Proyectos.create({ nombre });
    res.redirect('/');
  }
};
