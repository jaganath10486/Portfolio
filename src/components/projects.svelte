<script>
   import Card from './../shared/card.svelte';
   import Button from './../shared/button.svelte';
   let array = 
   [
       {img : './../static/job.jpeg', alt : 'job'},
       {img : './../static/todo.jpg', alt : 'todo'},
       {img : './../static/date-event.jpg', alt : 'date-event'},
       {img : './../static/quiz.jpg', alt : 'quiz'},
       {img : './../static/sorting.jpg', alt : 'sorting'},   
   ];

   let website = [
        'http://jobcarrer.epizy.com/carrer.php',
        'http://jaganath104-todo.vercel.app/',
        'http://jaganath104-date-event.vercel.app/',
        'https://jaganath104-quiz.vercel.app/',
        'http://jaganath104-sorting-visualization.vercel.app/', 
      ];

</script>

<div class="project">
    <div class="proj">
      {#each array as item,i}
         <div class="item">
            <Card>
               <div class="inner">
                 <img src="{item.img}" alt="{item.alt}">
               </div>
               <div class="btn">
                <Button>
                    <a href="{website[i]}" target="_blank" >Website</a>
                 </Button>
               </div>
            </Card>
         </div>
      {/each}
      <div class="item">
        <Card>
           <div class="inner">
             <img src="./../static/GitHub-Mark.png" alt="GitHub">
           </div>
           <div class="btn">
            <Button>
                <a href="https://github.com/jaganath10486" target="_blank">More Projects</a>
             </Button>
           </div>
        </Card>
     </div>
    </div>
</div>

<style>
    .project
    {
        display: flex;
        justify-content: flex-start;
        width: 100%;
        margin: 30px 10px;
        height: fit-content;
        
    }
    .proj
    {
       display: grid;
       grid-template-columns: 380px 380px 380px;
       column-gap: 50px;
       row-gap: 30px;
    }
    .inner
    {
       padding: 20px;
       padding-bottom: 0px;
    }
    img
    {
        width: 100%;
        height: 250px; 
    }
    a
    {
        text-decoration: none;
        color: red;
    }
    .btn
    {
        text-align: center;
        background-color: azure;
    }
    @media screen and (max-width : 700px)
    {
      .proj
      {
        grid-template-columns: auto;
        column-gap: 0px;
      }

    }
</style>