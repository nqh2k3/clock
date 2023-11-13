
let hrs =document.getElementById("hrs")
let min =document.getElementById("min")
let sec =document.getElementById("sec")



setInterval(()=>{
        let pushdata=new Date();
        hrs.innerHTML=(pushdata.getHours()<10 ? "0" : "")+pushdata.getHours();
        min.innerHTML=(pushdata.getMinutes()<10 ? "0" : "")+pushdata.getMinutes();
        sec.innerHTML=(pushdata.getSeconds()<10 ? "0" : "")+pushdata.getSeconds();
},1000)



