//your code here
const buttonData=document.querySelector(".buttonData");
const fullname=document.querySelector(".first");
const image=document.querySelector("#user-photo");
const age=document.querySelector(".age");
const email=document.querySelector(".email");
const phone=document.querySelector(".phone");
const getuser=document.querySelector(".getUser");

const fun=()=>{
fetch("https://randomuser.me/api/").then((data)=>data.json()).then((result)=>setData(result) );

const setData=(result)=>{
    const res=result.results[0];
    console.log(res);
    // console.log(res.picture.large);
    image.setAttribute('src',res.picture.large);
     let name= res.name.first+" "+ res.name.last;
     fullname.innerHTML=name;
     age.addEventListener("click",()=> buttonData.innerHTML=res.dob.age);
     email.addEventListener("click",()=> buttonData.innerHTML=res.email);
     phone.addEventListener("click",()=> buttonData.innerHTML=res.phone);

}

}
fun();
getUser.addEventListener("click",()=> fun());


