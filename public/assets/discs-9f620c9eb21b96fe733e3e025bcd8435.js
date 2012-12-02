(function() {
  this.JST || (this.JST = {});
  this.JST["discs/index"] = function(__obj) {
    if (!__obj) __obj = {};
    var __out = [], __capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return __safe(result);
    }, __sanitize = function(value) {
      if (value && value.ecoSafe) {
        return value;
      } else if (typeof value !== 'undefined' && value != null) {
        return __escape(value);
      } else {
        return '';
      }
    }, __safe, __objSafe = __obj.safe, __escape = __obj.escape;
    __safe = __obj.safe = function(value) {
      if (value && value.ecoSafe) {
        return value;
      } else {
        if (!(typeof value !== 'undefined' && value != null)) value = '';
        var result = new String(value);
        result.ecoSafe = true;
        return result;
      }
    };
    if (!__escape) {
      __escape = __obj.escape = function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      };
    }
    (function() {
      (function() {
      
        __out.push('<legend>Discs</legend>\n\n<div class="row">\n    <div class="span8">\n        <ul id="discs" class="ui-table"></ul>\n    </div>\n    <div class="span4">\n        <form id="new_disc" class="form-inline" style="margin:0;">\n            <legend>Create new disc:</legend>\n\n            <div class="control-group">\n                <h6>Disc Title</h6>\n                <div class="controls">\n                    <input type="text" name="new_disc_title" id="new_disc_title" placeholder="Disc Title..." class="input-large">\n                </div>\n            </div>\n\n            <div class="control-group">\n                <h6>Disc Image</h6>\n                <div class="controls">\n                    <input id="new_disc_image" type="file" class="large" style="display:none">\n                    <div class="input-append">\n                    <input id="photoCover" class="input-large" type="text">\n                           <a class="btn" onclick="$(\'input[id=new_disc_image]\').click();">Browse</a>\n                    </div>\n                </div>\n            </div>\n\n            <input type="submit" value="Add" class="btn btn-primary">\n        </form>\n    </div>\n</div>\n');
      
      }).call(this);
      
    }).call(__obj);
    __obj.safe = __objSafe, __obj.escape = __escape;
    return __out.join('');
  };
}).call(this);
