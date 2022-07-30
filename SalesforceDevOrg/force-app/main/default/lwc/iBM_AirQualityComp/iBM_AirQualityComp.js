import { LightningElement , api,track,wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getIBMWeatherInfo from '@salesforce/apex/B_CarbonEmissionClass.invokeHTTPReqtResMethod'; 

/* eslint-disable no-console */
/* eslint-disable no-alert */

export default class IBM_AirQualityComp extends LightningElement {
@api airData;
@track error; 
wiredsObjectData;
@wire(getIBMWeatherInfo, {inputInfo: 'ttt' , headers: 'yyy'})
    wiredSobjects(result) {
                this.wiredsObjectData = result;
                console.log('bondi JSON'+JSON.stringify(this.wiredsObjectData));
        if (result.data) {
           
        }
    }
}