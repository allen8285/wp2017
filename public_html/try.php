<?php
$reply =$_GET["reply"];
$reply1 =$_GET["reply1"];

if($reply!=''&& $reply1=='')
math($reply);
else if($reply=='' && $reply1!='')
math1($reply1);

function math($reply){


 $reply = (1.8*$reply) +32;



 echo $reply;


 }
 function math1($reply1){


  $reply1 =($reply1-32)*(5/9);
    


      echo $reply1;


        }


        ?>
