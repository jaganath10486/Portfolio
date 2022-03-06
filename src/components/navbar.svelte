<script>
   import {fade, slide, scale} from 'svelte/transition';
   import NavList from './../store/nav-list';
   import Tab from './../shared/Tabs.svelte';
   let activeTab = 'Home';

   const tabChange = (e) => {
       activeTab = e.detail;
   };

   let click = false;

   window.onscroll = function() {scrollFunction()};

   function scrollFunction() 
   {

     if(document.body.scrollTop > 70|| document.documentElement.scrollTop > 70) 
     {
       document.getElementsByTagName('header')[0].style.backgroundColor = "gray";
     } 
     else 
     {
       document.getElementsByTagName('header')[0].style.backgroundColor = "black";
     }

     if(document.body.scrollTop > 550 || document.documentElement.scrollTop > 550)
     {
        activeTab = 'Skills';
     }
     else
     {
       activeTab = 'Home'
     }
     if(document.body.scrollTop > 900 || document.documentElement.scrollTop > 900)
     {
       activeTab = 'Projects';
     }
     if(document.body.scrollTop > 1480 || document.documentElement.scrollTop > 1480)
     {
       activeTab = 'Contact';
     }
   }


</script>


<header>
    <div class="name">
        <p>꧁༒☬SNJNR ☬༒꧂</p>
    </div>

    <!--Mobile View-->
    <a href="#a" class="toggleButton" on:click={() => {click = !click}}>
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </a>

    <div class="nav-list" class:active={click} transition:fade>
      <Tab tabList = {$NavList} {activeTab} on:tabChange={tabChange}/>     
    </div>
</header>

<style>
    header{
        position: fixed;
        top: 0;
        overflow: hidden;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        background-color: black;
        color: whitesmoke;
        border: 1px solid black;
    }
    .toggleButton
    {
      position: absolute;
      top: 17px;
      right: 30px;
      display: none;
      flex-direction: column;
      justify-content: space-between;
      width: 30px;
      height: 22px;
    }
    .bar
    {
      width: 100%;
      height: 3px;
      background-color: white;
      border-radius: 10px;
    }

    @media screen and (max-width : 500px)
    {
       .toggleButton
       {
         display: flex;
       }
       .nav-list
       {
         width: 100%;
         display: none;
         animation: transIn 1s;
       }
       header
       {
         flex-direction: column;
         align-items: flex-start;
         display: yellow;
       }
       .nav-list.active
       {
         display: flex;
       }
       
       @keyframes transIn
        {
            0%
            {
                opacity: 0;
                transform: translateX(-100px);
            }
            100%
            {
                opacity: 1;
                transform: translateX(0px);
            }
        }
    }

</style>