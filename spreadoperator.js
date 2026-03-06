let arr=[1,2,3]
let cpar=[...arr,20]
console.log(arr)
console.log(cpar)
let o={a:10}
let copyo={...o,b:10}
//merge
let ar1=[10,20]
let ar2=[30,40]
let mergedAr=[...ar1,...ar2]
console.log(mergedAr)
//

   let user = {
     id: 101,
    name: "Ravi",
    preferences: {
   theme: "dark",
   language: "en"
                }
              };
              let copyUser={
               id: 101,
                name: "yogesh",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };
              
            let shallowcopy={...user}
              console.log(shallowcopy)
              console.log(copyUser)
