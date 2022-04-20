function showFlag (text: string) {
    if (text == "Player 1 Wins") {
        pins.analogWritePin(AnalogPin.P14, 99)
    } else if (text == "Player 2 Wins") {
        pins.analogWritePin(AnalogPin.P14, 924)
    } else {
        pins.analogWritePin(AnalogPin.P14, 512)
    }
}
function determineWinner (playerOneChoice: string, playerTwoChoice: string) {
    if (playerOneChoice == playerTwoChoice) {
        return "Tie Game"
    } else if (playerOneChoice == "ROCK") {
        if (playerTwoChoice == "SCISSORS") {
            return "Player 1 Wins"
        } else {
            return "Player 2 Wins"
        }
    } else if (playerOneChoice == "PAPER") {
        if (playerTwoChoice == "ROCK") {
            return "Player 1 Wins"
        } else {
            return "Player 2 Wins"
        }
    } else {
        if (playerTwoChoice == "PAPER") {
            return "Player 1 Wins"
        } else {
            return "Player 2 Wins"
        }
    }
}
radio.onReceivedValue(function (name, value) {
    if (name == "Player 1") {
        led.plot(0, 0)
        Player_1_Selection = toWord(value)
        Player_1_has_gone = true
    }
    if (name == "Player 2") {
        led.plot(4, 0)
        Player_2_Selection = toWord(value)
        Player_2_has_gone = true
    }
    if (Player_1_has_gone && Player_2_has_gone) {
        showFlag(determineWinner(Player_1_Selection, Player_2_Selection))
        Player_1_has_gone = false
        Player_2_has_gone = false
        basic.pause(2000)
        radio.sendString("RESET")
        pins.analogWritePin(AnalogPin.P14, 512)
    }
})
function toWord (num: number) {
    if (num == 0) {
        return "ROCK"
    } else if (num == 1) {
        return "PAPER"
    } else {
        return "SCISSORS"
    }
}
let Player_2_Selection = ""
let Player_1_Selection = ""
let Player_2_has_gone = false
let Player_1_has_gone = false
radio.setGroup(1)
Player_1_has_gone = false
Player_2_has_gone = false
