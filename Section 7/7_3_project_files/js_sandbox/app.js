// Create Event Listener
document.getElementById('button').addEventListener('click', loadData);

function loadData(){
   // Instantiate an XHR Object
   const xhr = new XMLHttpRequest();
   // Prototype Methods - Open (type, payload location, asynch))
   xhr.open('GET', 'data.txt', true);
   // Optional - used for interstitials
   xhr.onprogress = function(){
      console.log('READYSTATE', xhr.readyState);
   }
   xhr.onload = function(){
      // console.log('READYSTATE', xhr.readyState);
      if(this.status === 200){
         // console.log(this.responseText);
         document.getElementById('output').innerHTML = `<h3>${this.responseText}</h3>`;
      }
   }
   xhr.onerror = function(){
      console.log('Request error, bruh!');
   }

   xhr.send();



   // readyState Values
   // 0: request not initialized 
   // 1: server connection established
   // 2: request received 
   // 3: processing request 
   // 4: request finished and response is ready


   // HTTP Statuses
   // 200: "OK"
   // 403: "Forbidden"
   // 404: "Not Found"

}