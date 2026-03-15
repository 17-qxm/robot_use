Blockly.Blocks['1721784505802'] = {
  init: function() {
    this.jsonInit({
      "type": "1721784505802",
      "message0": "抱箱右移q",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1721784505802'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35,0,0,0)\nMOTOsetspeed(65)\nMOTOmove19(65, 10, 149, 90, 93, 54, 130, 100, 140, 190, 50, 115, 88, 110, 85, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(65, 10, 149, 80, 84, 40, 138, 70, 140, 190, 50, 105, 107, 147, 69, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(65, 10, 149, 97, 93, 54, 130, 95, 140, 190, 50, 100, 107, 146, 66, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 100, 93, 55, 130, 95, 140, 190, 50, 100, 107, 145, 66, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 100, 93, 55, 130, 100, 140, 190, 50, 100, 107, 145, 66, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1721784505802'] = function(block) {
  let code = "base_action.action('抱箱右移q')\n";
  return code;
}

