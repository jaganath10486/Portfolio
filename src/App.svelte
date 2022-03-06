<script>
   import Navbar from './components/navbar.svelte';
   import Main from './components/main.svelte';
   import Skills from './components/skills.svelte';
   import Projects from './components/projects.svelte';
   import Education from './components/education.svelte';
   import About from './components/about.svelte';
   import Contact from './components/contact.svelte';
   import Footer from './components/footer.svelte';

</script>

<Navbar></Navbar>

<main>
    <div id="Home">
        <Main/>
    </div>

    <div id="Skills">
        <h3>SKILLS</h3>
       <Skills/>
    </div>

    <div id="Projects">
        <h3>My Projects</h3>
        <Projects/>
    </div>

    <div id="education">
        <h3>My Education</h3>
        <Education/>
    </div>

    <div id="about">
        <h3>More About Me</h3>
        <About/>
    </div>

    <div id="contact">
        <h3>Contact Me</h3>
       <Contact/>
    </div>

    <Footer/>

</main>


<style>
    h3
    {
        font-size: 30px;
        font-weight: 800;
        color: red;
        text-align: center;
    }
    #education
    {
        margin-top: 80px;
    }
    #contact
    {
        margin-top: 100px;
    }
</style>