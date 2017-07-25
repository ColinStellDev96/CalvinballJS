/*
            Calvinball (http://www.picpak.net/calvin/oldsite/images/oogy.gif) is a game with a very complicated scoring system. Your job is to write a piece of code which determines a player's final score, given their starting scrore, and various other details about the player which are relevant to the game.

            Provided below are three different player's starting scores. Uncomment one at a time to calculate the final score for that player.

            Calvinball Rules:
                1. A player's score is equal to 500 if their score is not already a number. (this is implemented below).
                2. A player's score is reduced by 300 if they are crying. Otherwise it is increased by 50.
                3. A player's score is reduced by 77 if their last play was "Q"
                4. A player gets an extra 395 points if they are in a tree, unless their last play was a number.
                5. A player's score is doubled if they are holding the broom handle, but it is tripled if they have the broom brush. Otherwise the player's score is halved.
                6. A player's score is multiplied by 1.5 if they are carrying the ball but only if they are not in a tree. Disregard this rule if the player is crying.
                7. If the player's last play was a number (not a letter), the player's score is multiplied by that amount.
        */


        //PLAYER ONE --------------------------------------------------------
        var score = 193;
        var last_play = "Q";
        var broom = "handle";
        var has_ball = false;
        var is_in_tree = false;
        var crying = false;

        /* START OF JAVASCRIPT PROGRAM (console.log included after each step to track progress)
        1. A player's score is equal to 500 if their score is not already a number. (this is implemented below).
        */
        if (typeof score != "number") {
            score = 500;
        } else {
            score = score;
        }
        console.log(score); // Player One: 193
        /*
        2. A player's score is reduced by 300 if they are crying. Otherwise it is increased by 50.
        */
        if (crying === true) {
            score = score - 300;
        } else {
            score = score + 50;
        }
        console.log(score); // Player One: 243
        /*
        3. A player's score is reduced by 77 if their last play was "Q"
        */
        if (last_play === "Q") {
            score = score - 77;
        } else {
            score = score + 0;
        }
        console.log(score); // Player One: 166
        /*
        4. A player gets an extra 395 points if they are in a tree, unless their last play was a number.
        */
         if (is_in_tree === true) {
            score = score + 395;
        } else if (last_play === 'number') {
            score = score + 0;
        } else {
            score = score + 0;
        }
        console.log(score); // Player One: 166
        /*
        5. A player's score is doubled if they are holding the broom handle, but it is tripled if they have the broom brush. Otherwise the player's score is halved.
        */
        if (broom === "handle") {
            score = score * 2;
        }else if (broom === "brush") {
            score = score * 3;
        } else {
            score = score / 2;
        }
        console.log(score); // Player One: 332
        /*
        6. A player's score is multiplied by 1.5 if they are carrying the ball but only if they are not in a tree. Disregard this rule if the player is crying.
        */
        if (has_ball === true && is_in_tree === false && crying === false) {
            score = score * 1.5;
        } else {
            score = score + 0;
        }
        console.log(score); // Player One: 332
        /*
        7. If the player's last play was a number (not a letter), the player's score is multiplied by that amount.
        */
        if (typeof last_play === "number") {
            score = score * last_play;
        } else {
            score = score + 0;
        }
        console.log(score); // Player One: 332


        // //PLAYER TWO--------------------------------------------------------
        // var score = 394;
        // var last_play = "W";
        // var broom = "none";
        // var has_ball = true;
        // var is_in_tree = true;
        // var crying = false;
        //
        // /* START OF JAVASCRIPT PROGRAM (console.log included after each step to track progress)
        // 1. A player's score is equal to 500 if their score is not already a number. (this is implemented below).
        // */
        // if (typeof score != "number") {
        //     score = 500;
        // } else {
        //     score = score;
        // }
        // console.log(score); // Player One: 193 // Player Two: 394
        // /*
        // 2. A player's score is reduced by 300 if they are crying. Otherwise it is increased by 50.
        // */
        // if (crying === true) {
        //     score = score - 300;
        // } else {
        //     score = score + 50;
        // }
        // console.log(score); // Player One: 243 // Player Two: 444
        // /*
        // 3. A player's score is reduced by 77 if their last play was "Q"
        // */
        // if (last_play === "Q") {
        //     score = score - 77;
        // } else {
        //     score = score + 0;
        // }
        // console.log(score); // Player One: 166 // Player Two: 444
        // /*
        // 4. A player gets an extra 395 points if they are in a tree, unless their last play was a number.
        // */
        //  if (is_in_tree === true) {
        //     score = score + 395;
        // } else if (last_play === 'number') {
        //     score = score + 0;
        // } else {
        //     score = score + 0;
        // }
        // console.log(score); // Player One: 166 // Player Two: 839
        // /*
        // 5. A player's score is doubled if they are holding the broom handle, but it is tripled if they have the broom brush. Otherwise the player's score is halved.
        // */
        // if (broom === "handle") {
        //     score = score * 2;
        // }else if (broom === "brush") {
        //     score = score * 3;
        // } else {
        //     score = score / 2;
        // }
        // console.log(score); // Player One: 332 // Player Two: 419.5
        // /*
        // 6. A player's score is multiplied by 1.5 if they are carrying the ball but only if they are not in a tree. Disregard this rule if the player is crying.
        // */
        // if (has_ball === true && is_in_tree === false && crying === false) {
        //     score = score * 1.5;
        // } else {
        //     score = score + 0;
        // }
        // console.log(score); // Player One: 332 // Player Two: 419.5
        // /*
        // 7. If the player's last play was a number (not a letter), the player's score is multiplied by that amount.
        // */
        // if (typeof last_play === "number") {
        //     score = score * last_play;
        // } else {
        //     score = score + 0;
        // }
        // console.log(score); // Player One: 332 // Player Two 419.5


        // //PLAYER THREE-----------------------------------------------
        // var score = "f";
        // var last_play = 1.5;
        // var broom = "brush";
        // var has_ball = true;
        // var is_in_tree = false;
        // var crying = true;
        //
        //
        // /* START OF JAVASCRIPT PROGRAM (console.log included after each step to track progress)
        // 1. A player's score is equal to 500 if their score is not already a number. (this is implemented below).
        // */
        // if (typeof score != "number") {
        //     score = 500;
        // } else {
        //     score = score;
        // }
        // console.log(score); // Player One: 193 // Player Two: 394 // Player Three: 500
        // /*
        // 2. A player's score is reduced by 300 if they are crying. Otherwise it is increased by 50.
        // */
        // if (crying === true) {
        //     score = score - 300;
        // } else {
        //     score = score + 50;
        // }
        // console.log(score); // Player One: 243 // Player Two: 444 // Player Three: 200
        // /*
        // 3. A player's score is reduced by 77 if their last play was "Q"
        // */
        // if (last_play === "Q") {
        //     score = score - 77;
        // } else {
        //     score = score + 0;
        // }
        // console.log(score); // Player One: 166 // Player Two: 444 // Player Three: 200
        // /*
        // 4. A player gets an extra 395 points if they are in a tree, unless their last play was a number.
        // */
        //  if (is_in_tree === true) {
        //     score = score + 395;
        // } else if (last_play === 'number') {
        //     score = score + 0;
        // } else {
        //     score = score + 0;
        // }
        // console.log(score); // Player One: 166 // Player Two: 839 // Player Three: 200
        // /*
        // 5. A player's score is doubled if they are holding the broom handle, but it is tripled if they have the broom brush. Otherwise the player's score is halved.
        // */
        // if (broom === "handle") {
        //     score = score * 2;
        // }else if (broom === "brush") {
        //     score = score * 3;
        // } else {
        //     score = score / 2;
        // }
        // console.log(score); // Player One: 332 // Player Two: 419.5 // Player: 600
        // /*
        // 6. A player's score is multiplied by 1.5 if they are carrying the ball but only if they are not in a tree. Disregard this rule if the player is crying.
        // */
        // if (has_ball === true && is_in_tree === false && crying === false) {
        //     score = score * 1.5;
        // } else {
        //     score = score + 0;
        // }
        // console.log(score); // Player One: 332 // Player Two: 419.5 // Player Three: 600
        // /*
        // 7. If the player's last play was a number (not a letter), the player's score is multiplied by that amount.
        // */
        // if (typeof last_play === "number") {
        //     score = score * last_play;
        // } else {
        //     score = score + 0;
        // }
        // console.log(score); // Player One: 332 // Player Two 419. // Player Three: 900
