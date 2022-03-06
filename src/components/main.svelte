<script>
   import {fade,slide} from 'svelte/transition';
   import {onMount} from 'svelte';

   onMount(() => {
     const interval = setTimeout(type,1000);
   });

const textArray = ["DEVOLOPER", "PROGRAMMER", "PLAYER", "STUDENT"];
const textColor = ['red','green','yellow','blue'];
const textStyle = ['italic','normal','oblique'];
const typingDelay = 200;
const erasingDelay = 100;

let textArrayIndex = 0;
let charIndex = 0;
let textColorIndex = 0;
let textStyleIndex = 0;

function type() 
{
  if (charIndex < textArray[textArrayIndex].length) {
    if(!document.getElementsByClassName('cursor')[0].classList.contains("typing")) 
    {
      document.getElementsByClassName('cursor')[0].classList.add("typing");
    }

    document.getElementsByClassName('typed-text')[0].style.color = textColor[textColorIndex];
    document.getElementsByClassName('typed-text')[0].style.fontStyle = textStyle[textStyleIndex];
    document.getElementsByClassName('typed-text')[0].textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    document.getElementsByClassName('cursor')[0].classList.remove("typing");
  	setTimeout(erase, 1000);
  }
}

function erase() 
{
	if (charIndex > 0) 
  {
    if(!document.getElementsByClassName('cursor')[0].classList.contains("typing")) 
    {
      document.getElementsByClassName('cursor')[0].classList.add("typing");
    }
    document.getElementsByClassName('typed-text')[0].textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    document.getElementsByClassName('cursor')[0].classList.remove("typing");
    textArrayIndex++;
    textColorIndex++;
    textStyleIndex++;

    if(textArrayIndex>=textArray.length) 
    {
      textArrayIndex=0;
    }

    if(textColorIndex>=textColor.length) 
    {
      textColorIndex=0;
    }

    if(textStyleIndex>=textStyle.length) 
    {
      textStyleIndex=0;
    }

    setTimeout(type, typingDelay + 1100);
  }
}


</script>

<div class="main">
    <div class="text" transition:fade >
        <span>Hello👋 My Name is<br> S Naga Jaganath</span>
        <br>
        <span>And I am a </span>
        <span class="typed-text" ></span>
        <span class="cursor" class:typing = {false}>&nbsp;</span>
    </div>
</div>

<style>
   .main
   {
       margin-top: 50px;
       background-image: url('./../static/portfolio.png');
       height : 550px;
       background-repeat: no-repeat;
       background-size: cover;
       background-position: center;
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
   }
   .text
   {
       font-size: 35px;
       
   }
   span
   {
       color : yellow;
       font-weight: bold;
       overflow: hidden;
   }

  span.typed-text 
  {
    font-weight: 600;
    color: #dd7732;
  }
   
  span.cursor 
  {
    position: relative;
    top: 10px;
    display: inline-block;
    background-color: #ccc;
    margin-left: 0.1rem;
    width: 3px;
    animation: blink 1s infinite;
}
span.cursor.typing 
{
  animation: none;
}

@keyframes blink {
  0%  { background-color: #ccc; }
  49% { background-color: #ccc; }
  50% { background-color: transparent; }
  99% { background-color: transparent; }
  100%  { background-color: #ccc; }
}
</style>