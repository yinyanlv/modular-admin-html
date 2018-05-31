// ebook
$(function () {
  $('#ebook-catalog').jstree({
    "core" : {
      "animation" : 0,
      "check_callback" : true,
      "themes" : { "stripes" : true },
      'data': [
        {
          "text": "Root node1",
          "children": [
            {"text": "Child node 1"},
            {"text": "Child node 2"}
          ]
        },
        {
          "text": "Root node2",
          "children": [
            {"text": "Child node 1"},
            {"text": "Child node 2"}
          ]
        }
      ]
    },
    "types" : {
      "#" : {
        "max_children" : 1,
        "max_depth" : 4,
        "valid_children" : ["root"]
      },
      "root" : {
        "icon" : "/static/3.3.5/assets/images/tree_icon.png",
        "valid_children" : ["default"]
      },
      "default" : {
        "valid_children" : ["default","file"]
      },
      "file" : {
        "icon" : "glyphicon glyphicon-file",
        "valid_children" : []
      }
    },
    "plugins" : [
      "contextmenu", "dnd", "search",
      "state", "types", "wholerow"
    ]
  });
});
