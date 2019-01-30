var placeHolders = ["Name...", "Market...", "Interest..."]

// Switch class
class Switch {
    constructor(name) {
        this.on = false;
        this.switchName = name
        this.HTMLelement = $('#' + name)
    }
    switchType() {
        return this.switchName
    }

    isOn() {
        return this.on;
    }

    isOff() {
        return !this.on;
    }

    turnOn() {
        this.on = true;
    }

    turnOff() {
        this.on = false;
    }

    getHTMLelement() {
        return this.HTMLelement;
    }

}

// All switches are originall all of, so initizialize them as off and instantiate them with their names
var nameSwitch = new Switch("nameSwitch");
var marketSwitch = new Switch("marketSwitch");
var interestSwitch = new Switch("interestSwitch");

// Turn on switch

// Detect if nameSwitch is on

// Detect if marketSwitch on

// Detect if interestSwitch is on