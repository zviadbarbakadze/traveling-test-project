const menu=document.querySelector('.menu');
const menuContainer=document.querySelector('.menu-container')
const logo=document.querySelector('.logo');
const profilePicture=document.querySelector('.prifile-picture');
const mainContainer=document.querySelector('.main-container');
const allHappeningContainer=document.querySelector('.all-happening-container');
const exit=document.querySelector('.exit');
menu.addEventListener('click',()=>{
menuContainer.style.display="block";
logo.style.display='none';
profilePicture.style.display='none';
mainContainer.style.display='none';
allHappeningContainer.style.display='none'


});
exit.addEventListener('click',()=>{
    menuContainer.style.display='none';
    logo.style.display='block';
    profilePicture.style.display='block';
    mainContainer.style.display='block';
   allHappeningContainer.style.display='block';
   
})
