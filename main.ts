input.onButtonPressed(Button.A, function () {
    basic.showNumber(First_Number)
    First_Number += 1
    basic.showNumber(First_Number)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showString("DONE")
    basic.pause(100)
    basic.showString("" + (Second_Number))
    basic.pause(100)
    basic.showString("" + (First_Number))
    First_Number = 0
    Second_Number = 0
    basic.clearScreen()
    basic.pause(500)
    basic.showString("START")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Second_Number)
    Second_Number += 1
    basic.showNumber(Second_Number)
})
let Second_Number = 0
let First_Number = 0
First_Number = 0
Second_Number = 0
basic.showString("START")
