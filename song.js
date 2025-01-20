var sound = new Howl({
    src: ['The_Fray_-_Look_After_You_Official_Lyric_Video.mp3'],
    loop: true,
    volume: 0.1
});

function playSound() {
    sound.play();
}

// Play sound immediately on page load
playSound();

if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	setInterval(loop, 350);
}

