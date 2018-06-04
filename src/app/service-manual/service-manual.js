var serviceManualBasePath = './assets/modules/service-manual/HTML/';
var serviceManualData = [
	{
		text: '电气系统',
		data: serviceManualBasePath + "wsmbookmapCJG08.htm",
		id: 1,
		state: {"opened": true, "selected": true},
		children: [{
			"text": "喇叭",
			"state": {"opened": true},
			id: 2,
			data: serviceManualBasePath + "wsmbookmapCJG08-1.htm",
			"children": [
				{"text": "概述", "data": serviceManualBasePath + "4.4.1喇叭_概述.htm", "type": "file", id: 3},
				{"text": "说明与操作", "data": serviceManualBasePath + "4.4.1喇叭_说明与操作.htm", "type": "file", id: 4},
				{"text": "部件位置图", "data": serviceManualBasePath + "4.4.1喇叭_部件位置图.htm", "type": "file", id: 5},
				{"text": "电路图", "data": serviceManualBasePath + "4.4.1喇叭_电路图.htm", "type": "file", id: 6},
				{"text": "诊断与测试", "data": serviceManualBasePath + "4.4.1喇叭_诊断与测试.htm", "type": "file", id: 7},
				{"text": "拆卸与安装", "data": serviceManualBasePath + "4.4.1喇叭_拆卸与安装.htm", "type": "file", id: 8}
			]
		},
			{
				"text": "仪表及音响娱乐系统",
				"state": {"opened": true},
				id: 9,
				data: serviceManualBasePath + "wsmbookmapCJG08-2.htm",
				"children": [
					{"text": "规格", "data": serviceManualBasePath + "4.5.1仪表及音响娱乐系统_规格.htm", "type": "file", id: 10},
					{"text": "说明与操作", "data": serviceManualBasePath + "4.5.1仪表及音响娱乐系统_说明与操作.htm", "type": "file", id: 11},
					{"text": "电路图", "data": serviceManualBasePath + "4.5.1仪表及音响娱乐系统_电路图.htm", "type": "file", id: 12},
					{"text": "诊断与测试", "data": serviceManualBasePath + "4.5.1仪表及音响娱乐系统_诊断与测试.htm", "type": "file", id: 13},
					{"text": "拆卸与安装", "data": serviceManualBasePath + "4.5.1仪表及音响娱乐系统_拆卸与安装.htm", "type": "file", id: 14}
				]
			}]
	}
];

// ebook
$(function () {
	var $iframe = $('#ebook-iframe-service-manual');
	var $tree = $('#ebook-catalog-service-manual').jstree({
		"core": {
			"multiple": false,
			"animation": 0,
			"check_callback": true,
			"themes": {"stripes": true},
			'data': serviceManualData
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
