const instrumentData = require('./data/instrument_family_data.js')
const InstrumentFamilies = require('./models/instrument_families.js')
const InstrumentInfoView = require('./views/instrument_info_view.js')
const SelectView = require('./views/select_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('select#instrument-families')
  const instrumentDropdown = new SelectView(selectElement);
  instrumentDropdown.bindEvents();

  const instrumentDataModel = new InstrumentFamilies(instrumentData);
  instrumentDataModel.bindEvents();

  const infoDiv = document.querySelector('#instrument-info')
  const instrumentInfoDisplay = new InstrumentInfoView(infoDiv);
  instrumentInfoDisplay.bindEvents();
});
