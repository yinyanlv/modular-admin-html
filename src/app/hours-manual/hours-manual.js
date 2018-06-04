var hoursManualBasePath = './assets/modules/hours-manual/';
var hoursManualData = [{
	text: '电器',
	id: 1,
	data: hoursManualBasePath + "工时目录.htm",
	state: {"opened": true, "selected": true},
	children: [{
		"text": "信号装置",
		id: 2,
		"state": {"opened": true},
		data: hoursManualBasePath + "工时目录-1.htm",
		"children": [{
			"text": "高音电喇叭",
			id: 3,
			"state": {"opened": true},
			data: hoursManualBasePath + "高音电喇叭.htm",
			"children": [
				{"text": "拆装步骤", "data": hoursManualBasePath + "高音电喇叭拆装步骤.htm", "type": "file", id: 4}
			]
		}, {
			"text": "低音电喇叭",
			id: 5,
			"state": {"opened": true},
			data: hoursManualBasePath + "低音电喇叭.htm",
			"children": [
				{"text": "拆装步骤", "data": hoursManualBasePath + "低音电喇叭拆装步骤.htm", "type": "file", id: 6}
			]
		}]
	}, {
		"text": "仪表装置",
		id: 7,
		"state": {"opened": true},
		data: hoursManualBasePath + "工时目录-2.htm",
		"children": [{
			"text": "组合仪表",
			id: 8,
			"state": {"opened": true},
			data: hoursManualBasePath + "组合仪表.htm",
			"children": [
				{"text": "拆装步骤", "data": hoursManualBasePath + "组合仪表拆装步骤.htm", "type": "file", id: 9}
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


	window.onload = function () {
		var hash = window.location.hash;

		if (hash.indexOf('#node_id=' > -1)) {

			var tree = $('#ebook-catalog-hours-manual').jstree(true);
			tree.deselect_all();
			tree.select_node(hash.replace('#node_id=', ''));
		}
	};

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
