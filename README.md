# Cognitive Assistant JavaScript SDK #


**This SDK requires a Account with Humley account. Please contact Humley info@humley.com**



# Installation: #

***Bower:***
> bower install Humley-Cognitive-Assistant-JavaScript-SDK --save


**Latest File:**
> [cognitive-assistant/h-assistant.js](https://raw.githubusercontent.com/humley/Cognitive-Assistant-JavaScript-SDK/master/cognitive-assistant/h-assistant.js "Humley Assistant SDK")


# Example: #


``` 

	var humleyBot = new humleyConversationBot(
		{
			username:'username',
			password: 'password',
			productId: 12
		}
	);


```


## Methods ##


**humleyBot.init(type:Init)**[^typeinit]
  [^typeinit]: **type:Init:** 
	  `
		params: Object; // information about the user
	    uuid: number;
	    cv: string;
	    mx: string;
	    imei: string;  // unquic ID to 
	    udid: string;
	    noid: string;
	    imsi: string;
	    simid: string;
    `