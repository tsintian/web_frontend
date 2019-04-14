import React, { Component } from 'react';
import { render } from 'react-dom';
import Table from './Table'


class App extends Component{
   

    state = {
      characters:[
        {
          'name': 'Charlie',
          'job': 'Janitor'
      },
      {
          'name': 'Mac',
          'job': 'Bouncer'
      },
      {
          'name': 'Dee',
          'job': 'Aspring actress'
      },
      {
          'name': 'Dennis',
          'job': 'Bartender'
      }
      ]
    }

    removeCharacter = index =>{
        const { characters } = this.state;
       

        this.setState({
            characters:characters.filter((character, i) =>{
                alert("index: "+String(index));
                alert("i: "+String(i));
                return i !== index;
            })
        });
      }

    render() {
      const characters = [
        {
          'name': 'Charlie',
          'job': 'Janitor'
      },
      {
          'name': 'Mac',
          'job': 'Bouncer'
      },
      {
          'name': 'Dee',
          'job': 'Aspring actress'
      },
      {
          'name': 'Dennis',
          'job': 'Bartender'
      }
      ];

      return (

        <div className = "container">
            <Table characterData = {characters}
            removeCharacter={this.removeCharacter}/>
        </div>
      );
    }
}

export default App;