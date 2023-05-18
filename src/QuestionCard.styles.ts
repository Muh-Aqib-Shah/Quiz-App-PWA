import { styled } from "styled-components";


export const Wrapper = styled.div`

.Quiz{
    margin: 2%;
    font-size: 100px;
    font-weight: 600;
    font-family: 'Bangers',sans-serif;
    color: blue;
  }
  .score{
    margin-top: 3%;
    font-size: x-large;
    font-weight: 500;
    color: white;
  }
.strt-btn{
  margin-top: 3%;
  width: 100px;
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
}
`