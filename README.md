# Cognitive Assistant JavaScript SDK #


**This SDK requires a Account with Humley account. Please contact Humley info@humley.com**



# Installation: #

***Bower:***
> bower install Humley-Cognitive-Assistant-JavaScript-SDK --save


**Latest File:**
> [cognitive-assistant/h-assistant.js](https://raw.githubusercontent.com/humley/Cognitive-Assistant-JavaScript-SDK/master/cognitive-assistant/h-assistant.js "Humley Assistant SDK")


# Example: #

allowfeedback is defaulted to true. This will allow you to get feedback after each question is reecived..

``` 

	var humleyBot = new humleyConversationBot(
		{
			username:'username',
			password: 'password',
			productId: 12
		},
		allowfeedback
	);




```


## Methods ##


**async humleyBot.init(interface:Init**[^interface-init] **) : boolean**
> Init: Use to start session.  If return false then an error has occurred

**async humleyBot.talk(string) : interface:ConversationResult**[^interface-ConversationResult]
> Talk is the core method to receive the reply from your Cognitive Assistant
	
**async humleyBot.sendCheckPoint(checkpointId:number, variableName:string, value:string) :null**
> Send checkpoint to track activivty .

**async humleyBot.sendFeedback(typeId**[^feedbacktype] **) :null**
> If "allowedfeedback" is set to true, you can send feedback on the last answer received.



##Interfaces##

[^interface-init]: **interface:Init:** 
	`
	 interface init {
	 params: Object; // information about the user
     uuid: number; // - optional humley uuid for user set by imei 
     cv: string; // - optional
     mx: string; // - optional
     imei: string; // unquic ID to user
     udid: string; // - optional
     noid: string; // - optional
     imsi: string; // - optional
     simid: string; // - optional
	}

    `

[^interface-ConversationResult]: **interface:ConversationResult:** 
	`
		interface ConversationResult {
		    question: string;
		    error: boolean;
		    replies: ConversationResultReplies[];
		    errorInfo: any;
		}
	`
	**interface:ConversationResultReplies**
		`
				interface ConversationResultReplies {
			    replyId: number;
			    actionType: string;
			    actionURL: string;
			    category: string;
			    buttonId: number;
			    confidence: number;
			    reply: string;
			    hasVideo: boolean;
			    video: ConversationResultRepliesVideo;
			}
		`
	**interface:ConversationResultRepliesVideo **
		`
			interface ConversationResultRepliesVideo {
			    header: string;
			    url: string;
			}
		`

[^feedbacktype]: **Feedback type ID:**
	
	`
		3 = yes
		2 = Kinda
		0 = No
	` 


