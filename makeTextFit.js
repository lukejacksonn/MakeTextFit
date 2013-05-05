jQuery.fn.makeTextFit = function (max) {

  return this.each(function () {
    
    var $self = $(this);
    var $parent = $self.parent();
    var max = max || 72;

    //Set font-size to max
    $self.css("font-size", max+"px");
    //Reduce until text fits vertically inside parent
    while(($self.height() > $parent.height()) && i > 6) { 
      $self.css("font-size", max+"px"); 
      max = max-1;
    }
  });

};
