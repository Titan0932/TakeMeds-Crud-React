import React, { Component } from 'react'
import { Button, Table, Modal,Form, Input, FormField,Checkbox } from 'semantic-ui-react';
import Edit from './Edit';







export default class View extends Component {

    
    deleteMeds(id){
        const meds= this.props.data

        var med= meds.filter((u) => u.id==id)
        this.props.onDelete(med)
    }

    onEdit=(med) => {
     this.props.medEdit(med)
    }

    CheckboxToggle = (event) => <Checkbox toggle />
    
    render() {
        const med= this.props.data
        
        
        return (
            <div>
              
                <Table sortable called fixed>
                    <Table.Header>
                        <Table.Row>
                        <Table.HeaderCell>
                                ID
                            </Table.HeaderCell>
                            <Table.HeaderCell>
                                Medication
                            </Table.HeaderCell>
                            <Table.HeaderCell>
                                Amount
                            </Table.HeaderCell>
                            <Table.HeaderCell>
                                Timings
                            </Table.HeaderCell>
                            <Table.HeaderCell>
                                In Store
                            </Table.HeaderCell>
                            <Table.HeaderCell>
                                Remarks
                            </Table.HeaderCell>

                            <Table.HeaderCell>
                                Active or not?
                            </Table.HeaderCell>

                            <Table.HeaderCell>
                                Actions
                            </Table.HeaderCell>
                            
                        </Table.Row>
                    </Table.Header>
   
                    <Table.Body>
                        {
                        med.map( (datas) => {
                            
                            return(
                                <Table.Row key={datas.id}>
                                <Table.Cell>
                                    {datas.id}     
                                </Table.Cell>
                                    <Table.Cell>
                                        {datas.medname}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {datas.amount}
                                    </Table.Cell>
                                    <Table.Cell>
                                    {datas.timings}
                                    </Table.Cell>

                                    <Table.Cell>
                                        {datas.inStore}  
                                    </Table.Cell>

                                    <Table.Cell>
                                        {datas.remarks}  
                                    </Table.Cell>

                                    <Table.Cell>
                                   
                                    <div class="ui fitted toggle checkbox" onClick={this.CheckboxToggle} ><input type="checkbox" class="hidden" readonly="" tabindex="0"/><label></label></div> 
                                    </Table.Cell>

                                    <Table.Row>

                                    <Table.Cell>
                                        <Modal trigger={<Button class='edit'> Edit </Button>}>
                                            <Modal.Header> Edit Details</Modal.Header>
                                            <Modal.Description>
                                                <Edit data={ datas } onEdit={ this.onEdit }/>
                                            </Modal.Description>
                                            </Modal>
                                            
                                           <Button class='delete' onClick={this.deleteMeds.bind(this,datas.id)}> Delete </Button>
                                    </Table.Cell>

                                    </Table.Row>
                                </Table.Row>
                                )
                            }
                            )
                        }
                       
                    </Table.Body>

                </Table>
                
            </div>
        )
    }
}
