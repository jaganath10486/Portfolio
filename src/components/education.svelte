<script>
   
   import Card from './../shared/card.svelte';

   let study = [
       {
           instute : 'Keshava Reddy School, Panyam',
           Year : '2017-2018',
           CGPA : '9.7',
           img : './../static/school.png',
           alt : 'Keshava Reddy School',
           role : '10th Class'
       },
       {
           instute : 'Sri Chaitanya Juniour Collage, Viajayawada',
           Year : '2018-2020',
           CGPA : '9.9',
           img : './../static/inter.jpeg',
           alt : 'Sri Chaitanya Collage',
           role : 'Intermedite'
       },
       {
           instute : 'IIITDM Kancheepuram, Chennai',
           Year : '2020-2024',
           CGPA : '8.6',
           img : './../static/btech.png',
           alt : 'IIITDM Kancheepuram',
           role : 'Btech CSE'
       }
   ];

</script>

<div class="education">
    <div class="edu">
      {#each study as item}
        <div class="item">
            <div class="img">
                <img src="{item.img}" alt="{item.alt}">
            </div>
            <Card>
                    <div class="text">
                        <h2>
                            {item.instute}
                        </h2>
                        <p>
                            {item.role}, {item.Year}
                        </p>
                        <p>CGPA: <span id="cgpa">{item.CGPA}</span></p>
                    </div>
            </Card>
        </div>
    {/each}
    </div>
</div>

<style>
    .education
    {
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: flex-start;
        margin : 20px;
        background-color: lightyellow;
    }

    .edu
    {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-column-gap: 20px;
        grid-row-gap: 20px;
    }

    .item
    {
        animation: transIn 1s;
    }
    .img
    {
        text-align: center;
        transform: translateY(50px); 
    }
    img
    {
        height: 100px;
        width: 100px;
    }
    .text
    {
        text-align: center;
        padding: 30px;
        height: 250px;
    }
    .text p
    {
        font-weight: 600;
        color: red;
        font-size: 25px;
    }
    .text span
    {
        font-weight: 700;
        color: green;
        font-size: 25px;
    }

    @keyframes transIn
        {
            0%
            {
                opacity: 0;
                transform: translateY(-50px);
            }
            100%
            {
                opacity: 1;
                transform: translateY(0px);
            }
        }

    @media screen and (max-width : 700px)
    {
      .edu
      {
        grid-template-columns: auto;
        column-gap: 0px;
      }
    }
   
</style>