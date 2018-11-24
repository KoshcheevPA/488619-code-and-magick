'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var wizardRandomOptions = function (wizardOption) {
  var random = Math.floor(Math.random() * wizardOption.length);
  return random;
};

var WIZARDS_NUMBER = 4;
var wizardOptions = [];

var getWizard = function () {
  var oneWizardOptions = {
    name: wizardNames[wizardRandomOptions(wizardNames)] + ' ' + wizardSurnames[wizardRandomOptions(wizardSurnames)],
    coatColor: wizardCoatColor[wizardRandomOptions(wizardCoatColor)],
    eyesColor: wizardEyesColor[wizardRandomOptions(wizardEyesColor)]
  };
  return oneWizardOptions;
};

var wizardCount = function (number) {
  for (var i = 0; i < number; i++) {
    wizardOptions.push(getWizard());
  }
};

wizardCount(WIZARDS_NUMBER);

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizardOptions.length; i++) {
  fragment.appendChild(renderWizard(wizardOptions[i]));
}

similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
