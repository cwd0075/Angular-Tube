'use strict';


describe('Unit tests: services', function() {
  beforeEach(module('myTube.modelservices'));
  var input, output;
  input = {
	   "id": {
	    "kind": "youtube#video",
	    "videoId": "RgKAFK5djSk"
	   },
	   "snippet": {
	    "title": "Wiz Khalifa - See You Again ft. Charlie Puth [Official Video] Furious 7 Soundtrack",
	    "description": "Download the new Furious 7 Soundtrack Deluxe Version on iTunes here: http://smarturl.it/furious7deluxe See Wiz on tour http://wizkhalifa.com/tour Tag ...",
	    "thumbnails": {
	     "high": {
	      "url": "https://i.ytimg.com/vi/RgKAFK5djSk/hqdefault.jpg",
	      "width": 480,
	      "height": 360
	     }
	    }
	   }
	  };
  beforeEach(inject(function(ytVideoPrepare){
  		
  		output = ytVideoPrepare(input);
  }));
  	
  	
  it('should retrieve the movie id', function() {
        
    expect(output.id).toBe('RgKAFK5djSk');
  });
});