const PubSub = require('../helpers/pub_sub.js')

const InstrumentInfoView = function(container){
    this.container = container
}

InstrumentInfoView.prototype.bindEvents = function(){
    PubSub.subscribe('InstrumentFamilies:selected-instrument-ready', (event) => {
        const instrument = event.detail
        this.render(instrument)
    })
}

InstrumentInfoView.prototype.render = function(instrument){
    this.container.innerHTML = '';

    const allHeading = document.createElement('h2');
    allHeading.textContent = `${instrument.name}`
    this.container.appendChild(allHeading);
    
    
    const infoParagraph = document.createElement('p');
    infoParagraph.textContent = `${instrument.description}`;
    this.container.appendChild(infoParagraph);
    
    const infoHeading = document.createElement('h3');
    infoHeading.textContent = `Instruments include: `
    this.container.appendChild(infoHeading);

    const allInstruments = document.createElement('p')
    allInstruments.textContent = `${instrument.instruments}`
    this.container.appendChild(allInstruments)

  };

module.exports = InstrumentInfoView;