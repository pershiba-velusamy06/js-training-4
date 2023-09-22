


let arrayExample1= ['1','2','3']
let arrayExample2=new Array("1","2","3")
let arrayExample3=new Array('5')
let arrayExample4=Array.of(1,5)
let arrayExample6=Array.from('hai!')
let arrayExample5=Array.from([1,5,7])




let hobbies=['reading','sports']
console.log(hobbies)
hobbies.push('cooking')
console.log(hobbies)
hobbies.pop()
console.log(hobbies)
hobbies.unshift('coding')
console.log(hobbies)
hobbies.shift()
console.log(hobbies)
hobbies.splice(0,0,"good food")
console.log(hobbies)
hobbies.splice(0,1)
console.log(hobbies)
hobbies.splice(0)
console.log(hobbies)



let arrayexample1=["1","11","111"]
let arrayexample2= arrayexample1
arrayexample2.push("1111")




let arrayexample3= arrayexample1.slice()
arrayexample2.push("11111")
console.log(arrayexample1)
 arrayexample3= arrayexample1.slice()
arrayexample3.push("11111")
console.log(arrayexample1)
let array4=arrayexample3.concat(arrayexample1)
console.log(array4)




let list= 25
let listArray = [20,21,22,23,24,25]
let index=listArray.indexOf(list)
console.log(listArray[index])



let name="pershiba"
let listNameArray=['pershiba','Anu','Rama','Harenee','yazhini','buvi']
let nameIndex=listNameArray.findIndex((item)=>{
   return item===name
})
console.log(nameIndex)
name='Harenee'
let findVal=listNameArray.find((item)=>{
 return   item === name
})

 PriceVale=[10.9,5.99,6.88,9,9.9]
let tax=6;
let taxaddjustedPrice=[]
PriceVale.forEach((item)=>{
    taxaddjustedPrice.push(item+1)
})

console.log(taxaddjustedPrice)

let taxaddjustedPrice1=PriceVale.map((item)=>{
    return item+1
})
console.log(taxaddjustedPrice1)

let sortedArray=PriceVale.sort((a,b)=>{
    return a>b ? 1: a===b ? 0 :-1
})

console.log(sortedArray)
let reverseArray=sortedArray.reverse()

console.log(reverseArray,"reverseArray")

let filteredArray=sortedArray.filter((item)=>{
    return item>6
})
console.log(filteredArray)


Output:
node /tmp/IqoAUwPNwH.js
25
0
Harenee
[ 11.9, 6.99, 7.88, 10, 10.9 ]
[ 11.9, 6.99, 7.88, 10, 10.9 ]
[ 5.99, 6.88, 9, 9.9, 10.9 ]
[ 10.9, 9.9, 9, 6.88, 5.99 ]
[ 10.9, 9.9, 9, 6.88 ]	



let arrayString = 'pershiba;anu;varshini;subi'
let newArray= arrayString.split(';')
console.log(newArray,"newArray")
let joinedArray=newArray.join(',')
console.log(joinedArray)



 arrayString=[{name:'pershiba'},{name:'anu'}]
for(const [index,entry] of arrayString.entries() ){
    console.log(entry)
}

Output 
{ name: 'pershiba' }
{ name: 'anu' }



for( const keys of arrayString.keys() ){
    console.log(keys)
}

for( const values of arrayString.values() ){
    console.log(values)
}




