//your code here
const buttonData=document.querySelector(".buttonData");
const fullname=document.querySelector(".first");
const image=document.querySelector("#user-photo");
const age=document.querySelector(".age");
const email=document.querySelector(".email");
const phone=document.querySelector(".phone");
const getuser=document.querySelector("#getUser");

const fun=()=>{
fetch("https://randomuser.me/api/").then((data)=>data.json()).then((result)=>setData(result) );
// console.log(result);
const setData=(result)=>{
    const res=result.results[0];
    console.log(res);
    // console.log(res.picture.large);
    image.setAttribute('src',res.picture.large);
     let rname= res.name.first+" "+ res.name.last;
     fullname.innerHTML=rname;
     age.addEventListener("click",()=>{

      age.innerHTML=res.dob.age
      email.innerHTML="Email";
      phone.innerHTML="Phone"
      } );
     email.addEventListener("click",()=>{
         email.innerHTML=res.email;
         phone.innerHTML="Phone" 
age.innerHTML="Age"             });
     phone.addEventListener("click",()=>{
      phone.innerHTML=res.phone;
      email.innerHTML="Email";
      age.innerHTML="Age"  ;
     });
fun2();
}

}
fun();
const fun2=()=>{
    age.innerHTML="Age"; 
    email.innerHTML="Email";
    phone.innerHTML="Phone";
}
getuser.addEventListener("click",()=> fun());
getuser.addEventListener("click",()=> fun2());
