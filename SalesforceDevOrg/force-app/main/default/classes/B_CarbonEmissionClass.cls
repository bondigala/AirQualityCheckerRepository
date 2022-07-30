/*
* @class : HTTPReqtResControllerClass
* @author Original : Narayana Bondigala
* @Description : Connector between UI and Server side. 
* @Change History :
*/
Global class B_CarbonEmissionClass {
/*
* User story : 
* @httpRest : Integrate with web service to process HTTP Request
* @param InputDataClass : inputInfo.  
* @return : Data of B_IBMAirQualityDTOclass wraper class
*/
@AuraEnabled(cacheable=true)
public static B_IBMAirQualityDTOclass invokeHTTPReqtResMethod(String inputInfo , String headers) {
	InputDataClass inputInfoData = new InputDataClass();
   List<InputDataClass.HeaderClass> headerList = new List<InputDataClass.HeaderClass>();
	InputDataClass.HeaderClass hedr = new InputDataClass.HeaderClass();
	String responseStr = ''; 

   try {
	inputInfoData.URL ='https://api.weather.com/v3/wx/globalAirQuality?postalKey=560037:IN&language=en-US&scale=NAQI&format=json&apiKey=1bbf9714b9ac4babbf9714b9acebabca';
		 inputInfoData.methodType ='GET';
	hedr.key ='accept';
	  hedr.value ='application/json';
	   
		headerList.add(hedr);
			HTTPResponse response = new HTTPResponse();               
			response = HTTPReqtResIntegrationClass.processHTTPRequest(inputInfoData,headerList);
		   
	  B_IBMAirQualityDTOclass responceData = new B_IBMAirQualityDTOclass();
	System.debug('bondi response.getBody'+response.getBody());
   responceData = B_IBMAirQualityDTOclass.parse(response.getBody());
	 
	} catch(Exception ex) {
		System.debug('Exception @ '+ ex.getMessage() + ':' + ex.getLineNumber());
		if(ex.getMessage() == 'Unexpected end of file from server') {
			return 'The receiving server had a firewall blocking the sf IP addresses';
		}else {
			return ex.getMessage();
		}
		
	} 
	System.debug('responseStr@@@@'+responceData);
	return responceData;
} 
}