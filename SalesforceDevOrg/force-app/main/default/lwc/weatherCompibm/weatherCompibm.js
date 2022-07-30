import { LightningElement , api,track,wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
import getIBMWeatherInfo from '@salesforce/apex/B_CarbonEmissionClass.invokeHTTPReqtResMethod'; 

export default class WeatherCompibm extends NavigationMixin(LightningElement) {
@track airMainData = [];
@track airFormData = {};
@track error; 
wiredsObjectData;
connectedCallback() {
    getIBMWeatherInfo({inputInfo : 'ttt' , headers: 'yyy'})
    .then(data => {
        this.airMainData = JSON.parse(JSON.stringify(data));
        console.log('@@@@@@ this.airData@@@@'+JSON.stringify(this.airMainData));
        this.airFormData.airQualityCategory = this.airMainData.globalairquality.airQualityCategory;
        this.airFormData.primaryPollutant = this.airMainData.globalairquality.primaryPollutant;
		
        this.airFormData.COname = this.airMainData.globalairquality.pollutants.CO.name;
         this.airFormData.COamount = this.airMainData.globalairquality.pollutants.CO.amount;
        this.airFormData.COunit = this.airMainData.globalairquality.pollutants.CO.unit;       
         this.airFormData.COcategory = this.airMainData.globalairquality.pollutants.CO.category;
		 
        this.airFormData.NO2name = this.airMainData.globalairquality.pollutants.NO2.name;
         this.airFormData.NO2amount = this.airMainData.globalairquality.pollutants.NO2.amount;
        this.airFormData.NO2unit = this.airMainData.globalairquality.pollutants.NO2.unit;       
         this.airFormData.NO2category = this.airMainData.globalairquality.pollutants.NO2.category;
		 
		 this.airFormData.O3name = this.airMainData.globalairquality.pollutants.O3.name;
         this.airFormData.O3amount = this.airMainData.globalairquality.pollutants.O3.amount;
        this.airFormData.O3unit = this.airMainData.globalairquality.pollutants.O3.unit;       
         this.airFormData.O3category = this.airMainData.globalairquality.pollutants.O3.category;
		 
		this.airFormData.SO2name = this.airMainData.globalairquality.pollutants.SO2.name;
         this.airFormData.SO2amount = this.airMainData.globalairquality.pollutants.SO2.amount;
        this.airFormData.SO2unit = this.airMainData.globalairquality.pollutants.SO2.unit;       
         this.airFormData.SO2category = this.airMainData.globalairquality.pollutants.SO2.category;
		 
        console.log('bondi value@@@'+JSON.stringify(this.airFormData.airQualityCategory));
    })
    .catch(error =>{

    });
}
/**
 
@wire(getIBMWeatherInfo, {inputInfo: 'ttt' , headers: 'yyy'})
    wiredSobjects(result) {
                this.wiredsObjectData = result;
               // console.log('bondi JSON'+JSON.stringify(this.wiredsObjectData.data));
                this.airData = result;
                console.log('bondi JSON data1@@@@'+this.airData.data.globalairquality);
                // console.log('bondi JSON data2@@@@'+JSON.stringify(this.airData.data));
      
    }
*/
}