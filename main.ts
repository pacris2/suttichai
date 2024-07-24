let Blue = 0
let Green = 0
let Red = 0
let strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
basic.forever(function () {
    Red = 0
    Green = 0
    Blue = 0
    for (let index = 0; index < 225; index++) {
        Red += 1
        Blue += -1
        strip.showColor(neopixel.rgb(Red, Green, Blue))
        basic.pause(1)
    }
    for (let index = 0; index < 225; index++) {
        Green += 1
        Red += -1
        strip.showColor(neopixel.rgb(Red, Green, Blue))
        basic.pause(1)
    }
    for (let index = 0; index < 225; index++) {
        Blue += 1
        Green += -1
        strip.showColor(neopixel.rgb(Red, Green, Blue))
        basic.pause(1)
    }
})
