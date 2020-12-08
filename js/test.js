const textAnim = document.querySelector('h1');

new Typewriter(textAnim, {
    // loop: true,
    deletespeed: 20
})
.changeDelay(20)
.typeString('Moi c\'est Yoda')
.pauseFor(300)
.typeString('<strong>, Dev Full-stack</strong> !')
.pause(1000)
.deleteChars(13)
.typeString('<span style="color: #27ae60;"> CSS</span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color: midnightblue;"> React</span> !')
.pauseFor(1000)
.deleteChars(7)
.typeString('<span style="color: #ea39ff;"> Php</span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color: #ff6910;"> Javascript</span> !')
.start()
