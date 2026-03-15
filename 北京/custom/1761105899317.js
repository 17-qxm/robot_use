Blockly.Blocks['1761105899317'] = {
  init: function() {
    this.jsonInit({
      "type": "1761105899317",
      "message0": "左转01",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1761105899317'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(65,12,162,100,91,55,129,100,140,188,40,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(65,12,162,95,71,55,109,95,140,188,40,105,89,145,51,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(25)\nMOTOmove19(65,12,162,100,91,55,129,100,140,188,40,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1761105899317'] = function(block) {
  let code = "base_action.action('左转01')\n";
  return code;
}

