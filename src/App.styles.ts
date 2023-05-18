import { createGlobalStyle,styled } from "styled-components";

export const GlobalStyle= createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Reem+Kufi+Fun:wght@500&display=swap');

*{
    margin:0;
    box-sizing:border-box;
}
body{
    height: 100vh;
    background-color: #ffa600;
    background-color: yellow;
    overflow: hidden;
}
`

export const StyledWrapper = styled.div`

.Quiz{
    margin: 2%;
    font-size: 100px;
    font-weight: 600;
    font-family:'Reem Kufi Fun', sans-serif;
    color: darkblue;
    border-bottom: 3px solid black;
}
.score{
  margin-top: 3%;
  font-size: x-large;
  font-weight: 500;
  text-align:center;
}
.strt-btn{
  margin-top: 2%;
  width: 100px;
  height: 30px;
  background-color: white;
  color: black;
  box-shadow: 3px 3px 3px black;
}
.strt-btn:hover{
  background-color: green;
  color: white;
}
#loadingtxt{
  font-size:xx-large;
  font-weight: 500;
  margin: 50px;
  color: wheat;
}
.quest-container{
  height: 45vh;
  display: flex;
  justify-content: center;
}
.quest-box{
  width:50%;
  height: 100%;
  background-color: aqua;
}

.quest-status,.quest{
  font-size: larger;
  font-weight: 600;
  margin: 2%;
}
.answer-box{
  width: 98%;
  margin: 1%;
  height: 65%;
}
.basic{
  width: 98%;
  height: 15%;
  margin: 1.5%;
  font-size: large;
  font-weight: 400;
  border-radius: 10px 10px 10px 10px;
  background-image: linear-gradient(whitesmoke,skyblue);
}
#correct{
  background-image: linear-gradient(lawngreen,lawngreen);
}
#wrong{
  background-image: linear-gradient(red,red);
}

.next-btn{
  margin-top: 2%;
  width: 100px;
  height: 20px;
  background-color: black;
  color: white;
}
.next-btn:hover{
  background-color: indigo;
  color: black;
}`;


/*html{
    height:100%
}
body
  height:100vh;
  text-align: center;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  display:flex;
        
}

`*/