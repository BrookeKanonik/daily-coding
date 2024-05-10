//vowels moved

function assonance(str){
    let final = []
    let vowelsAdded = []
    let vowels = ['a','e','i','o','u']

    let newStr = str.split(' ')
    for (let i=0; i<newStr.length; i++){
        if(vowels.includes(newStr[i][0].toLowerCase())){
            // let vowelsAdded = []
            let currentVal = newStr[i][0].toLowerCase()
            for (let j=i; j<newStr.length; j++){
                if(newStr[j][0] === currentVal && !final.includes(newStr[j])){
                    final.push(newStr[j])
                    console.log(final)
                }
            }
        }else {
            final.push(newStr[i])
        }
    }
    return final.join(' ')
}

assonance('if everyone ate some apples then who would even begin to eat some oranges or pears')