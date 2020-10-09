basic.forever(function () {
    if (true) {
        if (pins.analogReadPin(AnalogPin.P1) <= 60) {
            pins.digitalWritePin(DigitalPin.P12, 1)
        } else {
            pins.digitalWritePin(DigitalPin.P12, 0)
        }
        if (pins.analogReadPin(AnalogPin.P1) > 60) {
            pins.digitalWritePin(DigitalPin.P16, 1)
        } else {
            pins.digitalWritePin(DigitalPin.P16, 0)
        }
    }
})
