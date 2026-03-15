Blockly.Blocks['1760426796193'] = {
  init: function() {
    this.jsonInit({
      "type": "1760426796193",
      "message0": "22",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760426796193'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35,0,0,0)\nMOTOsetspeed(130)\nMOTOmove19(75, 20, 170, 74, 125, 86, 125, 89, 125, 180, 30, 108, 101, 155, 60, 102, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(75, 20, 170, 100, 91, 55, 129, 100, 125, 180, 30, 100, 109, 145, 71, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760426796193'] = function(block) {
  let code = "base_action.action('22')\n";
  return code;
}

