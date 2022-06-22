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
// some1('나는 첫번째 : 즉시실행')
// some3('나는 세번째 : 5초')
// some2('나는 두번째 : 2초')


const result = ()=>{
    some1('나는 첫번째 : 즉시실행')
    .then(()=>{
        return some3('나는 세번째 : 5초')
    })
    .then(()=>{
        return some2('나는 두번째 : 2초')
    })
}

result()