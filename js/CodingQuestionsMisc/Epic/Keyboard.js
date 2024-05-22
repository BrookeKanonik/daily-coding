//write a function that takes a string of digits each corresponding to a finger ona typists hand. return all possibilities

function typist(numbers){

    const res = [] //final arr where everything will be pushed to
    let numRef = {
        '0' : '',
        '1' : 'vfrtgb',
        '2' : 'dec',
        '3' : 'xsw',
        '4' : 'zaq' ,
        '5' : '',
        '6' : 'mjuyhn',
        '7' : 'ki',
        '8' : 'lo',
        '9' : 'p'
    }

    const dfs = (i,numbers,slate) => {
        if (i === numbers.length){
            res.push(slate.join(''))
            return;
        }

        let letters = numRef[numbers[i]]

        for (let letter of letters){
            slate.push(letter)
            dfs(i+1, numbers, slate)
            slate.pop()
        }
    }
    dfs(0, numbers, [])

    return res;



}

console.log(typist('78'))
