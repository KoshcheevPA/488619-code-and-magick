'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomIndex = function (array) {
  var random = Math.floor(Math.random() * array.length);
  return random;
};

var getRandomItem = function (array) {
  return array[getRandomIndex(array)];
};

var WIZARDS_NUMBER = 4;

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
  for (var i = 0; i < wizardOptions.length; i++) {
    fragment.appendChild(renderWizard(wizardOptions[i]));
  }
  similarListElement.appendChild(fragment);
  return wizardOptions;
};

getWizards(WIZARDS_NUMBER);

document.querySelector('.setup-similar').classList.remove('hidden');
