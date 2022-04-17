radio.onReceivedValue(function (name, value) {
    basic.showString(name)
    if (value == 0) {
        basic.showString("sends ROCK")
    } else {
        if (value == 1) {
            basic.showString("sends PAPER")
        } else {
            if (value == 3) {
                basic.showString("sends SCISSORS")
            }
        }
    }
})
basic.forever(function () {
	
})
