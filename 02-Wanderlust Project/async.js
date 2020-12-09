
function makerequest (location) {
    return new Promise((resolve, reject) => {
        console.log('Making request to ' + location)
        if (location === 'Google') {
            resolve('Google says hi')
        } else {
            reject('Sorry we can talk only with Google')
        }
    })
}

function proccessRequest (response) {
    return new Promise((resolve, reject) => {
        console.log('Proccessing response')
        resolve('Extra information ' + response)
    })
}

// makerequest('Google')
// .then((res) => {
//     console.log('Response recieved')
//     return proccessRequest(res)
// })
// .then(proccessedResponse => console.log(proccessedResponse))
// .catch(err => console.log(err))

async function doWork () {
    try {
        const res = await makerequest('Facebook')
        console.log('Response recieved')
        const preccessedResponse =  await proccessRequest(res)
        console.log(preccessedResponse)
    } catch (err) {
        console.log(err)
    }
  
}

doWork()