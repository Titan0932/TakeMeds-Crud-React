import React, { Component } from 'react'
import { Button, Form,Modal,Checkbox } from 'semantic-ui-react';
import { uuid } from 'uuidv4';



export default class Add extends Component {

    
    state={
        
    }
    

     AddData = (event) => {
        event.preventDefault();
        var med= this.props.onSubmit

            var mname=document.getElementById('mname').value
            var amount=document.getElementById('amount').value
            var remarks= document.getElementById('remarks').value
            var stored= document.getElementById('inStore').value
            var active= document.getElementById('active').value
            var timings=document.getElementsByClassName('timings')
            let times=''
            
           for( let i=0; i< timings.length; i++){
        
                times+=String(timings[i].value)+' || '

           }


        
                
        this.props.onSubmit({   
            id:uuid(),
            medname:mname,
            amount: amount,
            inStore:stored,
            remarks: remarks,
            active:active,
            timings:times
        })      
    }

    

    
    render() {    
        
       var AddInputs =() => {
  
            let times= document.getElementById('timings').value;
            let newInp = [];
            for(let i=0; i<times;i++){
                let inps=<input type="time" placeholder="eg: 01:30AM" class="timings"/>
               newInp.push(inps)  
             
            }
            this.setState({newInps: newInp})

            
        }
         
        const {newInps}=this.state

        
        let newFields=[<input type="time" placeholder="eg: 01:30AM" class="timings"/>, <input type="time" placeholder="eg: 01:30AM" class="timings"/>, <input type="time" placeholder="eg: 01:30AM" class="timings"/>]
        
        return (
            
                <Modal trigger={<Button> Add Medication </Button>}>
                            <Modal.Header> Add Medication</Modal.Header>
                            <Modal.Description>
                            <Form onSubmit={ this.AddData }>
                                <Form.Field>
                                <label> Medication Name</label>
                                <input placeholder='Med Name' id='mname' />
                                </Form.Field>
                                <Form.Field>    
                                <label>Amount</label>
                                <input placeholder='Dosage per intake' id='amount' />
                                </Form.Field>

                                <Form.Field>
                                <label> Timings </label>
                                <input type='number' placeholder='How many Times a day?' id='timings' onChange={AddInputs}/>
                                { newInps }

                                </Form.Field>

                                <Form.Field>
                                <label> In store </label>
                                <input placeholder='How much you have bought?' id='inStore'/>
                                </Form.Field>

                                <Form.Field>
                                <label> Remarks </label>
                                <input placeholder='Extra Info' id='remarks'/>
                                </Form.Field>

                                <Form.Field>
                                <label> Active or not? </label>
                                <div class="ui fitted toggle checkbox"  ><input type="checkbox" class="hidden" readOnly="" tabindex="0"  id='active'/><label></label></div>
                                </Form.Field>

                                <Button type='submit'> Submit </Button>
                            </Form>
                            </Modal.Description>
            </Modal> 
            
            
)
            
    }
}
