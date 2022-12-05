'use strict'

var gQuests
var gCurrQuestIdx = 0

function onInit() {
    gQuests = [
        { id: 1, opts: ['Tinky Winky', 'Dipsy', 'Laa-Laa', 'Po'], correctOptIndex: 0 },
        { id: 2, opts: ['Tinky Winky', 'Dipsy', 'Laa-Laa', 'Po'], correctOptIndex: 1 },
        { id: 3, opts: ['Tinky Winky', 'Dipsy', 'Laa-Laa', 'Po'], correctOptIndex: 2 },
        { id: 4, opts: ['Tinky Winky', 'Dipsy', 'Laa-Laa', 'Po'], correctOptIndex: 3 }
    ]
    renderQuest()
}


function renderQuest() {

    var currQuest = gQuests[gCurrQuestIdx]
    var elImg = document.querySelector('img')
    elImg.src = `img/${currQuest.id}.png`

    var strHtml = ''
    for (var i = 0; i < currQuest.opts.length; i++) {
        strHtml += `<button onclick="checkAnswer(${i})">${currQuest.opts[i]}</button>`
    }

    var elOptions = document.querySelector('.options')
    elOptions.innerHTML = strHtml


}


function checkAnswer(ansIdx) {
    var correctOptIndex = gQuests[gCurrQuestIdx].correctOptIndex
    if (correctOptIndex !== ansIdx) {
        alert('Try again!')
        return
    }
    if (correctOptIndex === gQuests.length - 1) {
     alert('you pass the Teletubbies test!')   
        return
    }
    gCurrQuestIdx++
    renderQuest()
}