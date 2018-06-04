var specialToolsBasePath = './assets/modules/special-tools/';
var specialTools = [
	{"text": "绝缘手套", "data": specialToolsBasePath + "绝缘手套.htm", "type": "file", 	state: {"selected": true}},
	{"text": "镜面抛光撬板", "data": specialToolsBasePath + "镜面抛光撬板.htm", "type": "file"},
	{"text": "绝缘安全鞋", "data": specialToolsBasePath + "绝缘安全鞋.htm", "type": "file"},
	{"text": "绝缘胶垫", "data": specialToolsBasePath + "绝缘胶垫.htm", "type": "file"},
	{"text": "绒布胶带", "data": specialToolsBasePath + "绒布胶带.htm", "type": "file"},
	{"text": "绝缘十字螺丝批", "data": specialToolsBasePath + "绝缘十字螺丝批.htm", "type": "file"},
	{"text": "绝缘剥线钳", "data": specialToolsBasePath + "绝缘剥线钳.htm", "type": "file"},
	{"text": "绝缘斜嘴钳", "data": specialToolsBasePath + "绝缘斜嘴钳.htm", "type": "file"},
	{"text": "绝缘快速脱落棘轮", "data": specialToolsBasePath + "绝缘快速脱落棘轮.htm", "type": "file"},
	{"text": "绝缘公制六角", "data": specialToolsBasePath + "绝缘公制六角.htm", "type": "file"}
];

// ebook
$(function () {
	var $iframe = $('#ebook-iframe-special-tools');
	var $tree = $('#ebook-catalog-special-tools').jstree({
		"core": {
			"multiple": false,
			"animation": 0,
			"check_callback": true,
			"themes": {"stripes": true},
			'data': specialTools
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
