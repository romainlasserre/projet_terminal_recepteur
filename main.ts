radio.onReceivedValue(function (name, value) {
    message = value
})
let led2 = 0
let message = 0
let strip = neopixel.create(DigitalPin.P0, 44, NeoPixelMode.RGB_RGB)
let range2 = strip.range(1, 11)
let range1 = strip.range(13, 11)
let range3 = strip.range(24, 16)
let range4 = strip.range(40, 4)
strip.setBrightness(255)
radio.setGroup(23)
basic.forever(function () {
    if (message == 1) {
        for (let index = 0; index < 3; index++) {
            range1.showColor(neopixel.colors(NeoPixelColors.Yellow))
            basic.pause(400)
            range1.showColor(neopixel.colors(NeoPixelColors.Black))
            basic.pause(400)
        }
    } else if (message == 3) {
        for (let index = 0; index < 3; index++) {
            range2.showColor(neopixel.colors(NeoPixelColors.Yellow))
            basic.pause(400)
            range2.showColor(neopixel.colors(NeoPixelColors.Black))
            basic.pause(400)
        }
    } else if (message == 5) {
        while (message == 5) {
            range2.showColor(neopixel.colors(NeoPixelColors.Yellow))
            range1.showColor(neopixel.colors(NeoPixelColors.Yellow))
            basic.pause(400)
            range2.showColor(neopixel.colors(NeoPixelColors.Black))
            range1.showColor(neopixel.colors(NeoPixelColors.Black))
            basic.pause(400)
        }
    } else {
        range2.showColor(neopixel.colors(NeoPixelColors.Black))
        range1.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
basic.forever(function () {
    if (message == 2) {
        range3.setBrightness(255)
        range4.showColor(neopixel.colors(NeoPixelColors.Red))
        range3.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(1000)
    } else {
        range4.showColor(neopixel.colors(NeoPixelColors.Black))
        if (led2 == 0) {
            range3.showColor(neopixel.colors(NeoPixelColors.Black))
        } else {
            range3.setBrightness(50)
            range3.showColor(neopixel.colors(NeoPixelColors.Red))
        }
    }
})
basic.forever(function () {
    if (message == 0) {
        led2 = 0
    } else if (message == 4) {
        led2 = 1
    }
})
