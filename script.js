let todu_data= JSON.parse(localStorage.getItem("tododata"))
let worng_icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACIUlEQVR4nO2Zz0sUYRjHP5pGsJT2EymSpUMYBIFB9zpsC60dCtKLddqOeypPbZfsj1BP6smDCh26CB46BEWJUeFFsNJII0QU7Res8sIEw8OzO+7Ovjvv0HzgPczM83yfd5hnZp73eSEhIeG/4gbwBVgGsnXWvu5prwA5LGEC7HpjE0jXSTft6f3TNnGssOoLYsYs0BxSs9nT8esuYYn7IpAZhZCaBUUzjyWagOci2DZwvka9c8CW0Jvx4ljjNLAugr4EDtSQOi+EzgZwlgZwV3nsD6vUGFA0+mkgkyL4L+DiPn0vAD+F/zMazElgTUxiDmgN8GsBXgu/H0AHEdCrpEExwOex4nOHCJkQk/kLXC5jewn4LeyniJjjwDcxqY/AIWF3EHgn7L4Dp3CAHiUtBoXNU8XmFg4xpqTSFe9aN/BHXB/FMdpEsWfGAtAOfBDnvwJHcRBTYpeUwsx/XLJQiteVYSXX/WMIx0kBi2Umb57GYWLAVSWVzHGGmHAtzjeQqpBCn4AjOM5IwEtsXnJnycb5M9pW4Uf2XvmRHcMxxqssJUzp4Qw3lVx/ImwGFZvbOMAJpZye98pnP2al9sbFcnoi5IJmmgjpU9LiUYBPUfHpJQK0Rf3bfS7qX7mwqJ8M0VbpAnaibKvcU9LgQZUaphEmNUzDzDpnLLcWO7FI7Ju7+bi315fivsGxHPctppx3E58trK4yvg1Ea5t8CQkJuMUeuWNOUa8ZQhwAAAAASUVORK5CYII="
let worng_icon_white="data:image/png;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMCIgd2lkdGg9IjQ4LjAwMDAwMHB0IiBoZWlnaHQ9IjQ4LjAwMDAwMHB0IiB2aWV3Qm94PSIwIDAgNDguMDAwMDAwIDQ4LjAwMDAwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCI+Cgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCw0OC4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0ibm9uZSI+CjxwYXRoIGQ9Ik0xMTUgNDE5IGMtNCAtNiAxOCAtNDggNDkgLTk1IGw1NiAtODQgLTU2IC04NCBjLTUwIC03NiAtNjAgLTEwNiAtMzQgLTEwNiA1IDAgMzIgMzQgNjEgNzUgMjggNDEgNTMgNzUgNTQgNzUgMSAwIDI2IC0zNCA1NCAtNzUgMjkgLTQxIDU2IC03NSA2MSAtNzUgMjYgMCAxNiAzMCAtMzQgMTA2IGwtNTYgODQgNTYgODQgYzUwIDc2IDYwIDEwNiAzNCAxMDYgLTUgMCAtMzIgLTM0IC02MSAtNzUgLTI4IC00MSAtNTMgLTc1IC01NCAtNzUgLTEgMCAtMjYgMzQgLTU0IDc1IC01MiA3NSAtNjQgODUgLTc2IDY0eiIgZmlsbD0iI2ZmZmZmZiIvPgo8L2c+Cjwvc3ZnPg=="
if(todu_data !== null){
    getdata()
}else{
    
    localStorage.setItem("tododata",JSON.stringify([]))
    todu_data= JSON.parse(localStorage.getItem("tododata"))
    getdata()
}

function addtodo(){
    let data = document.getElementById("textfield").value
    if(data != ""){
        let count =0
        if(todu_data.length>0)count =todu_data[todu_data.length-1].id
        
        todu_data.push({id:count+1,value:data,tick:false})
        localStorage.setItem("tododata",JSON.stringify(todu_data))
        getdata()
        document.getElementById("textfield").value=""
    }else{
        alert("please enter data")
    }
}

function getdata(){
    if(todu_data.length>0){
        let data_str=""
        todu_data.forEach(element => {
            if(element)
            data_str += ` <li class="${element.tick == true ?'text-stiker ':'txtcolor'}"  onclick="tick(${element.id})">${element.tick == true ? '<div class="icons8-done"></div>':""} <div class="text-data"> ${element.value}  </div> <div> <img src="${worng_icon}" class="remove-icon" onclick="remove_data(${element.id})"></img> </div></li>` 
        });
        document.getElementById("todo-body").innerHTML=`<div class='todo-body'>${data_str}</div>`
    }else{
        document.getElementById("todo-body").innerHTML="<b>No Data</b>"
    }
}

function remove_data(id){
   todu_data= todu_data.filter(e=>e.id !== id);
   localStorage.setItem("tododata",JSON.stringify(todu_data))
   getdata()
}
function tick(id) {
    todu_data= todu_data.filter(e=>{
        if(e.id == id){ e.tick = true}
        return e
    });
    localStorage.setItem("tododata",JSON.stringify(todu_data))
    getdata()
}


