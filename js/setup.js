'use strict';

var WIZARDS_NUMBER = 4;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupOpenIcon = setupOpen.querySelector('.setup-open-icon');
// var userName = setup.querySelector('.setup-user-name');
var ESCAPE_BUTTON = 27;
var ENTER_BUTTON = 13;
var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var setupWizardWrap = document.querySelector('.setup-fireball-wrap');
var setupWizardWrapInput = setupWizardWrap.querySelector('input');
var setupCoatInput = setup.querySelector('[name=coat-color]');
var setupEyesInput = setup.querySelector('[name=eyes-color]');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var changeElementColor = function (colorsArray, element, valueElement) {
  element.addEventListener('click', function () {
    var elementColor = getRandomItem(colorsArray);
    element.style.fill = elementColor;
    valueElement.value = elementColor;
  });
};


changeElementColor(WIZARD_COAT_COLOR, wizardCoat, setupCoatInput);
changeElementColor(WIZARD_EYES_COLOR, wizardEyes, setupEyesInput);

setupWizardWrap.addEventListener('click', function () {
  var randomColor = getRandomItem(FIREBALL_COLOR);
  setupWizardWrap.style.backgroundColor = randomColor;
  setupWizardWrapInput.value = randomColor;
});


var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESCAPE_BUTTON) {
    closePopup();
  }
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpenIcon.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_BUTTON) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_BUTTON) {
    closePopup();
  }
});

var getRandomIndex = function (array) {
  var random = Math.floor(Math.random() * array.length);
  return random;
};

var getRandomItem = function (array) {
  return array[getRandomIndex(array)];
};


var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};


var getWizards = function (number) {
  var wizardOptions = [];
  for (var i = 0; i < number; i++) {
    var oneWizardOptions = {
      name: getRandomItem(WIZARD_NAMES) + ' ' + getRandomItem(WIZARD_SURNAMES),
      coatColor: getRandomItem(WIZARD_COAT_COLOR),
      eyesColor: getRandomItem(WIZARD_EYES_COLOR)
    };
    wizardOptions.push(oneWizardOptions);
  }
  var fragment = document.createDocumentFragment();
  for (var j = 0; j < wizardOptions.length; j++) {
    fragment.appendChild(renderWizard(wizardOptions[j]));
  }
  similarListElement.appendChild(fragment);
  return wizardOptions;
};

getWizards(WIZARDS_NUMBER);

document.querySelector('.setup-similar').classList.remove('hidden');
