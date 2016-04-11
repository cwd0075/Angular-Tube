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
  	
  	
  it('should retrieve the movie id by the ytVideoPrepare function', function() {
        
    expect(output.id).toBe('RgKAFK5djSk');
  });

  var input1, output1;

  input1 = 'RgKAFK5djSk';

  beforeEach(inject(function(ytCreateEmbedURL){
  		
  		output1 = ytCreateEmbedURL(input1);
  }));

  it('should insert the video id into the url by the ytCreateEmbedURL function', function() {
        
    expect(output1).toBe('http://www.youtube.com/embed/RgKAFK5djSk?autoplay=1');
  });

  

  it('should return error by ytCheckDate if input incorrect date', inject(function(ytCheckDate){
    expect(ytCheckDate('2016-01-01','2015-01-01')).toEqual({code: 'invalid_date_sequence'});
    expect(ytCheckDate('2014-01-01','2014-01-01')).toEqual({code: 'invalid_date_sequence'});
    expect(ytCheckDate('','2015-01-01')).toEqual({code: 'missing_date'});
    expect(ytCheckDate('2014-04-04','2015-01-01')).toBeNull();
  }));

  it('should save date to searchDate by ytUpdateSearchDate', inject(function(ytUpdateSearchDate, searchDate){
    output1 = ytUpdateSearchDate('2015-01-01','2015-02-01');
    expect(searchDate.after).toEqual('2015-01-01');
    expect(searchDate.before).toEqual('2015-02-01');
  }));
  

});