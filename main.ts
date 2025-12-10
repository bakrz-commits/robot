music.play(music.stringPlayable("C5 C5 C5 G G - - - ", 120), music.PlaybackMode.UntilDone)
basic.showLeds(`
    # # # # #
    # . . # #
    # . . . #
    # . . # #
    # # # # #
    `)
basic.forever(function () {
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x0000ff)
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x0000ff)
    music.play(music.stringPlayable("A A A A A A A A ", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # # . . #
        . . # # .
        # # . . #
        . . # # .
        # # . . #
        `)
})
