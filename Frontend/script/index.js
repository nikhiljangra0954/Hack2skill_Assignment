const button =  document.querySelector(".fetchbtn");
button.addEventListener("click",fetchList)
async function fetchList(){
    const res= await fetch(`https://h2s-assignment.onrender.com/api/retrive_data`);
    if(res.ok){
        const data = await res.json();
        console.log(data)
        renderList(data)
    }
} 

const tbody= document.querySelector("tbody")
function renderList(data){
    tbody.innerHTML=""
    const fulList = data.map((item,i)=>{
        return `<tr>
        <td>${i+1}</td>
        <td>${item.Team_name}</td>
        <td>${item.full_name}</td>
        <td>${item.email}</td>
        <td>${item.number}</td>
        <td>${item.city}</td>
        <td>${item.url}</td>
    </tr>`
    })
    tbody.innerHTML=fulList.join(" ")

}