/*
    Name: Julie L Veal
    Date: 11/29/13
    Assignment: Goal2: Assignment: Duel2
   */

//self-executing function
(function(){

    console.log("FIGHT!!");

//players names

/*  var playerOneName = "Spiderman";
    var playerTwoName = "Batman";

    //player damage
    var player1Damage = 20;
    var player2Damage = 20;

    //player health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;
 */
     var fighter1 = ["Spiderman", 20, 100]
     var fighter2 = ["Batman", 20, 100]


    //initiate round
    var round=1;

    function fight(){
       console.log('in the fight function');
        alert(fighter1[0]+":"+fighter1[2]+"  *START*  "+fighter2[0]+":"+fighter2[2]);     //string can

        for (var i = 0; i < 10; i++){
            //random  formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            //inflict damage
            fighter1[2]-=f1;
            fighter2[2]-=f2;

            console.log(fighter1[0]+": "+fighter1[2] + " " + fighter2[0]+":"+fighter2[2]);

            //check for victor
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner")
            {
                round++;
                alert(fighter1[0]+":"+fighter1[2]+"  *ROUND "+round+" OVER"+"*  "+fighter2[0]+":"+fighter2[2]);

            } else{
                alert(result);
                break;
            };

        };
    };


    function winnerCheck (){
        var result="no winner";
        if (playerOneHealth<1 && playerTwoHealth<1)
        {
            result = "You Both Die";
        } else if(playerOneHealth<1){
            result =playerTwoName+" WINS!!!"
        } else if (playerTwoHealth<1)
        {
            result = playerOneName+" WINS!!!"
        };
        return result;
    };



    /*************The program gets started below**********/
    console.log('program starts')
    fight();


})();