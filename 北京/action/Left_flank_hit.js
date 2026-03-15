Blockly.Blocks['Left_flank_hit'] = {
  init: function () {
    this.jsonInit({
      type: 'Left_flank_hit',
      message0: '%{BKY_LEFT_FLANK_HIT}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#377DFD',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Left_flank_hit'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(68)',
    'MOTOmove16(136, 48, 100, 69, 106, 93, 97, 63, 110, 140, 100, 115, 92, 69, 135, 110)',
    'MOTOwait()',
    'DelayMs(150)',
    'MOTOsetspeed(55)',
    'MOTOmove16(136, 48, 100, 92, 119, 94, 104, 89, 110, 140, 100, 126, 90, 123, 90, 123)',
    'MOTOwait()',
    'MOTOsetspeed(55)',
    'MOTOmove16(86, 105, 103, 108, 128, 135, 74, 98, 110, 141, 99, 143, 107, 131, 91, 139)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Left_flank_hit'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['LEFT_FLANK_HIT'] + "')\n";
  return code;
}

