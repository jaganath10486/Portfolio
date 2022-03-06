<script>

</script>

<div class="contact">
    <div class="item">
        <div class="tooltip">
            <a href="https://github.com/jaganath10486" target="_blank"><img src = "./../static/GitHub-Mark.png" alt="GitHub"></a>
            <span class="tooltiptext">GitHub</span>
        </div>
    </div>
    <div class="item">
        <div class="tooltip">
            <a href="https://www.instagram.com/___jaganath__as_dj_104/" target="_blank"><img src = "./../static/Instagram.png" alt="Instagram"></a>
            <span class="tooltiptext">Instagram</span>
        </div>
    </div>

    <div class="item">
        <div class="tooltip">
            <img src = "./../static/linked.png" alt="LinkedIn">
            <span class="tooltiptext">LinkedIn</span>
        </div>
    </div>

</div>

<style>

.contact
{
    width: 100%;
    display: flex;
    justify-content:space-evenly;
    align-items: center;
    height: 100px;
}
.item
{
    cursor: pointer;
    transform: scale(1);
    transition: transform 1s;
}
.item:hover
{
    transform: scale(1.02);
}
img
{
    width: 100px;
    height: 100px;
    border-radius: 6px;
}

.tooltip 
{
   position: relative;
   display: inline-block;
   border-bottom: 1px dotted black;
}

.tooltip .tooltiptext 
{
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: 50%;
  margin-left: -60px;
}

.tooltip .tooltiptext::after 
{
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: black transparent transparent transparent;
}

.tooltip:hover .tooltiptext 
{
  visibility: visible;
}

</style>