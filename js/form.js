'use strict';

(function () {
  var setupForm = document.querySelector('.setup-wizard-form');

  var onFormSubmit = function (evt) {
    var saveForm = function () {
      window.setup.closePopup();
    };

    window.backend.save(new FormData(setupForm), saveForm, window.setup.getErrorMessage);
    evt.preventDefault();
  };

  setupForm.addEventListener('submit', onFormSubmit);
})();
