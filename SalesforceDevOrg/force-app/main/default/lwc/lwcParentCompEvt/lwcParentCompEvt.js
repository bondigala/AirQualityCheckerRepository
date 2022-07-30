import { LightningElement } from 'lwc';

export default class lwcParentCompEvt extends LightningElement {
    handleChangeEvent(event){
        this.template.querySelector('c-lwc-child-comp-evt').changeMessage(event.target.value);
    }
}