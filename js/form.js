'use strict';

(function () {
  var setupForm = document.querySelector('.setup-wizard-form');

  var onFormSubmit = function (evt) {
    window.backend.save(new FormData(setupForm), window.setup.closePopup, window.setup.getErrorMessage);
    evt.preventDefault();
  };

  setupForm.addEventListener('submit', onFormSubmit);
})();
