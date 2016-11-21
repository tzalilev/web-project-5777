   $(document).ready(function(){
       var data = {name:'the 3 kings'}
       var rendered = new EJS({url:'simple.ejs'}).render(data);
       $("#footer").html(rendered);
   });