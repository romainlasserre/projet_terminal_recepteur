def on_received_value(name, value):
    global message
    message = value
radio.on_received_value(on_received_value)

message = 0
strip = neopixel.create(DigitalPin.P0, 44, NeoPixelMode.RGB_RGB)
range2 = strip.range(1, 11)
range1 = strip.range(13, 11)
range3 = strip.range(24, 16)
range4 = strip.range(40, 4)
strip.set_brightness(255)
radio.set_group(23)

def on_forever():
    if message == 1:
        for index in range(3):
            range1.show_color(neopixel.colors(NeoPixelColors.YELLOW))
            basic.pause(400)
            range1.show_color(neopixel.colors(NeoPixelColors.BLACK))
            basic.pause(400)
    elif message == 3:
        for index2 in range(3):
            range2.show_color(neopixel.colors(NeoPixelColors.YELLOW))
            basic.pause(400)
            range2.show_color(neopixel.colors(NeoPixelColors.BLACK))
            basic.pause(400)
basic.forever(on_forever)

def on_forever2():
    if message == 2:
        range3.set_brightness(255)
        range3.show_color(neopixel.colors(NeoPixelColors.RED))
        range4.show_color(neopixel.colors(NeoPixelColors.RED))
        basic.pause(300)
    elif message == 0:
        range3.set_brightness(50)
        range3.show_color(neopixel.colors(NeoPixelColors.BLACK))
        range4.show_color(neopixel.colors(NeoPixelColors.BLACK))
    elif message == 4:
        range3.set_brightness(50)
        range3.show_color(neopixel.colors(NeoPixelColors.RED))
        range4.show_color(neopixel.colors(NeoPixelColors.BLACK))
basic.forever(on_forever2)
