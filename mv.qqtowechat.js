
/*
<meta itemprop="name" content="这是分享的标题"/>
<meta itemprop="image" content="http://imgcache.qq.com/qqshow/ac/v4/global/logo.png" />
<meta name="description" itemprop="description" content="这是要分享的内容" />
*/
/*
	data: {	
		name: ''
		, image: ''
		, description: ''
	}
*/

var V = require( 'mv.js' );

module.exports = {
	update: function( _data, _prefix ){
		if( !_data ) return;
		$.each( _data, function( _k, _v ){
			logic( _k, _v, _prefix );
		});
	}
};

function logic( _key, _content, _prefix ){
	_prefix = _prefix || 'qmeta_';
	var _name = _prefix + _key
		, _ele = $( '#' + _name )
		, _html = ''
		, _isDesc = /desc/i.test( _key )
		, _descProp = ''
		;

	if( _content ){
		if( !_ele.length ){
			_isDesc && ( 
				_descProp = 'name="description"'
				//, _content = 'tttttttttt'  
			);
			_html = V.utils.printf( '<meta id="{1}" itemprop="{0}" content="{2}" {3} />', _key, _name, _content, _descProp );
			$( _html ).prependTo( 'head' );

			if( _key == 'image' ){
				$( V.utils.printf( '<img src="{0}" style="position: absolute; left: -10000px;" />', _content ) ).prependTo( 'body' ) ;
			}
		}else{
			_ele.attr( 'content', _content );
		}
	}else{
		_ele.remove();
	}

}
