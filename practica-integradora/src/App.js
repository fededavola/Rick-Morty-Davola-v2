import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Characters from './components/Characters';

import jsonRickMorty from './rickandmorty.json'



function App() {
  return (
    <div className="App">
       <header>
      <Header />
    </header>
    

<div className="tarjetas">
<div class="uk-flex uk-flex-around  uk-flex-wrap">  

  
  {
    jsonRickMorty.map(function (characters,idx) {
      return(
        <div key={ idx }>
          <Characters characters={characters} />
        </div>
      )
      
    })
  }


</div>
</div>
<footer>
      <Footer/>
    </footer>


</div>
    


    
  );
}

export default App;
