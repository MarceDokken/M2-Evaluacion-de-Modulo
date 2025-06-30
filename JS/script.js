$(document).ready(function () {
  $('#formContacto').on('submit', function(e) {
    e.preventDefault();
    alert("¡Gracias por tu mensaje! Te contactaremos pronto.");
    this.reset();
  });

  $('#formTest').on('submit', function(e) {
    e.preventDefault();
    const r1 = $('#respuesta1').val();
    const r2 = $('#respuesta2').val();
    const feedback = (r1 === '1' && r2 === '1') 
      ? '<div class="alert alert-success">¡Buen trabajo! Has respondido correctamente.</div>' 
      : '<div class="alert alert-warning">Revisa tus respuestas. ¡Sigue aprendiendo!</div>';
    $('#feedbackTest').html(feedback);
  });
});