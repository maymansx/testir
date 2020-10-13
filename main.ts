function IR_SendData (data: number) {
    let i: number;
pins.analogWritePin(AnalogPin.P0, 511)
    pins.analogSetPeriod(AnalogPin.P0, 26)
    control.waitMicros(9000)
    pins.analogWritePin(AnalogPin.P0, 0)
    control.waitMicros(4500)
    for (i = 0; i < 8; i++) {
        pins.analogWritePin(AnalogPin.P0, 511)
        control.waitMicros(560)
        pins.analogWritePin(AnalogPin.P0, 0)
        control.waitMicros(560)
    }
for (i = 0; i < 8; i++) {
        pins.analogWritePin(AnalogPin.P0, 511)
        control.waitMicros(560)
        pins.analogWritePin(AnalogPin.P0, 0)
        control.waitMicros(1685)
    }
tempdata = data
    for (i = 0; i < 8; i++) {
        if ((tempdata & 0x01) == 0x01) {
            pins.analogWritePin(AnalogPin.P0, 511)
            control.waitMicros(560)
            pins.analogWritePin(AnalogPin.P0, 0)
            control.waitMicros(1685)
        } else {
            pins.analogWritePin(AnalogPin.P0, 511)
            control.waitMicros(560)
            pins.analogWritePin(AnalogPin.P0, 0)
            control.waitMicros(560)
        }
    tempdata >> 1
    }
tempdata = ~data
for (i = 0; i < 8; i++) {
        if ((tempdata & 0x01) == 0x01) {
            pins.analogWritePin(AnalogPin.P0, 511)
            control.waitMicros(560)
            pins.analogWritePin(AnalogPin.P0, 0)
            control.waitMicros(1685)
        } else {
            pins.analogWritePin(AnalogPin.P0, 511)
            control.waitMicros(560)
            pins.analogWritePin(AnalogPin.P0, 0)
            control.waitMicros(560)
        }
    tempdata >> 1
    }
    pins.analogWritePin(AnalogPin.P0, 511)
}

while (true) {
    IR_SendData(8)
}
