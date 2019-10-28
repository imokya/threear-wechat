declare const wx: any;

const Req = function(this: any) {
	const _this: any = this;
	this.open = function(_type: string, _url: string) {
		_this.type = _type;
		_this.url = _url;
	};
	this.send = function() {
		wx.request({
			method: _this.type,
			responseType: _this.responseType,
			url: _this.url,
			success: function(data: any) {
				_this.response = data;
				_this.onload();
			}
		});
	};
};

const Request = XMLHttpRequest || Req;

export default Request;
