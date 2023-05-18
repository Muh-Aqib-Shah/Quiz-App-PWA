import { createGlobalStyle,styled } from "styled-components";
import background from './images/background.jpg'

export const StyledWrapper = createGlobalStyle`
*{
    margin:0;
    box-sizing:border-box;
}
body{
    height: 100vh;
    background-color: #ffa600;
    background-image: url(${background});
    
}
`;


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