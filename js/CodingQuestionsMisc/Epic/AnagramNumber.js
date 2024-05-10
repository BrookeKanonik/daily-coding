//anagram number where any value other than 1 (2-9) multiplied by it produces an anagram.

function anagram(num){
    let obj = {}
    
    let total = num.toString().length
    let numStr = num.toString()
    for (let i = 0; i < total; i++){
        if (obj[numStr[i]]){
            obj[numStr[i]] += 1
        }else{
            obj[numStr[i]] = 1
        }
    }
    console.log(obj)
    for (let j=2; j <=9; j++){
        let newObj = {}
        let newNum = j * num
        newNum = newNum.toString()
        let newNumLength = newNum.toString().length
        for (let k = 0; k< newNumLength; k++){
            if (newObj[newNum[k]]){
                newObj[newNum[k]] += 1
            }else {
                newObj[newNum[k]] = 1
            }
        }
        if (JSON.stringify(newObj) === JSON.stringify(obj)){
            return true
        }
        console.log(newObj)
    }   
    return false
}