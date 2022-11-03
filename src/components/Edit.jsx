import React, { Component } from 'react'
import { Button, Input,Form } from 'semantic-ui-react'


export default class Edit extends Component {

    EditChanges=(event) =>{
       
        event.preventDefault();
        var mname=document.getElementById('mname').value
        var amount=document.getElementById('amount').value
        var stored= document.getElementById('inStore').value
        var uid=document.getElementById('uid').innerHTML
        var remarks= document.getElementById('remarks').value

        var times= document.getElementsByClassName('timings')
        /*  if value is empty take defaultValue else take the value itself */


        let ans=''

        for(let i=0; i<times.length; i++){
            if (times[i].value){
                ans+=String(times[i].value) + ' || '

            }else{
                ans+= String(times[i].defaultValue) + ' || '

            }
            
        }
  

        this.props.onEdit(
            {
                id:uid,
                medname: mname,
                amount: amount,
                inStore:stored,
                remarks: remarks,
                timings:ans
            
            }
        )

    var changeActive = (event) => {
        var active=document.getElementById('active').value  /*  CHange the active status */
    }

        
    }
    render() {




        const editMed=this.props.data
     let timings=editMed.timings.trim()

        let tm= timings.split('||')
       let times=tm.filter((t) => {return t!=' '} )
        


        let newFields=[]
        if(times.length>1){
        for(let i=0; i<times.length-1; i++){
    
             newFields.push(<input type="time" defaultValue={times[i]} class="timings"/>)   /*  DEFAULT VALUE NOT LOADING HERE */

        }
    }else if(times.length==1){
   
        newFields.push(<input type="time" defaultValue={times[0]} class="timings"/>)        /* THIS WORKS THO */

    }
      
   
       /* const {editInps}=this.state */

        
        return (
            <div>
                 
             <Form onSubmit={this.EditChanges}>
             <Form.Field>
             <label> Medication: </label>  <p id='uid'>   { editMed.id }  </p>
                
             <label> Med Name</label>
             <Input defaultValue={editMed.medname} id='mname' />
             </Form.Field>
             <Form.Field>
             <label>Amount</label>
             <Input defaultValue={editMed.amount} id='amount' />
             </Form.Field>
             
             <Form.Field>
             <label> Timings </label>
              {newFields}
             </Form.Field>


             <Form.Field>
             <label> In Store </label>
             <Input defaultValue={editMed.inStore} id='inStore'/>
             </Form.Field>

             <Form.Field>
             <label> Remarks </label>
             <Input defaultValue={editMed.remarks} id='remarks'/>
             </Form.Field>

    
             <Button type='submit'> Save Changes </Button>
         </Form>


         </div>

            
           
           
        )
    }
}
