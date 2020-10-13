def IR_SendData(data: any):
    pins.analog_write_pin(AnalogPin.P0, 511)
    pins.analog_set_period(AnalogPin.P0, 26)
    control.wait_micros(9000)
    pins.analog_write_pin(AnalogPin.P0, 0)
    control.wait_micros(4500)
    for i in range(8):
        pins.analog_write_pin(AnalogPin.P0, 511)
        control.wait_micros(560)
        pins.analog_write_pin(AnalogPin.P0, 0)
        control.wait_micros(560)
    for i in range(8):
        pins.analog_write_pin(AnalogPin.P0, 511)
        control.wait_micros(560)
        pins.analog_write_pin(AnalogPin.P0, 0)
        control.wait_micros(1685)
    tempdata = data
    for i in range(8):
        if(tempdata & 0x01 ==0x01 ):
            pins.analog_write_pin(AnalogPin.P0, 511)
            control.wait_micros(560)
            pins.analog_write_pin(AnalogPin.P0, 0)
            control.wait_micros(1685)
        else:
            pins.analog_write_pin(AnalogPin.P0, 511)
            control.wait_micros(560)
            pins.analog_write_pin(AnalogPin.P0, 0)
            control.wait_micros(560)
        tempdata>>1
    tempdata = ~data
    for i in range(8):
        if(tempdata & 0x01 ==0x01 ):
            pins.analog_write_pin(AnalogPin.P0, 511)
            control.wait_micros(560)
            pins.analog_write_pin(AnalogPin.P0, 0)
            control.wait_micros(1685)
        else:
            pins.analog_write_pin(AnalogPin.P0, 511)
            control.wait_micros(560)
            pins.analog_write_pin(AnalogPin.P0, 0)
            control.wait_micros(560)
        tempdata>>1
    pins.analog_write_pin(AnalogPin.P0, 511) 
 

while True:
    IR_SendData(0x8)
    
