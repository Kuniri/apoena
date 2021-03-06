function Property(name, type) {
  if(typeof name == "undefined")
    name = "Property";
  if(typeof type == "undefined")
    type = null;
  this.name = name;
  this.visibility = visibility.public;
  this.type = type;
};

Property.prototype.getWidth = function() {
  return 15;
}

Property.prototype.draw = function(x, y) {
  switch(this.visibility) {
    case visibility.public:
      apo.ctx.fillText("+", x, y);
      break;
    case visibility.private:
      apo.ctx.fillText("-", x, y);
      break;
    case visibility.protected:
      apo.ctx.fillText("#", x, y);
      break;
  }
};
