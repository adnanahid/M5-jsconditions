let youGet = 85;
let yourFriendGet = 34;

if (youGet >= 30) {
    if (yourFriendGet >= 80 ) {
        console.log("go for a lunch.")
    }
    else if (yourFriendGet < 80 && yourFriendGet >= 60){
        console.log("tell your friend, good luck next time.")
    }
    else if (yourFriendGet < 60 && yourFriendGet >= 40){
        console.log("keep your friend's message unseen.")
    }
    else {
        console.log("block your friend")
    }
}
else {
    console.log(" go to home and sleep and act sad")
}

