describe('item service',function(){

  var item;
  var $httpBackend;
  beforeEach(module('RaidBuilder.item'));

  beforeEach(inject(function(_item_, _$httpBackend_) {
    item = _item_;
    $httpBackend = _$httpBackend_;
  }));

  it('successful get', function() {
    $httpBackend.expectJSONP('https://us.api.battle.net/wow/item/12346?apiKey=&jsonp=JSON_CALLBACK').respond({name : 'Mactar'});

    item('12346');

    $httpBackend.flush();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('successful calls success function', function() {
    $httpBackend.expectJSONP('https://us.api.battle.net/wow/item/12346?apiKey=&jsonp=JSON_CALLBACK').respond({name : 'Mactar'});

    var callback = jasmine.createSpy();

    item('12346').then(callback);

    $httpBackend.flush();
    expect(callback).toHaveBeenCalled();
  });
});