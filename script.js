let wheel = document.getElementsByClassName('wheel')[0], 
startButton = document.getElementsByClassName('btn-container')[0], 
myAlert = document.getElementsByClassName('alert')[0], 
myQuote = document.getElementsByClassName('quote')[0], 
myQuoteNumber = document.getElementsByClassName('number')[0], 
deg = 0, zoneSize = 36, 
symbolSegments = {
    1: "There is nothing impossible to they who will try.",
    2: "Not having the best situation, but seeing the best in your situation is the key to happiness.",
    3: "Just don’t give up trying to do what you really want to do. Where there is love and inspiration, I don’t think you can go wrong.",
    4: "Nothing is impossible. The word itself says ‘I’m possible!'",
    5: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    6: "In a gentle way, you can shake the world.",
    7: "You are never too old to set another goal or to dream a new dream.",
    8: "You don’t always need a plan. Sometimes you just need to breathe, trust, let go and see what happens.",
    9: "You can be everything. You can be the infinite amount of things that people are.",
    10: "It is during our darkest moments that we must focus to see the light."
}

startButton.addEventListener('click', () => {
    startButton.style.pointerEvents = 'none'
    deg = Math.floor(80 + Math.random() * 20) * -1 * zoneSize + 18
    wheel.style.transition = 'all 4s ease-out'
    wheel.style.transform = `rotate(${deg}deg)`
    wheel.classList.add('blur')
    setTimeout(() => {
        wheel.classList.remove('blur')
        wheel.style.transition = 'none'
        let actualDeg = deg % 360
        wheel.style.transform = `rotate(${actualDeg}deg)`
        handleWin(actualDeg * -1)
    }, 4100)
})

const handleWin = (actualDeg) => {
    let winningSymbolNr = Math.ceil(actualDeg / zoneSize)
    myQuote.textContent = symbolSegments[winningSymbolNr]
    myQuoteNumber.textContent = winningSymbolNr
    myAlert.classList.add("shown")
}

const closeAlert = () => {
    myAlert.classList.remove("shown")
    startButton.style.pointerEvents = 'auto'
}