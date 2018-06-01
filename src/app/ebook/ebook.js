// ebook
$(function () {
	var $iframe = $('#ebook-iframe');
	var $tree = $('#ebook-catalog').jstree({
		"core": {
			"animation": 0,
			"check_callback": true,
			"themes": {"stripes": true},
			'data': [
				{
					"text": "Root node1",
					"state": {"opened": true},
					"children": [
						{"text": "Child node 1", "data": "http://www.jd.com", "type": "file"},
						{"text": "Child node 2", "data": "http://www.baidu.com", "type": "file"}
					]
				},
				{
					"text": "Root node2",
					"state": {"opened": true},
					"children": [
						{
							"text": "Child node 1",
							"children": [{"text": "Child node 1", "data": "http://www.jd.com", "type": "file"},
								{"text": "Child node 2", "data": "http://www.baidu.com", "type": "file"}]
						},
						{"text": "Child node 2", "data": "http://www.taobao.com", "type": "file"}
					]
				}
			]
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
