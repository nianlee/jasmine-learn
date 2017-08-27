const addParamToUrl =  require('../../index.js')

describe('addParamToUrl', function(){
  let url
  let key
  let value
  let result

  beforeEach(function(){
    url = ''
    key = 'key'
    value = 'value'
    result = ''
  })

  it('should add params when url do not have param and ?', function(){
    url = 'http://www.zbj.com'
    result = addParamToUrl(key, value, url)
    expect(result).toBe('key=value')
  })

  it('should add params when url have param', function(){
    url = 'http://www.zbj.com?a=b'
    result = addParamToUrl(key, value, url)
    expect(result).toBe('a=b&key=value')
  })

  it('should add params when url do not have param, but have ?', function() {
    url = 'http://www.zbj.com?'
    result = addParamToUrl(key, value, url)
    expect(result).toBe('key=value')
  })

  it('should replace params when url have zhe same key', function(){
    url = 'http://www.zbj.com?a=b&key=asdf'
    result = addParamToUrl(key, value, url)
    expect(result).toBe('a=b&key=value')
  })

  it('should replace params when url have zhe same key', function(){
    url = 'http://www.zbj.com?key='
    result = addParamToUrl(key, value, url)
    expect(result).toBe('key=value')
  })
})
