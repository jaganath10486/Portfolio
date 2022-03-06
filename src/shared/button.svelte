<script>
   export let type = 'primaery';
</script>

<button class="{type}">
  <slot></slot>
</button>


<style>
    button
    {
        text-align: center;
        border: none;
        padding: 10px 18px;
        border-radius: 8px;
        background-color: green;
        color: red;
        box-shadow: 1px 2p 10px green;
        cursor: pointer;
    }
    button:hover
    {
        opacity: 0.7;
    }
</style>