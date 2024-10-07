async function CheckIfRight(){
    try{
        const link = await fetch(`some link goes here`)
        if (response.ok){ //checking to see if it is a status code from 200-299
            console.log('no errors hehe :)')
        }else{ //promise got resolved but HTTP status failed
            if (response.status === 500) throw new Error('404, Not Found')
            //for any other error where promise got resolved but HTTP status failed:
            throw new Error(response.status)
        }
    }catch(error){ //if it could not fetch, this error will get sent
        console.error('Fetch', error)
    }
}