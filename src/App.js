import React, { Component } from 'react';

import Add from './components/Add';
import View from './components/View';
import 'semantic-ui-css/semantic.min.css'
import {Container, Input,Button} from 'semantic-ui-react';
import { uuid } from 'uuidv4';
import './css/style.css'
import Header from './components/Header'



export default class App extends Component {
  state={
      meds:[
           {
              id:uuid(),
              medname:'Flexon',
              amount: 1,
              inStore:5, /* #5 pills */
              active:'on',  
              remarks: "only after eating food",
              timings:'09:30',
            },
            {
              id:uuid(),
              medname:'Sitamol',
              amount: 1,
              inStore:5, /* #5 pills */
              active:'off',
              remarks: "only after eating food",
              timings:'21:30',
            },
            
      ],
      
  }
  

  SearchMeds=(event) =>{
    const {meds}=this.state

    let checkMed=(event.target.value).toLowerCase().trim()
    var found=[]
 meds.map((u) => { 
        let med=((u.medname).toLowerCase()).trim()
        
        if(med.includes(checkMed)){
                 found.push(u)   //display found meds
            }
                }
            )  
    this.setState( { found } )
    
};


AddMeds= (med) => {

    const {meds} =this.state
    
    this.setState({meds:[...meds,med]})
  
};

deleteMeds= (med) => {

    const {meds} =this.state
  
    this.setState(
        {
            meds: meds.filter((u) => u.id !== med[0].id )
        }
    )
    //DELETE med HERE
}

medEdit= (med) => {
    const {meds} =this.state
   
   
    for(let i=0; i<meds.length; i++){
        /* console.log(meds[i].id, ' ', i, ' ', med.id) */
      if (meds[i].id == med.id.trim()){
        var index=i
        break
      }
    }

    this.setState(meds.splice(index,1,med))

}


render() {
const {meds, found}=this.state

let searched=document.getElementById('search')
var searchVal=false
if(searched!=undefined){ 
    if(searched.value){
    var searchVal=true
    }
}
    var show={found}.found
    
    if(searchVal==false){
        var show=meds
    }


    return (
      
        <Container>
         
        <Header/>

        <div className='med-info'>
            <Add onSubmit={this.AddMeds}/>
            <Input icon="search" placeholder='Search medname' onChange={this.SearchMeds} id='search'></Input>
            <View data={ show } onDelete={this.deleteMeds} medEdit={ this.medEdit }/>
        </div>
        
        </Container>
    )
}
}