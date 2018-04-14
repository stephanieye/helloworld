function customresponses(req, res, next) {
  res.badRequest = function(url, errors){
    req.flash('danger', errors);
    return res.redirect(url);
  };
  next();
}


module.exports = customresponses;
