


var playButton = document.getElementById("playButton")
var pauseButton = document.getElementById("pauseButton")
var stopButton = document.getElementById("stopButton")
var nextButton = document.getElementById("nextButton")

var song1 = new Audio ("Altar.mp3")
var song2 = new Audio ("Fuzzy_Tunes.mp3")
var song3 = new Audio ("Nagra.mp3")
var song4 = new Audio ("Papa_B_Blu.mp3")
var song5 = new Audio ("UncleBibby.mp3")

var currentSong = 0


function Jukebox(){

    this.musicList = [song1, song2, song3, song4, song5];

    this.playMusic = function(){
        this.musicList[currentSong].play()
    }

    this.pauseMusic = function(){
        this.musicList[currentSong].pause()
    }

    this.stopMusic = function(){
        this.musicList[currentSong].pause()
        this.musicList[currentSong].currentTime = 0

    }

    this.nextMusic = function(){
        this.musicList[currentSong].pause()
        this.musicList[currentSong].currentTime = 0

        if(currentSong === this.musicList.length-1){
          currentSong = 0;
          this.musicList[currentSong].play()
        }else{
          currentSong = currentSong+1
          this.musicList[currentSong].play()
        }
    }
}

// var audio = new Audio("Altar.mp3")

var j = new Jukebox()

playButton.addEventListener("click", function(){
    j.playMusic()
})

pauseButton.addEventListener("click", function(){
    j.pauseMusic()
})

stopButton.addEventListener("click", function(){
    j.stopMusic()
})

nextButton.addEventListener("click", function(){
    j.nextMusic()
})
