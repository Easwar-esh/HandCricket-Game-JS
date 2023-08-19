//////////////////////////////////////////////////////////////////////////////////////
const head=document.querySelector('#head');
const tail=document.querySelector('#tail');
const toss=document.querySelector('.toss');
const bat=document.getElementById('bat')
const bowl=document.getElementById('bowl')
const chs=document.querySelector('.chooseto')
const choose=document.querySelector('.choose')
const chooseopp=document.querySelector('.chooseopp')
const choice=document.querySelector('.choice')
const instruct=document.querySelector('.instruction')
const myt=document.querySelector('.myt')
const opt=document.querySelector('.opt')
const show=document.querySelector('.show')
const detail=document.querySelector('.detail')
const video=document.querySelector('.video-container')
const blw=document.querySelector('.below');
const prt=document.querySelector('.print')
let videoPlayer = document.getElementById("videoPlayer");
let img1=document.querySelector('.imag');
videoPlayer.playbackRate=5;
var source = videoPlayer.querySelector("source");
let ch="";
let ch1="";
let op="";
bat.addEventListener('click',activate)
bowl.addEventListener('click',activate)
function activate(){
    if(!chs.classList.contains('active')){
    chs.classList.add('active');
    op=(this.id=="bat")?"Bowling":"Batting";
    ch=this.id;
    ch1=(ch=="bat")?"Batting":"Bowling";
    choose.innerHTML="("+ch1+")";
    chooseopp.innerHTML="("+op+")";
    if(ch == "bat"){
        score.classList.add('active')
    }
    else{
        scoreopp.classList.add('active')
        source.src="videos1/stance.mp4"
        videoPlayer.load(); // Load the new video source
        videoPlayer.play(); // Play the new video
        videoPlayer.playbackRate=5;
    }
        detail.innerHTML="You choose to "+ch1;
        setTimeout(()=>{
            show.style.display="none";
        },800)
        setTimeout(()=>{
            video.style.display="flex";
            blw.style.display="flex";
        },500)
        
    }
    choice.style.display="none";
}
let ar=["head","tail"]
head.addEventListener('click',findToss)
tail.addEventListener('click',findToss)

function findToss(){
    let te=Math.floor(Math.random()*2);
    console.log(tail.id,ar[te]);
    if(this.id == ar[te]){
        toss.style.display="none";
        choice.style.display="flex";
    }
    else{
        chooseCom();
        toss.style.display="none";
        choice.style.display="none";
        detail.innerHTML="Opponent choose to "+op;
        setTimeout(()=>{
            show.style.display="none";
        },800)
        setTimeout(()=>{
            video.style.display="flex";
            blw.style.display="flex";
        },500)
    }
}
let cho=["bat","bowl"];
function chooseCom(){
    let sel=Math.floor(Math.random()*2);
    chs.classList.add('active');
    op=(cho[sel]=="bat")?"Bowling":"Batting";
    ch=cho[sel];
    ch1=(ch=="bat")?"Batting":"Bowling";
    choose.innerHTML="("+ch1+")";
    chooseopp.innerHTML="("+op+")";
    if(ch == "bat"){
        score.classList.add('active')
    }
    else{
        scoreopp.classList.add('active')
        source.src="videos/stance.mp4"
        videoPlayer.load(); // Load the new video source
        videoPlayer.play(); // Play the new video
        videoPlayer.playbackRate=5;
    }
}
////////////////////////////////////////////////////////////////////////////////////////
const left=document.querySelector('.me')
const right=document.querySelector('.com')
const t=document.querySelector('.target');
const pri=document.querySelector('.minus');
const wrapper=document.querySelector('.wrapper')
////////////////////////////////////////////////////////////////////////////////////////
const team=document.querySelector('.team');
const tick=document.getElementById('tick');
let change=document.querySelector('#change');
let my=document.querySelector('.myteam');
var score=document.querySelector('.score');
var wicket=document.getElementById('wicket');
let sum=[0,0];
let w=0;
// console.log(change);
team.addEventListener('click',()=>{
    // console.log(team.value);
    if(!team.classList.contains('active')){
        my.innerHTML=team.value+":  ";
        change.innerHTML=team.value;
    }
})

tick.addEventListener('click',()=>{
    team.classList.add('active');
    team.disabled=true;
    myt.style.color="rgb(0,255,0)";
    myt.classList.add('active');
    allTick();
    for(let i of teamopp.options){
        if(i.value == team.value){
            teamopp.removeChild(i);
        }
        if(i.value == "KKR"){
            changeopp.innerHTML=teamopp.value;
            opp.innerHTML=teamopp.value+":  ";
        }
    }
})
/////////////////////////////////////////////////////////////////////////////////////
const teamopp=document.querySelector('.team-opp');
const tickopp=document.getElementById('tick-opp');
let changeopp=document.querySelector('#change-opp');
let opp=document.querySelector('.oppteam');
var scoreopp=document.querySelector('.scoreopp');
var wicketopp=document.getElementById('wicketopp');
let sumopp=0;
let wopp=0;
teamopp.addEventListener('click',()=>{
    // console.log(team.value);
    if(!teamopp.classList.contains('active')){
    opp.innerHTML=teamopp.value+":  ";
    changeopp.innerHTML=teamopp.value;
    }
})

