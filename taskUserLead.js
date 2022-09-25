import { LightningElement, wire } from 'lwc';
import getListTask  from '@salesforce/apex/TaskControllerC.getListTask';

export default class TaskUserLead extends LightningElement {

    tasks;
    error;
 
     columns =[
         {label: 'Assunto', fieldName: 'Subject'},
         {label: 'Status', fieldName: 'Status'},
         {label: 'Prioridade', fieldName: 'Priority'},
         {label: 'Data da Criação', fieldName: 'CreatedDate', type:'date'},
         {label: 'Data da Tarefa', fieldName: 'ActivityDate', type:'date'},
         {label: 'ID Relacionado', fieldName: 'WhoId'}
     ]
 
     @wire(getListTask)wiredTasks({error, data}){
         if(data){
             this.tasks = data;
             this.error = undefined;
             console.log(this.tasks);
         } else if(error){
             this.error = error;
             this.tasks = undefined;
         }
     }
}
