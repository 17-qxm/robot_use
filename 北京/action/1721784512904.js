Blockly.Blocks['1721784512904'] = {
  init: function() {
    this.jsonInit({
      "type": "1721784512904",
      "message0": "抱箱右转q",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1721784512904'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 95, 110, 55, 149, 95, 140, 190, 50, 105, 130, 145, 91, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(65, 10, 149, 95, 118, 55, 149, 92, 140, 190, 50, 105, 121, 145, 91, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 100, 90, 55, 129, 100, 140, 190, 50, 100, 110, 145, 71, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(40)\nMOTOmove19(65, 10, 149, 100, 90, 55, 129, 100, 140, 190, 50, 100, 110, 145, 71, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1721784512904'] = function(block) {
  let code = "base_action.action('抱箱右转q')\n";
  return code;
}

