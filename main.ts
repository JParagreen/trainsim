input.onButtonPressed(Button.A, function () {
    if (running == 0) {
        running = 1
    } else {
        running = 0
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    if (axlespertrain < 10) {
        axlespertrain += 2
    } else {
        if (true) {
            axlespertrain += 10
        }
    }
    basic.showString("" + (axlespertrain))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (count))
})
input.onGesture(Gesture.TiltRight, function () {
    if (axlespertrain >= 20) {
        axlespertrain += -10
    } else {
        if (axlespertrain >= 4) {
            axlespertrain += -2
        }
    }
    basic.showString("" + (axlespertrain))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("" + (running))
})
let running = 0
let axlespertrain = 0
let count = 0
count = 0
let actintbtwnaxles = 2000
axlespertrain = 40
let actintbtwntrains = 60000
running = 0
let ontime = 500
let offtime = 1000
let halfactintbtwnaxles = actintbtwnaxles / 2
basic.forever(function () {
    if (running == 1) {
        for (let index = 0; index < axlespertrain; index++) {
            basic.pause(offtime)
            count += 1
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.pause(ontime)
            pins.digitalWritePin(DigitalPin.P0, 0)
        }
        basic.pause(actintbtwntrains)
    }
})
