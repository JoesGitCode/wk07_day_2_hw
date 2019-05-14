const PubSub = require('../helpers/pub_sub.js')

const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function(){
  PubSub.publish('InstrumentFamilies:all-instruments-ready', this.data)
  console.log(this.data)
  console.log('InstrumentFamiles publishes the instrument ready data');

  PubSub.subscribe('SelectView:change', (event) => {
    const selectedIndex = event.detail;
    this.publishInstrumentDetail(selectedIndex);
    console.log('InstrumentFamilies has subscribed to the SelectView:change')
  });
}

InstrumentFamilies.prototype.publishInstrumentDetail = function(instrumentIndex){
  const selectedInstrument = this.data[instrumentIndex]
  PubSub.publish('InstrumentFamilies:selected-instrument-ready', selectedInstrument)
  console.log('InstrumentFamilies published the selected instrument')
}

module.exports = InstrumentFamilies;
