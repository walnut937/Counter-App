let score = document.getElementById('score')
let point = Number.parseInt(score.innerText)
function decrease(){
    point -= 1
    let result = check(point)
    final(result, point)
}
function increase(){
    point += 1
    let result = check(point)
    final(result, point)
}
function reset(){
    point = 0
    score.innerText = point
    score.style.color = "black"
}
function final(result, point){
    if(result == 0){
        score.innerText = `${point}`
        score.style.color = "black"
    }
    else if(result == 1){
        score.innerText = `${point}`
        score.style.color = "green"
    }
    else{
        score.innerText = `${point}`
        score.style.color = "red"
    }
}
function check(point){
    if(point == 0){
        return 0
    }
    else if(point > 0){
        return 1
    }
    else{
        return -1
    }
}