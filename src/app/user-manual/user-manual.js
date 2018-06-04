var userManualBasePath = './assets/modules/user-manual/';
var userManualData = [
	{"text": "内部概览", "data": userManualBasePath + "DMCJG20OM000008 内部概览.htm", "type": "file", state: {"selected": true},id: 1},
	{"text": "方向盘", "data": userManualBasePath + "DMCJG200OM000014 方向盘.htm", "type": "file",id: 2},
	{"text": "车门", "data": userManualBasePath + "DMCJG20OM000009 车门.htm", "type": "file",id: 3},
	{"text": "车窗", "data": userManualBasePath + "DMCJG20OM000010 车窗.htm", "type": "file",id: 4},
	{"text": "空调系统", "data": userManualBasePath + "DMCJG20OM000004 空调系统.htm", "type": "file",id: 5},
	{"text": "关于路边救援", "data": userManualBasePath + "DMCJG20OM000016 关于路边救援.htm", "type": "file",id: 6}
];

// ebook
$(function () {
	var $iframe = $('#ebook-iframe-user-manual');
	var $tree = $('#ebook-catalog-user-manual').jstree({
		"core": {
			"multiple": false,
			"animation": 0,
			"check_callback": true,
			"themes": {"stripes": true},
			'data': userManualData
		},
		"types": {
			"default": {
				"icon": "fa fa-folder",
				"valid_children": ["default", "file"]
			},
			"file": {
				"icon": "fa fa-file-text",
				"valid_children": []
			}
		},
		"plugins": [
			"state", "types"
		]
	});

	$tree.on("changed.jstree", function (e, data) {

		if (data.selected.length) {
			var node = data.instance.get_node(data.selected[0]);
			var href = node.data;

			if (href) {
				$iframe[0].src = href;
			}
		}
	});

	$('#btn-open-all').on('click', function () {

		$tree.jstree('open_all');
	});

	$('#btn-close-all').on('click', function () {
		$tree.jstree('close_all');
	});
});
