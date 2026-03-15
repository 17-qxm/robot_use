Blockly.Blocks['1758888976791'] = {
  init: function() {
    this.jsonInit({
      "type": "1758888976791",
      "message0": "qianjian（2）",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758888976791'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50,0,0,0)\nMOTOsetspeed(45)\nMOTOmove19(83, 10, 175, 99, 93, 54, 122, 90, 118, 189, 28, 98, 107, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(83, 10, 175, 99, 115, 99, 103, 100, 118, 189, 28, 101, 109, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(83, 10, 175, 89, 116, 98, 96, 89, 118, 189, 28, 97, 108, 121, 97, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(83, 10, 175, 97, 123, 29, 163, 97, 118, 189, 28, 108, 108, 141, 98, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(83, 10, 175, 99, 110, 74, 121, 100, 118, 189, 28, 101, 114, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(83, 10, 175, 99, 110, 61, 126, 104, 118, 189, 28, 101, 100, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(83, 10, 175, 99, 91, 66, 111, 102, 118, 189, 28, 101, 85, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(83, 10, 175, 99, 86, 63, 111, 100, 118, 189, 28, 101, 90, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(83, 10, 175, 99, 100, 73, 106, 100, 118, 189, 28, 101, 90, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(83, 10, 175, 96, 95, 70, 110, 100, 118, 189, 28, 102, 109, 146, 75, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(83, 10, 175, 100, 93, 55, 124, 100, 118, 189, 28, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758888976791'] = function(block) {
  let code = "base_action.action('qianjian（2）')\n";
  return code;
}

