<script>
   import Button from './../shared/button.svelte';
</script>

<div class="abou">
    <div class="me">
        <p>
            Hello 👋 I am S Naga Jaganath 🥱 and I am studying 2nd Year 🤓 <b>Btech CSE</b> in <b>IIITDM Kancheepuram</b>😎
            I started learning Web Development 👩‍💻, from last 6 months.I really enjoyed while learning any new technology 🙃. I try to explore new  things 🤠
            I enjoy listening Music daily in both sad 😢 and happy 😍 moments, with songs : repeated 🥱 only, In free times watching TV 🤓 and Playing games and watching web series (GOT🤩)
            and spending time with family 👨‍👩‍👦 and friends 👨‍👦‍👦 .I am looking to Collabrate on Projects. I am available for all Freelance Works Contact Me     
        </p>
    </div>
    <div class="side">
        <div class="img">
            <img src="./../static/profile.png" alt="Profoile">
        </div>
        <div class="btn">
            <Button><a href="mailto:cs20b1070@iiitdm.ac.in">Contact Me</a></Button>
        </div>
    </div>
</div>

<style>
    .abou
    {
        display: flex;
        justify-content: space-between;
        margin : 20px 20px;
        width: 100%;
    }
    .me
    {
       font-size: 30px;
       width: 40%;
       word-break:normal;
       
    }
    .side
    {
        display: flex;
        flex-direction: column;
        margin-top: 60px;
        width: 40%;
    }
    img
    {
        width: 100%;
        height: 100vh;
    }
    .btn
    {
       text-align: center;
    }
    a
    {
        text-decoration: none;
        color: red;
    }
    @media screen and (max-width : 700px)
    {
      .abou
      {
         display: block;
      }
      .me
      {
          width: 100%;
      }
      .side
      {
          width: 100%;
      }

    }
</style>