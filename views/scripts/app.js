document.addEventListener('DOMContentLoaded', function() {
  var submit = document.getElementbyId('submit');
  var reviewdate = document.getElementById('reviewdate');


  submit.addEventListener('click', function(){
    console.log('here');
    reviewdate.value = new Date();
  });

});
