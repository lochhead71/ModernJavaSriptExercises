function easyHTTP(){
   this.http = new XMLHttpRequest();
}

// Make HTTP GET Request
easyHTTP.prototype.get = function(url, cb) {
   this.http.open('GET', url, true);
   let that = this;   
   this.http.onload = function() {
      if(that.http.status === 200) {
         cb(null, that.http.responseText);
      } else {
         cb('Error: ' + that.http.status);
      }
   }
   this.http.send();
}

// Make HTTP POST Request
easyHTTP.prototype.post = function(url, data, cb){
   this.http.open('POST', url, true);
   this.http.setRequestHeader('Content-type', 'application/json');
   let that = this;   
   this.http.onload = function() {
      cb(null, that.http.responseText);
   }
   this.http.send(JSON.stringify(data));
}

// Make HTTP PUT Request
easyHTTP.prototype.put = function(url, data, cb){
   this.http.open('PUT', url, true);
   this.http.setRequestHeader('Content-type', 'application/json');
   let that = this;   
   this.http.onload = function() {
      cb(null, that.http.responseText);
   }
   this.http.send(JSON.stringify(data));
}

// Make HTTP DELETE Request
easyHTTP.prototype.delete = function(url, cb) {
   this.http.open('DELETE', url, true);
   let that = this;   
   this.http.onload = function() {
      if(that.http.status === 200) {
         cb(null, 'Post Deleted');
      } else {
         cb('Error: ' + that.http.status);
      }
   }
   this.http.send();
}

