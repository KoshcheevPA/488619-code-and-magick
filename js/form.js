'use strict';

(function () {
  var setupForm = document.querySelector('.setup-wizard-form');
  var setup = document.querySelector('.setup');

  var onFormSubmit = function (evt) {
    var saveForm = function () {
      window.setup.closePopup();
    };
    var saveError = function () {
      console.log('Ошибка');
    };
    window.backend.save(new FormData(setupForm), saveForm, saveError);
    evt.preventDefault();
  };

  setupForm.addEventListener('submit', onFormSubmit);
})();