tickopp.addEventListener('click',()=>{
    teamopp.classList.add('active');
    teamopp.disabled=true;
    opt.style.color="rgb(0,255,0)";
    opt.classList.add('active');
    allTick();
    for(let i of team.options){
        if(i.value == teamopp.value){
            team.removeChild(i);
        }
        if(i.value == "CSK"){
            my.innerHTML=team.value+":  ";
            change.innerHTML=team.value;
        }
    }
})

function allTick(){
    if(myt.classList.contains('active') && opt.classList.contains('active')){
        setTimeout(()=>{instruct.style.display="none";
    toss.style.display="flex";},200);
    }
}

////////////////////////////////////////////////////////////////////////////////////
let one=document.getElementById('one');
let two=document.getElementById('two');
let three=document.getElementById('three');
let four=document.getElementById('four');
let six=document.getElementById('six');
let cnt=document.querySelector('.controller')
////////////////////////////////////////////////////////////////////////////////////
let fin=true
one.addEventListener('click',()=>{
    if(isSelected(team,teamopp,chs) && fin){
        prt.style.color="black";
        animateBox();
        fullProcess(score,scoreopp,1);
    }
})

two.addEventListener('click',()=>{
    if(isSelected(team,teamopp,chs) && fin){
        prt.style.color="black";
        animateBox();
        fullProcess(score,scoreopp,2);
    }
})
three.addEventListener('click',()=>{
    if(isSelected(team,teamopp,chs) && fin){
        prt.style.color="black";
        animateBox();
        fullProcess(score,scoreopp,3);
    }
})
four.addEventListener('click',()=>{
    if(isSelected(team,teamopp,chs) && fin){
        prt.style.color="black";
        animateBox();
        fullProcess(score,scoreopp,4);
    }
})
six.addEventListener('click',()=>{
    if(isSelected(team,teamopp,chs) && fin){
        prt.style.color="black";
        animateBox();
        fullProcess(score,scoreopp,6);
    }
})

////////////////////////////////////////////////////////////////////////////////////////////

