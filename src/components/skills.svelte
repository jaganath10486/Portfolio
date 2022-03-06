<script>
     let languages = [
      {
         lang : "HTML",
         value : 75
      },
      {
         lang : "CSS",
         value : 70
      },
      {
         lang : "JS",
         value : 75
      },
      {
         lang : "SVELTE",
         value : 60
      }
     ];

     let color = ['red','green','blue','orange'];
</script>

<div class="skill">
    <div class="known">
         <h5>➡Programing Languages Known:</h5>
         <ol>
            <li>➊ C</li>
            <li>➋ C++</li>
            <li>➌ Python</li>
         </ol>
         <h5>➡Web Development Languages Known:</h5>
         <ol>
             <li>➊ HTML</li>
             <li>➋ CSS</li>
             <li>➌ JS</li>
         </ol>
         <h5>➡FrameWorks Known:</h5>
         <ol>
             <li>➊ MYSQL</li>
             <li>➋ Svelte</li>
             <li>➌ Bootstrap</li>
         </ol>
    </div>
    <div class="used">
          <h5>Languages Known</h5>
          {#each languages as language,i}
          <div class="program">
              <label for={language.lang}>{language.lang}</label>
              <progress value="{language.value}" max="100" style="color: {color[i]};"></progress>
          </div>
          {/each}
        <div class="program">
            <label for="C">C,C++</label>
            <progress value="70" max="100"></progress>
        </div>

    </div>
</div>

<style>
    .skill
    {
        display: flex;
        justify-content: space-between;
    }
    .known
    {
       margin: 30px 30px;
    }
    .known ol
    {
       list-style-type: none;
    }
    .known h5
    {
        color : red;
    }
    ol li
    {
        color: green;
    }
    .used
    {
        margin: 30px 30px;
        padding: 20px;
        margin-right: 100px;
    }
    .program
    {
       margin: 20px auto;
       display: flex;
       flex-direction: column;
    }
    .program label
    {
       color: green;
    }
    .program progress
    {
        margin-top: 5px;
        margin-left: 3px;
    }
    @media screen and (max-width : 700px)
    {
       .skill
       {
         display: block;
       }
    }
</style>