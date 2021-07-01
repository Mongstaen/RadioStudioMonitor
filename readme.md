## Radio Studio Monitor
This small app is intended for use on LAN, hence the low - to non existing - security features. Currently running on a Raspberry Pi in our local radio studio. All services hosted on the Raspberry Pi itself, running alongside mAirlist Radio Automation.

### Installation
* Clone this repository
* Create your pusher user and app. https://pusher.com
* Create .env based on the example, update with your pusher details
* `npm install`
* `node index`


Feel free to use and contribute to this small project! This is my first project using JS and Node. And there are some known errors.

* The clock will not show the top center second-bullet. Would like the second-bullets to change state from hidden to showing, then hide again the next minute.
* EOF (end of file) warning, needs to be fixed, counting down and flashing.


#
Buy me a coffee? :) 
https://www.buymeacoffee.com/mongstad