function FirstInnings(scor,element,index){
    let temp=Math.floor(Math.random()*7);
    temp=(temp==5)||(temp==0)?temp+1:temp;
    console.log(temp,scor)
    left.innerHTML=scor;
    right.innerHTML=temp;
    if(temp == scor){
        changeVideo(0,index);
        return true;
    }
    let add=(index==1)?temp:scor;
    sum[index]+=add;
    element.innerHTML=sum[index];
    prt.innerHTML=add+"!";
    changeVideo(add,index);
}
function SecondInnings(scor,element,index){
    let temp=Math.floor(Math.random()*7);
    temp=(temp==5)||(temp==0)?temp+1:temp;
    console.log(temp,scor)
    left.innerHTML=scor;
    right.innerHTML=temp;
    if(temp == scor){
        changeVideo(0,index);
        return true;
    }
    let add=(index==1)?temp:scor;
    sum[index]+=add;
    if(sum[index]> firstBat){
        element.style.fontWeight='bold';
        element.classList.add('active');
        whoWin();
        element.innerHTML=sum[index];
        return;
    }
    pri.innerHTML="("+(min-sum[index])+" to win)";
    element.innerHTML=sum[index];
    prt.innerHTML=add+"!";
    changeVideo(add,index);
}
let firstBat=0;
let min=0;
function checkWicket(w,element,index){
    if(w==2){
        if(firstBat==0){
            firstBat=sum[index];
            min=firstBat;
            // console.log(firstBat);
            pri.innerHTML="("+(min+1)+" to win)"; 
        }
        element.style.fontWeight='bold';
        element.classList.remove('active');
        return true;
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log(firstBat);
function fullProcess(score,scoreopp,val){
    if(ch=='bat'){
        if(score.classList.contains('active')){
            if(FirstInnings(val,score,0)){
                wicket.innerHTML=(++w);
                prt.innerHTML="OUT";
                prt.style.color="red";
                wrapper.style.boxShadow=" 0px 0px 10px 10px rgb(255,0,0)";
                setTimeout(()=>{
                    wrapper.style.boxShadow=" 0px 0px 10px 10px hsl(60, 80%, 90%)" ;
                },300);
                checkWicket(w,score,0);
                if(w==2){      
                    source.src="videos/stance.mp4"
                    videoPlayer.load(); // Load the new video source
                    videoPlayer.play(); // Play the new video
                    videoPlayer.playbackRate=5;
                    // prt.innerHTML="";  
                }
            }
        }
        else if(!score.classList.contains('active') && !scoreopp.classList.contains('active')){
            choose.innerHTML="("+op+")";
            chooseopp.innerHTML="("+ch1+")";
            // console.log(firstBat,sum)
            source.src="videos/stance.mp4"
            videoPlayer.load(); // Load the new video source
            videoPlayer.play(); // Play the new video
            videoPlayer.playbackRate=5;
            t.innerHTML=firstBat;   
            if(SecondInnings(val,scoreopp,1)){
                wicketopp.innerHTML=(++wopp);
                prt.innerHTML="OUT";
                prt.style.color="red";
                wrapper.style.boxShadow=" 0px 0px 10px 10px rgb(0,255,0)";
                setTimeout(()=>{
                    wrapper.style.boxShadow=" 0px 0px 10px 10px hsl(60, 80%, 90%)" ;
                },300);
                if(checkWicket(wopp,scoreopp,1)){
                    scoreopp.classList.add('active');
                }
            }
        }
    }
    else{
        if(scoreopp.classList.contains('active')){
            if(FirstInnings(val,scoreopp,1)){
                wicketopp.innerHTML=(++wopp);
                prt.innerHTML="OUT";
                prt.style.color="red";
                wrapper.style.boxShadow=" 0px 0px 10px 10px rgb(0,255,0)";
                setTimeout(()=>{
                    wrapper.style.boxShadow=" 0px 0px 10px 10px hsl(60, 80%, 90%)" ;
                },300);
                checkWicket(wopp,scoreopp,1);
            }
        }
        else if(!scoreopp.classList.contains('active') && !score.classList.contains('active')){
            choose.innerHTML="("+op+")";
            chooseopp.innerHTML="("+ch1+")";
            t.innerHTML=firstBat;
            if(SecondInnings(val,score,0)){
                wicket.innerHTML=(++w);
                prt.innerHTML="OUT";
                prt.style.color="red";
                wrapper.style.boxShadow=" 0px 0px 10px 10px rgb(255,0,0)";
                setTimeout(()=>{
                    wrapper.style.boxShadow=" 0px 0px 10px 10px hsl(60, 80%, 90%)" ;
                },300);
                if(checkWicket(w,score,0)){
                    score.classList.add('active');
                }
            }
        }
    }
}
function isSelected(team,teamopp,chs){
    if(team.classList.contains('active') && teamopp.classList.contains('active') && chs.classList.contains('active')){
        return true;
    }
    return false;
}
setInterval(()=>{if(w == 2 && wopp == 2){
    whoWin();
}
},2)
let rst=document.querySelector('.restart')
let go=document.querySelector('.go');
function whoWin(){
    if(!scoreopp.classList.contains('active') && score.classList.contains('active') || scoreopp.classList.contains('active') && !score.classList.contains('active')){
        if(sum[0]>sum[1]){
            pri.innerHTML="You won!"; 
            img1.src="images/win.jpg";
            video.style.display="none";
            blw.style.display="none";
            rst.style.display="flex";
            go.style.display="flex";
            wrapper.style.boxShadow=" 0px 0px 10px 10px rgb(0,255,0)";
        }
        else if(sum[0]<sum[1]){
            pri.innerHTML="You lose!"; 
            img1.src="images/lose.jpg";
            video.style.display="none";
            blw.style.display="none";
            rst.style.display="flex";
            go.style.display="flex";
            wrapper.style.boxShadow=" 0px 0px 10px 10px rgb(255,0,0)";
        }
        else{
            pri.innerHTML="Draw"; 
            video.style.display="none";
            blw.style.display="none";
            rst.style.display="flex";
            go.style.display="flex";
        }
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////

function changeVideo(val,index) {
    fin=false
    var sourceElement = videoPlayer.querySelector("source");
    let vi=(index==0)?"videos/":"videos1/";
    sourceElement.src = vi+val+".mp4"; // Change to the new video file
    
    videoPlayer.load(); // Load the new video source
    videoPlayer.play(); // Play the new video
    videoPlayer.playbackRate=5;
    setTimeout(()=>{
        videoPlayer.pause();
        sourceElement.src = vi+""; // Change to the new video file
        videoPlayer.load(); // Load the new video source
        videoPlayer.play(); // Play the new video
        videoPlayer.playbackRate=5;
        fin=true;
    },200+800)
    
}

function animateBox() {
    let position = 0;
    const animation = setInterval(() => {
        if (position >= 200) {
            clearInterval(animation);
        } else {
            position += 2;
            blw.style.transform = `translateX(${position}px)`;
        }
    }, 1);
}
// animateBox();
////////////////////////////////////////////////////////////////////////////////////////////////

go.addEventListener('click',()=>{
    location.reload();
})

/////////////////////////////////////////////////////////////////////////////////////////////////