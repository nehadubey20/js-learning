var tweet = new Array();
let i=0;

function addTweet()
{
    tweet[i]= document.getElementById("tweet").value;
    localStorage.setItem(`${i}`,tweet);
    
    console.log(tweet[i]);
    alert("Item Added Successfully!!");

    let a= localStorage.getItem(`${i}`)
    let b= a.split(",")
    
    let show = document.getElementById("tweet-list");
    show.innerHTML += `<li>${b[i]}</li>`;
    i++;
}

function removeTweet(a){
    
    localStorage.setItem(`${i}`,(tweet[a]=""));

    let show = document.getElementById("tweet-list");
    show.removeChild(show.childNodes[a]);
    i--;
    console.log(tweet[a]);
    
}






//function add
// tweet[i]= document.getElementById("textarea").value;
    // localStorage.setItem('item',tweet)
    // alert("Item added")
    
   
    
    //  a= localStorage.getItem('item');
    //  b=a.split(",");

    // let show = document.getElementById("textarea").value;
    // show.innerHTML += `${b[i]}`;
    // i++; 
    
    // // console.log(tweet);
    // // //var a;
    // // var b= document.getElementById("textarea").value;
    // // document.getElementById("mytweets").innerHTML = b;

    //function for display
    //show.removeChild(show.childNodes[a]);
    //i--;
    // for(i=0;i<tweet.length;i++)
    // console.log(tweet[i])