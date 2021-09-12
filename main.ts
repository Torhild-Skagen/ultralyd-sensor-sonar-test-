bitbot.select_model(BBModel.XL)
basic.forever(function () {
    if (bitbot.sonar(BBPingUnit.Centimeters) < 20) {
        music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
        bitbot.ledRainbow()
        bitbot.goms(BBDirection.Reverse, 35, 5000)
        bitbot.rotatems(BBRobotDirection.Left, 35, 400)
    } else {
        bitbot.go(BBDirection.Forward, 60)
        bitbot.setLedColor(0x18E600)
    }
})
