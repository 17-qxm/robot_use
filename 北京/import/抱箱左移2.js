Blockly.Blocks['1760355644074'] = {
  init: function() {
    this.jsonInit({
      "type": "1760355644074",
      "message0": "抱箱左移2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760355644074'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35,0,0,0)\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(60, 17, 163, 85, 112, 90, 115, 90, 136, 186, 40, 110, 107, 146, 70, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(60, 17, 163, 95, 93, 53, 131, 105, 136, 186, 40, 120, 116, 160, 68, 130, 0, 0, 100)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(30)\nMOTOmove19(60, 17, 163, 100, 93, 54, 134, 98, 136, 186, 40, 103, 107, 146, 76, 105, 0, 0, 100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(30)\nMOTOmove19(60, 17, 163, 100, 93, 55, 134, 95, 136, 188, 40, 100, 107, 145, 76, 105, 0, 0, 100)\nMOTOwait()\n\n\n-- 5\nMOTOsetspeed(30)\nMOTOmove19(60, 17, 163, 100, 93, 55, 134, 100, 136, 186, 40, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760355644074'] = function(block) {
  let code = "base_action.action('抱箱左移2')\n";
  return code;
}

