function average(scores) {
    var average = 0;
    
    if (scores.length === 0) {
        return (0);
    }
    
    for (i in scores) {
        average += scores[i];
    }
    
    return Math.round((average / scores.length));
}

console.log(average([1,2,3,4,5,6]))