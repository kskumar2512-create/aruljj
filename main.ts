input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onSound(DetectedSound.Loud, function () {
    music.play(music.stringPlayable("A G - F - A F B ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
})
basic.showString("Hello!")
