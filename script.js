document.getElementById('subscribeForm').addEventListener('submit', function(event) {
  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');

  // Validation du formulaire
  if (nameInput.value.trim() === '') {
    alert('Veuillez entrer votre nom.');
    event.preventDefault(); // Empêche l'envoi du formulaire
  }

  if (emailInput.value.trim() === '') {
    alert('Veuillez entrer votre adresse e-mail.');
    event.preventDefault(); // Empêche l'envoi du formulaire
  } else if (!emailInput.value.includes('@')) {
    alert('Veuillez entrer une adresse e-mail valide.');
    event.preventDefault(); // Empêche l'envoi du formulaire
  }
});
