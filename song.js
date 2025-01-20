var sound = new Howl({
    src: ['The_Fray_-_Look_After_You_Official_Lyric_video.mp3'],
    loop: true,
    volume: 0.1
});

function playSound() {
    sound.play();
}
