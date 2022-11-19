const inputBox1=document.querySelector("#inputBox1")
const inputBox2=document.querySelector("#inputBox2")
const submitBt=document.querySelector("submitBt")

const addTwoElements=()=>{
    alert(Number(inputBox1.value)+Number(inputBox2.value))
}
Addition.addEventListener('click',addTwoElements)


const addTwoElements1=()=>{
    alert(Number(inputBox1.value)-Number(inputBox2.value))
}
Substraction.addEventListener('click',addTwoElements1)

const addTwoElements2=()=>{
    alert(Number(inputBox1.value)*Number(inputBox2.value))
}
Multiplication.addEventListener('click',addTwoElements2)

const addTwoElements3=()=>{
    alert(Number(inputBox1.value)/Number(inputBox2.value))
}
Division.addEventListener('click',addTwoElements3)

































// const inputBox1=document.querySelector("inputBox1")
// const inputBox2=document.querySelector("inputBox2")
// const submitBt=document.querySelector("submitBt")
// d=[]
// function showd(d){
//     detailDiv.innerHTML+=""
//     d.map({item,index})
// }



// const addD=()=>{
//     d.push({"name":inputBox1.value,"gender":inputBox2.value})
//     inputBox1.value=""
//     inputBox2.value=""

// console.log(d)
// showd(d)
// }


// const inputBox1=document.querySelector("inputBox1")
// const submitBt=document.querySelector("submitBt")
// allTask=document.querySelector("allTask")
// let tasks=[]
// const showTask=(tasks)=>{
//     tasks.map((item,index)=>{
//         allTask.innerHTML+=<div>
//             <h1>$(item)</h1>
//             {/* <button> onclick ="${deleteTodo(index)}"> </button> */}
//         </div>

//     })
// }
// const addTask=()=>{
//     tasks.push(inputBox1.value)
//     console.log(tasks)
// }
// submitBt.addEventListener("click",addTask)