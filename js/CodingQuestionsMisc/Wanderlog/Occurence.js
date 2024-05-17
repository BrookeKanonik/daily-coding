//given a list of letters, see how many times they occur and then return the result in numeric descending order, but alphabetic 

function findOccur (arr) {
    let storing = {}
    for (let i = 0; i <arr.length; i++){
        if (storing[arr[i]] !== undefined){
            storing[arr[i]] += 1
        }else {
            storing[arr[i]] = 1
        }
    }

    let result = Object.keys(storing).map((key) => [key, storing[key]]).sort(function(a,b){
        if (b[1]=== a[1]){ //organize letters
            return a[0].charCodeAt()- b[0].charCodeAt()
        }
        return b[1]-a[1]
    })
    return result
}


function findOccur (arr) {
    let storing = {}
    for (let i = 0; i <arr.length; i++){
        if (storing[arr[i]] !== undefined){
            storing[arr[i]] += 1
        }else {
            storing[arr[i]] = 1
        }
    }

    let result = Object.keys(storing).map((key) => [key, storing[key]]).sort((a,b)=> b[1]-a[1])
    return sortAlpha(result)

}


function sortAlpha(result){
     for (let j=result.length-1; j >= 1; j--){
    if (result[j][0] < result[j-1][0] && result[j][1] === result[j-1][1]){
        let temp = result[j-1][0]
        result[j-1][0] = result[j][0]
        result[j][0] = temp
    }
}
return result
}