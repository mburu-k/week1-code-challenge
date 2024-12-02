if (marks > 100 || marks < 0 || isNaN(marks)){
    console.log("invalid marks.")
} else if (score > 79) {
    console.log ("Grade: A");
} else if (score >= 60) {
    console.log ("Grade: B");
} else if (score >=50) {
    console.log ("Grade: C");
}else if (score >= 40) {
    console.log ("Grade: D");
}else if (score < 40) {
    console.log ("Grade: E")
}