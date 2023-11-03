input.onButtonPressed(Button.A, function () {
    turtle.forward(1)
})
let xmål = randint(0, 4)
let ymål = randint(0, 4)
basic.forever(function () {
    led.toggle(xmål, ymål)
    basic.pause(100)
})
