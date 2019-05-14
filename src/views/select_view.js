const PubSub = require('../helpers/pub_sub.js')

const SelectView = function(element){
    this.element = element;

}

SelectView.prototype.bindEvents = function(){
    PubSub.subscribe('InstrumentFamilies:all-instruments-ready', (event) => {
        console.log('SelectView subscribed to the instrument ready data');
        const allInstruments = event.detail;
        this.populate(allInstruments);
        console.log(allInstruments)
        
    })

    this.element.addEventListener('change', (event) => {
        const selectedIndex = event.target.value;
        PubSub.publish('SelectView:change', selectedIndex);
        console.log('select_view publishes the change in the instrument selected')
      });
}

SelectView.prototype.populate = function(instrumentsData){
    instrumentsData.forEach((instrument, index) => {
        const option = document.createElement('option');
        option.textContent = instrument.name;
        option.value = index;
        console.log(index)
        this.element.appendChild(option);
    })
}


module.exports = SelectView;