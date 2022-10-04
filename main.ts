input.onButtonPressed(Button.A, function () {
    number += 1
    basic.showNumber(number)
})
input.onGesture(Gesture.TiltLeft, function () {
    A = number + 9
    B = number - 9
    C = number ** 2
    D = number / 3
    E = number % 4
    F = Math.sqrt(number)
    G = Math.round(3.4)
    H = Math.ceil(3.9)
    I = Math.sqrt(number)
    J = randint(0, 100)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(A)
    basic.showNumber(B)
    basic.showNumber(C)
    basic.showNumber(D)
    basic.showNumber(E)
    basic.showNumber(F)
    basic.showNumber(G)
    basic.showNumber(H)
    basic.showNumber(I)
    basic.showNumber(J)
})
input.onButtonPressed(Button.B, function () {
    number += -1
    basic.showNumber(number)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    control.reset()
})
let J = 0
let I = 0
let H = 0
let G = 0
let F = 0
let E = 0
let D = 0
let C = 0
let B = 0
let A = 0
let number = 0
basic.showNumber(0)
basic.forever(function () {
	
})
