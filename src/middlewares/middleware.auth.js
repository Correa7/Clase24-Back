function isUser(req, res, next) {
    if (req.session?.user?.email) {
      return next();
    }
    return res.status(401).render('error', { error: 'Error de autenticacion! Debes estar logueado para acceder a esta página.', style:'error404.css',
    title:'Error de autenticacion' }); 
  }
  
  function isAdmin(req, res, next) {
    let session= req.session.user
    if (req.session?.user?.rol === 'Admin') {
      return next();
    }
    return res.status(403).render('error', { error: 'Error de autorización!, Debes tener permisos de Administrador para acceder a esta página.', style:'error404.css',
    title:'Error de autorización', session:session });
  }

  module.exports = { isUser,isAdmin}