  
  import React from 'react';
  import styled from 'styled-components';
  import Header from './Header';
  import Slider from './Slider';

  var App =()=> {

    var Header = styled.section`

    width : 980px;
    height:150px;
    background-color: gray;

  `;

  var Header = styled.h2`
    
    color: orange;
    background-color:cyan;
    padding:20px;

    `;

    var Slider = styled.section`
      width:250px;
      height:250px;
      background-color:red;
    `


    return (
      <div className="App">
        <Header> 
          <h2>Heading</h2>
        </Header>

        <Slider>
          <p>
            The quick brown fox jumps over the lazy dogThe quick brown fox jumps over the lazy dog
            The quick brown fox jumps over the lazy dogThe quick brown fox jumps over the lazy dog
            The quick brown fox jumps over the lazy dogThe quick brown fox jumps over the lazy dog
            The quick brown fox jumps over the lazy dogThe quick brown fox jumps over the lazy dog
            The quick brown fox jumps over the lazy dogThe quick brown fox jumps over the lazy dog
            The quick brown fox jumps over the lazy dogThe quick brown fox jumps over the lazy dog
          </p>
        </Slider>

      </div>
    );
  }

  export default App;
