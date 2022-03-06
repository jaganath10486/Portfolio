<script>
    import {createEventDispatcher} from 'svelte';
    const  dispatch = createEventDispatcher();

    export let tabList = [];
    export let activeTab = '';
</script>

<ul>
    {#each tabList as item}
    <li on:click={() => {dispatch('tabChange',item)}}><a class:active = {item === activeTab}  
        href="#{item}">{item}</a></li>
    {:else}
      <p>Nothing to display</p>
    {/each}
</ul>

<style>
    ul
    {
        list-style-type: none;
    }
    ul li
    {
        display: inline-block;
        padding-right: 25px;
    }
    li a
    {
        text-decoration: none;
    }
    li a:hover
    {
        color : blue;
        border-bottom: 2px solid blue;
        padding-bottom: 5px;
    }
    .active
    {
        color : red;
        border-bottom: 2px solid red;
        padding-bottom: 5px;
    }

    @media screen and (max-width : 500px)
    {
        ul
        {
            width: 100%;
            text-align: center;
            background-color: gray;
        }
        ul li
        {
            display: block;
            margin: 10px auto;
            animation: transIn 1s;
        }
        li a
        {
            font-size: 20px;
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

        @keyframes transOut {
             
            0%
            {
                opacity: 1;
                transform: translateX(0px);
            }
            100%
            {
                opacity: 0;
                transform: translateX(100px);
            }
        }
    }
</style>