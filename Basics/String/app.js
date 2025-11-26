

let str = "hello"
let n = 2

for (let i = 0; i <= str.length - 1; i++) {
    if (i==n) {
       console.log(str[i])
    }
}






function abc(a,b){
  for (let i=0 ;i<=a.length-1 ;i++){
    
    if(i==b){
        return a[i]
    }
  }
}
console.log(abc("hello",2))






let str = "hello"
let n = "e"


for (let i = 0; i <= str.length - 1; i++) {
    if (str[i]==n) {
       console.log(i)
    }
}
