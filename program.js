let buttonDiv = document.getElementById("button-div");

function buttonClickedMarks1(){

    let Marks1Text = '<h3>Marks</h3> <ul> <li>Area</li> <li>Lines</li> </ul>';
    let Channel = ' <h3>Channel</h3> <ul> <li>Color (Hue)</li> <ul><li>Represents the attribute of type Categorical.</li> <li>The first color is red representingvotes for Trump and the second color is blue representing the votes for Clinton</li></ul> <li>Size--> Area </li></ul>'
    buttonDiv.style.display = 'hidden';
    buttonDiv.innerHTML=Marks1Text + Channel;

}

function buttonClickedColor1(){
    let Color1 = "text goes here"

    let buttonDiv1 = document.getElementById("button-div1");

    buttonDiv1.innerHTML=Color1;
}