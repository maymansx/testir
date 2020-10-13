cbit_IR.onPressEvent(RemoteButton.Minus, function () {
    basic.showString("Hello!")
})
function IR_SendData (data: number) {
    let i: number;
    pins.analogWritePin(AnalogPin.P0, 511)
    pins.analogSetPeriod(AnalogPin.P0, 26)
    control.waitMicros(9000)
    pins.analogWritePin(AnalogPin.P0, 0)
    control.waitMicros(4400)
    for (i = 0; i < 8; i++) {
        pins.analogWritePin(AnalogPin.P0, 511)
        control.waitMicros(500)
        pins.analogWritePin(AnalogPin.P0, 0)
        control.waitMicros(500)
    }
    for (i = 0; i < 8; i++) {
        pins.analogWritePin(AnalogPin.P0, 511)
        control.waitMicros(500)
        pins.analogWritePin(AnalogPin.P0, 0)
        control.waitMicros(1685)
    }
    for (i = 0; i < 3; i++) {
        pins.analogWritePin(AnalogPin.P0, 511)
        control.waitMicros(500)
        pins.analogWritePin(AnalogPin.P0, 0)
        control.waitMicros(1685)
        }
    for (i = 0; i < 5; i++) {
        pins.analogWritePin(AnalogPin.P0, 511)
        control.waitMicros(500)
        pins.analogWritePin(AnalogPin.P0, 0)
        control.waitMicros(500)
        } 
    for (i = 0; i < 3; i++){
        pins.analogWritePin(AnalogPin.P0, 511)
        control.waitMicros(500)
        pins.analogWritePin(AnalogPin.P0, 0)
        control.waitMicros(500)
        }
    for (i = 0; i < 5; i++) {
        pins.analogWritePin(AnalogPin.P0, 511)
        control.waitMicros(500)
        pins.analogWritePin(AnalogPin.P0, 0)
        control.waitMicros(1685)
        }    
}

cbit_IR.init(Pins.P8)
basic.forever(function () {
    IR_SendData(0x07)
})
