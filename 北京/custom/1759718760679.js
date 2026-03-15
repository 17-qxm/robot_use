Blockly.Blocks['1759718760679'] = {
  init: function() {
    this.jsonInit({
      "type": "1759718760679",
      "message0": "11右转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759718760679'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(10)\nMOTOmove19(65,11,149,95,110,55,149,95,140,189,50,105,130,145,91,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,11,149,100,90,55,129,100,140,189,50,100,110,145,71,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1759718760679'] = function(block) {
  let code = "base_action.action('11右转')\n";
  return code;
}

