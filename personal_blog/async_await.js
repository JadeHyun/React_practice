const some1 = (number)=>{
    return new Promise((resolve,reject)=>{
        console.log(number)
        resolve()
    })
}
const some2 = (string)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log(string)
            resolve()
        },2000)
    })
}
const some3 = (string)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log(string) 
            resolve()
        },5000) 
    })
}

async function result (){
    some1('첫번째 : 즉시 실행될껄?')
    await(some3('세번째 : await에 의해 두번째로 실행 : 5초'))
    some2('두번째 : await 이 먼저 실행되고 세번째로 실행 : 2초')
}
result()