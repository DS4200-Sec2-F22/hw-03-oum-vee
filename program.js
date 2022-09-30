
function buttonClickedMarks1(){
    let Marks1Text = '<h3>Marks</h3> <ul> <li>Area-representing the states</li> <li>Lines-representing the borders of states and how many electoral votes won per candidate</li> </ul>';

    let Channel = ' <h3>Channel</h3> <ul> <li>Color (Hue)</li> <ul><li>Represents which candidate each state voted for. This is categorical, This is effective because it efficiently points towards which candidates has the most votes.</li> <li>The first color is red representingvotes for Trump and the second color is blue representing the votes for Clinton</li></ul> <li>Size--> Area</li> <ul><li> It highlights how many votes each candidate would have and directly points out the halfway point.</li></ul> </ul>'
    let marks1_button = document.getElementById("button-div-1");
    marks1_button.innerHTML= Marks1Text + Channel;
};

function buttonClickedColor1(){
    let Color1Text = '<h3>ColorMap</h3> <ul><li> Categorical Colormap</li> <ul><li>This color map has two colors red and blue, each representing Democratic Party (Blue) and Republican Party (Red). This an effective decision because the known color of the democratic party is blue and the one of the republic party is red.</li></ul></ul> '

    let buttonDiv2 = document.getElementById("button-div-2");

    buttonDiv2.innerHTML=Color1Text;


    
};


function buttonClickedMarks2(){
    let marks_2 = "<h3> Marks</h3><ul><li>points</li></ul>"
    let channels_2 = "<h3>Channels</h3><ul><li>Color<ul><li>Represents the scoring value as compared to the averagewhere lighter colors mean the value is closer to the average</li><li>Purple shade means its below average and orange means its above average</li></ul></li><li>Position<ul><li>The x coordinate the exit velocity while the y coordinate represents the launch angle  </li><li>Towards the left side the velocity increase and towards the top the launch angle increase</li></ul></li></ul>"

    let marks2_button = document.getElementById("button-div-3");

    marks2_button.innerHTML= marks_2 + channels_2;
    

};

function buttonClickedColor2(){
    let color_2 = "<h3>Colormap</h3><ul><li>Quatitative</li><li>it is a good choice. Lighter colors are perceived as milder in magnitude therefore, they are represented as being closer to the average</li><li>instead of choosing purple they could have chosen black for below average score because it is sometimes perceived as negative while for the positive anything would work </li></ul>"

    let color2_button = document.getElementById("button-div-4");

    color2_button.innerHTML=color_2;

};

const bt1 = document.getElementById("button-1");
bt1.addEventListener('click', () => {
    bt1.style.display = 'none'
});
const bt2 = document.getElementById("button-2");
bt2.addEventListener('click', () => {
    bt2.style.display = 'none'
});

const bt3 = document.getElementById("button-3");
bt3.addEventListener('click', () => {
    bt3.style.display = 'none'
});
const bt4 = document.getElementById("button-4");
bt4.addEventListener('click', () => {
    bt4.style.display = 'none'
});
