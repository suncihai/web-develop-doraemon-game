var app=angular.module('app',[]);

app.controller('myCtrl',function($scope,$interval,$timeout){
    $scope.doraemongameswitch1=true;
    $scope.doraemongameswitch2=false;

    $scope.switchdoraemongame=function(value){
        $scope.doraemongameswitch1=value;
        $scope.doraemongameswitch2=!value;
        $scope.getcabbage=false;
        $scope.getsugar=false;
        $scope.showdialogwindow=false;
        $scope.showdialogwindow2=false;
        doraemon.style.left="600px";
        doraemon.style.top="270px";
        cabbage.style.left="790px";
        cabbage.style.top="280px";
        sugar.style.left="650px";
        sugar.style.top="280px";
        bluebutterfly.style.left="1200px";
        bluebutterfly.style.top="230px";
        greenbutterfly.style.left="50px";
        greenbutterfly.style.top="350px";
        daytimeOn=true;
        afternoonOn=false;
        nightOn=false;
        $scope.afternoonOn=false;
        $scope.nightOn=false;
    }

    //doraemon game app
    //get each charactor element
    var doraemon=document.getElementById('doraemon');
    var nobita=document.getElementById('nobita');
    var cabbage=document.getElementById('cabbage');
    var sugar=document.getElementById('sugar');
    var bluebutterfly=document.getElementById('bluebutterfly');
    var greenbutterfly=document.getElementById('greenbuterfly');
    var eagle=document.getElementById('eagle');
    
    //set time-change flag off
    $scope.switchtime=false;
    $scope.afternoon=false;
    $scope.night=false;
    $scope.showbutterfly=true;
    $scope.showeagle=false;
    
    //initial is daytime
    var daytimeOn=true;
    var afternoonOn=false;
    var nightOn=false;
    
    //switch time among daytime,afternoon and night
    $scope.switchgametime=function(){
        $scope.switchtime=true;
        if(daytimeOn){
            $timeout(function(){
                $scope.switchtime=false;
                $scope.afternoon=true;
                daytimeOn=false;
                afternoonOn=true;
                nightOn=false;
            },1500);
        }
        if(afternoonOn){
            $timeout(function(){
                $scope.switchtime=false;
                $scope.afternoon=false;
                $scope.showbutterfly=false;
                $scope.night=true;
                daytimeOn=false;
                afternoonOn=false;
                nightOn=true;
            },1500);
        }
        if(nightOn){
            $timeout(function(){
                $scope.switchtime=false;
                $scope.night=false;
                $scope.showbutterfly=true;
                daytimeOn=true;
                afternoonOn=false;
                nightOn=false;
            },1500);
        }
    }
    
    //start the game
    $scope.doraemongamestart=function(){
        doraemon.style.left="600px";
        doraemon.style.top="270px";
        cabbage.style.left="790px";
        cabbage.style.top="280px";
        sugar.style.left="650px";
        sugar.style.top="280px";
        nobita.style.left="200px";
        nobita.style.top="350px";
        bluebutterfly.style.left="1200px";
        bluebutterfly.style.top="230px";
        greenbutterfly.style.left="50px";
        greenbutterfly.style.top="350px";
        eagle.style.left="0px";
        eagle.style.top="0px";
        cabbage.style.transition="ease-out 1s";
        nobitamoving();
        bluebutterflymoving();
        greenbutterflymoving();
    }
    
    /*the timer is to cancel the walking effect if charactor does not 
    finish one step walking while click again*/
    var downMovingtimer=0;
    var upMovingtimer=0;
    var leftMovingtimer=0;
    var rightMovingtimer=0;
    
    //change left foot and right foot flag
    //doraemon_direction shows which direction he current faces
    var downMovingStep=false;
    var upMovingStep=false;
    var leftMovingStep=false;
    var rightMovingStep=false;
    var doraemon_direction="";
    
    //If doraemon get items,these flags will be changed
    //If doraemon already took one item, he cannot take other items anymore
    var buycabbageOn=false;
    var carryItem=false;
    var carryCabbage=false;
    var carrySugar=false;
    var handEmpty=true;
    
    //get direction information from html, then tells charator to move different directions
    $scope.charactermoving=function(direction){
        switch(direction){
            case "up":
                 upMoving(doraemon);
                 break;
            case "down":
                 downMoving(doraemon);
                 break;
            case "left":
                 leftMoving(doraemon);
                 break;
            case "right":
                 rightMoving(doraemon);
                 break;
            default:
                 break;
        }
    }
    
    //bluebutterfly moving function
    function bluebutterflymoving(){
        var randomX=50+Math.ceil(Math.random()*900);
        var randomY=50+Math.ceil(Math.random()*600);
        var tmpX=bluebutterfly.style.left;
        var tmpY=bluebutterfly.style.top;
        var currentX=parseInt(tmpX.substring(0,tmpX.length-2));
        var currentY=parseInt(tmpY.substring(0,tmpY.length-2));

        if(Math.abs(currentX-randomX)>600||Math.abs(currentY-randomY)>600){
            var randomTime=10+Math.ceil(Math.random()*5);
        }else if(Math.abs(currentX-randomX)<300&&Math.abs(currentY-randomY)<300){
            var randomTime=3+Math.ceil(Math.random()*4);
        }else{
            var randomTime=5+Math.ceil(Math.random()*5);
        }
        
        bluebutterfly.style.transition="ease "+randomTime+"s";
        bluebutterfly.style.left=randomX+"px";
        bluebutterfly.style.top=randomY+"px";
        $timeout(bluebutterflymoving,randomTime*1000+100);
    }
    
    //greenbutterfly moving function
    function greenbutterflymoving(){
        var randomX=50+Math.ceil(Math.random()*900);
        var randomY=50+Math.ceil(Math.random()*600);
        var tmpX=greenbutterfly.style.left;
        var tmpY=greenbutterfly.style.top;
        var currentX=parseInt(tmpX.substring(0,tmpX.length-2));
        var currentY=parseInt(tmpY.substring(0,tmpY.length-2));

        if(Math.abs(currentX-randomX)>600||Math.abs(currentY-randomY)>600){
            var randomTime=10+Math.ceil(Math.random()*5);
        }else if(Math.abs(currentX-randomX)<300&&Math.abs(currentY-randomY)<300){
            var randomTime=3+Math.ceil(Math.random()*4);
        }else{
            var randomTime=5+Math.ceil(Math.random()*5);
        }
        
        greenbutterfly.style.transition="ease "+randomTime+"s";
        greenbutterfly.style.left=randomX+"px";
        greenbutterfly.style.top=randomY+"px";
        $timeout(greenbutterflymoving,randomTime*1000+100);
    }
    
    //nobita automatically moving, he will walking one step each 1100ms
    function nobitamoving(){
       var directionRandom=Math.ceil(Math.random()*4);
       switch(directionRandom){
          case 1:
            upMoving(nobita);
            break;
          case 2:
            downMoving(nobita);
            break;
          case 3:
            leftMoving(nobita);
             break;
          case 4:
            rightMoving(nobita);
            break;
          default:
            break;
       }
       $timeout(nobitamoving,1100);
    }
    
    /*each direction's moving function,if doraemon calls it,doraemon_direction will be changed,
    left foot or right foot flag changes, then get the current position and let them plus or
    minus 15px to move,if doraemon calls,also need judge if he is carrying items. If so,items
    should also move together with him. As for up and down moving, after each step moving,
    charactor's z-index relationship need to be updated using judgeZindex function.(If one's
    top is larger than the other,its z-index should be also larger than other's)*/
    function downMoving(charactor){
        $timeout.cancel(downMovingtimer);
        if(charactor===doraemon){
            doraemon_direction="down"; 
        }
        downMovingStep=!downMovingStep;
        var tmp=charactor.style.top;
        var currentY=parseInt(tmp.substring(0,tmp.length-2));

        if(currentY<=655){
           if(downMovingStep){
              if(charactor===doraemon){
                   charactor.style.background="url(images/down2.png) no-repeat center";
              }else if(charactor===nobita){
                   charactor.style.background="url(images/nobita_down2.png) no-repeat center";
              }
            }else{
                if(charactor===doraemon){
                    charactor.style.background="url(images/down3.png) no-repeat center";  
                }else if(charactor===nobita)
                charactor.style.background="url(images/nobita_down3.png) no-repeat center";
            }
            charactor.style.transition="ease-in 0.3s";
            charactor.style.top=currentY+15+"px";
            if(carryItem&&charactor===doraemon){
                if(carryCabbage){
                    itemMoving(cabbage,doraemon_direction);
                }
                if(carrySugar){
                    itemMoving(sugar,doraemon_direction);
                }
            }

            downMovingtimer=$timeout(function(){
                charactor.style.transition="ease-out 0.3s";
                tmp=charactor.style.top;
                currentY=parseInt(tmp.substring(0,tmp.length-2));
                if(charactor===doraemon){
                    charactor.style.background="url(images/down1.png) no-repeat center";   
                }else if(charactor===nobita){
                    charactor.style.background="url(images/nobita_down1.png) no-repeat center";                    
                }
                charactor.style.top=currentY+15+"px";
                if(carryItem&&charactor===doraemon){
                    if(carryCabbage){
                        itemMoving(cabbage,doraemon_direction);
                    }
                    if(carrySugar){
                        itemMoving(sugar,doraemon_direction);
                    }
                }
                judgeZindex(charactor);
                // console.log("top: "+charactor.style.top);
            },350);
        }
    }

    function upMoving(charactor){
        $timeout.cancel(upMovingtimer);
        if(charactor===doraemon){
            doraemon_direction="up";
        }
        upMovingStep=!upMovingStep;
        var tmp=charactor.style.top;
        var currentY=parseInt(tmp.substring(0,tmp.length-2));

        if(upMovingStep){
            if(charactor===doraemon){
                charactor.style.background="url(images/up2.png) no-repeat center";
            }else if(charactor===nobita){
                charactor.style.background="url(images/nobita_up2.png) no-repeat center";
            }
        }else{
            if(charactor===doraemon){
                charactor.style.background="url(images/up3.png) no-repeat center";
            }else if(charactor===nobita){
                charactor.style.background="url(images/nobita_up3.png) no-repeat center";
            }
        }
        charactor.style.transition="ease-in 0.3s";
        if(currentY>=300){
            charactor.style.top=currentY-15+"px";

            if(carryItem&&charactor===doraemon){
                if(carryCabbage){
                    itemMoving(cabbage,doraemon_direction);
                }
                if(carrySugar){
                    itemMoving(sugar,doraemon_direction);
                }
            }
        }

        upMovingtimer=$timeout(function(){
            charactor.style.transition="ease-out 0.3s";
            tmp=charactor.style.top;
            currentY=parseInt(tmp.substring(0,tmp.length-2));
            if(charactor===doraemon){
                charactor.style.background="url(images/up1.png) no-repeat center";
            }else if(charactor===nobita){
                charactor.style.background="url(images/nobita_up1.png) no-repeat center";
            }
            if(currentY>=320){
                charactor.style.top=currentY-15+"px";
                if(carryItem&&charactor===doraemon){
                    if(carryCabbage){
                        itemMoving(cabbage,doraemon_direction);
                    }
                    if(carrySugar){
                        itemMoving(sugar,doraemon_direction);
                    }
                }
                judgeZindex(charactor);
            }
            // console.log("top: "+charactor.style.top);
        },300);
    }

    function leftMoving(charactor){
        $timeout.cancel(leftMovingtimer);
        if(charactor===doraemon){
            doraemon_direction="left";     
        }
        leftMovingStep=!leftMovingStep;
        var tmp=charactor.style.left;
        var currentX=parseInt(tmp.substring(0,tmp.length-2));

        if(currentX>=30){
            if(leftMovingStep){
                if(charactor===doraemon){
                    charactor.style.background="url(images/left2.png) no-repeat center";       
                }else if(charactor===nobita){
                    charactor.style.background="url(images/nobita_left2.png) no-repeat center";         
                }
            }else{
                if(charactor===doraemon){
                    charactor.style.background="url(images/left3.png) no-repeat center";
                }else if(charactor===nobita){
                    charactor.style.background="url(images/nobita_left3.png) no-repeat center";
                }
            }
            charactor.style.transition="ease-in 0.3s";
            charactor.style.left=currentX-15+"px";

            if(carryItem&&charactor===doraemon){
                    if(carryCabbage){
                        itemMoving(cabbage,doraemon_direction);
                    }
                    if(carrySugar){
                        itemMoving(sugar,doraemon_direction);
                    }
            }

            leftMovingtimer=$timeout(function(){
                charactor.style.transition="ease-out 0.3s";
                tmp=charactor.style.left;
                currentX=parseInt(tmp.substring(0,tmp.length-2));
                if(charactor===doraemon){
                    charactor.style.background="url(images/left1.png) no-repeat center";
                }else if(charactor===nobita){
                    charactor.style.background="url(images/nobita_left1.png) no-repeat center";
                }
                charactor.style.left=currentX-15+"px";

                if(carryItem&&charactor===doraemon){
                    if(carryCabbage){
                        itemMoving(cabbage,doraemon_direction);
                    }
                    if(carrySugar){
                        itemMoving(sugar,doraemon_direction);
                    }
                }
                // console.log("left: "+charactor.style.left);
            },350);
        }
    }

    function rightMoving(charactor){
        $timeout.cancel(rightMovingtimer);
        if(charactor===doraemon){
            doraemon_direction="right";
        }
        rightMovingStep=!rightMovingStep;
        var tmp=charactor.style.left;
        var currentX=parseInt(tmp.substring(0,tmp.length-2));

        if(currentX<=1270){
            if(rightMovingStep){
                if(charactor===doraemon){
                    charactor.style.background="url(images/right2.png) no-repeat center";
                }else if(charactor===nobita){
                    charactor.style.background="url(images/nobita_right2.png) no-repeat center";
                }
            }else{
                if(charactor===doraemon){
                   charactor.style.background="url(images/right3.png) no-repeat center";
                }else if(charactor===nobita){
                   charactor.style.background="url(images/nobita_right3.png) no-repeat center";
                }
            }
            charactor.style.transition="ease-in 0.3s";
            charactor.style.left=currentX+15+"px";
            if(carryItem&&charactor===doraemon){
                if(carryCabbage){
                    itemMoving(cabbage,doraemon_direction);
                }
                if(carrySugar){
                    itemMoving(sugar,doraemon_direction);
                }
            }

            rightMovingtimer=$timeout(function(){
                charactor.style.transition="ease-out 0.3s";
                tmp=charactor.style.left;
                currentX=parseInt(tmp.substring(0,tmp.length-2));
                if(charactor===doraemon){
                    charactor.style.background="url(images/right1.png) no-repeat center";
                }else if(charactor===nobita){
                    charactor.style.background="url(images/nobita_right1.png) no-repeat center";
                }
                charactor.style.left=currentX+15+"px";
                if(carryItem&&charactor===doraemon){
                    if(carryCabbage){
                        itemMoving(cabbage,doraemon_direction);
                    }
                    if(carrySugar){
                        itemMoving(sugar,doraemon_direction);
                    }
                }
                // console.log("left: "+charactor.style.left);
            },350);
        }
    }
    
    //show dialoge window if doraemon is nearby the vending machine
    $scope.buycabbage=function(){
        var tmp1=doraemon.style.left;
        var tmp2=doraemon.style.top;
        var currentX=parseInt(tmp1.substring(0,tmp1.length-2));
        var currentY=parseInt(tmp2.substring(0,tmp2.length-2));
        console.log(currentX);
        console.log(currentY);

        if(currentX>680&&currentX<790&&currentY<310){
            gamedialog();
        }
    }

    //choice to buy cabbage
    $scope.selectdialog=function(value){
        $scope.showdialogwindow=false;
        $scope.showdialogwindow2=false;
        buycabbageOn=value;
        if(buycabbageOn){
            $scope.getcabbage=true;
            $scope.getsugar=true;
            $timeout(function(){
               cabbage.style.left="830px";
               cabbage.style.top="330px";
            },300);
        }
    }
    
    //A button function, let doraemon take items if items nearby
    $scope.Abutton=function(){
        if($scope.getcabbage||$scope.getsugar){
            var tmp1=doraemon.style.left;
            var tmp2=doraemon.style.top;
            var currentX1=parseInt(tmp1.substring(0,tmp1.length-2));
            var currentY1=parseInt(tmp2.substring(0,tmp2.length-2));

            var tmp3=cabbage.style.left;
            var tmp4=cabbage.style.top;
            var currentX2=parseInt(tmp3.substring(0,tmp3.length-2));
            var currentY2=parseInt(tmp4.substring(0,tmp4.length-2));
            
            var tmp5=sugar.style.left;
            var tmp6=sugar.style.top;
            var currentX3=parseInt(tmp5.substring(0,tmp5.length-2));
            var currentY3=parseInt(tmp6.substring(0,tmp6.length-2));

            if(currentX1>=(currentX2-70)&&currentX1<=(currentX2+70)&&currentY1>=(currentY2-70)&&currentY1<=(currentY2+70)){
                takeItem(cabbage,currentX1,currentY1);
                handEmpty=false;
            }
            if(currentX1>=(currentX3-70)&&currentX1<=(currentX3+70)&&currentY1>=(currentY3-70)&&currentY1<=(currentY3+70)&&handEmpty){
                takeItem(sugar,currentX1,currentY1);
            }
        }     
    }
    
    //decide which item will doraemon take
    function takeItem(item,currentX,currentY){
        item.style.transition="ease-in 0.3s";
        if(item===cabbage){
            item.style.left=currentX+"px";
            item.style.top=currentY-15+"px";
            carryCabbage=true;
        }
        if(item===sugar){
            item.style.left=currentX-15+"px";
            item.style.top=currentY+30+"px";
            carrySugar=true;
        }
        carryItem=true;
    }
    
    //if doraemon carries item, item will also be moving
    function itemMoving(item,direction){
        item.style.transition="ease-in 0.3s";
        var tmpX=item.style.left;
        var tmpY=item.style.top;
        var currentX=parseInt(tmpX.substring(0,tmpY.length-2));       
        var currentY=parseInt(tmpY.substring(0,tmpY.length-2));

        switch(direction){
            case "up":
                item.style.top=currentY-15+"px";
                break;
            case "down":
                item.style.top=currentY+15+"px";
                break;
            case "left":
                item.style.left=currentX-15+"px";
                break;
            case "right":
                item.style.left=currentX+15+"px";
                break;
            default:
                break;
        }
    }
    
    //if doraemon is not carrying anything, press B button will summon a bird to come
    var summonbird=true;
    
    //B button function
    $scope.Bbutton=function(){
        var tmp1=doraemon.style.left;
        var tmp2=doraemon.style.top;
        var currentX1=parseInt(tmp1.substring(0,tmp1.length-2));
        var currentY1=parseInt(tmp2.substring(0,tmp2.length-2));

        var tmp3=cabbage.style.left;
        var tmp4=cabbage.style.top;
        var currentX2=parseInt(tmp3.substring(0,tmp3.length-2));
        var currentY2=parseInt(tmp4.substring(0,tmp4.length-2));
        
        var tmp5=sugar.style.left;
        var tmp6=sugar.style.top;
        var currentX3=parseInt(tmp5.substring(0,tmp5.length-2));
        var currentY3=parseInt(tmp6.substring(0,tmp6.length-2));

        if(carryItem){            
            if(carryCabbage){
                putoffItem(cabbage,currentX1,currentY1);
            }
            if(carrySugar){
                putoffItem(sugar,currentX1,currentY1);
            }
            carryItem=false;
            carryCabbage=false;
            carrySugar=false;
            handEmpty=true;
        }
        //summon a bird if hand is empty
        else if(!carryItem&&summonbird){
            summonbird=false;
            $scope.showeagle=true;
            eagle.style.transition="ease-out 7s";
            $timeout(function(){
               eagle.style.left=tmp1;
               eagle.style.top=currentY1-30+"px";
            },200);

            $timeout(function(){
               eagle.style.transition="ease-in 5s";
            },7400)

            $timeout(function(){
                eagle.style.left="1250px";
                eagle.style.top="0px";
            },7600);

            $timeout(function(){
                $scope.showeagle=false;
                eagle.style.transition="0s";
                eagle.style.left="0px";
                summonbird=true;
            },12800);
        }
    }
    
    //put off items
    function putoffItem(item,currentX,currentY){
        if(doraemon_direction=="right"){
            item.style.left=currentX+30+"px";
            item.style.top=currentY+50+"px";             
        }else if(doraemon_direction=="left"){
            item.style.left=currentX-30+"px";
            item.style.top=currentY+50+"px"; 
        }else if(doraemon_direction=="down"){
            item.style.left=currentX-5+"px";
            item.style.top=currentY+60+"px";
        }else if(doraemon_direction=="up"){
            item.style.left=currentX-30+"px";
            item.style.top=currentY+50+"px";
        }
    }
    
    //buy the cabbage
    function gamedialog(){
        if($scope.getcabbage){
           $scope.showdialogwindow2=true;
        }else{
           $scope.showdialogwindow=true;
        }
    }
    
    //judge z-index relationship
    function judgeZindex(charactor){
        var tmp1=charactor.style.top;
        var currentY1=parseInt(tmp1.substring(0,tmp1.length-2));

        var tmp2=cabbage.style.top;
        var currentY2=parseInt(tmp2.substring(0,tmp2.length-2));

        var currentY3=475;
        
        if(carryItem){
            if(currentY1>currentY3){
                charactor.style.zIndex=16;
                cabbage.style.zIndex=16;
                sugar.style.zIndex=16;
            }else{
                charactor.style.zIndex=10;
                cabbage.style.zIndex=10;
                sugar.style.zIndex=10;
            }
        }else{
            if(currentY1>currentY3){
                charactor.style.zIndex=16;
                cabbage.style.zIndex=10;
                sugar.style.zIndex=10;
            }else{
                if(currentY1+60>currentY2){
                    charactor.style.zIndex=12;
                    cabbage.style.zIndex=10;
                    sugar.style.zIndex=10;
                }else{
                    charactor.style.zIndex=10;
                    cabbage.style.zIndex=12;
                    sugar.style.zIndex=12;
                }
            }
        }
    }
})