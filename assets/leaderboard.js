let userScores = JSON.parse(localStorage.getItem('userScores'));
    for (let i = 0; i < userScores.length; i++) {
        console.log(userScores[i].score);
        console.log(userScores[i].userInitial);
        let listItem = document.createElement('LI');
        let textNode = document.createTextNode(userScores[i].userInitial + ' = ' + userScores[i].score);
        listItem.appendChild(textNode);
        document.getElementById('leaderboard').appendChild(listItem);
    }