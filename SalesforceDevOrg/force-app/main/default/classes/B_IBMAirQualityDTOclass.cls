global class B_IBMAirQualityDTOclass{
      @AuraEnabled
	global cls_globalairquality globalairquality;
	class cls_globalairquality {
         @AuraEnabled
		public Double latitude;	//12.96
         @AuraEnabled
		public Double longitude;	//77.7
         @AuraEnabled
		public String source;	//Contains Copernicus Atmosphere Monitoring Service information 2022 and/or modified Copernicus Atmosphere Monitoring Service information 2022
		 @AuraEnabled
        public String disclaimer;	//Neither the European Commission nor ECMWF is responsible for any use of this information
		 @AuraEnabled
        public Integer airQualityIndex;	//22
          @AuraEnabled
		public String airQualityCategory;	//Good
         @AuraEnabled
		public Integer airQualityCategoryIndex;	//1
         @AuraEnabled
		public String airQualityCategoryIndexColor;	//01C966
         @AuraEnabled
		public String primaryPollutant;	//O3
          @AuraEnabled
		public cls_pollutants pollutants;
         @AuraEnabled
		public cls_messages messages;
         @AuraEnabled
		public Integer expireTimeGmt;	//1658109723
	}
	class cls_pollutants {
          @AuraEnabled
		public cls_NO2 NO2;
          @AuraEnabled
		public cls_O3 O3;
          @AuraEnabled
		public cls_SO2 SO2;
          @AuraEnabled
		public cls_PM25 PM25;
          @AuraEnabled
		public cls_PM10 PM10;
          @AuraEnabled
		public cls_CO CO;
	}
	class cls_NO2 {
          @AuraEnabled
		public String name;	//NO2
          @AuraEnabled
		public String phrase;	//Nitrogen Dioxide
          @AuraEnabled
		public Double amount;	//5.48
          @AuraEnabled
		public String unit;	//μg/m3
          @AuraEnabled
		public String category;	//Good
          @AuraEnabled
		public Integer categoryIndex;	//1
          @AuraEnabled
		public Integer index;	//10
	}
	class cls_O3 {
          @AuraEnabled
		public String name;	//O3
          @AuraEnabled
		public String phrase;	//Ozone
          @AuraEnabled
		public Double amount;	//23.1
          @AuraEnabled
		public String unit;	//μg/m3
          @AuraEnabled
		public String category;	//Good
          @AuraEnabled
		public Integer categoryIndex;	//1
          @AuraEnabled
		public Integer index;	//22
	}
	class cls_SO2 {
         @AuraEnabled
		public String name;	//SO2
         @AuraEnabled
		public String phrase;	//Sulfur Dioxide
         @AuraEnabled
		public Double amount;	//1.56
         @AuraEnabled
		public String unit;	//μg/m3
         @AuraEnabled
		public String category;	//Good
         @AuraEnabled
		public Integer categoryIndex;	//1
         @AuraEnabled
		public Integer index;	//2
	}
	class cls_PM25 {
		public String name;	//PM2.5
		public String phrase;	//Particulate matter less than 2.5 microns
		public Double amount;	//3.44
		public String unit;	//μg/m3
		public String category;	//Good
		public Integer categoryIndex;	//1
		public Integer index;	//10
	}
	class cls_PM10 {
		public String name;	//PM10
		public String phrase;	//Particulate matter less than 10 microns
		public Double amount;	//5.11
		public String unit;	//μg/m3
		public String category;	//Good
		public Integer categoryIndex;	//1
		public Integer index;	//8
	}
	class cls_CO {
          @AuraEnabled
		public String name;	//CO
          @AuraEnabled
		public String phrase;	//Carbon Monoxide
          @AuraEnabled
		public Double amount;	//130.38
          @AuraEnabled
		public String unit;	//μg/m3
          @AuraEnabled
		public String category;	//Good
          @AuraEnabled
		public Integer categoryIndex;	//1
          @AuraEnabled
		public Integer index;	//7
	}
	class cls_messages {
         @AuraEnabled
		public cls_SensitiveGroup SensitiveGroup;
         @AuraEnabled
		public cls_General General;
	}
	class cls_SensitiveGroup {
		public String title;	//Sensitive Groups
		public String text;	//Air quality is considered satisfactory, and air pollution poses little or no risk.
	}
	class cls_General {
		public String title;	//General
		public String text;	//Minimal impact.
	}
	public static B_IBMAirQualityDTOclass parse(String json){
		return (B_IBMAirQualityDTOclass) System.JSON.deserialize(json, B_IBMAirQualityDTOclass.class);
	}
/**
	static testMethod void testParse() {
		String json=		'{"globalairquality": {'+
		'   "latitude": 12.96,'+
		'   "longitude": 77.7,'+
		'   "source": "Contains Copernicus Atmosphere Monitoring Service information 2022 and/or modified Copernicus Atmosphere Monitoring Service information 2022",'+
		'   "disclaimer": "Neither the European Commission nor ECMWF is responsible for any use of this information",'+
		'   "airQualityIndex": 22,'+
		'   "airQualityCategory": "Good",'+
		'   "airQualityCategoryIndex": 1,'+
		'   "airQualityCategoryIndexColor": "01C966",'+
		'   "primaryPollutant": "O3",'+
		'   "pollutants":    {'+
		'      "NO2":       {'+
		'         "name": "NO2",'+
		'         "phrase": "Nitrogen Dioxide",'+
		'         "amount": 5.48,'+
		'         "unit": "μg/m3",'+
		'         "category": "Good",'+
		'         "categoryIndex": 1,'+
		'         "index": 10'+
		'      },'+
		'      "O3":       {'+
		'         "name": "O3",'+
		'         "phrase": "Ozone",'+
		'         "amount": 23.1,'+
		'         "unit": "μg/m3",'+
		'         "category": "Good",'+
		'         "categoryIndex": 1,'+
		'         "index": 22'+
		'      },'+
		'      "SO2":       {'+
		'         "name": "SO2",'+
		'         "phrase": "Sulfur Dioxide",'+
		'         "amount": 1.56,'+
		'         "unit": "μg/m3",'+
		'         "category": "Good",'+
		'         "categoryIndex": 1,'+
		'         "index": 2'+
		'      },'+
		'      "PM2.5":       {'+
		'         "name": "PM2.5",'+
		'         "phrase": "Particulate matter less than 2.5 microns",'+
		'         "amount": 3.44,'+
		'         "unit": "μg/m3",'+
		'         "category": "Good",'+
		'         "categoryIndex": 1,'+
		'         "index": 10'+
		'      },'+
		'      "PM10":       {'+
		'         "name": "PM10",'+
		'         "phrase": "Particulate matter less than 10 microns",'+
		'         "amount": 5.11,'+
		'         "unit": "μg/m3",'+
		'         "category": "Good",'+
		'         "categoryIndex": 1,'+
		'         "index": 8'+
		'      },'+
		'      "CO":       {'+
		'         "name": "CO",'+
		'         "phrase": "Carbon Monoxide",'+
		'         "amount": 130.38,'+
		'         "unit": "μg/m3",'+
		'         "category": "Good",'+
		'         "categoryIndex": 1,'+
		'         "index": 7'+
		'      }'+
		'   },'+
		'   "messages":    {'+
		'      "Sensitive Group":       {'+
		'         "title": "Sensitive Groups",'+
		'         "text": "Air quality is considered satisfactory, and air pollution poses little or no risk."'+
		'      },'+
		'      "General":       {'+
		'         "title": "General",'+
		'         "text": "Minimal impact."'+
		'      }'+
		'   },'+
		'   "expireTimeGmt": 1658109723'+
		'}}';
		BONDIAIRQUALITYTEST obj = parse(json);
		System.assert(obj != null);
	}
} */
}