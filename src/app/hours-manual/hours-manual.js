var hoursManualBasePath = './assets/modules/hours-manual/';
var hoursManualData = [{
	text: '电器',
	data: hoursManualBasePath + "工时目录.htm",
	state: {"opened": true, "selected": true},
	children: [{
		"text": "信号装置",
		"state": {"opened": true},
		data: hoursManualBasePath + "工时目录-1.htm",
		"children": [{
			"text": "高音电喇叭",
			"state": {"opened": true},
			data: hoursManualBasePath + "高音电喇叭.htm",
			"children": [
				{"text": "拆装步骤", "data": hoursManualBasePath + "高音电喇叭拆装步骤.htm", "type": "file"}
			]
		}, {
			"text": "低音电喇叭",
			"state": {"opened": true},
			data: hoursManualBasePath + "低音电喇叭.htm",
			"children": [
				{"text": "拆装步骤", "data": hoursManualBasePath + "低音电喇叭拆装步骤.htm", "type": "file"}
			]
		}]
	}, {
		"text": "仪表装置",
		"state": {"opened": true},
		data: hoursManualBasePath + "工时目录-2.htm",
		"children": [{
			"text": "组合仪表",
			"state": {"opened": true},
			data: hoursManualBasePath + "组合仪表.htm",
			"children": [
				{"text": "拆装步骤", "data": hoursManualBasePath + "组合仪表拆装步骤.htm", "type": "file"}
			]
		}]
	}]
}];

// ebook
$(function () {
	var $iframe = $('#ebook-iframe-hours-manual');
	var $tree = $('#ebook-catalog-hours-manual').jstree({
		"core": {
			"multiple": false,
			"animation": 0,
			"check_callback": true,
			"themes": {"stripes": true},
			'data': hoursManualData
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
