Blockly.Blocks['Bow'] = {
  init: function () {
    this.jsonInit({
      type: 'Bow',
      message0: '%{BKY_BOW}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Bow'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70)',
    'MOTOsetspeed(18)',
    'MOTOmove16(80, 30, 100, 100, 150, 75, 130, 100, 120, 170, 100, 100, 50, 125, 70, 100)',
    'MOTOwait()',
    'DelayMs(1000)',
    'MOTOsetspeed(21)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Bow'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['BOW'] + "')\n";
  return code;
}

Blockly.Blocks['Left_foot_shot'] = {
  init: function () {
    this.jsonInit({
      type: 'Left_foot_shot',
      message0: '%{BKY_LEFT_FOOT_SHOT}',
      previousStatement: null,
      nextStatement: null,
      colour: '#7148F5',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Left_foot_shot'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70)',
    'MOTOsetspeed(8)',
    'MOTOmove16(80, 40, 100, 86, 91, 48, 129, 85, 120, 160, 100, 92, 107, 145, 77, 86)',
    'MOTOwait()',
    'MOTOsetspeed(34)',
    'MOTOmove16(80, 40, 100, 86, 142, 112, 104, 83, 120, 160, 100, 95, 87, 145, 70, 85)',
    'MOTOwait()',
    'MOTOsetspeed(34)',
    'MOTOmove16(65, 35, 165, 77, 61, 116, 78, 96, 110, 163, 162, 93, 87, 132, 85, 85)',
    'MOTOwait()',
    'MOTOsetspeed(90)',
    'MOTOmove16(81, 45, 101, 77, 102, 95, 81, 88, 121, 161, 100, 95, 87, 140, 76, 85)',
    'MOTOwait()',
    'MOTOsetspeed(110)',
    'MOTOmove16(80, 40, 50, 77, 150, 47, 171, 96, 129, 177, 34, 95, 101, 139, 75, 85)',
    'MOTOwait()',
    'DelayMs(400)',
    'MOTOsetspeed(25)',
    'MOTOmove16(80, 40, 100, 77, 130, 78, 131, 83, 120, 160, 100, 95, 108, 144, 78, 87)',
    'MOTOwait()',
    'MOTOsetspeed(25)',
    'MOTOmove16(80, 40, 100, 77, 110, 81, 114, 80, 120, 160, 100, 95, 105, 145, 77, 87)',
    'MOTOwait()',
    'MOTOsetspeed(15)',
    'MOTOmove16(80, 40, 100, 87, 94, 76, 109, 82, 120, 160, 100, 93, 107, 145, 77, 90)',
    'MOTOwait()',
    'MOTOsetspeed(8)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Left_foot_shot'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['LEFT_FOOT_SHOT'] + "')\n";
  return code;
}

Blockly.Blocks['Push-up'] = {
  init: function () {
    this.jsonInit({
      type: 'Push-up',
      message0: '%{BKY_PUSH-UP}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Push-up'] = function (block) {
  const code = [
    'MOTOrigid16(90,90,90,40,40,40,40,40,90,90,90,40,40,40,40,40)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 41, 154, 100, 110, 140, 55, 100, 120, 159, 46, 100, 90, 60, 145, 100)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 41, 157, 98, 156, 140, 44, 100, 120, 159, 43, 99, 43, 59, 156, 99)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(100, 10, 185, 100, 160, 130, 35, 100, 100, 190, 15, 100, 40, 70, 165, 100)',
    'MOTOwait()',
    'MOTOsetspeed(53)',
    'MOTOmove16(15, 80, 190, 99, 109, 50, 154, 100, 185, 120, 10, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOrigid16(65,65,65,60,60,60,60,60,65,65,65,60,60,60,60,60)',
    'MOTOsetspeed(50)',
    'MOTOmove16(77, 32, 168, 99, 109, 50, 154, 100, 120, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 93, 177, 99, 109, 50, 154, 100, 183, 104, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(77, 32, 168, 99, 109, 50, 154, 100, 120, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 93, 177, 99, 109, 50, 154, 100, 183, 104, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(77, 32, 168, 99, 109, 50, 154, 100, 120, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 93, 177, 99, 109, 50, 154, 100, 183, 104, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(77, 32, 168, 99, 109, 50, 154, 100, 120, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 93, 177, 99, 109, 50, 154, 100, 183, 104, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(77, 32, 168, 99, 109, 50, 154, 100, 120, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 93, 177, 99, 109, 50, 154, 100, 183, 104, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(77, 32, 168, 99, 109, 50, 154, 100, 120, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 93, 177, 99, 109, 50, 154, 100, 183, 104, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(77, 32, 168, 99, 109, 50, 154, 100, 120, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 93, 177, 99, 109, 50, 154, 100, 183, 104, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(77, 32, 168, 99, 109, 50, 154, 100, 120, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 93, 177, 99, 109, 50, 154, 100, 183, 104, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(77, 32, 168, 99, 109, 50, 154, 100, 120, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 93, 177, 99, 109, 50, 154, 100, 183, 104, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(77, 32, 168, 99, 109, 50, 154, 100, 120, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 93, 177, 99, 109, 50, 154, 100, 183, 104, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(77, 32, 168, 99, 109, 50, 154, 100, 120, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 93, 177, 99, 109, 50, 154, 100, 183, 104, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(77, 32, 168, 99, 109, 50, 154, 100, 120, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 93, 177, 99, 109, 50, 154, 100, 183, 104, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(53)',
    'MOTOmove16(15, 80, 190, 100, 120, 90, 45, 100, 185, 120, 10, 100, 80, 110, 155, 100)',
    'MOTOwait()',
    'MOTOsetspeed(53)',
    'MOTOmove16(90, 15, 155, 100, 162, 140, 55, 100, 110, 185, 45, 100, 38, 60, 145, 100)',
    'MOTOwait()',
    'MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)',
    'MOTOsetspeed(53)',
    'MOTOmove16(90, 15, 155, 100, 162, 140, 55, 100, 110, 185, 45, 100, 38, 60, 145, 100)',
    'MOTOwait()',
    'DelayMs(50)',
    'MOTOsetspeed(42)',
    'MOTOmove16(90, 15, 140, 100, 150, 165, 50, 100, 110, 185, 60, 100, 50, 35, 150, 100)',
    'MOTOwait()',
    'MOTOsetspeed(28)',
    'MOTOmove16(80, 30, 113, 100, 130, 165, 46, 100, 120, 170, 87, 100, 70, 35, 158, 100)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(28)',
    'MOTOmove16(80, 30, 100, 100, 120, 130, 77, 100, 120, 170, 100, 100, 80, 70, 123, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Push-up'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['PUSH-UP'] + "')\n";
  return code;
}

Blockly.Blocks['Spread_wings'] = {
  init: function () {
    this.jsonInit({
      type: 'Spread_wings',
      message0: '%{BKY_SPREAD_WINGS}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Spread_wings'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,70)',
    'MOTOsetspeed(30)',
    'MOTOmove16(78, 105, 99, 99, 92, 56, 124, 99, 121, 90, 100, 101, 106, 142, 75, 99)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(100, 100, 100, 89, 92, 58, 122, 82, 100, 100, 100, 93, 102, 133, 86, 91)',
    'MOTOwait()',
    'MOTOsetspeed(20)',
    'MOTOmove16(100, 100, 100, 90, 98, 69, 114, 86, 100, 100, 100, 93, 102, 133, 86, 88)',
    'MOTOwait()',
    'MOTOsetspeed(20)',
    'MOTOmove16(100, 100, 100, 85, 115, 95, 102, 90, 100, 100, 100, 88, 98, 145, 74, 87)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(30)',
    'MOTOmove16(100, 100, 130, 85, 105, 145, 79, 90, 100, 100, 70, 93, 71, 128, 77, 87)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(100, 100, 170, 85, 54, 55, 102, 90, 100, 100, 30, 93, 62, 165, 53, 87)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(140, 150, 170, 85, 54, 55, 102, 90, 60, 50, 30, 93, 50, 170, 48, 88)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(70, 50, 170, 85, 54, 55, 102, 90, 130, 150, 30, 93, 55, 170, 48, 86)',
    'MOTOwait()',
    'DelayMs(300)',
    'MOTOsetspeed(32)',
    'MOTOmove16(100, 100, 170, 85, 54, 55, 102, 90, 100, 100, 30, 93, 50, 170, 48, 86)',
    'MOTOwait()',
    'MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,60,60,60,60,70)',
    'MOTOsetspeed(32)',
    'MOTOmove16(100, 100, 170, 89, 61, 94, 101, 88, 100, 100, 30, 93, 77, 165, 57, 89)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(25)',
    'MOTOmove16(100, 100, 130, 85, 105, 145, 53, 90, 100, 100, 70, 93, 85, 131, 83, 87)',
    'MOTOwait()',
    'MOTOsetspeed(25)',
    'MOTOmove16(100, 100, 100, 85, 111, 86, 96, 85, 100, 100, 100, 93, 103, 142, 78, 87)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(100, 100, 100, 89, 92, 50, 121, 85, 100, 100, 100, 93, 102, 139, 83, 92)',
    'MOTOwait()',
    'MOTOrigid16(40,40,40,60,60,60,60,40,40,40,40,60,60,60,60,60)',
    'MOTOsetspeed(15)',
    'MOTOmove16(80, 35, 100, 100, 93, 55, 124, 100, 120, 165, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Spread_wings'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['SPREAD_WINGS'] + "')\n";
  return code;
}

Blockly.Blocks['remote_control'] = {
  init: function () {
    this.jsonInit({
      type: 'remote_control',
      message0: '%{BKY_GAMEPAD} %1 %{BKY_GAMEPAD_VAR} %2',
      args0: [
        {
          type: 'input_dummy',
        },
        {
          type: 'input_value',
          name: 'variable',
          check: 'Variable',
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Msg.ControlHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['remote_control'] = function(block) {
  var variable = Blockly.Lua.valueToCode(block, "variable", Blockly.Lua.ORDER_NONE);
  let code = "";
  if(variable) {
    code = `${variable} = HKEY()\n`;
  } else {
    code = `HKEY()\n`;
  }
  return code;
}

Blockly.Python['remote_control'] = function (block) {
  const variable = Blockly.Python.valueToCode(block, 'variable', Blockly.Python.ORDER_NONE);
  const code = variable ? `${variable} = get_key.key()\n` : `get_key.key()\n`;
  return code;
}

Blockly.Blocks['aelos_if'] = {
  init: function () {
    this.jsonInit({
      type: 'aelos_if',
      message0: '%{BKY_AELOS_IF} %1 %{BKY_AELOS_DO} %2',
      args0: [
        {
          type: 'input_value',
          name: 'condition',
          check: 'Boolean',
        },
        {
          type: 'input_statement',
          name: 'do',
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: '#86C113',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['aelos_if'] = function(block) {
  var condition = Blockly.Lua.valueToCode(block, "condition", Blockly.Lua.ORDER_NONE) || "false";
  var do_code = Blockly.Lua.statementToCode(block, "do");

  var code = `if ${condition} then \n${do_code}\nHKEY()\nend\n`;
  return code;
}

Blockly.Python['aelos_if'] = function (block) {
  const condition =
    Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_NONE) || 'False';
  const do_code = Blockly.Python.statementToCode(block, 'do') || Blockly.Python.PASS;

  const code = `if ${condition}:\n${do_code}`;
  return code;
}

Blockly.Blocks['aelos_compare'] = {
  init: function () {
    this.jsonInit({
      type: 'aelos_compare',
      message0: '%1 %2 %3',
      args0: [
        {
          type: 'input_value',
          name: 'input_1',
          check: ['Number', 'Variable', 'Remote_type'],
        },
        {
          type: 'field_dropdown',
          name: 'OP',
          options: [
            ['=', 'JNE'],
            ['\u2260', 'JE'],
            ['<', 'JAE'],
            ['\u200f\u2265\u200f', 'JA'],
            ['>', 'JBE'],
            ['\u200f\u2264\u200f', 'JB'],
          ],
        },
        {
          type: 'input_value',
          name: 'input_2',
          check: ['Number', 'Variable', 'Remote_type'],
        },
      ],
      inputsInline: true,
      output: 'Boolean',
      outputShape: Blockly.OUTPUT_SHAPE_HEXAGONAL,
      colour: '#86C113',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['aelos_compare'] = function(block) {
  var op_map = {
    "JNE": "==",
    "JE": "~=",
    "JAE": "<",
    "JA": "<=",
    "JBE": ">",
    "JB": ">="
  };
  var input_1 = Blockly.Lua.valueToCode(block, "input_1", Blockly.Lua.ORDER_ATOMIC);
  var input_2 = Blockly.Lua.valueToCode(block, "input_2", Blockly.Lua.ORDER_ATOMIC);
  var operation = op_map[block.getFieldValue("OP")];
  var code = "";

  if (input_1 && input_2) {
    code = `${input_1} ${operation} ${input_2}`;
  } else {
    code = "FALSE";
  }

  return [code, Blockly.Lua.ORDER_NONE];
}

Blockly.Python['aelos_compare'] = function (block) {
  const op_map = {
    JNE: '==',
    JE: '!=',
    JAE: '<',
    JA: '<=',
    JBE: '>',
    JB: '>=',
  };
  const input_1 = Blockly.Python.valueToCode(block, 'input_1', Blockly.Python.ORDER_ATOMIC);
  const input_2 = Blockly.Python.valueToCode(block, 'input_2', Blockly.Python.ORDER_ATOMIC);
  const operation = op_map[block.getFieldValue('OP')];
  let code = '';

  if (input_1 && input_2) {
    code = `${input_1} ${operation} ${input_2}`;
  } else {
    code = 'False';
  }

  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Blocks['remote_control_button'] = {
  init: function () {
    this.jsonInit({
      type: 'remote_control_button',
      message0: '%{BKY_REMOTE_CONTROL_BUTTON_REMOTE}， %1 ，%{BKY_REMOTE_CONTROL_BUTTON_KEY} %2',
      args0: [
        { type: 'field_dropdown', name: 'mode', options: remoteControlMode },
        { type: 'field_dropdown', name: 'key', options: remoteControlKey },
      ],
      output: 'Remote_type',
      colour: Blockly.Msg.ControlHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['remote_control_button'] = function(block) {
  const mode = block.getFieldValue("mode");
  const key = block.getFieldValue("key");
  const num = HKEYMap[mode][key];
  return [num, 0 > num ? Blockly.Lua.ORDER_UNARY : Blockly.Lua.ORDER_ATOMIC];
}

Blockly.Python['remote_control_button'] = function (block) {
  const mode = block.getFieldValue('mode');
  const key = block.getFieldValue('key');
  const num = HKEYMap[mode][key];
  return [num, 0 > num ? Blockly.Python.ORDER_UNARY_SIGN : Blockly.Python.ORDER_ATOMIC];
}

Blockly.Blocks['color_discrimination'] = {
  init: function () {
    this.jsonInit({
      type: 'color_discrimination',
      message0: '%1 %{BKY_CAMERA} %{BKY_VISUAL_COLOR_DETECTED} %2',
      args0: [
        { type: 'field_dropdown', name: 'camera', options: cameraOptions },
        { type: 'field_dropdown', name: 'color', options: colorOptions },
      ],
      output: 'Boolean',
      colour: Blockly.Msg.VisualHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['color_discrimination'] = function(block) {
  const color = block.getFieldValue('color');
  const code = `IsColourOfRGB(${color})`;

  return [code, Blockly.Lua.ORDER_NONE];
}

Blockly.Python['color_discrimination'] = function (block) {
  const color = block.getFieldValue('color');
  const camera = block.getFieldValue('camera');
  const code = generateHsvCode(HAVE_COLOR, camera, hsvMap[color]);
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Blocks['1676273100751'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273100751",
      "message0": "抱起方块1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273100751'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- 张\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 149, 100, 93, 55, 124, 100, 120, 170, 50, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 149, 100, 113, 90, 109, 100, 120, 170, 50, 100, 87, 111, 91, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 149, 100, 136, 150, 62, 100, 120, 170, 50, 100, 72, 50, 138, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 149, 100, 149, 150, 67, 100, 120, 170, 50, 100, 52, 50, 133, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65, 10, 149, 100, 149, 150, 67, 100, 140, 190, 50, 100, 52, 50, 133, 100, 128, 78, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 100, 104, 132, 70, 100, 140, 190, 50, 100, 93, 69, 130, 100, 128, 78, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 100, 90, 55, 127, 100, 140, 190, 50, 100, 110, 145, 73, 100, 127, 78, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273100751'] = function(block) {
  let code = "base_action.action('抱起方块1')\n";
  return code;
}

Blockly.Blocks['1676273195308'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273195308",
      "message0": "放下方块1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273195308'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- RIGEND\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 100, 93, 55, 127, 100, 140, 190, 50, 100, 107, 145, 73, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 蹲2\nMOTOsetspeed(15)\nMOTOmove19(65, 10, 149, 100, 111, 150, 54, 102, 140, 190, 50, 100, 88, 51, 142, 101, 128, 71, 100)\nMOTOwait()\n\n\n-- MOTORE,100,71,128\nMOTOsetspeed(15)\nMOTOmove19(65, 10, 149, 100, 101, 150, 42, 102, 140, 190, 50, 100, 99, 51, 158, 101, 128, 71, 100)\nMOTOwait()\nDelayMs(400)\n\n\n-- 放\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 101, 107, 149, 43, 100, 140, 190, 50, 101, 92, 51, 157, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(30)\nMOTOmove19(80, 33, 130, 101, 107, 149, 43, 100, 120, 165, 66, 101, 92, 51, 157, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 33, 130, 100, 111, 150, 54, 102, 120, 165, 66, 100, 88, 51, 142, 101, 128, 71, 100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273195308'] = function(block) {
  let code = "base_action.action('放下方块1')\n";
  return code;
}

Blockly.Blocks['1676273115472'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273115472",
      "message0": "抱箱前进1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273115472'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 90, 91, 48, 134, 88, 140, 190, 50, 94, 109, 146, 71, 89, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 86, 123, 95, 115, 90, 140, 190, 50, 94, 109, 146, 71, 87, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 86, 121, 37, 161, 88, 140, 190, 50, 94, 109, 146, 72, 89, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 107, 98, 56, 129, 111, 140, 190, 50, 112, 131, 155, 88, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 106, 93, 54, 128, 113, 140, 190, 50, 114, 77, 105, 85, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 106, 91, 54, 128, 111, 140, 190, 50, 114, 89, 163, 39, 112, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 88, 69, 45, 112, 90, 140, 190, 50, 93, 102, 144, 71, 89, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 86, 123, 95, 115, 90, 140, 190, 50, 94, 107, 146, 72, 87, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 100, 91, 55, 129, 100, 140, 190, 50, 100, 109, 145, 71, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273115472'] = function(block) {
  let code = "base_action.action('抱箱前进1')\n";
  return code;
}

Blockly.Blocks['1676273110376'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273110376",
      "message0": "抱箱后退1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273110376'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 90, 91, 48, 138, 88, 140, 190, 50, 94, 107, 146, 67, 92, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 86, 90, 95, 94, 90, 140, 190, 50, 94, 107, 146, 67, 87, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 88, 71, 53, 114, 85, 140, 190, 50, 93, 100, 144, 70, 91, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 106, 93, 53, 134, 111, 140, 190, 50, 114, 87, 163, 33, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 106, 95, 53, 133, 113, 140, 190, 50, 114, 110, 105, 105, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 107, 100, 56, 130, 109, 140, 190, 50, 112, 129, 147, 86, 115, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 107, 100, 56, 130, 109, 140, 190, 50, 112, 129, 147, 86, 115, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 86, 113, 37, 167, 90, 140, 190, 50, 94, 107, 147, 67, 89, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 86, 90, 95, 95, 90, 140, 190, 50, 94, 105, 147, 69, 87, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 100, 93, 55, 133, 100, 140, 190, 50, 100, 107, 145, 67, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273110376'] = function(block) {
  let code = "base_action.action('抱箱后退1')\n";
  return code;
}

Blockly.Blocks['1676273135796'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273135796",
      "message0": "抱箱左移1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273135796'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35,0,0,0)\nMOTOsetspeed(65)\nMOTOmove19(65, 10, 149, 85, 112, 90, 115, 90, 140, 190, 50, 110, 107, 146, 70, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(65, 10, 149, 95, 93, 53, 131, 105, 140, 190, 50, 120, 116, 160, 68, 130, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(65, 10, 149, 100, 93, 54, 134, 98, 140, 190, 50, 103, 107, 146, 76, 105, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 100, 93, 55, 134, 95, 140, 190, 50, 100, 107, 145, 76, 105, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 100, 93, 55, 134, 100, 140, 190, 50, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273135796'] = function(block) {
  let code = "base_action.action('抱箱左移1')\n";
  return code;
}

Blockly.Blocks['1676273121186'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273121186",
      "message0": "抱箱右移1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273121186'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35,0,0,0)\nMOTOsetspeed(65)\nMOTOmove19(65, 10, 149, 90, 93, 54, 130, 100, 140, 190, 50, 115, 88, 110, 85, 110, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(65, 10, 149, 80, 84, 40, 138, 70, 140, 190, 50, 105, 107, 147, 69, 95, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(65, 10, 149, 97, 93, 54, 130, 95, 140, 190, 50, 100, 107, 146, 66, 102, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 100, 93, 55, 130, 95, 140, 190, 50, 100, 107, 145, 66, 105, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 100, 93, 55, 130, 100, 140, 190, 50, 100, 107, 145, 66, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273121186'] = function(block) {
  let code = "base_action.action('抱箱右移1')\n";
  return code;
}

Blockly.Blocks['1676273139445'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273139445",
      "message0": "抱箱左转1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273139445'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65,0,0,0)\nMOTOsetspeed(14)\nMOTOmove19(65, 10, 149, 95, 71, 55, 109, 95, 140, 190, 50, 105, 89, 145, 51, 105, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 95, 80, 55, 109, 92, 140, 190, 50, 105, 81, 145, 51, 108, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(65, 10, 149, 100, 91, 55, 129, 100, 140, 190, 50, 100, 109, 145, 71, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 100, 91, 55, 129, 100, 140, 190, 50, 100, 109, 145, 71, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273139445'] = function(block) {
  let code = "base_action.action('抱箱左转1')\n";
  return code;
}

Blockly.Blocks['1676273129812'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273129812",
      "message0": "抱箱右转1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273129812'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65,0,0,0)\nMOTOsetspeed(14)\nMOTOmove19(65, 10, 149, 95, 110, 55, 149, 95, 140, 190, 50, 105, 130, 145, 91, 105, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 95, 118, 55, 149, 92, 140, 190, 50, 105, 121, 145, 91, 108, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(65, 10, 149, 100, 90, 55, 129, 100, 140, 190, 50, 100, 110, 145, 71, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 100, 90, 55, 129, 100, 140, 190, 50, 100, 110, 145, 71, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273129812'] = function(block) {
  let code = "base_action.action('抱箱右转1')\n";
  return code;
}

Blockly.Blocks['Front_Roll'] = {
  init: function () {
    this.jsonInit({
      type: 'Front_Roll',
      message0: '%{BKY_FRONT_ROLL}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Front_Roll'] = function (block) {
  const code = [
    'MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 98, 97, 145, 41, 99, 120, 170, 100, 100, 98, 53, 159, 99)',
    'MOTOwait()',
    'MOTOsetspeed(32)',
    'MOTOmove16(85, 30, 130, 100, 140, 152, 60, 100, 115, 170, 70, 100, 60, 48, 140, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(100, 10, 185, 100, 165, 145, 35, 100, 100, 190, 15, 100, 35, 55, 165, 100)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(75, 89, 190, 100, 140, 90, 40, 100, 129, 108, 10, 100, 60, 110, 160, 100)',
    'MOTOwait()',
    'MOTOsetspeed(40)',
    'MOTOmove16(57, 79, 131, 100, 140, 90, 40, 100, 138, 131, 66, 100, 60, 110, 160, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(44, 69, 190, 100, 26, 100, 146, 100, 162, 134, 10, 100, 174, 105, 52, 100)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(68)',
    'MOTOmove16(47, 56, 190, 100, 26, 100, 146, 100, 160, 131, 10, 100, 174, 105, 52, 100)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(37)',
    'MOTOmove16(115, 176, 127, 101, 51, 150, 33, 101, 85, 24, 78, 99, 153, 50, 165, 102)',
    'MOTOwait()',
    'MOTOsetspeed(37)',
    'MOTOmove16(116, 177, 160, 101, 51, 150, 33, 101, 84, 24, 43, 99, 153, 50, 165, 102)',
    'MOTOwait()',
    'MOTOsetspeed(37)',
    'MOTOmove16(116, 177, 160, 101, 51, 150, 33, 101, 84, 24, 43, 99, 153, 50, 165, 102)',
    'MOTOwait()',
    'MOTOsetspeed(40)',
    'MOTOmove16(116, 177, 160, 100, 69, 139, 43, 100, 86, 24, 43, 99, 134, 61, 162, 101)',
    'MOTOwait()',
    'MOTOsetspeed(40)',
    'MOTOmove16(97, 25, 170, 100, 102, 149, 61, 100, 122, 164, 29, 100, 104, 50, 148, 99)',
    'MOTOwait()',
    'MOTOsetspeed(37)',
    'MOTOmove16(69, 64, 100, 101, 100, 144, 33, 101, 121, 130, 99, 99, 100, 56, 165, 102)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(20)',
    'MOTOmove16(83, 28, 98, 100, 123, 152, 44, 103, 115, 169, 89, 103, 78, 46, 161, 100)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(15)',
    'MOTOmove16(85, 30, 102, 99, 107, 150, 44, 100, 115, 162, 96, 99, 94, 50, 159, 98)',
    'MOTOwait()',
    'MOTOsetspeed(15)',
    'MOTOmove16(85, 30, 102, 102, 110, 73, 116, 101, 115, 162, 96, 106, 91, 122, 84, 99)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Front_Roll'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['FRONT_ROLL'] + "')\n";
  return code;
}

Blockly.Blocks['Back_flip'] = {
  init: function () {
    this.jsonInit({
      type: 'Back_flip',
      message0: '%{BKY_BACK_FLIP}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Back_flip'] = function (block) {
  const code = [
    'MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)',
    'MOTOsetspeed(50)',
    'MOTOmove16(70, 50, 80, 100, 25, 133, 40, 98, 130, 150, 120, 100, 175, 65, 161, 102)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(45, 50, 45, 100, 23, 151, 68, 100, 155, 150, 155, 100, 177, 49, 130, 102)',
    'MOTOwait()',
    'MOTOsetspeed(45)',
    'MOTOmove16(70, 50, 35, 100, 160, 11, 121, 97, 130, 150, 165, 100, 40, 186, 81, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(70, 50, 10, 100, 160, 19, 92, 96, 130, 150, 190, 100, 40, 180, 108, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(30, 135, 187, 100, 162, 23, 100, 97, 170, 65, 10, 100, 40, 180, 95, 100)',
    'MOTOwait()',
    'MOTOsetspeed(53)',
    'MOTOmove16(30, 135, 190, 90, 80, 80, 70, 100, 170, 65, 10, 110, 120, 120, 130, 100)',
    'MOTOwait()',
    'DelayMs(50)',
    'MOTOsetspeed(53)',
    'MOTOmove16(90, 10, 160, 63, 162, 145, 33, 75, 110, 190, 40, 137, 38, 55, 167, 125)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(53)',
    'MOTOmove16(90, 15, 155, 100, 162, 145, 55, 100, 110, 185, 45, 100, 38, 55, 145, 100)',
    'MOTOwait()',
    'MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)',
    'MOTOsetspeed(53)',
    'MOTOmove16(90, 15, 155, 100, 162, 145, 55, 100, 110, 185, 45, 100, 38, 55, 145, 100)',
    'MOTOwait()',
    'DelayMs(50)',
    'MOTOsetspeed(42)',
    'MOTOmove16(90, 15, 140, 100, 162, 175, 50, 100, 110, 185, 60, 100, 38, 25, 150, 100)',
    'MOTOwait()',
    'MOTOsetspeed(28)',
    'MOTOmove16(80, 30, 113, 100, 155, 175, 62, 100, 120, 170, 87, 100, 45, 25, 138, 100)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(28)',
    'MOTOmove16(80, 30, 100, 100, 142, 145, 77, 100, 120, 170, 100, 100, 58, 55, 123, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Back_flip'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['BACK_FLIP'] + "')\n";
  return code;
}

Blockly.Blocks['1676273199273'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273199273",
      "message0": "上台阶",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273199273'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30,0,0,0)\n\n\n-- 1站立\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90,0,0,0)\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(94, 79, 100, 85, 106, 79, 113, 80, 106, 100, 100, 94, 107, 145, 76, 88, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90,0,0,0)\n\n\n-- 左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97, 105, 100, 85, 132, 127, 85, 89, 103, 100, 100, 94, 107, 145, 76, 88, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90,0,0,0)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100, 150, 100, 85, 160, 50, 180, 95, 100, 100, 100, 95, 85, 100, 99, 90, 128, 71, 100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100, 150, 100, 100, 160, 78, 155, 100, 100, 100, 100, 100, 135, 150, 99, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 100, 100, 160, 78, 155, 100, 100, 100, 100, 100, 145, 150, 99, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(100, 10, 180, 105, 160, 78, 135, 112, 100, 190, 20, 110, 130, 190, 40, 110, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100, 10, 180, 105, 115, 65, 125, 112, 100, 190, 20, 115, 155, 180, 105, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 10, 180, 105, 105, 65, 125, 112, 100, 190, 20, 115, 70, 110, 95, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 180, 105, 98, 55, 124, 112, 100, 100, 20, 115, 90, 110, 95, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60,0,0,0)\n\n\n-- 2右腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97, 100, 100, 106, 93, 55, 124, 112, 103, 95, 100, 115, 68, 73, 115, 111, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60,0,0,0)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100, 100, 100, 105, 115, 100, 101, 110, 100, 50, 100, 115, 40, 150, 20, 105, 128, 71, 100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 100, 100, 65, 50, 101, 100, 100, 50, 100, 100, 40, 122, 45, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 100, 100, 55, 50, 101, 100, 100, 100, 100, 100, 40, 122, 45, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(100, 10, 180, 90, 70, 10, 160, 90, 100, 190, 20, 95, 40, 122, 65, 88, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100, 10, 180, 85, 45, 20, 95, 100, 100, 190, 20, 95, 85, 135, 75, 88, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 10, 180, 85, 130, 90, 105, 100, 100, 190, 20, 95, 95, 135, 75, 88, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 180, 85, 110, 90, 105, 100, 100, 100, 20, 95, 102, 145, 76, 88, 128, 71, 100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90,0,0,0)\n\n\n-- 3左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97, 105, 100, 85, 132, 127, 85, 89, 103, 100, 100, 94, 107, 145, 76, 88, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90,0,0,0)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100, 150, 100, 85, 160, 50, 180, 95, 100, 100, 100, 95, 85, 100, 99, 90, 128, 71, 100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100, 150, 100, 100, 160, 78, 155, 100, 100, 100, 100, 100, 135, 150, 99, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 100, 100, 160, 78, 155, 100, 100, 100, 100, 100, 145, 150, 99, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(100, 10, 180, 105, 160, 78, 135, 112, 100, 190, 20, 110, 130, 190, 40, 110, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100, 10, 180, 105, 115, 65, 125, 112, 100, 190, 20, 115, 155, 180, 105, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 10, 180, 105, 105, 65, 125, 112, 100, 190, 20, 115, 70, 110, 95, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 180, 105, 98, 55, 124, 112, 100, 100, 20, 115, 90, 110, 95, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(200)\n\n\n-- 15\nMOTOsetspeed(25)\nMOTOmove19(100, 100, 180, 102, 79, 32, 137, 108, 100, 100, 20, 108, 121, 165, 70, 108, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(100, 100, 100, 108, 70, 10, 148, 108, 100, 70, 100, 111, 101, 142, 72, 110, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,75,85,100,90,60,30,30,30,50,55,50,50,50,0,0,0)\n\n\n-- 4\nMOTOsetspeed(10)\nMOTOmove19(100, 100, 100, 105, 79, 32, 137, 108, 100, 70, 100, 107, 107, 160, 60, 112, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,50,60,60,60,60,30,30,30,50,60,60,60,60,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(100, 100, 100, 100, 79, 35, 130, 100, 100, 70, 100, 102, 107, 160, 65, 102, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100, 100, 100, 98, 79, 35, 130, 95, 100, 70, 100, 98, 107, 160, 65, 95, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100, 100, 100, 92, 79, 35, 130, 92, 100, 70, 100, 98, 121, 168, 63, 92, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30,0,0,0)\n\n\n-- 14\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 95, 55, 123, 100, 120, 170, 100, 100, 105, 145, 77, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273199273'] = function(block) {
  let code = "base_action.action('上台阶')\n";
  return code;
}

Blockly.Blocks['1676273176627'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273176627",
      "message0": "抱起10cm方块",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273176627'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 94, 55, 123, 100, 120, 170, 100, 100, 106, 145, 77, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(100,100,100,30,60,60,60,30,100,100,100,30,60,60,60,30,0,0,0)\n\n\n-- 3\nMOTOsetspeed(20)\nMOTOmove19(110, 155, 100, 100, 142, 145, 77, 100, 90, 45, 100, 100, 58, 55, 123, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 165, 10, 100, 142, 145, 77, 100, 100, 35, 190, 100, 58, 55, 123, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 165, 10, 100, 142, 145, 55, 100, 100, 35, 190, 100, 58, 55, 145, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 165, 10, 100, 142, 25, 125, 100, 100, 35, 190, 100, 58, 175, 75, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 185, 10, 100, 142, 25, 125, 100, 100, 15, 190, 100, 58, 175, 75, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 185, 10, 55, 158, 140, 55, 60, 100, 15, 190, 145, 42, 60, 145, 140, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(100, 185, 10, 50, 138, 150, 55, 60, 100, 15, 190, 150, 62, 50, 145, 140, 128, 71, 100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(55)\nMOTOmove19(100, 185, 10, 70, 128, 145, 75, 70, 100, 15, 190, 130, 72, 55, 125, 130, 128, 71, 100)\nMOTOwait()\nDelayMs(500)\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30,0,0,0)\nMOTOsetspeed(14)\nMOTOmove19(100, 185, 100, 98, 142, 145, 77, 98, 100, 15, 100, 102, 58, 55, 123, 102, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 185, 100, 98, 122, 40, 152, 98, 100, 15, 100, 102, 78, 160, 48, 102, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100, 185, 100, 100, 93, 55, 124, 100, 100, 15, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273176627'] = function(block) {
  let code = "base_action.action('抱起10cm方块')\n";
  return code;
}

Blockly.Blocks['1676273185034'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273185034",
      "message0": "放下10cm方块",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273185034'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(100, 185, 100, 98, 93, 55, 124, 98, 100, 15, 100, 102, 107, 145, 76, 102, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100, 185, 100, 102, 142, 145, 77, 98, 100, 15, 100, 98, 58, 55, 123, 102, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30,0,0,0)\nMOTOsetspeed(14)\nMOTOmove19(100, 185, 10, 70, 128, 145, 75, 70, 100, 15, 190, 130, 72, 55, 125, 130, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(90, 185, 10, 55, 158, 140, 55, 60, 110, 15, 190, 145, 42, 60, 145, 140, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(110, 155, 10, 65, 138, 150, 55, 70, 90, 45, 190, 135, 62, 50, 145, 130, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(110, 155, 10, 70, 128, 145, 75, 70, 90, 45, 190, 130, 72, 55, 125, 130, 128, 71, 100)\nMOTOwait()\nDelayMs(500)\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 165, 100, 98, 142, 145, 77, 98, 120, 35, 100, 102, 58, 55, 123, 102, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 185, 100, 98, 122, 40, 152, 98, 100, 15, 100, 102, 78, 160, 48, 102, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273185034'] = function(block) {
  let code = "base_action.action('放下10cm方块')\n";
  return code;
}

Blockly.Blocks['1676273151408'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273151408",
      "message0": "抱10cm方块前进",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273151408'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(100, 185, 101, 100, 94, 55, 124, 100, 100, 15, 99, 100, 106, 145, 76, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(100,100,100,85,50,50,50,85,100,100,100,85,50,50,50,85,0,0,0)\nMOTOrigid16(40,40,40,85,60,60,60,75,40,40,40,85,60,60,60,75,0,0,0)\n\n\n-- 右抬腿\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 101, 105, 93, 55, 124, 105, 100, 15, 99, 111, 102, 136, 78, 112, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(100, 185, 101, 105, 93, 55, 124, 107, 100, 15, 99, 105, 84, 141, 62, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 185, 101, 95, 80, 55, 111, 90, 100, 15, 99, 95, 101, 145, 73, 93, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100, 185, 101, 95, 116, 59, 138, 90, 100, 15, 99, 95, 107, 145, 76, 93, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 185, 101, 105, 99, 55, 127, 107, 100, 15, 99, 105, 120, 145, 89, 105, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(100, 185, 101, 105, 94, 54, 123, 107, 100, 15, 99, 105, 102, 136, 78, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 101, 100, 94, 55, 123, 98, 100, 15, 99, 100, 106, 145, 77, 102, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273151408'] = function(block) {
  let code = "base_action.action('抱10cm方块前进')\n";
  return code;
}

Blockly.Blocks['1676273147745'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273147745",
      "message0": "抱10cm方块后退",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273147745'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(45)\nMOTOmove19(100, 185, 100, 100, 93, 55, 124, 100, 100, 15, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(100,100,100,85,50,50,50,85,100,100,100,85,50,50,50,85,0,0,0)\nMOTOrigid16(100,100,100,85,60,60,60,75,100,100,100,85,60,60,60,75,0,0,0)\n\n\n-- 右抬腿\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 100, 105, 93, 55, 124, 108, 100, 15, 100, 111, 102, 136, 78, 112, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(100, 185, 100, 105, 93, 55, 124, 107, 100, 15, 100, 108, 125, 145, 94, 105, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 185, 100, 92, 116, 55, 144, 85, 100, 15, 100, 95, 107, 145, 76, 93, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100, 185, 100, 92, 75, 55, 106, 95, 100, 15, 100, 95, 107, 145, 76, 93, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 185, 100, 105, 93, 55, 124, 107, 100, 15, 100, 108, 84, 141, 56, 115, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 185, 100, 105, 92, 55, 124, 107, 100, 15, 100, 111, 107, 136, 78, 112, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 100, 100, 93, 55, 124, 98, 100, 15, 100, 100, 107, 145, 76, 102, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273147745'] = function(block) {
  let code = "base_action.action('抱10cm方块后退')\n";
  return code;
}

Blockly.Blocks['1676273159353'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273159353",
      "message0": "抱10cm方块左移",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273159353'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 101, 89, 98, 64, 122, 90, 100, 15, 99, 95, 107, 145, 76, 93, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100, 185, 101, 95, 93, 54, 124, 90, 100, 15, 99, 105, 107, 146, 76, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(12)\nMOTOmove19(100, 185, 101, 98, 93, 54, 123, 102, 100, 15, 99, 109, 107, 146, 76, 112, 128, 71, 100)\nMOTOwait()\n\n\n-- MOTORD,100,40,80\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 101, 98, 93, 54, 123, 102, 100, 15, 99, 103, 105, 139, 81, 109, 128, 71, 100)\nMOTOwait()\n\n\n-- MOTORD,100,40,80\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 101, 98, 93, 54, 123, 102, 100, 15, 99, 103, 105, 139, 81, 109, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 101, 100, 93, 55, 124, 100, 100, 15, 99, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273159353'] = function(block) {
  let code = "base_action.action('抱10cm方块左移')\n";
  return code;
}

Blockly.Blocks['1676273155676'] = {
  init: function() {
    this.jsonInit({
      "type": "1676273155676",
      "message0": "抱10cm方块右移",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676273155676'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 101, 105, 93, 55, 124, 108, 100, 15, 99, 111, 102, 136, 78, 112, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100, 185, 100, 94, 93, 54, 124, 100, 100, 15, 100, 106, 107, 146, 76, 110, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(12)\nMOTOmove19(100, 185, 100, 91, 93, 54, 124, 88, 100, 15, 100, 102, 107, 146, 77, 98, 128, 71, 100)\nMOTOwait()\n\n\n-- MOTORD,100,40,80\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 100, 97, 95, 61, 119, 91, 100, 15, 100, 102, 107, 146, 77, 98, 128, 71, 100)\nMOTOwait()\n\n\n-- MOTORD,100,40,80\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 100, 97, 95, 61, 119, 91, 100, 15, 100, 102, 107, 146, 77, 98, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(100, 185, 100, 100, 93, 55, 124, 100, 100, 15, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676273155676'] = function(block) {
  let code = "base_action.action('抱10cm方块右移')\n";
  return code;
}

Blockly.Blocks['1676447440168'] = {
  init: function() {
    this.jsonInit({
      "type": "1676447440168",
      "message0": "前倒地",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676447440168'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- 起\nMOTOsetspeed(40)\nMOTOmove19(80, 90, 101, 101, 93, 57, 124, 101, 131, 100, 98, 102, 107, 143, 77, 99, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(37, 92, 182, 85, 64, 41, 98, 99, 153, 107, 19, 130, 142, 160, 92, 103, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54, 47, 190, 63, 160, 136, 46, 86, 150, 147, 19, 137, 44, 67, 152, 117, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(85, 12, 172, 62, 160, 146, 47, 75, 119, 189, 31, 139, 43, 54, 154, 123, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54, 47, 190, 66, 149, 146, 55, 63, 150, 147, 19, 158, 48, 60, 146, 140, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54, 47, 190, 70, 126, 145, 53, 68, 150, 147, 19, 138, 74, 60, 147, 135, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(54, 47, 190, 79, 113, 140, 50, 78, 150, 147, 19, 126, 72, 60, 135, 125, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 113, 100, 125, 140, 62, 100, 120, 170, 87, 100, 75, 60, 138, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 113, 104, 127, 133, 71, 100, 120, 170, 87, 103, 70, 67, 128, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 113, 102, 128, 104, 97, 100, 120, 170, 87, 102, 74, 91, 104, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(40)\nMOTOmove19(80, 37, 100, 108, 93, 55, 124, 100, 120, 170, 100, 92, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676447440168'] = function(block) {
  let code = "base_action.action('前倒地')\n";
  return code;
}

Blockly.Blocks['1676447448574'] = {
  init: function() {
    this.jsonInit({
      "type": "1676447448574",
      "message0": "后倒地",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1676447448574'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(35, 130, 20, 101, 131, 126, 170, 100, 165, 70, 180, 99, 69, 74, 30, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(21, 105, 21, 101, 131, 126, 170, 100, 179, 95, 180, 99, 69, 74, 30, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92, 16, 46, 100, 80, 150, 60, 100, 108, 184, 154, 100, 120, 50, 140, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92, 18, 58, 100, 73, 150, 40, 100, 108, 182, 142, 100, 127, 50, 160, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92, 25, 135, 100, 124, 150, 50, 100, 108, 175, 65, 100, 76, 50, 150, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1676447448574'] = function(block) {
  let code = "base_action.action('后倒地')\n";
  return code;
}

Blockly.Blocks['1677548683339'] = {
  init: function() {
    this.jsonInit({
      "type": "1677548683339",
      "message0": "下台阶",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1677548683339'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(86, 105, 100, 93, 93, 55, 123, 86, 105, 95, 100, 93, 106, 143, 75, 89, 128, 71, 99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(86, 105, 100, 85, 125, 100, 117, 91, 105, 95, 100, 95, 106, 143, 75, 88, 128, 71, 99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(86, 105, 100, 90, 145, 60, 117, 91, 105, 95, 100, 95, 106, 143, 75, 88, 128, 71, 99)\nMOTOwait()\nMOTOrigid16(25,25,25,50,50,50,50,50,25,25,25,90,90,90,90,90,0,0,0)\nMOTOsetspeed(25)\nMOTOmove19(86, 105, 100, 85, 103, 27, 165, 90, 105, 95, 100, 94, 134, 100, 124, 85, 128, 71, 99)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(86, 105, 100, 85, 102, 10, 190, 90, 105, 95, 100, 94, 118, 80, 153, 85, 128, 71, 99)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,50,50,50,50,50,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(100, 167, 100, 105, 120, 10, 181, 110, 100, 100, 100, 120, 105, 91, 145, 125, 128, 71, 99)\nMOTOwait()\nDelayMs(150)\nMOTOsetspeed(15)\nMOTOmove19(100, 167, 100, 105, 120, 10, 175, 113, 100, 100, 100, 120, 100, 96, 145, 120, 128, 71, 99)\nMOTOwait()\nDelayMs(150)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,50,50,50,50,50,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(100, 100, 100, 105, 75, 10, 145, 113, 100, 60, 100, 120, 160, 175, 105, 129, 128, 71, 99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 100, 100, 105, 75, 10, 145, 113, 100, 60, 100, 130, 150, 190, 105, 129, 128, 71, 99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 100, 100, 105, 68, 10, 148, 112, 100, 60, 100, 135, 110, 91, 145, 129, 128, 71, 99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 100, 100, 105, 52, 10, 139, 112, 100, 60, 100, 125, 89, 69, 145, 116, 128, 71, 99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 100, 100, 105, 52, 10, 139, 112, 100, 60, 100, 113, 107, 145, 76, 110, 128, 71, 99)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80, 30, 100, 107, 91, 48, 129, 107, 120, 150, 100, 113, 107, 145, 76, 110, 128, 71, 99)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,55,55,55,85,0,0,0)\nMOTOsetspeed(18)\nMOTOmove19(80, 30, 100, 107, 91, 48, 129, 107, 120, 150, 100, 113, 107, 145, 76, 110, 128, 71, 99)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1677548683339'] = function(block) {
  let code = "base_action.action('下台阶')\n";
  return code;
}

Blockly.Blocks['aelos_while'] = {
  init: function () {
    this.jsonInit({
      type: 'aelos_while',
      message0: '%{BKY_AELOS_WHILE} %1 %{BKY_AELOS_DO} %2',
      args0: [
        {
          type: 'input_value',
          name: 'condition',
          check: 'Boolean',
        },
        {
          type: 'input_statement',
          name: 'do',
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: '#86C113',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['aelos_while'] = function(block) {
    var condition = Blockly.Lua.valueToCode(block, "condition", Blockly.Lua.ORDER_NONE) || "FALSE";
    var do_code = Blockly.Lua.statementToCode(block, "do") || "  pass\n";

    var code = `while (${condition})\ndo\n${do_code}\nHKEY()\nend\n`;
    return code;
}

Blockly.Python['aelos_while'] = function (block) {
  var condition =
    Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_NONE) || 'False';
  var do_code = Blockly.Python.statementToCode(block, 'do') || Blockly.Python.PASS;

  var code = `while ${condition}:\n${do_code}`;
  return code;
}

Blockly.Blocks['1677554203595'] = {
  init: function() {
    this.jsonInit({
      "type": "1677554203595",
      "message0": "翻墙稳定1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1677554203595'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30,0,0,0)\n\n\n-- 1站立\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(90, 105, 190, 100, 128, 10, 170, 100, 110, 95, 10, 100, 72, 190, 30, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(30)\nMOTOmove19(90, 10, 190, 100, 108, 10, 170, 100, 110, 190, 10, 100, 92, 190, 30, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 118, 10, 170, 100, 110, 190, 10, 100, 82, 190, 30, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 128, 10, 169, 100, 110, 190, 10, 100, 72, 190, 31, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 128, 10, 168, 100, 110, 190, 10, 100, 72, 190, 32, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 128, 10, 164, 100, 110, 190, 10, 100, 72, 190, 36, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 130, 10, 164, 100, 110, 190, 10, 100, 70, 190, 36, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 130, 10, 161, 100, 110, 190, 10, 100, 70, 190, 39, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 130, 10, 159, 100, 110, 190, 10, 100, 70, 190, 41, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 132, 10, 159, 100, 110, 190, 10, 100, 68, 190, 41, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 132, 10, 157, 100, 110, 190, 10, 100, 68, 190, 43, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 132, 10, 154, 100, 110, 190, 10, 100, 68, 190, 46, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(87, 14, 190, 100, 132, 10, 154, 100, 113, 186, 10, 100, 68, 190, 46, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(1000)\nMOTOrigid16(90,90,100,30,60,60,60,30,90,90,100,30,60,60,60,30,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(50, 50, 190, 100, 132, 10, 154, 100, 150, 150, 10, 100, 68, 190, 46, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(120)\nMOTOmove19(50, 50, 165, 100, 10, 95, 108, 100, 150, 150, 35, 100, 65, 190, 40, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(50, 50, 165, 100, 10, 95, 108, 100, 150, 150, 35, 100, 165, 190, 40, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(300)\n\n\n-- 修改\nMOTOsetspeed(135)\nMOTOmove19(43, 40, 190, 100, 10, 95, 108, 100, 166, 160, 10, 100, 190, 175, 10, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 8\nMOTOsetspeed(99)\nMOTOmove19(50, 50, 190, 100, 90, 95, 170, 100, 150, 150, 10, 100, 110, 105, 30, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 9\nMOTOsetspeed(40)\nMOTOmove19(89, 182, 110, 100, 10, 95, 93, 100, 111, 18, 90, 100, 190, 105, 107, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 10\nMOTOsetspeed(40)\nMOTOmove19(90, 160, 190, 100, 10, 95, 63, 100, 110, 40, 10, 100, 190, 105, 137, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70,0,0,0)\n\n\n-- 12\nMOTOsetspeed(24)\nMOTOmove19(90, 50, 190, 100, 142, 145, 77, 100, 110, 150, 10, 100, 58, 55, 123, 100, 128, 71, 100)\nMOTOwait()\n\n\n-- 13\nMOTOsetspeed(24)\nMOTOmove19(90, 50, 190, 100, 142, 145, 77, 100, 110, 150, 10, 100, 58, 55, 123, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(24)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1677554203595'] = function(block) {
  let code = "base_action.action('翻墙稳定1')\n";
  return code;
}

Blockly.Blocks['1721784497734'] = {
  init: function() {
    this.jsonInit({
      "type": "1721784497734",
      "message0": "抱箱后退q",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1721784497734'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 90, 91, 48, 138, 88, 140, 190, 50, 94, 107, 146, 67, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 86, 90, 95, 94, 90, 140, 190, 50, 94, 107, 146, 67, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 88, 71, 53, 114, 85, 140, 190, 50, 93, 100, 144, 70, 91, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 106, 93, 53, 134, 111, 140, 190, 50, 114, 87, 163, 33, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 106, 95, 53, 133, 113, 140, 190, 50, 114, 110, 105, 105, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 107, 100, 56, 130, 109, 140, 190, 50, 112, 129, 147, 86, 115, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 107, 100, 56, 130, 109, 140, 190, 50, 112, 129, 147, 86, 115, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 86, 113, 37, 167, 90, 140, 190, 50, 94, 107, 147, 67, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 86, 90, 95, 95, 90, 140, 190, 50, 94, 105, 147, 69, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 100, 93, 55, 133, 100, 140, 190, 50, 100, 107, 145, 67, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1721784497734'] = function(block) {
  let code = "base_action.action('抱箱后退q')\n";
  return code;
}

Blockly.Blocks['1721784501489'] = {
  init: function() {
    this.jsonInit({
      "type": "1721784501489",
      "message0": "抱箱前进q",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1721784501489'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 90, 91, 48, 134, 88, 140, 190, 50, 94, 109, 146, 71, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 86, 123, 95, 115, 90, 140, 190, 50, 94, 109, 146, 71, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 86, 121, 37, 161, 88, 140, 190, 50, 94, 109, 146, 72, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 107, 98, 56, 129, 111, 140, 190, 50, 112, 131, 155, 88, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 106, 93, 54, 128, 113, 140, 190, 50, 114, 77, 105, 85, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 106, 91, 54, 128, 111, 140, 190, 50, 114, 89, 163, 39, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 88, 69, 45, 112, 90, 140, 190, 50, 93, 102, 144, 71, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 86, 123, 95, 115, 90, 140, 190, 50, 94, 107, 146, 72, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 100, 91, 55, 129, 100, 140, 190, 50, 100, 109, 145, 71, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1721784501489'] = function(block) {
  let code = "base_action.action('抱箱前进q')\n";
  return code;
}

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

Blockly.Blocks['1721784518716'] = {
  init: function() {
    this.jsonInit({
      "type": "1721784518716",
      "message0": "抱箱子q",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1721784518716'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- 张\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 149, 100, 93, 55, 124, 100, 120, 170, 50, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 149, 100, 113, 90, 109, 100, 120, 170, 50, 100, 87, 111, 91, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 149, 100, 136, 150, 62, 100, 120, 170, 50, 100, 72, 50, 138, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 149, 100, 149, 150, 67, 100, 120, 170, 50, 100, 52, 50, 133, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 148, 100, 148, 150, 59, 99, 119, 169, 50, 99, 52, 50, 141, 99, 0, 0, 101)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 100, 149, 150, 67, 100, 140, 190, 50, 100, 52, 50, 133, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 100, 104, 132, 70, 100, 140, 190, 50, 100, 93, 69, 130, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 100, 90, 55, 127, 100, 140, 190, 50, 100, 110, 145, 73, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1721784518716'] = function(block) {
  let code = "base_action.action('抱箱子q')\n";
  return code;
}

Blockly.Blocks['1721784549095'] = {
  init: function() {
    this.jsonInit({
      "type": "1721784549095",
      "message0": "抱箱左移q",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1721784549095'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- RIGEND\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 100, 93, 55, 127, 100, 140, 190, 50, 100, 107, 145, 73, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 蹲2\nMOTOsetspeed(15)\nMOTOmove19(65, 10, 149, 100, 111, 150, 54, 102, 140, 190, 50, 100, 88, 51, 142, 101, 0, 0, 100)\nMOTOwait()\n\n\n-- MOTORE,100,71,128\nMOTOsetspeed(15)\nMOTOmove19(65, 10, 149, 100, 101, 150, 42, 102, 140, 190, 50, 100, 99, 51, 158, 101, 0, 0, 100)\nMOTOwait()\nDelayMs(400)\n\n\n-- 放\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 101, 107, 149, 43, 100, 140, 190, 50, 101, 92, 51, 157, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(30)\nMOTOmove19(80, 33, 130, 101, 107, 149, 43, 100, 120, 165, 66, 101, 92, 51, 157, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 33, 130, 100, 111, 150, 54, 102, 120, 165, 66, 100, 88, 51, 142, 101, 0, 0, 100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1721784549095'] = function(block) {
  let code = "base_action.action('抱箱左移q')\n";
  return code;
}

Blockly.Blocks['1721784556211'] = {
  init: function() {
    this.jsonInit({
      "type": "1721784556211",
      "message0": "抱箱左转q",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1721784556211'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 95, 71, 55, 109, 95, 140, 190, 50, 105, 89, 145, 51, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(65, 10, 149, 95, 80, 55, 109, 92, 140, 190, 50, 105, 81, 145, 51, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 100, 91, 55, 129, 100, 140, 190, 50, 100, 109, 145, 71, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(40)\nMOTOmove19(65, 10, 149, 100, 91, 55, 129, 100, 140, 190, 50, 100, 109, 145, 71, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1721784556211'] = function(block) {
  let code = "base_action.action('抱箱左转q')\n";
  return code;
}

Blockly.Blocks['1721784564631'] = {
  init: function() {
    this.jsonInit({
      "type": "1721784564631",
      "message0": "放下方块q",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1721784564631'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- RIGEND\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 100, 93, 55, 127, 100, 140, 190, 50, 100, 107, 145, 73, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 蹲2\nMOTOsetspeed(15)\nMOTOmove19(65, 10, 149, 100, 111, 150, 54, 102, 140, 190, 50, 100, 88, 51, 142, 101, 0, 0, 100)\nMOTOwait()\n\n\n-- MOTORE,100,71,128\nMOTOsetspeed(15)\nMOTOmove19(65, 10, 149, 100, 101, 150, 42, 102, 140, 190, 50, 100, 99, 51, 158, 101, 0, 0, 100)\nMOTOwait()\nDelayMs(400)\n\n\n-- 放\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 101, 107, 149, 43, 100, 140, 190, 50, 101, 92, 51, 157, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(30)\nMOTOmove19(80, 33, 130, 101, 107, 149, 43, 100, 120, 165, 66, 101, 92, 51, 157, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 33, 130, 100, 111, 150, 54, 102, 120, 165, 66, 100, 88, 51, 142, 101, 0, 0, 100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1721784564631'] = function(block) {
  let code = "base_action.action('放下方块q')\n";
  return code;
}

Blockly.Blocks['1721784573678'] = {
  init: function() {
    this.jsonInit({
      "type": "1721784573678",
      "message0": "后倒地q",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1721784573678'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- 起\nMOTOsetspeed(40)\nMOTOmove19(80, 90, 101, 101, 93, 57, 124, 101, 131, 100, 98, 102, 107, 143, 77, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(37, 92, 182, 85, 64, 41, 98, 99, 153, 107, 19, 130, 142, 160, 92, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54, 47, 190, 63, 160, 136, 46, 86, 150, 147, 19, 137, 44, 67, 152, 117, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(85, 12, 172, 62, 160, 146, 47, 75, 119, 189, 31, 139, 43, 54, 154, 123, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54, 47, 190, 66, 149, 146, 55, 63, 150, 147, 19, 158, 48, 60, 146, 140, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54, 47, 190, 70, 126, 145, 53, 68, 150, 147, 19, 138, 74, 60, 147, 135, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(54, 47, 190, 79, 113, 140, 50, 78, 150, 147, 19, 126, 72, 60, 135, 125, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 113, 100, 125, 140, 62, 100, 120, 170, 87, 100, 75, 60, 138, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 113, 104, 127, 133, 71, 100, 120, 170, 87, 103, 70, 67, 128, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 113, 102, 128, 104, 97, 100, 120, 170, 87, 102, 74, 91, 104, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(40)\nMOTOmove19(80, 37, 100, 108, 93, 55, 124, 100, 120, 170, 100, 92, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1721784573678'] = function(block) {
  let code = "base_action.action('后倒地q')\n";
  return code;
}

Blockly.Blocks['1721784588094'] = {
  init: function() {
    this.jsonInit({
      "type": "1721784588094",
      "message0": "站起来q",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1721784588094'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30,0,0,0)\n\n\n-- 1站立\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(90, 105, 190, 100, 128, 10, 170, 100, 110, 95, 10, 100, 72, 190, 30, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(30)\nMOTOmove19(90, 10, 190, 100, 108, 10, 170, 100, 110, 190, 10, 100, 92, 190, 30, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 118, 10, 170, 100, 110, 190, 10, 100, 82, 190, 30, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 128, 10, 169, 100, 110, 190, 10, 100, 72, 190, 31, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 128, 10, 168, 100, 110, 190, 10, 100, 72, 190, 32, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 128, 10, 164, 100, 110, 190, 10, 100, 72, 190, 36, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 130, 10, 164, 100, 110, 190, 10, 100, 70, 190, 36, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 130, 10, 161, 100, 110, 190, 10, 100, 70, 190, 39, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 130, 10, 159, 100, 110, 190, 10, 100, 70, 190, 41, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 132, 10, 159, 100, 110, 190, 10, 100, 68, 190, 41, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 132, 10, 157, 100, 110, 190, 10, 100, 68, 190, 43, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 132, 10, 154, 100, 110, 190, 10, 100, 68, 190, 46, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(87, 14, 190, 100, 132, 10, 154, 100, 113, 186, 10, 100, 68, 190, 46, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(1000)\nMOTOrigid16(90,90,100,30,60,60,60,30,90,90,100,30,60,60,60,30,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(50, 50, 190, 100, 132, 10, 154, 100, 150, 150, 10, 100, 68, 190, 46, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(120)\nMOTOmove19(50, 50, 165, 100, 10, 95, 108, 100, 150, 150, 35, 100, 65, 190, 40, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(50, 50, 165, 100, 10, 95, 108, 100, 150, 150, 35, 100, 165, 190, 40, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\n\n\n-- 修改\nMOTOsetspeed(135)\nMOTOmove19(43, 40, 190, 100, 10, 95, 108, 100, 166, 160, 10, 100, 190, 175, 10, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 8\nMOTOsetspeed(99)\nMOTOmove19(50, 50, 190, 100, 90, 95, 170, 100, 150, 150, 10, 100, 110, 105, 30, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 9\nMOTOsetspeed(40)\nMOTOmove19(89, 182, 110, 100, 10, 95, 93, 100, 111, 18, 90, 100, 190, 105, 107, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 10\nMOTOsetspeed(40)\nMOTOmove19(90, 160, 190, 100, 10, 95, 63, 100, 110, 40, 10, 100, 190, 105, 137, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70,0,0,0)\n\n\n-- 12\nMOTOsetspeed(24)\nMOTOmove19(90, 50, 190, 100, 142, 145, 77, 100, 110, 150, 10, 100, 58, 55, 123, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 13\nMOTOsetspeed(24)\nMOTOmove19(90, 50, 190, 100, 142, 145, 77, 100, 110, 150, 10, 100, 58, 55, 123, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(24)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1721784588094'] = function(block) {
  let code = "base_action.action('站起来q')\n";
  return code;
}

Blockly.Blocks['1721784726930'] = {
  init: function() {
    this.jsonInit({
      "type": "1721784726930",
      "message0": "上台阶终极",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1721784726930'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,50,50,50,50,50,0,0,0)\nMOTOsetspeed(22)\nMOTOmove19(100, 100, 100, 90, 91, 48, 129, 88, 100, 100, 100, 92, 107, 146, 76, 88, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(20)\nMOTOmove19(100, 100, 100, 85, 115, 95, 102, 90, 100, 100, 100, 93, 102, 145, 74, 87, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(25)\nMOTOmove19(100, 100, 100, 90, 115, 145, 47, 85, 100, 100, 100, 103, 102, 145, 74, 88, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(25)\nMOTOmove19(100, 100, 100, 65, 115, 145, 53, 61, 100, 100, 100, 103, 102, 145, 74, 88, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\n\n\n-- 11\nMOTOsetspeed(25)\nMOTOmove19(100, 100, 100, 75, 114, 146, 52, 74, 100, 100, 100, 123, 103, 143, 75, 120, 0, 0, 100)\nMOTOwait()\nDelayMs(150)\n\n\n-- 11\nMOTOsetspeed(25)\nMOTOmove19(100, 100, 100, 100, 114, 150, 45, 104, 100, 100, 100, 129, 102, 138, 38, 140, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(100, 100, 100, 100, 114, 150, 45, 104, 100, 100, 100, 113, 101, 137, 38, 139, 0, 0, 100)\nMOTOwait()\n\n\n-- 11\nMOTOsetspeed(25)\nMOTOmove19(100, 100, 100, 97, 124, 150, 52, 115, 100, 100, 100, 111, 48, 99, 39, 119, 0, 0, 100)\nMOTOwait()\nDelayMs(1000)\n\n\n-- 1\nMOTOsetspeed(15)\nMOTOmove19(100, 100, 100, 97, 131, 120, 87, 114, 100, 100, 100, 111, 48, 99, 39, 119, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\n\n\n-- 1\nMOTOsetspeed(25)\nMOTOmove19(100, 100, 100, 97, 121, 109, 96, 112, 100, 100, 100, 99, 83, 103, 94, 115, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(12)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1721784726930'] = function(block) {
  let code = "base_action.action('上台阶终极')\n";
  return code;
}

Blockly.Blocks['1721784745899'] = {
  init: function() {
    this.jsonInit({
      "type": "1721784745899",
      "message0": "前倒地q",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1721784745899'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- 起\nMOTOsetspeed(40)\nMOTOmove19(80, 90, 101, 101, 93, 57, 124, 101, 131, 100, 98, 102, 107, 143, 77, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(37, 92, 182, 85, 64, 41, 98, 99, 153, 107, 19, 130, 142, 160, 92, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54, 47, 190, 63, 160, 136, 46, 86, 150, 147, 19, 137, 44, 67, 152, 117, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(85, 12, 172, 62, 160, 146, 47, 75, 119, 189, 31, 139, 43, 54, 154, 123, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54, 47, 190, 66, 149, 146, 55, 63, 150, 147, 19, 158, 48, 60, 146, 140, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54, 47, 190, 70, 126, 145, 53, 68, 150, 147, 19, 138, 74, 60, 147, 135, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(54, 47, 190, 79, 113, 140, 50, 78, 150, 147, 19, 126, 72, 60, 135, 125, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 113, 100, 125, 140, 62, 100, 120, 170, 87, 100, 75, 60, 138, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 113, 104, 127, 133, 71, 100, 120, 170, 87, 103, 70, 67, 128, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 113, 102, 128, 104, 97, 100, 120, 170, 87, 102, 74, 91, 104, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(40)\nMOTOmove19(80, 37, 100, 108, 93, 55, 124, 100, 120, 170, 100, 92, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1721784745899'] = function(block) {
  let code = "base_action.action('前倒地q')\n";
  return code;
}

Blockly.Blocks['1721785647775'] = {
  init: function() {
    this.jsonInit({
      "type": "1721785647775",
      "message0": "抱箱左移qa",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1721785647775'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35,0,0,0)\nMOTOsetspeed(65)\nMOTOmove19(65, 10, 149, 85, 112, 90, 115, 90, 140, 190, 50, 110, 107, 146, 70, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(65, 10, 149, 95, 93, 53, 131, 105, 140, 190, 50, 120, 116, 160, 68, 130, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(65, 10, 149, 100, 93, 54, 134, 98, 140, 190, 50, 103, 107, 146, 76, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 100, 93, 55, 134, 95, 140, 190, 50, 100, 107, 145, 76, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 100, 93, 55, 134, 100, 140, 190, 50, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1721785647775'] = function(block) {
  let code = "base_action.action('抱箱左移qa')\n";
  return code;
}

Blockly.Blocks['1721978930071'] = {
  init: function() {
    this.jsonInit({
      "type": "1721978930071",
      "message0": "上楼梯终极版pro",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1721978930071'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,50,50,50,50,50,0,0,0)\nMOTOsetspeed(22)\nMOTOmove19(100, 100, 100, 90, 91, 48, 129, 88, 100, 100, 100, 92, 107, 146, 76, 88, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(20)\nMOTOmove19(100, 100, 100, 85, 115, 95, 102, 90, 100, 100, 100, 93, 102, 145, 74, 87, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(25)\nMOTOmove19(100, 100, 100, 90, 115, 145, 47, 85, 100, 100, 100, 103, 102, 145, 74, 88, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(25)\nMOTOmove19(100, 100, 100, 65, 115, 145, 53, 61, 100, 100, 100, 103, 102, 145, 74, 88, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\n\n\n-- 11\nMOTOsetspeed(25)\nMOTOmove19(100, 100, 100, 75, 114, 146, 52, 74, 100, 100, 100, 123, 103, 143, 75, 120, 0, 0, 100)\nMOTOwait()\nDelayMs(150)\n\n\n-- 11\nMOTOsetspeed(25)\nMOTOmove19(100, 100, 100, 100, 114, 150, 45, 104, 100, 100, 100, 129, 102, 138, 38, 140, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\n\n\n-- 11\nMOTOsetspeed(25)\nMOTOmove19(100, 100, 100, 97, 124, 150, 52, 115, 100, 100, 100, 111, 48, 99, 39, 119, 0, 0, 100)\nMOTOwait()\nDelayMs(1000)\n\n\n-- 1\nMOTOsetspeed(15)\nMOTOmove19(100, 100, 100, 97, 131, 120, 87, 114, 100, 100, 100, 111, 48, 99, 39, 119, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\n\n\n-- 1\nMOTOsetspeed(25)\nMOTOmove19(100, 100, 100, 97, 121, 109, 96, 112, 100, 100, 100, 99, 83, 103, 94, 115, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(12)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1721978930071'] = function(block) {
  let code = "base_action.action('上楼梯终极版pro')\n";
  return code;
}

Blockly.Blocks['1721980761376'] = {
  init: function() {
    this.jsonInit({
      "type": "1721980761376",
      "message0": "后倒地qa",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1721980761376'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(35, 130, 20, 101, 131, 126, 170, 100, 165, 70, 180, 99, 69, 74, 30, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(21, 105, 21, 101, 131, 126, 170, 100, 179, 95, 180, 99, 69, 74, 30, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92, 16, 46, 100, 80, 150, 60, 100, 108, 184, 154, 100, 120, 50, 140, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92, 18, 58, 100, 73, 150, 40, 100, 108, 182, 142, 100, 127, 50, 160, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92, 25, 135, 100, 124, 150, 50, 100, 108, 175, 65, 100, 76, 50, 150, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1721980761376'] = function(block) {
  let code = "base_action.action('后倒地qa')\n";
  return code;
}

Blockly.Blocks['Squat'] = {
  init: function () {
    this.jsonInit({
      type: 'Squat',
      message0: '%{BKY_SQUAT}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Squat'] = function (block) {
  const code = [
    'MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)',
    'MOTOsetspeed(14)',
    'MOTOmove16(80, 30, 100, 100, 130, 130, 77, 100, 120, 170, 100, 100, 70, 70, 123, 100)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(14)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Squat'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['SQUAT'] + "')\n";
  return code;
}

Blockly.Blocks['Right_hand_up'] = {
  init: function () {
    this.jsonInit({
      type: 'Right_hand_up',
      message0: '%{BKY_RIGHT_HAND_UP}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Right_hand_up'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 108, 93, 55, 124, 100, 120, 170, 100, 92, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 40, 100, 90, 91, 48, 129, 76, 120, 160, 100, 98, 107, 146, 76, 92)',
    'MOTOwait()',
    'MOTOsetspeed(46)',
    'MOTOmove16(40, 43, 141, 90, 101, 71, 112, 69, 44, 86, 100, 98, 107, 146, 76, 92)',
    'MOTOwait()',
    'DelayMs(400)',
    'MOTOsetspeed(35)',
    'MOTOmove16(40, 43, 141, 96, 93, 56, 124, 96, 170, 138, 100, 106, 107, 146, 76, 104)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(35)',
    'MOTOmove16(28, 21, 181, 93, 108, 67, 132, 92, 121, 170, 100, 103, 118, 135, 100, 106)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 43, 100, 100, 93, 56, 124, 100, 120, 170, 100, 100, 107, 146, 76, 101)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(81, 31, 100, 100, 93, 56, 124, 100, 121, 170, 100, 100, 107, 146, 76, 101)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 108, 93, 55, 124, 100, 120, 170, 100, 92, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Right_hand_up'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['RIGHT_HAND_UP'] + "')\n";
  return code;
}

Blockly.Blocks['Stretch_arm'] = {
  init: function () {
    this.jsonInit({
      type: 'Stretch_arm',
      message0: '%{BKY_STRETCH_ARM}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Stretch_arm'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 94, 105, 63, 124, 93, 120, 170, 100, 106, 95, 137, 76, 107)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(81, 21, 188, 100, 93, 55, 124, 100, 119, 169, 99, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(82, 18, 187, 100, 93, 55, 124, 100, 119, 183, 13, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(82, 100, 187, 100, 93, 55, 124, 100, 119, 183, 13, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(82, 100, 187, 100, 93, 55, 124, 100, 118, 100, 13, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(22, 39, 187, 100, 93, 55, 124, 100, 178, 161, 13, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(100, 100, 100, 100, 93, 55, 124, 100, 100, 100, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(35)',
    'MOTOmove16(50, 190, 100, 100, 93, 55, 124, 100, 150, 10, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(35)',
    'MOTOmove16(100, 100, 100, 100, 93, 55, 124, 100, 100, 100, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(300)',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Stretch_arm'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['STRETCH_ARM'] + "')\n";
  return code;
}

Blockly.Blocks['Salute_one'] = {
  init: function () {
    this.jsonInit({
      type: 'Salute_one',
      message0: '%{BKY_SALUTE_ONE}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Salute_one'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(300)',
    'MOTOsetspeed(64)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 59, 31, 130, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(2000)',
    'MOTOsetspeed(64)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Salute_one'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['SALUTE_ONE'] + "')\n";
  return code;
}

Blockly.Blocks['Salute_two'] = {
  init: function () {
    this.jsonInit({
      type: 'Salute_two',
      message0: '%{BKY_SALUTE_TWO}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Salute_two'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(300)',
    'MOTOsetspeed(68)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 47, 49, 103, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(2000)',
    'MOTOsetspeed(64)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Salute_two'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['SALUTE_TWO'] + "')\n";
  return code;
}

Blockly.Blocks['Hands_front_hit'] = {
  init: function () {
    this.jsonInit({
      type: 'Hands_front_hit',
      message0: '%{BKY_HANDS_FRONT_HIT}',
      previousStatement: null,
      nextStatement: null,
      colour: '#377DFD',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Hands_front_hit'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(28)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 108, 120, 170, 100, 100, 107, 145, 73, 112)',
    'MOTOwait()',
    'MOTOsetspeed(28)',
    'MOTOmove16(162, 70, 64, 99, 131, 128, 87, 94, 35, 130, 137, 109, 129, 83, 150, 99)',
    'MOTOwait()',
    'MOTOsetspeed(28)',
    'MOTOmove16(162, 70, 64, 85, 127, 111, 120, 86, 35, 130, 137, 102, 139, 97, 145, 99)',
    'MOTOwait()',
    'DelayMs(300)',
    'MOTOsetspeed(65)',
    'MOTOmove16(128, 174, 59, 99, 139, 131, 91, 102, 57, 40, 139, 118, 121, 118, 122, 120)',
    'MOTOwait()',
    'DelayMs(800)',
    'MOTOsetspeed(35)',
    'MOTOmove16(128, 174, 59, 99, 139, 131, 91, 112, 57, 40, 139, 103, 80, 71, 119, 118)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(75, 42, 88, 99, 98, 140, 51, 101, 132, 153, 96, 103, 101, 57, 152, 98)',
    'MOTOwait()',
    'MOTOsetspeed(22)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Hands_front_hit'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['HANDS_FRONT_HIT'] + "')\n";
  return code;
}

Blockly.Blocks['Continuous_punches'] = {
  init: function () {
    this.jsonInit({
      type: 'Continuous_punches',
      message0: '%{BKY_CONTINUOUS_PUNCHES}',
      previousStatement: null,
      nextStatement: null,
      colour: '#377DFD',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Continuous_punches'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(26)',
    'MOTOmove16(10, 131, 186, 91, 115, 113, 98, 94, 190, 62, 15, 108, 158, 146, 123, 112)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(79, 10, 180, 91, 115, 114, 98, 94, 190, 61, 15, 109, 158, 146, 112, 114)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(10, 131, 186, 91, 115, 114, 98, 94, 135, 190, 21, 109, 158, 146, 112, 114)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(79, 10, 180, 91, 115, 114, 98, 94, 190, 62, 15, 109, 158, 146, 112, 114)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(10, 131, 186, 91, 115, 114, 98, 94, 143, 190, 23, 109, 158, 146, 112, 114)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(79, 10, 180, 91, 115, 114, 98, 94, 190, 61, 15, 109, 158, 146, 112, 114)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(10, 131, 186, 91, 115, 114, 98, 94, 135, 190, 21, 109, 158, 146, 112, 114)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(79, 10, 180, 91, 115, 114, 98, 94, 190, 62, 15, 109, 158, 146, 112, 114)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(10, 131, 186, 91, 115, 114, 98, 94, 143, 190, 23, 109, 158, 146, 112, 114)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(79, 10, 180, 91, 115, 114, 98, 94, 190, 61, 15, 109, 158, 146, 112, 114)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(10, 131, 186, 91, 115, 114, 98, 94, 135, 190, 21, 109, 158, 146, 112, 114)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(79, 10, 180, 91, 115, 114, 98, 94, 190, 62, 15, 109, 158, 146, 112, 114)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(10, 131, 186, 91, 115, 114, 98, 94, 143, 190, 23, 109, 158, 146, 112, 114)',
    'MOTOwait()',
    'MOTOsetspeed(22)',
    'MOTOmove16(10, 131, 186, 91, 115, 113, 98, 94, 190, 62, 15, 108, 158, 146, 123, 112)',
    'MOTOwait()',
    'MOTOsetspeed(22)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Continuous_punches'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['CONTINUOUS_PUNCHES'] + "')\n";
  return code;
}

Blockly.Blocks['1723446950457'] = {
  init: function() {
    this.jsonInit({
      "type": "1723446950457",
      "message0": "一步登天",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1723446950457'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,50,50,50,50,50,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(100, 100, 100, 90, 91, 48, 129, 88, 100, 100, 100, 92, 107, 146, 76, 88, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100, 100, 100, 85, 115, 95, 102, 90, 100, 100, 100, 93, 102, 145, 74, 87, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(25)\nMOTOmove19(100, 100, 100, 90, 115, 145, 47, 85, 100, 100, 100, 103, 102, 145, 74, 88, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(25)\nMOTOmove19(100, 100, 100, 65, 115, 145, 53, 61, 100, 100, 100, 103, 102, 145, 74, 88, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\n\n\n-- 11\nMOTOsetspeed(25)\nMOTOmove19(100, 100, 100, 75, 114, 146, 52, 74, 100, 100, 100, 123, 103, 143, 75, 120, 0, 0, 100)\nMOTOwait()\nDelayMs(150)\n\n\n-- 11\nMOTOsetspeed(25)\nMOTOmove19(100, 100, 100, 100, 114, 150, 45, 104, 100, 100, 100, 129, 102, 138, 38, 140, 0, 0, 100)\nMOTOwait()\nDelayMs(250)\n\n\n-- 11\nMOTOsetspeed(25)\nMOTOmove19(100, 100, 100, 97, 124, 150, 52, 115, 100, 100, 100, 111, 48, 99, 39, 119, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\n\n\n-- 1\nMOTOsetspeed(15)\nMOTOmove19(100, 100, 100, 97, 131, 120, 87, 114, 100, 100, 100, 111, 48, 99, 39, 119, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\n\n\n-- 1\nMOTOsetspeed(25)\nMOTOmove19(100, 100, 100, 97, 121, 109, 96, 112, 100, 100, 100, 99, 83, 103, 94, 115, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(12)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1723446950457'] = function(block) {
  let code = "base_action.action('一步登天')\n";
  return code;
}

Blockly.Blocks['1723447011994'] = {
  init: function() {
    this.jsonInit({
      "type": "1723447011994",
      "message0": "555555",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1723447011994'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- 1\nMOTOsetspeed(25)\nMOTOmove19(37, 92, 182, 101, 93, 57, 124, 101, 153, 107, 19, 102, 107, 143, 77, 99, 0, 0, 100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(37, 92, 182, 79, 92, 57, 123, 79, 153, 107, 19, 131, 107, 142, 81, 126, 0, 0, 100)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(25)\nMOTOmove19(37, 90, 169, 41, 158, 141, 54, 60, 167, 104, 30, 150, 41, 57, 147, 140, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(36, 90, 157, 41, 158, 141, 54, 60, 167, 103, 44, 150, 41, 57, 147, 140, 0, 0, 100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(25)\nMOTOmove19(36, 34, 168, 41, 158, 141, 54, 60, 170, 165, 30, 150, 41, 57, 147, 140, 0, 0, 100)\nMOTOwait()\n\n\n-- 5\nMOTOsetspeed(25)\nMOTOmove19(36, 34, 168, 59, 148, 150, 82, 60, 170, 165, 30, 136, 76, 50, 146, 137, 0, 0, 100)\nMOTOwait()\n\n\n-- 6\nMOTOsetspeed(25)\nMOTOmove19(36, 34, 168, 100, 104, 132, 70, 100, 170, 165, 30, 100, 93, 69, 130, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 7\nMOTOsetspeed(27)\nMOTOmove19(36, 34, 168, 100, 90, 55, 127, 100, 170, 165, 30, 100, 110, 145, 73, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1723447011994'] = function(block) {
  let code = "base_action.action('555555')\n";
  return code;
}

Blockly.Blocks['1723446996959'] = {
  init: function() {
    this.jsonInit({
      "type": "1723446996959",
      "message0": "抱箱子快",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1723446996959'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- 张\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 149, 100, 93, 55, 124, 100, 120, 170, 50, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 149, 100, 113, 90, 109, 100, 120, 170, 50, 100, 87, 111, 91, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 149, 100, 136, 150, 62, 100, 120, 170, 50, 100, 72, 50, 138, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 149, 100, 149, 150, 67, 100, 120, 170, 50, 100, 52, 50, 133, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(150)\nMOTOsetspeed(5)\nMOTOmove19(80, 30, 148, 100, 148, 150, 59, 99, 119, 169, 50, 99, 52, 50, 141, 99, 0, 0, 101)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(65, 10, 149, 100, 149, 150, 67, 100, 140, 190, 50, 100, 52, 50, 133, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(50)\nMOTOmove19(65, 10, 149, 100, 104, 132, 70, 100, 140, 190, 50, 100, 93, 69, 130, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 149, 100, 90, 55, 127, 100, 140, 190, 50, 100, 110, 145, 73, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1723446996959'] = function(block) {
  let code = "base_action.action('抱箱子快')\n";
  return code;
}

Blockly.Blocks['1756290459376'] = {
  init: function() {
    this.jsonInit({
      "type": "1756290459376",
      "message0": "1个前进",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1756290459376'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(67, 10, 165, 100, 91, 55, 129, 100, 135, 190, 40, 100, 109, 145, 71, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(67, 10, 165, 90, 91, 48, 134, 88, 135, 190, 40, 94, 109, 146, 71, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(67, 10, 165, 86, 123, 95, 115, 90, 135, 190, 40, 94, 109, 146, 71, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(67, 10, 165, 86, 121, 37, 161, 88, 135, 190, 40, 94, 109, 146, 72, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(67, 10, 165, 107, 98, 56, 129, 111, 135, 190, 40, 112, 131, 155, 88, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(67, 10, 165, 106, 93, 54, 128, 113, 135, 190, 40, 114, 77, 105, 85, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(67, 10, 165, 106, 91, 54, 128, 111, 135, 190, 40, 114, 89, 163, 39, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(67, 10, 165, 88, 69, 45, 112, 90, 135, 190, 40, 93, 102, 144, 71, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(67, 10, 165, 86, 123, 95, 115, 90, 135, 190, 40, 94, 107, 146, 72, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(67, 10, 165, 86, 123, 75, 129, 100, 135, 190, 40, 94, 107, 146, 72, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(67, 10, 165, 100, 91, 55, 129, 100, 135, 190, 40, 100, 109, 145, 71, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1756290459376'] = function(block) {
  let code = "base_action.action('1个前进')\n";
  return code;
}

Blockly.Blocks['1756291048160'] = {
  init: function() {
    this.jsonInit({
      "type": "1756291048160",
      "message0": "抱1个",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1756291048160'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 149, 100, 93, 55, 124, 100, 120, 170, 50, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 149, 100, 136, 150, 62, 100, 120, 170, 50, 100, 72, 50, 138, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 148, 100, 148, 150, 59, 99, 119, 169, 50, 99, 52, 50, 141, 99, 0, 0, 101)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(20)\nMOTOmove19(65, 12, 151, 100, 149, 150, 59, 100, 140, 188, 50, 100, 52, 50, 141, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65, 12, 151, 100, 119, 132, 70, 100, 140, 188, 50, 100, 77, 69, 130, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 12, 151, 100, 115, 97, 97, 100, 140, 188, 50, 100, 84, 105, 98, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 12, 165, 100, 98, 77, 115, 100, 140, 188, 40, 100, 101, 123, 86, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1756291048160'] = function(block) {
  let code = "base_action.action('抱1个')\n";
  return code;
}

Blockly.Blocks['1756291069735'] = {
  init: function() {
    this.jsonInit({
      "type": "1756291069735",
      "message0": "放块",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1756291069735'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- RIGEND\nMOTOsetspeed(35)\nMOTOmove19(71, 10, 149, 100, 90, 55, 127, 100, 130, 190, 50, 100, 110, 145, 73, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 蹲2\nMOTOsetspeed(40)\nMOTOmove19(71, 10, 149, 100, 111, 150, 54, 102, 130, 190, 50, 100, 88, 51, 142, 101, 0, 0, 100)\nMOTOwait()\n\n\n-- MOTORE,100,71,128\nMOTOsetspeed(15)\nMOTOmove19(71, 10, 149, 100, 101, 150, 42, 102, 130, 190, 50, 100, 99, 51, 158, 101, 0, 0, 100)\nMOTOwait()\nDelayMs(400)\n\n\n-- 放\nMOTOsetspeed(20)\nMOTOmove19(71, 10, 149, 101, 107, 149, 43, 100, 130, 190, 50, 101, 92, 51, 157, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(30)\nMOTOmove19(80, 33, 130, 101, 107, 149, 43, 100, 120, 165, 66, 101, 92, 51, 157, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 33, 130, 100, 111, 150, 54, 102, 120, 165, 66, 100, 88, 51, 142, 101, 0, 0, 100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1756291069735'] = function(block) {
  let code = "base_action.action('放块')\n";
  return code;
}

Blockly.Blocks['1756291093540'] = {
  init: function() {
    this.jsonInit({
      "type": "1756291093540",
      "message0": "一块左滑10",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1756291093540'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- 4\nMOTOsetspeed(40)\nMOTOmove19(59, 12, 165, 84, 126, 150, 58, 77, 147, 182, 40, 164, 86, 92, 110, 120, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(59, 12, 165, 100, 113, 90, 109, 100, 147, 182, 40, 100, 87, 111, 91, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1756291093540'] = function(block) {
  let code = "base_action.action('一块左滑10')\n";
  return code;
}

Blockly.Blocks['1756291142697'] = {
  init: function() {
    this.jsonInit({
      "type": "1756291142697",
      "message0": "一块右滑10",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1756291142697'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(59, 12, 165, 51, 101, 95, 87, 78, 147, 182, 40, 139, 79, 50, 144, 133, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(40)\nMOTOmove19(59, 12, 165, 100, 113, 90, 109, 100, 147, 182, 40, 100, 87, 111, 91, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1756291142697'] = function(block) {
  let code = "base_action.action('一块右滑10')\n";
  return code;
}

Blockly.Blocks['1756291279841'] = {
  init: function() {
    this.jsonInit({
      "type": "1756291279841",
      "message0": "一个前进",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1756291279841'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(67, 10, 165, 100, 91, 55, 129, 100, 135, 190, 40, 100, 109, 145, 71, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(67, 10, 165, 90, 91, 48, 134, 88, 135, 190, 40, 94, 109, 146, 71, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(67, 10, 165, 86, 123, 95, 115, 90, 135, 190, 40, 94, 109, 146, 71, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(67, 10, 165, 86, 121, 37, 161, 88, 135, 190, 40, 94, 109, 146, 72, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(67, 10, 165, 107, 98, 56, 129, 111, 135, 190, 40, 112, 131, 155, 88, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(67, 10, 165, 106, 93, 54, 128, 113, 135, 190, 40, 114, 77, 105, 85, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(67, 10, 165, 106, 91, 54, 128, 111, 135, 190, 40, 114, 89, 163, 39, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(67, 10, 165, 88, 69, 45, 112, 90, 135, 190, 40, 93, 102, 144, 71, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(67, 10, 165, 86, 123, 95, 115, 90, 135, 190, 40, 94, 107, 146, 72, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(67, 10, 165, 86, 123, 75, 129, 100, 135, 190, 40, 94, 107, 146, 72, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(67, 10, 165, 100, 91, 55, 129, 100, 135, 190, 40, 100, 109, 145, 71, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1756291279841'] = function(block) {
  let code = "base_action.action('一个前进')\n";
  return code;
}

Blockly.Blocks['1756291323056'] = {
  init: function() {
    this.jsonInit({
      "type": "1756291323056",
      "message0": "一块后退3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1756291323056'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(45)\nMOTOmove19(67, 10, 165, 100, 93, 55, 124, 98, 135, 190, 40, 100, 107, 145, 76, 102, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(100,100,100,85,50,50,50,85,100,100,100,85,50,50,50,85,0,0,0)\nMOTOrigid16(100,100,100,85,60,60,60,75,100,100,100,85,60,60,60,75,0,0,0)\n\n\n-- 右抬腿\nMOTOsetspeed(10)\nMOTOmove19(67, 10, 165, 105, 93, 55, 124, 108, 135, 190, 40, 111, 102, 136, 78, 112, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(67, 10, 165, 105, 93, 55, 124, 107, 135, 190, 40, 108, 125, 145, 94, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(67, 10, 165, 92, 116, 55, 144, 85, 135, 190, 40, 95, 107, 145, 76, 93, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(67, 10, 165, 92, 75, 55, 106, 95, 135, 190, 40, 95, 107, 145, 76, 93, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(67, 10, 165, 105, 93, 55, 124, 107, 135, 190, 40, 108, 84, 141, 56, 115, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(67, 10, 165, 105, 92, 55, 124, 107, 135, 190, 40, 111, 107, 136, 78, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(67, 10, 165, 100, 93, 55, 124, 98, 135, 190, 40, 100, 107, 145, 76, 102, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1756291323056'] = function(block) {
  let code = "base_action.action('一块后退3')\n";
  return code;
}

Blockly.Blocks['1756291343470'] = {
  init: function() {
    this.jsonInit({
      "type": "1756291343470",
      "message0": "一块左转3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1756291343470'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(67, 10, 165, 100, 91, 55, 129, 100, 135, 190, 40, 100, 109, 145, 71, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(67, 10, 165, 95, 71, 55, 109, 95, 135, 190, 40, 105, 89, 145, 51, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(100)\nMOTOmove19(67, 10, 165, 95, 80, 55, 109, 92, 135, 190, 40, 105, 81, 145, 51, 108, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(50)\nMOTOmove19(67, 10, 165, 100, 91, 55, 129, 100, 135, 190, 40, 100, 109, 145, 71, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1756291343470'] = function(block) {
  let code = "base_action.action('一块左转3')\n";
  return code;
}

Blockly.Blocks['1756291589921'] = {
  init: function() {
    this.jsonInit({
      "type": "1756291589921",
      "message0": "右脚下高台",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1756291589921'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(35)\nMOTOmove19(83, 108, 103, 62, 102, 95, 87, 79, 103, 91, 103, 139, 73, 50, 144, 133, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(83, 108, 103, 20, 102, 95, 87, 79, 103, 91, 103, 155, 73, 50, 144, 140, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(83, 108, 103, 62, 102, 95, 87, 79, 103, 91, 103, 105, 73, 50, 144, 102, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(15)\nMOTOmove19(83, 108, 103, 100, 113, 90, 109, 100, 103, 91, 103, 100, 87, 111, 91, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1756291589921'] = function(block) {
  let code = "base_action.action('右脚下高台')\n";
  return code;
}

Blockly.Blocks['1756291681638'] = {
  init: function() {
    this.jsonInit({
      "type": "1756291681638",
      "message0": "抱两个",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1756291681638'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 90, 170, 55, 158, 140, 55, 60, 100, 110, 30, 145, 42, 60, 145, 140, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(75, 20, 170, 55, 158, 140, 55, 60, 125, 180, 30, 145, 42, 60, 145, 140, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(150)\nMOTOmove19(75, 20, 170, 50, 138, 150, 55, 60, 125, 180, 30, 150, 62, 50, 145, 140, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(150)\nMOTOmove19(75, 20, 170, 70, 128, 145, 75, 70, 125, 180, 30, 130, 72, 55, 125, 130, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30,0,0,0)\nMOTOsetspeed(150)\nMOTOmove19(75, 15, 170, 98, 142, 145, 77, 98, 125, 185, 35, 102, 58, 55, 123, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(75, 15, 170, 100, 93, 55, 124, 100, 125, 185, 35, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1756291681638'] = function(block) {
  let code = "base_action.action('抱两个')\n";
  return code;
}

Blockly.Blocks['1756291703089'] = {
  init: function() {
    this.jsonInit({
      "type": "1756291703089",
      "message0": "放pro",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1756291703089'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- RIGEND\nMOTOsetspeed(60)\nMOTOmove19(75, 15, 170, 100, 90, 55, 127, 100, 125, 185, 35, 100, 110, 145, 73, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75, 15, 170, 100, 91, 150, 42, 102, 125, 185, 35, 100, 107, 51, 158, 101, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(75, 20, 180, 55, 158, 140, 55, 60, 125, 180, 20, 145, 42, 60, 145, 140, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(74, 52, 180, 55, 158, 140, 55, 60, 124, 152, 19, 145, 42, 60, 145, 140, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(74, 52, 180, 56, 138, 150, 54, 60, 124, 152, 19, 146, 59, 50, 147, 140, 0, 0, 100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(20)\nMOTOmove19(80, 33, 130, 101, 107, 149, 43, 100, 120, 165, 66, 101, 92, 51, 157, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1756291703089'] = function(block) {
  let code = "base_action.action('放pro')\n";
  return code;
}

Blockly.Blocks['1756291731230'] = {
  init: function() {
    this.jsonInit({
      "type": "1756291731230",
      "message0": "两块左滑6",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1756291731230'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(35)\nMOTOmove19(83, 10, 175, 51, 126, 150, 58, 70, 118, 189, 28, 133, 86, 92, 110, 120, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(83, 10, 175, 100, 113, 90, 109, 100, 118, 189, 28, 100, 87, 111, 91, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1756291731230'] = function(block) {
  let code = "base_action.action('两块左滑6')\n";
  return code;
}

Blockly.Blocks['1756291758428'] = {
  init: function() {
    this.jsonInit({
      "type": "1756291758428",
      "message0": "两块右滑6",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1756291758428'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(70, 15, 190, 62, 112, 90, 105, 79, 131, 181, 15, 139, 73, 50, 144, 133, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(70, 15, 190, 100, 113, 90, 109, 100, 131, 181, 15, 100, 87, 111, 91, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1756291758428'] = function(block) {
  let code = "base_action.action('两块右滑6')\n";
  return code;
}

Blockly.Blocks['1756291909277'] = {
  init: function() {
    this.jsonInit({
      "type": "1756291909277",
      "message0": "两块前进32",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1756291909277'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(83, 10, 175, 100, 91, 55, 129, 100, 118, 189, 28, 100, 109, 145, 71, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(83, 10, 175, 90, 91, 48, 134, 88, 118, 189, 28, 94, 109, 146, 71, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(83, 10, 175, 86, 123, 95, 115, 90, 118, 189, 28, 94, 109, 146, 71, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(83, 10, 175, 86, 121, 37, 161, 88, 118, 189, 28, 94, 109, 146, 72, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(83, 10, 175, 107, 98, 56, 129, 111, 118, 189, 28, 112, 131, 155, 88, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(83, 10, 175, 106, 93, 54, 128, 113, 118, 189, 28, 114, 77, 105, 85, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(83, 10, 175, 106, 91, 54, 128, 111, 118, 189, 28, 114, 89, 163, 39, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(83, 10, 175, 88, 69, 45, 112, 90, 118, 189, 28, 93, 102, 144, 71, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(83, 10, 175, 86, 123, 95, 115, 90, 118, 189, 28, 94, 107, 146, 72, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(83, 10, 175, 100, 91, 55, 129, 100, 118, 189, 28, 100, 109, 145, 71, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1756291909277'] = function(block) {
  let code = "base_action.action('两块前进32')\n";
  return code;
}

Blockly.Blocks['1756291935713'] = {
  init: function() {
    this.jsonInit({
      "type": "1756291935713",
      "message0": "两块后退32",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1756291935713'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(45)\nMOTOmove19(83, 10, 175, 100, 93, 55, 124, 98, 118, 189, 28, 100, 107, 145, 76, 102, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(100,100,100,85,50,50,50,85,100,100,100,85,50,50,50,85,0,0,0)\nMOTOrigid16(100,100,100,85,60,60,60,75,100,100,100,85,60,60,60,75,0,0,0)\n\n\n-- 右抬腿\nMOTOsetspeed(10)\nMOTOmove19(83, 10, 175, 105, 93, 55, 124, 108, 118, 189, 28, 111, 102, 136, 78, 112, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(83, 10, 175, 105, 93, 55, 124, 107, 118, 189, 28, 108, 125, 145, 94, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(83, 10, 175, 92, 116, 55, 144, 85, 118, 189, 28, 95, 107, 145, 76, 93, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(83, 10, 175, 92, 75, 55, 106, 95, 118, 189, 28, 95, 107, 145, 76, 93, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(83, 10, 175, 105, 93, 55, 124, 107, 118, 189, 28, 108, 84, 141, 56, 115, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(83, 10, 175, 105, 92, 55, 124, 107, 118, 189, 28, 111, 107, 136, 78, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(83, 10, 175, 100, 93, 55, 124, 98, 118, 189, 28, 100, 107, 145, 76, 102, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1756291935713'] = function(block) {
  let code = "base_action.action('两块后退32')\n";
  return code;
}

Blockly.Blocks['1756291997417'] = {
  init: function() {
    this.jsonInit({
      "type": "1756291997417",
      "message0": "两块左转32",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1756291997417'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(83, 10, 175, 100, 91, 55, 129, 100, 118, 189, 28, 100, 109, 145, 71, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(83, 10, 175, 95, 71, 55, 109, 95, 118, 189, 28, 105, 89, 145, 51, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(100)\nMOTOmove19(83, 10, 175, 95, 80, 55, 109, 92, 118, 189, 28, 105, 81, 145, 51, 108, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(50)\nMOTOmove19(83, 10, 175, 100, 91, 55, 129, 100, 118, 189, 28, 100, 109, 145, 71, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1756291997417'] = function(block) {
  let code = "base_action.action('两块左转32')\n";
  return code;
}

Blockly.Blocks['1756292017988'] = {
  init: function() {
    this.jsonInit({
      "type": "1756292017988",
      "message0": "两块右转32",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1756292017988'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(83, 10, 175, 100, 90, 55, 129, 100, 118, 189, 28, 100, 110, 145, 71, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(83, 10, 175, 95, 110, 55, 149, 95, 118, 189, 28, 105, 130, 145, 91, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(100)\nMOTOmove19(83, 10, 175, 95, 118, 55, 149, 92, 118, 189, 28, 105, 121, 145, 91, 108, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(50)\nMOTOmove19(83, 10, 175, 100, 90, 55, 129, 100, 118, 189, 28, 100, 110, 145, 71, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1756292017988'] = function(block) {
  let code = "base_action.action('两块右转32')\n";
  return code;
}

Blockly.Blocks['1756634960248'] = {
  init: function() {
    this.jsonInit({
      "type": "1756634960248",
      "message0": "摞起来放",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1756634960248'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- RIGEND\nMOTOsetspeed(30)\nMOTOmove19(75, 15, 170, 100, 90, 55, 127, 100, 125, 185, 35, 100, 110, 145, 73, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 蹲2\nMOTOsetspeed(30)\nMOTOmove19(75, 15, 170, 100, 111, 150, 54, 102, 125, 185, 35, 100, 88, 51, 142, 101, 0, 0, 100)\nMOTOwait()\n\n\n-- MOTORE,100,71,128\nMOTOsetspeed(15)\nMOTOmove19(75, 15, 170, 100, 101, 150, 42, 102, 125, 185, 35, 100, 99, 51, 158, 101, 0, 0, 100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(30)\nMOTOmove19(75, 16, 148, 100, 101, 150, 42, 102, 123, 178, 58, 100, 99, 51, 158, 101, 0, 0, 100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(30)\nMOTOmove19(80, 33, 130, 101, 107, 149, 43, 100, 120, 165, 66, 101, 92, 51, 157, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1756634960248'] = function(block) {
  let code = "base_action.action('摞起来放')\n";
  return code;
}

Blockly.Blocks['1756635800432'] = {
  init: function() {
    this.jsonInit({
      "type": "1756635800432",
      "message0": "摞起来放1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1756635800432'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- RIGEND\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,100,90,55,127,100,125,185,35,100,110,145,73,100,0,0,100)\nMOTOwait()\n\n\n-- 蹲2\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,100,111,150,54,102,125,185,35,100,88,51,142,101,0,0,100)\nMOTOwait()\n\n\n-- MOTORE,100,71,128\nMOTOsetspeed(15)\nMOTOmove19(75,15,170,100,101,150,42,102,125,185,35,100,99,51,158,101,0,0,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(30)\nMOTOmove19(75,16,148,100,101,150,42,102,123,178,58,100,99,51,158,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,52,147,100,101,150,42,102,123,148,57,100,99,51,158,101,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1756635800432'] = function(block) {
  let code = "base_action.action('摞起来放1')\n";
  return code;
}

Blockly.Blocks['1757422876112'] = {
  init: function() {
    this.jsonInit({
      "type": "1757422876112",
      "message0": "两个",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1757422876112'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,90,170,55,158,140,55,60,100,110,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(75,20,170,55,158,140,55,60,125,180,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(150)\nMOTOmove19(75,20,170,50,138,150,55,60,125,180,30,150,62,50,145,140,0,0,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(150)\nMOTOmove19(75,20,170,70,128,145,75,70,125,180,30,130,72,55,125,130,0,0,100)\nMOTOwait()\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,98,142,145,77,98,125,185,35,102,58,55,123,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,100,93,55,124,100,125,185,35,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1757422876112'] = function(block) {
  let code = "base_action.action('两个')\n";
  return code;
}

Blockly.Blocks['1757422900282'] = {
  init: function() {
    this.jsonInit({
      "type": "1757422900282",
      "message0": "放",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1757422900282'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- RIGEND\nMOTOsetspeed(60)\nMOTOmove19(75,15,170,100,90,55,127,100,125,185,35,100,110,145,73,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,100,91,150,42,102,125,185,35,100,107,51,158,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(75,20,180,55,158,140,55,60,125,180,20,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(74,52,180,55,158,140,55,60,124,152,19,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(74,52,180,56,138,150,54,60,124,152,19,146,59,50,147,140,0,0,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(20)\nMOTOmove19(80,33,130,101,107,149,43,100,120,165,66,101,92,51,157,100,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(25)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1757422900282'] = function(block) {
  let code = "base_action.action('放')\n";
  return code;
}

Blockly.Blocks['1757422939220'] = {
  init: function() {
    this.jsonInit({
      "type": "1757422939220",
      "message0": "前倒地1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1757422939220'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 起\nMOTOsetspeed(40)\nMOTOmove19(80,90,101,101,93,57,124,101,131,100,98,102,107,143,77,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(37,92,182,85,64,41,98,99,153,107,19,130,142,160,92,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,63,160,136,46,86,150,147,19,137,44,67,152,117,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(85,12,172,62,160,146,47,75,119,189,31,139,43,54,154,123,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,66,149,146,55,63,150,147,19,158,48,60,146,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,70,126,145,53,68,150,147,19,138,74,60,147,135,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(54,47,190,79,113,140,50,78,150,147,19,126,72,60,135,125,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,125,140,62,100,120,170,87,100,75,60,138,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,104,127,133,71,100,120,170,87,103,70,67,128,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,102,128,104,97,100,120,170,87,102,74,91,104,100,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(30)\nMOTOmove19(80,37,100,108,93,55,124,100,120,170,100,92,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1757422939220'] = function(block) {
  let code = "base_action.action('前倒地1')\n";
  return code;
}

Blockly.Blocks['1757422965478'] = {
  init: function() {
    this.jsonInit({
      "type": "1757422965478",
      "message0": "后倒地1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1757422965478'] = function(block) {
  let code = "MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(35,130,20,101,131,126,170,100,165,70,180,99,69,74,30,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(21,105,21,101,131,126,170,100,179,95,180,99,69,74,30,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,16,46,100,80,150,60,100,108,184,154,100,120,50,140,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,18,58,100,73,150,40,100,108,182,142,100,127,50,160,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,25,135,100,124,150,50,100,108,175,65,100,76,50,150,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1757422965478'] = function(block) {
  let code = "base_action.action('后倒地1')\n";
  return code;
}

Blockly.Blocks['1757492425869'] = {
  init: function() {
    this.jsonInit({
      "type": "1757492425869",
      "message0": "正面上高台4",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1757492425869'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 190, 100, 93, 55, 124, 100, 120, 170, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 190, 100, 153, 55, 124, 100, 120, 170, 10, 100, 46, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 190, 100, 93, 55, 124, 100, 120, 170, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 170, 100, 129, 55, 166, 100, 120, 170, 30, 100, 71, 145, 37, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 170, 101, 84, 150, 41, 100, 120, 170, 30, 100, 71, 145, 37, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 170, 100, 135, 120, 41, 99, 120, 170, 30, 100, 71, 145, 37, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 170, 100, 152, 132, 48, 100, 120, 170, 30, 100, 71, 145, 37, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 170, 100, 152, 132, 48, 100, 120, 170, 30, 99, 122, 50, 127, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 170, 99, 141, 101, 59, 100, 120, 170, 30, 100, 40, 50, 165, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 170, 99, 141, 101, 59, 100, 120, 170, 30, 99, 40, 75, 142, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 170, 99, 155, 132, 40, 100, 120, 170, 30, 99, 40, 75, 142, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 160, 99, 160, 92, 77, 100, 120, 170, 40, 99, 71, 148, 114, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 160, 99, 160, 91, 79, 100, 120, 170, 40, 99, 40, 104, 122, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(85, 12, 172, 62, 160, 146, 47, 75, 119, 189, 31, 139, 43, 54, 154, 123, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54, 47, 190, 66, 149, 146, 55, 63, 150, 147, 19, 158, 48, 60, 146, 140, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54, 47, 190, 70, 126, 145, 53, 68, 150, 147, 19, 138, 74, 60, 147, 135, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54, 47, 190, 79, 113, 140, 50, 78, 150, 147, 19, 126, 72, 60, 135, 125, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 113, 100, 125, 140, 62, 100, 120, 170, 87, 100, 75, 60, 138, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 113, 104, 127, 133, 71, 100, 120, 170, 87, 103, 70, 67, 128, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 113, 102, 128, 104, 97, 100, 120, 170, 87, 102, 74, 91, 104, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 37, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1757492425869'] = function(block) {
  let code = "base_action.action('正面上高台4')\n";
  return code;
}

Blockly.Blocks['1757493799548'] = {
  init: function() {
    this.jsonInit({
      "type": "1757493799548",
      "message0": "下",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1757493799548'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 22\nMOTOsetspeed(30)\nMOTOmove19(80,37,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n\n\n-- 17\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,70,126,145,53,68,150,147,19,138,74,60,147,135,0,0,100)\nMOTOwait()\n\n\n-- 15\nMOTOsetspeed(10)\nMOTOmove19(85,12,172,62,160,146,47,75,119,189,31,139,43,54,154,123,0,0,100)\nMOTOwait()\n\n\n-- 14\nMOTOsetspeed(30)\nMOTOmove19(80,30,160,99,160,91,79,100,120,170,40,99,40,104,122,99,0,0,100)\nMOTOwait()\n\n\n-- 9\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,100,152,132,48,100,120,170,30,99,122,50,127,100,0,0,100)\nMOTOwait()\n\n\n-- 8\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,100,152,132,48,100,120,170,30,100,71,145,37,100,0,0,100)\nMOTOwait()\n\n\n-- 6\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,101,84,150,41,100,120,170,30,100,71,145,37,100,0,0,100)\nMOTOwait()\n\n\n-- 5\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,100,129,55,166,100,120,170,30,100,71,145,37,100,0,0,100)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(10)\nMOTOmove19(80,30,190,100,153,55,124,100,120,170,10,100,46,145,76,100,0,0,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(80,30,190,100,93,55,124,100,120,170,10,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1757493799548'] = function(block) {
  let code = "base_action.action('下')\n";
  return code;
}

Blockly.Blocks['1757504808250'] = {
  init: function() {
    this.jsonInit({
      "type": "1757504808250",
      "message0": "下台",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1757504808250'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 22\nMOTOsetspeed(30)\nMOTOmove19(80,37,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n\n\n-- 17\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,70,126,145,53,68,150,147,19,138,74,60,147,135,0,0,100)\nMOTOwait()\n\n\n-- 15\nMOTOsetspeed(10)\nMOTOmove19(85,12,172,62,160,146,47,75,119,189,31,139,43,54,154,123,0,0,100)\nMOTOwait()\n\n\n-- 14\nMOTOsetspeed(30)\nMOTOmove19(80,30,160,99,160,91,79,100,120,170,40,99,40,104,122,99,0,0,100)\nMOTOwait()\n\n\n-- 9\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,100,152,132,48,100,120,170,30,99,122,50,127,100,0,0,100)\nMOTOwait()\n\n\n-- 8\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,100,152,132,48,100,120,170,30,100,71,145,37,100,0,0,100)\nMOTOwait()\n\n\n-- 6\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,101,84,150,41,100,120,170,30,100,71,145,37,100,0,0,100)\nMOTOwait()\n\n\n-- 5\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,100,129,55,166,100,120,170,30,100,71,145,37,100,0,0,100)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(10)\nMOTOmove19(80,30,190,100,153,55,124,100,120,170,10,100,46,145,76,100,0,0,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(80,30,190,100,93,55,124,100,120,170,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,63,160,136,46,86,150,147,19,137,44,67,152,117,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(85,12,172,62,160,146,47,75,119,189,31,139,43,54,154,123,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,66,149,146,55,63,150,147,19,158,48,60,146,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,70,126,145,53,68,150,147,19,138,74,60,147,135,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(54,47,190,79,113,140,50,78,150,147,19,126,72,60,135,125,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,125,140,62,100,120,170,87,100,75,60,138,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,104,127,133,71,100,120,170,87,103,70,67,128,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,102,128,104,97,100,120,170,87,102,74,91,104,100,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(40)\nMOTOmove19(80,37,100,108,93,55,124,100,120,170,100,92,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1757504808250'] = function(block) {
  let code = "base_action.action('下台')\n";
  return code;
}

Blockly.Blocks['1757505975260'] = {
  init: function() {
    this.jsonInit({
      "type": "1757505975260",
      "message0": "下楼",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1757505975260'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 22\nMOTOsetspeed(30)\nMOTOmove19(80,37,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n\n\n-- 17\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,70,126,145,53,68,150,147,19,138,74,60,147,135,0,0,100)\nMOTOwait()\n\n\n-- 15\nMOTOsetspeed(10)\nMOTOmove19(85,12,172,62,160,146,47,75,119,189,31,139,43,54,154,123,0,0,100)\nMOTOwait()\n\n\n-- 14\nMOTOsetspeed(30)\nMOTOmove19(80,30,160,99,160,91,79,100,120,170,40,99,40,104,122,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(79,28,151,100,93,55,124,100,119,170,51,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,190,100,93,55,124,100,120,170,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,63,160,136,46,86,150,147,19,137,44,67,152,117,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(85,12,172,62,160,146,47,75,119,189,31,139,43,54,154,123,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,66,149,146,55,63,150,147,19,158,48,60,146,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,70,126,145,53,68,150,147,19,138,74,60,147,135,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(54,47,190,79,113,140,50,78,150,147,19,126,72,60,135,125,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,125,140,62,100,120,170,87,100,75,60,138,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,104,127,133,71,100,120,170,87,103,70,67,128,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,102,128,104,97,100,120,170,87,102,74,91,104,100,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(40)\nMOTOmove19(80,37,100,108,93,55,124,100,120,170,100,92,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1757505975260'] = function(block) {
  let code = "base_action.action('下楼')\n";
  return code;
}

Blockly.Blocks['1757506238414'] = {
  init: function() {
    this.jsonInit({
      "type": "1757506238414",
      "message0": "下台阶1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1757506238414'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 22\nMOTOsetspeed(30)\nMOTOmove19(80,37,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n\n\n-- 17\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,70,126,145,53,68,150,147,19,138,74,60,147,135,0,0,100)\nMOTOwait()\n\n\n-- 15\nMOTOsetspeed(10)\nMOTOmove19(85,12,172,62,160,146,47,75,119,189,31,139,43,54,154,123,0,0,100)\nMOTOwait()\n\n\n-- 14\nMOTOsetspeed(30)\nMOTOmove19(80,30,160,99,160,91,79,100,120,170,40,99,40,104,122,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(79,28,151,100,93,55,124,100,119,170,51,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,190,100,93,55,124,100,120,170,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,63,160,136,46,86,150,147,19,137,44,67,152,117,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(85,12,172,62,160,146,47,75,119,189,31,139,43,54,154,123,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,66,149,146,55,63,150,147,19,158,48,60,146,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,70,126,145,53,68,150,147,19,138,74,60,147,135,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(54,47,190,79,113,140,50,78,150,147,19,126,72,60,135,125,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,125,140,62,100,120,170,87,100,75,60,138,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,104,127,133,71,100,120,170,87,103,70,67,128,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,102,128,104,97,100,120,170,87,102,74,91,104,100,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(40)\nMOTOmove19(80,37,100,108,93,55,124,100,120,170,100,92,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1757506238414'] = function(block) {
  let code = "base_action.action('下台阶1')\n";
  return code;
}

Blockly.Blocks['1757506558929'] = {
  init: function() {
    this.jsonInit({
      "type": "1757506558929",
      "message0": "111",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1757506558929'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 22\nMOTOsetspeed(30)\nMOTOmove19(80,37,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n\n\n-- 17\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,70,126,145,53,68,150,147,19,138,74,60,147,135,0,0,100)\nMOTOwait()\n\n\n-- 15\nMOTOsetspeed(10)\nMOTOmove19(85,12,172,62,160,146,47,75,119,189,31,139,43,54,154,123,0,0,100)\nMOTOwait()\n\n\n-- 14\nMOTOsetspeed(30)\nMOTOmove19(80,30,160,99,160,91,79,100,120,170,40,99,40,104,122,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,28,173,100,93,55,124,100,119,169,27,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,190,100,93,55,124,100,120,170,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,190,100,93,55,190,100,120,170,10,100,107,145,10,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,63,160,136,46,86,150,147,19,137,44,67,152,117,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(85,12,172,62,160,146,47,75,119,189,31,139,43,54,154,123,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,66,149,146,55,63,150,147,19,158,48,60,146,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,70,126,145,53,68,150,147,19,138,74,60,147,135,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(54,47,190,79,113,140,50,78,150,147,19,126,72,60,135,125,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,125,140,62,100,120,170,87,100,75,60,138,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,104,127,133,71,100,120,170,87,103,70,67,128,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,102,128,104,97,100,120,170,87,102,74,91,104,100,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(40)\nMOTOmove19(80,37,100,108,93,55,124,100,120,170,100,92,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1757506558929'] = function(block) {
  let code = "base_action.action('111')\n";
  return code;
}

Blockly.Blocks['1757507190558'] = {
  init: function() {
    this.jsonInit({
      "type": "1757507190558",
      "message0": "0",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1757507190558'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 22\nMOTOsetspeed(30)\nMOTOmove19(80,37,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80,37,100,100,104,149,38,99,120,170,100,100,94,50,162,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,28,190,99,160,91,79,100,119,170,12,99,40,104,122,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,28,151,100,93,55,96,100,119,170,51,100,107,145,102,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,190,100,93,55,124,100,120,170,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,190,100,93,55,190,100,120,170,10,100,107,145,10,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,63,160,136,46,86,150,147,19,137,44,67,152,117,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(85,12,172,62,160,146,47,75,119,189,31,139,43,54,154,123,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,66,149,146,55,63,150,147,19,158,48,60,146,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,70,126,145,53,68,150,147,19,138,74,60,147,135,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(54,47,190,79,113,140,50,78,150,147,19,126,72,60,135,125,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,125,140,62,100,120,170,87,100,75,60,138,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,104,127,133,71,100,120,170,87,103,70,67,128,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,102,128,104,97,100,120,170,87,102,74,91,104,100,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(40)\nMOTOmove19(80,37,100,108,93,55,124,100,120,170,100,92,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1757507190558'] = function(block) {
  let code = "base_action.action('0')\n";
  return code;
}

Blockly.Blocks['1757507560143'] = {
  init: function() {
    this.jsonInit({
      "type": "1757507560143",
      "message0": "00",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1757507560143'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 22\nMOTOsetspeed(30)\nMOTOmove19(80,37,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80,37,100,100,104,149,38,99,120,170,100,100,94,50,162,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,28,190,98,160,149,39,98,119,170,12,98,40,50,162,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,28,151,100,93,55,96,100,119,170,51,100,107,145,102,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,190,100,93,55,124,100,120,170,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,190,100,93,55,190,100,120,170,10,100,107,145,10,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,63,160,136,46,86,150,147,19,137,44,67,152,117,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(85,12,172,62,160,146,47,75,119,189,31,139,43,54,154,123,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,66,149,146,55,63,150,147,19,158,48,60,146,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,70,126,145,53,68,150,147,19,138,74,60,147,135,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(54,47,190,79,113,140,50,78,150,147,19,126,72,60,135,125,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,125,140,62,100,120,170,87,100,75,60,138,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,104,127,133,71,100,120,170,87,103,70,67,128,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,102,128,104,97,100,120,170,87,102,74,91,104,100,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(25)\nMOTOmove19(80,37,100,108,93,55,124,100,120,170,100,92,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1757507560143'] = function(block) {
  let code = "base_action.action('00')\n";
  return code;
}

Blockly.Blocks['1757557294461'] = {
  init: function() {
    this.jsonInit({
      "type": "1757557294461",
      "message0": "2个",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1757557294461'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,98,142,145,77,98,125,185,35,102,58,55,123,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,90,170,55,158,140,55,60,100,110,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(75,20,170,55,158,140,55,60,125,180,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(150)\nMOTOmove19(75,20,170,50,138,150,55,60,125,180,30,150,62,50,145,140,0,0,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(150)\nMOTOmove19(75,20,170,70,128,145,75,70,125,180,30,130,72,55,125,130,0,0,100)\nMOTOwait()\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,98,142,145,77,98,125,185,35,102,58,55,123,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75,15,170,100,93,55,124,100,125,185,35,100,106,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1757557294461'] = function(block) {
  let code = "base_action.action('2个')\n";
  return code;
}

Blockly.Blocks['1757655124481'] = {
  init: function() {
    this.jsonInit({
      "type": "1757655124481",
      "message0": "222",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1757655124481'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,90,170,55,158,140,55,60,100,110,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(75,20,170,55,158,140,55,60,125,180,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(150)\nMOTOmove19(75,20,170,50,138,150,55,60,125,180,30,150,62,50,145,140,0,0,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(150)\nMOTOmove19(75,20,170,70,128,145,75,70,125,180,30,130,72,55,125,130,0,0,100)\nMOTOwait()\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,98,142,145,77,98,125,185,35,102,58,55,123,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(75,15,170,100,93,55,124,100,125,185,35,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1757655124481'] = function(block) {
  let code = "base_action.action('222')\n";
  return code;
}

Blockly.Blocks['1757827005268'] = {
  init: function() {
    this.jsonInit({
      "type": "1757827005268",
      "message0": "右",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1757827005268'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(70,15,190,62,120,90,116,77,131,181,15,139,80,50,144,133,0,0,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(70,15,190,100,110,90,109,100,131,181,15,100,90,111,91,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1757827005268'] = function(block) {
  let code = "base_action.action('右')\n";
  return code;
}

Blockly.Blocks['1757827177848'] = {
  init: function() {
    this.jsonInit({
      "type": "1757827177848",
      "message0": "左",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1757827177848'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,51,125,150,64,68,118,189,28,133,95,92,115,120,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,100,110,90,109,100,118,189,28,100,90,111,91,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1757827177848'] = function(block) {
  let code = "base_action.action('左')\n";
  return code;
}

Blockly.Blocks['1757827952072'] = {
  init: function() {
    this.jsonInit({
      "type": "1757827952072",
      "message0": "1左",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1757827952072'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(59,12,165,84,115,150,58,77,147,182,40,164,90,92,110,120,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(59,12,165,100,106,90,109,100,147,182,40,100,95,111,91,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1757827952072'] = function(block) {
  let code = "base_action.action('1左')\n";
  return code;
}

Blockly.Blocks['1758525523744'] = {
  init: function() {
    this.jsonInit({
      "type": "1758525523744",
      "message0": "正面上高台",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758525523744'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(80,30,190,100,93,55,124,100,120,170,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,190,100,153,55,124,100,120,170,10,100,46,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,190,100,93,55,124,100,120,170,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,100,129,55,166,100,120,170,30,100,71,145,37,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,101,84,150,41,100,120,170,30,100,71,145,37,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,100,152,132,48,100,120,170,30,100,71,145,37,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,100,152,132,48,100,120,170,30,99,122,50,127,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,99,141,101,59,100,120,170,30,100,40,50,165,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,99,141,101,59,100,120,170,30,99,40,75,142,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,99,155,132,40,100,120,170,30,99,40,75,142,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,160,99,160,92,77,100,120,170,40,99,71,148,114,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,160,99,160,91,79,100,120,170,40,99,40,104,122,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(85,12,172,62,160,146,47,75,119,189,31,139,43,54,154,123,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,66,149,146,55,63,150,147,19,158,48,60,146,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,70,126,145,53,68,150,147,19,138,74,60,147,135,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,79,113,140,50,78,150,147,19,126,72,60,135,125,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,113,100,125,140,62,100,120,170,87,100,75,60,138,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,113,104,127,133,71,100,120,170,87,103,70,67,128,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,113,102,128,104,97,100,120,170,87,102,74,91,104,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,37,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758525523744'] = function(block) {
  let code = "base_action.action('正面上高台')\n";
  return code;
}

Blockly.Blocks['1758634865360'] = {
  init: function() {
    this.jsonInit({
      "type": "1758634865360",
      "message0": "123456",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758634865360'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(80,30,190,100,93,55,124,100,120,170,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,190,100,153,55,124,100,120,170,10,100,46,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,190,100,93,55,124,100,120,170,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,100,129,55,166,100,120,170,30,100,71,145,37,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,101,84,150,41,100,120,170,30,100,71,145,37,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,100,160,150,39,100,120,170,30,100,71,145,37,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,100,152,132,48,100,120,170,30,99,122,50,127,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,99,141,101,59,100,120,170,30,100,40,50,165,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,99,141,101,59,100,120,170,30,99,40,75,142,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,99,155,132,40,100,120,170,30,99,40,75,142,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,160,99,160,92,77,100,120,170,40,99,71,148,114,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,160,99,160,91,79,100,120,170,40,99,40,104,122,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(85,12,172,62,160,146,47,75,119,189,31,139,43,54,154,123,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,66,149,146,55,63,150,147,19,158,48,60,146,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,70,126,145,53,68,150,147,19,138,74,60,147,135,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,79,113,140,50,78,150,147,19,126,72,60,135,125,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,113,100,125,140,62,100,120,170,87,100,75,60,138,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,113,104,127,133,71,100,120,170,87,103,70,67,128,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,113,102,128,104,97,100,120,170,87,102,74,91,104,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,37,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758634865360'] = function(block) {
  let code = "base_action.action('123456')\n";
  return code;
}

Blockly.Blocks['1758789623976'] = {
  init: function() {
    this.jsonInit({
      "type": "1758789623976",
      "message0": "12",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758789623976'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,93,55,122,110,120,170,99,105,106,144,75,117,0,0,99)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(79,29,100,100,93,55,122,109,120,170,99,100,98,50,142,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(79,29,100,100,93,55,122,109,120,170,99,100,156,50,142,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,93,55,122,109,120,170,99,100,154,133,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,93,55,122,109,120,170,99,100,154,133,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,102,104,150,42,98,120,170,99,100,154,133,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(79,29,100,102,113,150,45,84,120,156,98,100,154,133,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,102,113,150,45,84,120,156,98,100,154,133,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,93,55,122,100,120,170,99,100,106,144,75,100,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,93,55,122,100,120,170,99,100,106,144,75,100,0,0,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758789623976'] = function(block) {
  let code = "base_action.action('12')\n";
  return code;
}

Blockly.Blocks['1758802619268'] = {
  init: function() {
    this.jsonInit({
      "type": "1758802619268",
      "message0": "112",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758802619268'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,93,55,122,110,120,170,99,105,106,144,75,117,0,0,99)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(79,29,100,100,93,55,122,109,120,170,99,100,98,50,142,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(79,29,100,100,93,55,122,109,120,170,99,100,156,50,142,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,93,55,122,109,120,170,99,100,154,133,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,93,55,122,109,120,170,99,100,154,133,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,102,98,150,45,107,120,170,99,100,154,133,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,102,98,150,45,107,120,170,99,100,154,133,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(79,29,100,102,112,150,50,114,120,170,98,100,168,133,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,102,113,150,49,110,120,156,98,100,154,133,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,93,55,122,100,120,170,99,100,106,144,75,100,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,93,55,122,100,120,170,99,100,106,144,75,100,0,0,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758802619268'] = function(block) {
  let code = "base_action.action('112')\n";
  return code;
}

Blockly.Blocks['1758803724742'] = {
  init: function() {
    this.jsonInit({
      "type": "1758803724742",
      "message0": "102",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758803724742'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,93,55,122,110,120,170,99,105,106,144,75,117,0,0,99)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(79,29,100,100,93,55,122,109,120,170,99,100,98,50,142,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(79,29,100,100,93,55,122,109,120,170,99,100,156,50,142,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,93,55,122,109,120,170,99,100,154,133,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,93,55,122,109,120,170,99,100,154,133,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,102,98,150,45,107,120,170,99,100,154,133,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,160,132,128,95,120,170,99,100,125,128,107,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(79,29,100,102,112,150,50,114,120,170,98,100,168,133,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,102,113,150,49,110,120,156,98,100,154,133,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,93,55,122,100,120,170,99,100,106,144,75,100,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,93,55,122,100,120,170,99,100,106,144,75,100,0,0,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758803724742'] = function(block) {
  let code = "base_action.action('102')\n";
  return code;
}

Blockly.Blocks['1758808871898'] = {
  init: function() {
    this.jsonInit({
      "type": "1758808871898",
      "message0": "2201",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758808871898'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(15)\nMOTOmove19(79,29,100,112,110,25,156,110,120,170,99,113,80,161,47,109,0,0,99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(79,29,100,100,93,55,122,109,120,170,99,100,98,50,142,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(79,29,100,100,93,55,122,109,120,170,99,100,154,155,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,112,100,100,150,46,110,120,170,99,100,154,133,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,160,132,128,95,120,170,99,102,158,175,85,100,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,160,132,128,95,120,170,99,102,158,175,85,100,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,160,150,95,95,120,170,99,99,141,190,70,92,0,0,99)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(79,29,100,100,150,150,40,99,120,170,99,99,130,170,70,93,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,98,89,150,38,99,120,170,99,99,130,170,70,93,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,99,89,150,38,99,120,170,99,99,130,170,70,93,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,95,93,55,122,95,120,170,99,100,106,144,75,95,0,0,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758808871898'] = function(block) {
  let code = "base_action.action('2201')\n";
  return code;
}

Blockly.Blocks['1758863964547'] = {
  init: function() {
    this.jsonInit({
      "type": "1758863964547",
      "message0": "后退下台阶",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758863964547'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(15)\nMOTOmove19(79,29,100,112,110,25,156,110,120,170,99,113,80,161,47,109,0,0,99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(79,29,100,100,93,55,122,109,120,170,99,100,98,50,142,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(79,29,100,102,117,144,53,109,120,170,99,100,179,154,56,97,0,0,99)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(79,29,100,102,117,150,45,110,120,170,99,100,179,154,56,97,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,112,100,100,150,46,110,120,170,99,101,190,155,55,99,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,160,132,128,95,120,170,99,102,158,175,85,100,0,0,99)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(79,29,55,100,160,132,128,95,120,160,65,102,158,175,85,100,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,55,96,140,150,41,95,120,160,65,94,160,190,70,90,0,0,99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(79,29,55,77,112,150,41,96,120,160,65,94,160,190,70,88,0,0,99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(79,29,55,77,112,150,41,96,120,160,65,94,160,190,70,87,0,0,99)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(79,29,55,87,89,150,38,99,120,160,65,90,140,172,71,88,0,0,99)\nMOTOwait()\nMOTOsetspeed(27)\nMOTOmove19(79,29,100,98,89,150,38,99,120,170,99,90,140,172,71,88,0,0,99)\nMOTOwait()\nDelayMs(70)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(15)\nMOTOmove19(79,29,100,95,93,55,122,95,120,170,99,100,106,144,75,95,0,0,99)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758863964547'] = function(block) {
  let code = "base_action.action('后退下台阶')\n";
  return code;
}

Blockly.Blocks['1758878491979'] = {
  init: function() {
    this.jsonInit({
      "type": "1758878491979",
      "message0": "左1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758878491979'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(45)\nMOTOmove19(83,10,175,51,125,150,64,68,118,189,28,133,95,92,115,120,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(45)\nMOTOmove19(83,10,175,100,110,90,109,100,118,189,28,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1758878491979'] = function(block) {
  let code = "base_action.action('左1')\n";
  return code;
}

Blockly.Blocks['1758878756246'] = {
  init: function() {
    this.jsonInit({
      "type": "1758878756246",
      "message0": "抱2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758878756246'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,90,170,55,158,140,55,60,100,110,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(75,20,170,55,158,140,55,60,125,180,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(150)\nMOTOmove19(75,20,170,50,138,150,55,60,125,180,30,150,62,50,145,140,0,0,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(150)\nMOTOmove19(75,20,170,70,128,145,75,70,125,180,30,130,72,55,125,130,0,0,100)\nMOTOwait()\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,98,142,145,77,98,125,185,35,102,58,55,123,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,100,93,55,124,100,125,185,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(83,10,175,100,110,90,109,100,118,189,28,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1758878756246'] = function(block) {
  let code = "base_action.action('抱2')\n";
  return code;
}

Blockly.Blocks['1758879483877'] = {
  init: function() {
    this.jsonInit({
      "type": "1758879483877",
      "message0": "抱2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758879483877'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,90,170,55,158,140,55,60,100,110,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(75,20,170,55,158,140,55,60,125,180,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(150)\nMOTOmove19(75,20,170,50,138,150,55,60,125,180,30,150,62,50,145,140,0,0,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(150)\nMOTOmove19(75,20,170,70,128,145,75,70,125,180,30,130,72,55,125,130,0,0,100)\nMOTOwait()\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,98,142,145,77,98,125,185,35,102,58,55,123,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,100,110,90,109,100,125,185,35,100,90,111,91,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758879483877'] = function(block) {
  let code = "base_action.action('抱2')\n";
  return code;
}

Blockly.Blocks['1758879596800'] = {
  init: function() {
    this.jsonInit({
      "type": "1758879596800",
      "message0": "右1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758879596800'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(45)\nMOTOmove19(70,15,190,62,120,90,116,77,131,181,15,139,80,50,144,133,0,0,100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(45)\nMOTOmove19(70,15,190,100,110,90,109,100,131,181,15,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1758879596800'] = function(block) {
  let code = "base_action.action('右1')\n";
  return code;
}

Blockly.Blocks['1758879764709'] = {
  init: function() {
    this.jsonInit({
      "type": "1758879764709",
      "message0": "右11",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758879764709'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(45)\nMOTOmove19(70,15,190,62,120,90,116,77,131,181,15,139,80,50,144,133,0,0,100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(45)\nMOTOmove19(70,15,190,100,110,90,109,100,131,181,15,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(45)\nMOTOmove19(70,15,190,100,110,90,109,100,131,181,15,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1758879764709'] = function(block) {
  let code = "base_action.action('右11')\n";
  return code;
}

Blockly.Blocks['1758880549888'] = {
  init: function() {
    this.jsonInit({
      "type": "1758880549888",
      "message0": "右2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758880549888'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(40)\nMOTOmove19(70,15,190,76,109,94,112,83,130,181,15,132,91,50,153,121,0,0,100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(40)\nMOTOmove19(70,15,190,100,110,90,109,100,131,181,15,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1758880549888'] = function(block) {
  let code = "base_action.action('右2')\n";
  return code;
}

Blockly.Blocks['1758883341007'] = {
  init: function() {
    this.jsonInit({
      "type": "1758883341007",
      "message0": "steadily",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758883341007'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 100, 90, 91, 48, 129, 88, 120, 165, 100, 94, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 35, 90, 86, 125, 95, 110, 90, 120, 165, 90, 94, 107, 146, 76, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 35, 90, 86, 113, 37, 156, 88, 120, 165, 90, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 90, 107, 100, 56, 124, 111, 120, 165, 90, 112, 129, 155, 93, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 35, 110, 106, 95, 54, 123, 113, 120, 165, 110, 114, 75, 105, 90, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 35, 110, 106, 93, 54, 123, 111, 120, 165, 110, 114, 87, 163, 44, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 110, 88, 71, 45, 107, 90, 120, 165, 110, 93, 100, 144, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 35, 90, 86, 125, 95, 110, 90, 120, 165, 90, 94, 107, 146, 76, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 35, 90, 86, 113, 37, 156, 88, 120, 165, 90, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 90, 107, 100, 56, 124, 111, 120, 165, 90, 112, 129, 155, 93, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 35, 110, 106, 95, 54, 123, 113, 120, 165, 110, 114, 75, 105, 90, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 35, 110, 106, 93, 54, 123, 111, 120, 165, 110, 114, 87, 163, 44, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 110, 88, 71, 45, 107, 90, 120, 165, 110, 93, 100, 144, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 35, 90, 86, 125, 95, 110, 90, 120, 165, 90, 94, 107, 146, 76, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 35, 90, 86, 113, 37, 156, 88, 120, 165, 90, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 90, 107, 100, 56, 124, 111, 120, 165, 90, 112, 129, 155, 93, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 35, 110, 106, 95, 54, 123, 113, 120, 165, 110, 114, 75, 105, 90, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 35, 110, 106, 93, 54, 123, 111, 120, 165, 110, 114, 87, 163, 44, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 110, 88, 71, 45, 107, 90, 120, 165, 110, 93, 100, 144, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 35, 90, 86, 110, 95, 100, 90, 120, 165, 90, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 100, 91, 98, 48, 132, 93, 120, 165, 100, 94, 107, 145, 76, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758883341007'] = function(block) {
  let code = "base_action.action('steadily')\n";
  return code;
}

Blockly.Blocks['1758884376947'] = {
  init: function() {
    this.jsonInit({
      "type": "1758884376947",
      "message0": "fast",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758884376947'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,100,93,55,124,100,118,189,28,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(83,10,175,90,91,48,129,88,118,189,28,94,107,146,76,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,86,125,95,110,90,118,189,28,94,107,146,76,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,86,113,37,156,88,118,189,28,94,107,146,77,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(83,10,175,107,100,56,124,111,118,189,28,112,129,155,93,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,106,95,54,123,113,118,189,28,114,75,105,90,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,106,93,54,123,111,118,189,28,114,87,163,44,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(83,10,175,88,71,45,107,90,118,189,28,93,100,144,76,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,35,110,88,71,45,107,90,120,165,110,93,100,144,76,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,35,100,91,98,48,132,93,120,165,100,94,107,145,76,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758884376947'] = function(block) {
  let code = "base_action.action('fast')\n";
  return code;
}

Blockly.Blocks['1758884543101'] = {
  init: function() {
    this.jsonInit({
      "type": "1758884543101",
      "message0": "steady",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758884543101'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,100,93,55,124,100,118,189,28,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(83,10,175,90,91,48,129,88,118,189,28,94,107,146,76,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,86,125,95,110,90,118,189,28,94,107,146,76,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,86,113,37,156,88,118,189,28,94,107,146,77,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(83,10,175,107,100,56,124,111,118,189,28,112,129,155,93,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,106,95,54,123,113,118,189,28,114,75,105,90,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,106,93,54,123,111,118,189,28,114,87,163,44,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(83,10,175,88,71,45,107,90,118,189,28,93,100,144,76,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(83,10,175,88,71,45,107,90,118,189,28,93,100,144,76,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(83,10,175,91,98,48,132,93,118,189,28,94,107,145,76,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(83,10,175,100,93,55,124,100,118,189,28,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758884543101'] = function(block) {
  let code = "base_action.action('steady')\n";
  return code;
}

Blockly.Blocks['1758885594618'] = {
  init: function() {
    this.jsonInit({
      "type": "1758885594618",
      "message0": "f1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758885594618'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(150)\nMOTOmove19(83,10,175,100,91,55,129,100,118,189,28,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(83,10,175,90,91,48,134,88,118,189,28,94,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(83,10,175,86,123,95,115,90,118,189,28,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(83,10,175,86,121,37,161,88,118,189,28,94,109,146,72,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(83,10,175,107,98,56,129,111,118,189,28,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(83,10,175,106,93,54,128,113,118,189,28,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(83,10,175,106,91,54,128,111,118,189,28,114,89,163,39,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(83,10,175,88,69,45,112,90,118,189,28,93,102,144,71,89,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,95,90,50,120,95,118,189,28,96,107,145,71,98,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,100,91,55,129,100,118,189,28,100,109,145,71,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1758885594618'] = function(block) {
  let code = "base_action.action('f1')\n";
  return code;
}

Blockly.Blocks['1758888804292'] = {
  init: function() {
    this.jsonInit({
      "type": "1758888804292",
      "message0": "qianjian",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758888804292'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50,0,0,0)\nMOTOsetspeed(45)\nMOTOmove19(83, 10, 175, 99, 93, 54, 122, 90, 118, 189, 28, 98, 107, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(83, 10, 175, 99, 115, 99, 103, 100, 118, 189, 28, 101, 109, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(83, 10, 175, 89, 116, 98, 96, 89, 118, 189, 28, 97, 108, 121, 97, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(83, 10, 175, 97, 123, 29, 163, 97, 118, 189, 28, 108, 108, 141, 98, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(83, 10, 175, 99, 110, 74, 121, 100, 118, 189, 28, 101, 114, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(83, 10, 175, 99, 110, 61, 126, 104, 118, 189, 28, 101, 100, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(83, 10, 175, 99, 91, 66, 111, 102, 118, 189, 28, 101, 85, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(83, 10, 175, 99, 86, 63, 111, 100, 118, 189, 28, 101, 90, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(83, 10, 175, 99, 100, 73, 106, 100, 118, 189, 28, 101, 90, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(83, 10, 175, 96, 95, 70, 110, 100, 118, 189, 28, 102, 109, 146, 75, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(83, 10, 175, 100, 93, 55, 124, 100, 118, 189, 28, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758888804292'] = function(block) {
  let code = "base_action.action('qianjian')\n";
  return code;
}

Blockly.Blocks['1758893423851'] = {
  init: function() {
    this.jsonInit({
      "type": "1758893423851",
      "message0": "f2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758893423851'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(130)\nMOTOmove19(83,10,175,100,91,55,129,100,118,189,28,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(83,10,175,90,91,48,134,88,118,189,28,93,108,149,65,91,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(83,10,175,86,123,95,115,90,118,189,28,93,108,149,65,91,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(83,10,175,86,121,37,161,88,118,189,28,93,108,149,65,91,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(83,10,175,107,98,56,129,111,118,189,28,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(83,10,175,106,93,54,128,113,118,189,28,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(83,10,175,106,91,54,128,111,118,189,28,114,89,163,39,112,0,0,100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(15)\nMOTOmove19(83,10,175,88,69,45,112,90,118,189,28,94,92,141,62,97,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,96,109,98,87,97,118,189,28,102,92,141,62,97,0,0,100)\nMOTOwait()\nDelayMs(20)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,86,129,102,102,101,118,189,28,102,92,141,62,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(83,10,175,95,90,50,120,95,118,189,28,96,107,145,71,98,0,0,100)\nMOTOwait()\nDelayMs(70)\nMOTOsetspeed(45)\nMOTOmove19(83,10,175,100,91,55,129,100,118,189,28,100,109,145,71,100,0,0,100)\nMOTOwait()\nDelayMs(60)\n";
  return code;
}

Blockly.Python['1758893423851'] = function(block) {
  let code = "base_action.action('f2')\n";
  return code;
}

Blockly.Blocks['1758951049237'] = {
  init: function() {
    this.jsonInit({
      "type": "1758951049237",
      "message0": "f11",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758951049237'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(130)\nMOTOmove19(83,10,175,100,91,55,129,100,118,189,28,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(83,10,175,90,91,48,134,88,118,189,28,93,108,149,65,91,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(83,10,175,86,123,95,115,90,118,189,28,93,108,149,65,91,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(83,10,175,86,121,37,161,88,118,189,28,93,108,149,65,91,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(83,10,175,107,98,56,129,111,118,189,28,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(83,10,175,106,93,54,128,113,118,189,28,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(83,10,175,106,91,54,128,111,118,189,28,114,89,163,39,112,0,0,100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(15)\nMOTOmove19(83,10,175,88,69,45,112,90,118,189,28,94,80,141,62,97,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(10)\nMOTOmove19(83,10,175,99,150,133,86,107,118,189,28,100,90,140,70,90,0,0,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(83,10,175,95,90,50,120,95,118,189,28,96,107,145,71,98,0,0,100)\nMOTOwait()\nDelayMs(70)\nMOTOsetspeed(45)\nMOTOmove19(83,10,175,100,91,55,129,100,118,189,28,100,109,145,71,100,0,0,100)\nMOTOwait()\nDelayMs(60)\n";
  return code;
}

Blockly.Python['1758951049237'] = function(block) {
  let code = "base_action.action('f11')\n";
  return code;
}

Blockly.Blocks['Beat_wooden_drum'] = {
  init: function () {
    this.jsonInit({
      type: 'Beat_wooden_drum',
      message0: '%{BKY_BEAT_WOODEN_DRUM}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Beat_wooden_drum'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(28)',
    'MOTOmove16(80, 30, 100, 100, 106, 142, 50, 100, 120, 170, 100, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'MOTOsetspeed(24)',
    'MOTOmove16(79, 30, 138, 100, 106, 142, 50, 100, 121, 170, 19, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'MOTOsetspeed(24)',
    'MOTOmove16(27, 37, 139, 100, 106, 142, 50, 100, 170, 177, 20, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 37, 139, 100, 106, 142, 50, 100, 170, 177, 35, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 37, 139, 100, 106, 142, 50, 100, 170, 177, 20, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 37, 139, 100, 106, 142, 50, 100, 170, 177, 35, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 37, 139, 100, 106, 142, 50, 100, 170, 177, 20, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 37, 139, 100, 106, 142, 50, 100, 170, 177, 35, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 37, 139, 100, 106, 142, 50, 100, 170, 177, 20, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 37, 139, 100, 106, 142, 50, 100, 170, 177, 35, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 37, 139, 100, 106, 142, 50, 100, 170, 177, 20, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 37, 139, 100, 106, 142, 50, 100, 170, 177, 35, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 37, 139, 100, 106, 142, 50, 100, 170, 177, 20, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 37, 139, 100, 106, 142, 50, 100, 170, 177, 35, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 37, 139, 100, 106, 142, 50, 100, 170, 177, 20, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(24)',
    'MOTOmove16(79, 30, 138, 100, 106, 142, 50, 100, 121, 170, 19, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'MOTOsetspeed(24)',
    'MOTOmove16(79, 38, 103, 98, 105, 141, 51, 99, 108, 170, 90, 115, 96, 62, 147, 114)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(24)',
    'MOTOmove16(79, 38, 103, 93, 105, 73, 115, 94, 108, 170, 90, 108, 93, 126, 79, 106)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(24)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Beat_wooden_drum'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['BEAT_WOODEN_DRUM'] + "')\n";
  return code;
}

Blockly.Blocks['Take_three_quick_steps_forward'] = {
  init: function () {
    this.jsonInit({
      type: 'Take_three_quick_steps_forward',
      message0: '%{BKY_TAKE_THREE_QUICK_STEPS_FORWARD}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Take_three_quick_steps_forward'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,75,75,90,80,70,25,25,25,75,75,90,80,70)',
    'MOTOsetspeed(45)',
    'MOTOmove16(80, 30, 100, 99, 93, 54, 122, 90, 120, 170, 100, 98, 107, 146, 75, 95)',
    'MOTOwait()',
    'MOTOsetspeed(60)',
    'MOTOmove16(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 91, 94)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 91, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 91, 66, 109, 102, 120, 170, 120, 101, 85, 101, 97, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 86, 63, 110, 100, 120, 170, 120, 101, 90, 126, 79, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 94)',
    'MOTOwait()',
    'MOTOsetspeed(75)',
    'MOTOmove16(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 89, 98)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 89, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100)',
    'MOTOwait()',
    'MOTOsetspeed(75)',
    'MOTOmove16(80, 30, 120, 99, 91, 66, 111, 102, 120, 170, 120, 101, 85, 101, 97, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 86, 63, 111, 100, 120, 170, 120, 101, 90, 126, 79, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 96)',
    'MOTOwait()',
    'MOTOsetspeed(75)',
    'MOTOmove16(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 89, 98)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 89, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100)',
    'MOTOwait()',
    'MOTOsetspeed(75)',
    'MOTOmove16(80, 30, 120, 99, 91, 66, 111, 102, 120, 170, 120, 101, 85, 101, 97, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 86, 63, 111, 100, 120, 170, 120, 101, 90, 126, 79, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 96)',
    'MOTOwait()',
    'MOTOsetspeed(65)',
    'MOTOmove16(80, 30, 120, 96, 95, 70, 110, 100, 120, 170, 120, 102, 109, 146, 75, 96)',
    'MOTOwait()',
    'MOTOsetspeed(45)',
    'MOTOmove16(80, 30, 100, 99, 93, 54, 122, 90, 120, 170, 100, 98, 107, 146, 75, 95)',
    'MOTOwait()',
    'MOTOsetspeed(15)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Take_three_quick_steps_forward'] = function (block) {
  var code = "base_action.action('" + Blockly.Msg['TAKE_THREE_QUICK_STEPS_FORWARD'] + "')\n";
  return code;
}

Blockly.Blocks['1758953978031'] = {
  init: function() {
    this.jsonInit({
      "type": "1758953978031",
      "message0": "f111",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758953978031'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(130)\nMOTOmove19(83,10,175,100,91,55,129,100,118,189,28,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(83,10,175,90,91,48,134,88,118,189,28,93,108,149,65,91,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(83,10,175,86,123,95,115,90,118,189,28,93,108,149,65,91,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(83,10,175,86,121,37,161,88,118,189,28,93,108,149,65,91,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(83,10,175,107,98,56,129,111,118,189,28,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(83,10,175,106,93,54,128,113,118,189,28,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(83,10,175,106,91,54,128,111,118,189,28,114,89,163,39,112,0,0,100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,106,91,54,128,106,118,189,28,107,89,163,38,107,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,88,69,45,112,90,118,189,28,94,80,141,62,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,91,91,44,122,89,118,189,28,94,80,141,62,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(83,10,175,99,150,133,86,107,118,189,28,100,90,140,70,90,0,0,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(83,10,175,95,90,50,120,95,118,189,28,96,107,145,71,98,0,0,100)\nMOTOwait()\nDelayMs(70)\nMOTOsetspeed(45)\nMOTOmove19(83,10,175,100,91,55,129,100,118,189,28,100,109,145,71,100,0,0,100)\nMOTOwait()\nDelayMs(60)\n";
  return code;
}

Blockly.Python['1758953978031'] = function(block) {
  let code = "base_action.action('f111')\n";
  return code;
}

Blockly.Blocks['1758955412438'] = {
  init: function() {
    this.jsonInit({
      "type": "1758955412438",
      "message0": "t1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758955412438'] = function(block) {
  let code = "MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,50,50,50,50,50)\nMOTOsetspeed(22)\nMOTOmove19(100,100,100,90,91,48,129,88,100,100,100,92,107,146,76,88,0,0,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(20)\nMOTOmove19(100,100,100,85,115,95,102,90,100,100,100,93,102,145,74,87,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,90,115,145,47,85,100,100,100,103,102,145,74,88,0,0,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,65,115,145,53,61,100,100,100,103,102,145,74,88,0,0,100)\nMOTOwait()\nDelayMs(100)\n\n\n-- 11\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,75,114,146,52,74,100,100,100,123,103,143,75,120,0,0,100)\nMOTOwait()\nDelayMs(150)\n\n\n-- 11\nMOTOsetspeed(20)\nMOTOmove19(100,100,100,100,114,150,45,104,100,100,100,129,102,138,38,140,0,0,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,114,150,45,104,100,100,100,113,101,137,38,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,114,150,45,112,100,100,100,131,71,91,61,117,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(99,48,101,100,114,150,45,112,98,16,101,131,71,91,61,117,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(99,48,101,110,114,150,45,119,98,16,101,144,71,91,61,117,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(99,48,101,110,114,150,45,119,98,16,101,135,71,91,61,117,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(99,48,101,112,114,150,45,119,96,16,101,131,71,91,61,117,0,0,100)\nMOTOwait()\n\n\n-- 11\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,97,124,150,52,115,100,100,100,111,48,99,39,119,0,0,100)\nMOTOwait()\nDelayMs(1000)\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,101,128,135,66,111,100,100,100,111,48,99,39,119,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,97,124,150,52,115,100,100,100,121,46,62,108,118,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(15)\nMOTOmove19(100,100,100,97,131,120,87,114,100,100,100,111,48,99,39,119,0,0,100)\nMOTOwait()\nDelayMs(200)\n\n\n-- 1\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,97,121,109,96,112,100,100,100,99,83,103,94,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(12)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758955412438'] = function(block) {
  let code = "base_action.action('t1')\n";
  return code;
}

Blockly.Blocks['1758956795890'] = {
  init: function() {
    this.jsonInit({
      "type": "1758956795890",
      "message0": "t11",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758956795890'] = function(block) {
  let code = "MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,50,50,50,50,50)\nMOTOsetspeed(22)\nMOTOmove19(100,100,100,90,91,48,129,88,100,100,100,92,107,146,76,88,0,0,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(20)\nMOTOmove19(100,100,100,85,115,95,102,90,100,100,100,93,102,145,74,87,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,90,115,145,47,85,100,100,100,103,102,145,74,88,0,0,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,65,115,145,53,61,100,100,100,103,102,145,74,88,0,0,100)\nMOTOwait()\nDelayMs(100)\n\n\n-- 11\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,75,114,146,52,74,100,100,100,123,103,143,75,120,0,0,100)\nMOTOwait()\nDelayMs(150)\n\n\n-- 11\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,100,114,150,45,104,100,100,100,129,102,138,38,140,0,0,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,114,150,45,104,100,100,100,131,76,111,37,94,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,114,150,45,104,100,100,100,113,101,137,38,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,122,150,50,119,100,100,100,113,101,137,38,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,122,150,50,119,100,100,100,125,88,95,91,114,0,0,100)\nMOTOwait()\n\n\n-- 11\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,97,124,150,52,115,100,100,100,111,48,99,39,94,0,0,100)\nMOTOwait()\nDelayMs(1000)\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,97,124,150,52,115,100,100,100,108,74,71,121,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,97,124,150,52,115,100,100,100,126,49,97,37,91,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(15)\nMOTOmove19(100,100,100,97,131,120,87,114,100,100,100,111,48,99,39,119,0,0,100)\nMOTOwait()\nDelayMs(200)\n\n\n-- 1\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,97,121,109,96,112,100,100,100,99,83,103,94,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(12)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758956795890'] = function(block) {
  let code = "base_action.action('t11')\n";
  return code;
}

Blockly.Blocks['Pan_left_1_step'] = {
  init: function () {
    this.jsonInit({
      type: 'Pan_left_1_step',
      message0: '%{BKY_PAN_LEFT_1_STEP}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Pan_left_1_step'] = function (block) {
  const code = [
    'MOTOrigid16(30,30,30,45,65,65,65,65,30,30,30,45,65,65,65,65)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85)',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 55, 100, 90, 93, 54, 124, 90, 120, 175, 100, 110, 107, 146, 76, 100)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 55, 100, 95, 93, 54, 124, 105, 120, 175, 100, 106, 107, 146, 76, 115)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,55,55,55,85)',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 25, 100, 106, 93, 54, 124, 110, 120, 145, 100, 115, 107, 146, 76, 115)',
    'MOTOwait()',
    'MOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85)',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Pan_left_1_step'] = function (block) {
  var code = "base_action.action('" + Blockly.Msg['PAN_LEFT_1_STEP'] + "')\n";
  return code;
}

Blockly.Blocks['Pan_right_1_step'] = {
  init: function () {
    this.jsonInit({
      type: 'Pan_right_1_step',
      message0: '%{BKY_PAN_RIGHT_1_STEP}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Pan_right_1_step'] = function (block) {
  const code = [
    'MOTOrigid16(30,30,30,45,65,65,65,65,30,30,30,45,65,65,65,65)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85)',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 25, 100, 90, 93, 54, 124, 100, 120, 145, 100, 110, 107, 146, 76, 110)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 25, 100, 94, 93, 54, 124, 85, 120, 145, 100, 105, 107, 146, 76, 95)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85)',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 55, 100, 85, 93, 54, 124, 85, 120, 175, 100, 94, 107, 146, 76, 90)',
    'MOTOwait()',
    'MOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85)',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Pan_right_1_step'] = function (block) {
  var code = "base_action.action('" + Blockly.Msg['PAN_RIGHT_1_STEP'] + "')\n";
  return code;
}

Blockly.Blocks['1758957569834'] = {
  init: function() {
    this.jsonInit({
      "type": "1758957569834",
      "message0": "前进f",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758957569834'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,100,91,55,129,100,118,189,28,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(83,10,175,90,91,48,134,88,118,189,28,94,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(83,10,175,86,123,95,115,90,118,189,28,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(83,10,175,86,121,37,161,88,118,189,28,94,109,146,72,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(83,10,175,107,98,56,129,111,118,189,28,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(83,10,175,106,93,54,128,113,118,189,28,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(83,10,175,106,91,54,128,111,118,189,28,114,89,163,39,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(83,10,175,88,69,45,112,90,118,189,28,93,102,144,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(83,10,175,86,123,95,115,90,118,189,28,94,107,146,72,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(90)\nMOTOmove19(83,10,175,100,91,55,129,100,118,189,28,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758957569834'] = function(block) {
  let code = "base_action.action('前进f')\n";
  return code;
}

Blockly.Blocks['1758957826861'] = {
  init: function() {
    this.jsonInit({
      "type": "1758957826861",
      "message0": "后退f",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758957826861'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(150)\nMOTOmove19(83,10,175,100,93,55,124,98,118,189,28,100,107,145,76,102,0,0,100)\nMOTOwait()\nMOTOrigid16(100,100,100,85,50,50,50,85,100,100,100,85,50,50,50,85)\nMOTOrigid16(100,100,100,85,60,60,60,75,100,100,100,85,60,60,60,75)\n\n\n-- 右抬腿\nMOTOsetspeed(10)\nMOTOmove19(83,10,175,105,93,55,124,108,118,189,28,111,102,136,78,112,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,105,93,55,124,107,118,189,28,108,125,145,94,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(83,10,175,92,116,55,144,85,118,189,28,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,92,75,55,106,95,118,189,28,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(83,10,175,105,93,55,124,107,118,189,28,108,84,141,56,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(83,10,175,105,92,55,124,107,118,189,28,111,107,136,78,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(83,10,175,100,93,55,124,98,118,189,28,100,107,145,76,102,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758957826861'] = function(block) {
  let code = "base_action.action('后退f')\n";
  return code;
}

Blockly.Blocks['1758958048403'] = {
  init: function() {
    this.jsonInit({
      "type": "1758958048403",
      "message0": "前进F",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758958048403'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,100,91,55,129,100,118,189,28,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(83,10,175,90,91,48,134,88,118,189,28,94,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(83,10,175,86,123,95,115,90,118,189,28,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(83,10,175,86,121,37,161,88,118,189,28,94,109,146,72,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(83,10,175,107,98,56,129,111,118,189,28,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(83,10,175,106,93,54,128,113,118,189,28,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(83,10,175,106,91,54,128,111,118,189,28,114,89,163,39,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(83,10,175,88,69,45,112,90,118,189,28,93,102,144,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(83,10,175,86,123,95,115,90,118,189,28,94,107,146,72,87,0,0,100)\nMOTOwait()\nDelayMs(600)\nMOTOsetspeed(80)\nMOTOmove19(83,10,175,100,91,55,129,100,118,189,28,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758958048403'] = function(block) {
  let code = "base_action.action('前进F')\n";
  return code;
}

Blockly.Blocks['1758958483740'] = {
  init: function() {
    this.jsonInit({
      "type": "1758958483740",
      "message0": "左2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758958483740'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(45)\nMOTOmove19(83,10,175,51,125,150,64,68,118,189,28,133,95,92,115,120,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,72,125,150,62,82,118,189,28,133,95,92,115,120,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(83,10,175,100,110,90,109,100,118,189,28,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1758958483740'] = function(block) {
  let code = "base_action.action('左2')\n";
  return code;
}

Blockly.Blocks['1758958558513'] = {
  init: function() {
    this.jsonInit({
      "type": "1758958558513",
      "message0": "左3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758958558513'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,72,125,150,62,82,118,189,28,133,95,92,115,120,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(83,10,175,100,110,90,109,100,118,189,28,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1758958558513'] = function(block) {
  let code = "base_action.action('左3')\n";
  return code;
}

Blockly.Blocks['1758959466591'] = {
  init: function() {
    this.jsonInit({
      "type": "1758959466591",
      "message0": "左2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758959466591'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(40)\nMOTOmove19(83,10,175,72,125,150,62,82,118,189,28,122,94,91,115,121,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,100,110,90,109,100,118,189,28,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1758959466591'] = function(block) {
  let code = "base_action.action('左2')\n";
  return code;
}

Blockly.Blocks['1758960130197'] = {
  init: function() {
    this.jsonInit({
      "type": "1758960130197",
      "message0": "左4",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758960130197'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,86,107,150,45,84,118,189,28,149,94,94,116,121,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(83,10,175,100,110,90,109,100,118,189,28,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1758960130197'] = function(block) {
  let code = "base_action.action('左4')\n";
  return code;
}

Blockly.Blocks['1758971119992'] = {
  init: function() {
    this.jsonInit({
      "type": "1758971119992",
      "message0": "左4",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758971119992'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(45)\nMOTOmove19(83,10,175,66,119,150,59,75,118,189,28,132,94,88,114,120,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(55)\nMOTOmove19(83,10,175,100,110,90,109,100,118,189,28,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1758971119992'] = function(block) {
  let code = "base_action.action('左4')\n";
  return code;
}

Blockly.Blocks['1758971623484'] = {
  init: function() {
    this.jsonInit({
      "type": "1758971623484",
      "message0": "右3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758971623484'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(38)\nMOTOmove19(70,15,190,76,107,94,112,92,130,181,15,132,91,50,153,121,0,0,100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(50)\nMOTOmove19(70,15,190,100,110,90,109,100,131,181,15,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1758971623484'] = function(block) {
  let code = "base_action.action('右3')\n";
  return code;
}

Blockly.Blocks['1758972294797'] = {
  init: function() {
    this.jsonInit({
      "type": "1758972294797",
      "message0": "左5",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758972294797'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(45)\nMOTOmove19(83,10,175,66,119,150,59,75,118,189,28,132,94,88,114,120,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,79,119,150,59,75,118,189,28,142,93,82,120,111,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(83,10,175,100,93,90,109,100,118,189,28,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758972294797'] = function(block) {
  let code = "base_action.action('左5')\n";
  return code;
}

Blockly.Blocks['1758973224776'] = {
  init: function() {
    this.jsonInit({
      "type": "1758973224776",
      "message0": "左6",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758973224776'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,79,119,150,59,75,118,189,28,142,93,82,120,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(40)\nMOTOmove19(83,10,175,100,93,60,125,100,118,189,28,100,106,137,76,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1758973224776'] = function(block) {
  let code = "base_action.action('左6')\n";
  return code;
}

Blockly.Blocks['1758973581826'] = {
  init: function() {
    this.jsonInit({
      "type": "1758973581826",
      "message0": "右3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758973581826'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(45)\nMOTOmove19(70,15,190,76,109,94,112,90,130,181,15,132,91,50,153,121,0,0,100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(45)\nMOTOmove19(70,15,190,100,110,90,109,100,131,181,15,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1758973581826'] = function(block) {
  let code = "base_action.action('右3')\n";
  return code;
}

Blockly.Blocks['1758973698814'] = {
  init: function() {
    this.jsonInit({
      "type": "1758973698814",
      "message0": "右4",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758973698814'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(45)\nMOTOmove19(70,15,190,76,109,94,112,90,130,181,15,132,91,50,153,121,0,0,100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(45)\nMOTOmove19(70,15,190,100,110,90,109,100,131,181,15,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(40)\nMOTOmove19(83,10,175,100,93,60,125,100,118,189,28,100,106,137,76,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1758973698814'] = function(block) {
  let code = "base_action.action('右4')\n";
  return code;
}

Blockly.Blocks['1758973786828'] = {
  init: function() {
    this.jsonInit({
      "type": "1758973786828",
      "message0": "右5",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758973786828'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(70,15,190,76,109,94,112,90,130,181,15,132,91,50,153,121,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(45)\nMOTOmove19(83,10,175,100,93,60,125,100,118,189,28,100,106,137,76,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1758973786828'] = function(block) {
  let code = "base_action.action('右5')\n";
  return code;
}

Blockly.Blocks['1758975766231'] = {
  init: function() {
    this.jsonInit({
      "type": "1758975766231",
      "message0": "一块后退f",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758975766231'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(150)\nMOTOmove19(65,12,165,100,93,55,124,98,140,188,40,100,107,145,76,102,0,0,100)\nMOTOwait()\nMOTOrigid16(65,12,165,85,50,50,50,85,140,188,40,85,50,50,50,85)\nMOTOrigid16(65,12,165,85,60,60,60,75,140,188,40,85,60,60,60,75)\n\n\n-- 右抬腿\nMOTOsetspeed(10)\nMOTOmove19(65,12,165,105,93,55,124,108,140,188,40,111,102,136,78,112,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(65,12,165,105,93,55,124,107,140,188,40,108,125,145,94,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,12,165,92,116,55,144,85,140,188,40,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,12,165,92,75,55,106,95,140,188,40,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,12,165,105,93,55,124,107,140,188,40,108,84,141,56,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,12,165,105,92,55,124,107,140,188,40,111,107,136,78,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,12,165,100,93,55,124,98,140,188,40,100,107,145,76,102,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758975766231'] = function(block) {
  let code = "base_action.action('一块后退f')\n";
  return code;
}

Blockly.Blocks['1758976351091'] = {
  init: function() {
    this.jsonInit({
      "type": "1758976351091",
      "message0": "ff",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758976351091'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(150)\nMOTOmove19(65,12,165,100,93,55,124,98,140,188,40,100,107,145,76,102,0,0,100)\nMOTOwait()\nMOTOrigid16(65,12,165,85,50,50,50,85,140,188,40,85,50,50,50,85)\nMOTOrigid16(65,12,165,85,60,60,60,75,140,188,40,85,60,60,60,75)\n\n\n-- 右抬腿\nMOTOsetspeed(15)\nMOTOmove19(65,12,165,105,93,55,124,108,140,188,40,111,102,136,78,112,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(65,12,165,105,93,55,124,107,140,188,40,108,125,145,94,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(65,12,165,92,116,55,144,85,140,188,40,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(65,12,165,92,75,55,106,95,140,188,40,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(65,12,165,105,93,55,124,107,140,188,40,108,84,141,56,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(65,12,165,105,92,55,124,107,140,188,40,111,107,136,78,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,12,165,100,93,55,124,98,140,188,40,100,107,145,76,102,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758976351091'] = function(block) {
  let code = "base_action.action('ff')\n";
  return code;
}

Blockly.Blocks['1758976687985'] = {
  init: function() {
    this.jsonInit({
      "type": "1758976687985",
      "message0": "1左1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758976687985'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(65,12,165,79,119,150,59,75,140,188,40,142,93,82,120,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(40)\nMOTOmove19(65,12,165,100,93,60,125,100,140,188,40,100,106,137,76,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1758976687985'] = function(block) {
  let code = "base_action.action('1左1')\n";
  return code;
}

Blockly.Blocks['1758976804836'] = {
  init: function() {
    this.jsonInit({
      "type": "1758976804836",
      "message0": "1右1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758976804836'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(65,12,165,76,109,94,112,90,140,188,40,132,91,50,153,121,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(45)\nMOTOmove19(65,12,165,100,93,60,125,100,140,188,40,100,106,137,76,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1758976804836'] = function(block) {
  let code = "base_action.action('1右1')\n";
  return code;
}

Blockly.Blocks['1758976990931'] = {
  init: function() {
    this.jsonInit({
      "type": "1758976990931",
      "message0": "2前进",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758976990931'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,100,91,55,129,100,118,189,28,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(83,10,175,90,91,48,134,88,118,189,28,94,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(83,10,175,86,123,95,115,90,118,189,28,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(83,10,175,86,121,37,161,88,118,189,28,94,109,146,72,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(83,10,175,107,98,56,129,111,118,189,28,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(83,10,175,106,93,54,128,113,118,189,28,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(83,10,175,106,91,54,128,111,118,189,28,114,89,163,39,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(83,10,175,88,69,45,112,90,118,189,28,93,102,144,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(83,10,175,86,123,95,115,90,118,189,28,94,107,146,72,87,0,0,100)\nMOTOwait()\nDelayMs(600)\nMOTOsetspeed(40)\nMOTOmove19(83,10,175,100,91,55,129,100,118,189,28,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758976990931'] = function(block) {
  let code = "base_action.action('2前进')\n";
  return code;
}

Blockly.Blocks['1759543794150'] = {
  init: function() {
    this.jsonInit({
      "type": "1759543794150",
      "message0": "抓2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759543794150'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,90,170,55,158,140,55,60,100,110,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(75,20,170,55,158,140,55,60,125,180,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(15)\nMOTOmove19(75,20,180,55,158,140,55,60,125,180,20,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(75,20,180,55,158,140,55,60,125,180,20,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,20,180,31,138,150,54,60,125,180,20,119,59,50,147,75,0,0,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(30)\nMOTOmove19(75,20,180,101,107,149,43,100,125,180,20,101,92,51,157,100,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(30)\nMOTOmove19(75,20,180,100,93,55,124,100,125,180,20,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759543794150'] = function(block) {
  let code = "base_action.action('抓2')\n";
  return code;
}

Blockly.Blocks['1759544640348'] = {
  init: function() {
    this.jsonInit({
      "type": "1759544640348",
      "message0": "左2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759544640348'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,79,119,150,59,75,118,189,28,142,93,82,120,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(80)\nMOTOmove19(83,10,175,99,96,102,81,99,118,189,28,102,103,97,116,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759544640348'] = function(block) {
  let code = "base_action.action('左2')\n";
  return code;
}

Blockly.Blocks['1759544770044'] = {
  init: function() {
    this.jsonInit({
      "type": "1759544770044",
      "message0": "左22",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759544770044'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,79,119,150,59,75,118,189,28,142,93,82,120,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(80)\nMOTOmove19(83,10,175,99,96,102,81,99,118,189,28,102,103,97,116,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759544770044'] = function(block) {
  let code = "base_action.action('左22')\n";
  return code;
}

Blockly.Blocks['1759545664301'] = {
  init: function() {
    this.jsonInit({
      "type": "1759545664301",
      "message0": "左1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759545664301'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(51,16,173,79,119,150,59,75,161,169,30,142,93,82,120,110,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(80)\nMOTOmove19(51,16,173,99,96,102,81,99,161,169,30,102,103,97,116,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759545664301'] = function(block) {
  let code = "base_action.action('左1')\n";
  return code;
}

Blockly.Blocks['1759546000339'] = {
  init: function() {
    this.jsonInit({
      "type": "1759546000339",
      "message0": "右22",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759546000339'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(69,13,189,79,118,98,109,84,130,181,15,132,91,50,153,121,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,97,117,97,111,96,118,189,28,102,79,100,86,97,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759546000339'] = function(block) {
  let code = "base_action.action('右22')\n";
  return code;
}

Blockly.Blocks['1759546273688'] = {
  init: function() {
    this.jsonInit({
      "type": "1759546273688",
      "message0": "抓2个",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759546273688'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,90,170,55,158,140,55,60,100,110,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(75,20,170,55,158,140,55,60,125,180,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(15)\nMOTOmove19(75,20,180,55,158,140,55,60,125,180,20,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(75,20,180,55,158,140,55,60,125,180,20,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,20,180,31,138,150,54,60,125,180,20,119,59,50,147,75,0,0,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(30)\nMOTOmove19(75,20,180,101,107,149,43,100,125,180,20,101,92,51,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,99,96,102,81,99,118,189,28,102,103,97,116,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759546273688'] = function(block) {
  let code = "base_action.action('抓2个')\n";
  return code;
}

Blockly.Blocks['1759546431355'] = {
  init: function() {
    this.jsonInit({
      "type": "1759546431355",
      "message0": "右2个",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759546431355'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(69,13,189,79,118,98,109,84,130,181,15,132,91,50,153,121,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(80)\nMOTOmove19(83,10,175,99,96,102,81,99,118,189,28,102,103,97,116,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759546431355'] = function(block) {
  let code = "base_action.action('右2个')\n";
  return code;
}

Blockly.Blocks['1759555079757'] = {
  init: function() {
    this.jsonInit({
      "type": "1759555079757",
      "message0": "1111",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759555079757'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,90,170,55,158,140,55,60,100,110,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(75,20,170,55,158,140,55,60,125,180,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(15)\nMOTOmove19(75,20,180,55,158,140,55,60,125,180,20,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(74,52,180,55,158,140,55,60,124,152,19,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(74,52,180,56,138,150,54,60,124,152,19,146,59,50,147,140,0,0,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(20)\nMOTOmove19(80,33,130,101,107,149,43,100,120,165,66,101,92,51,157,100,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759555079757'] = function(block) {
  let code = "base_action.action('1111')\n";
  return code;
}

Blockly.Blocks['1759555269891'] = {
  init: function() {
    this.jsonInit({
      "type": "1759555269891",
      "message0": "抓2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759555269891'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,90,170,55,158,140,55,60,100,110,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(75,20,180,55,158,140,55,60,125,180,20,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(75,20,180,56,138,150,54,60,125,180,20,146,59,50,147,140,0,0,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(20)\nMOTOmove19(75,20,180,101,107,149,43,100,125,180,20,101,92,51,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,20,180,99,97,115,70,98,125,180,20,102,106,85,131,99,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759555269891'] = function(block) {
  let code = "base_action.action('抓2')\n";
  return code;
}

Blockly.Blocks['1759555821741'] = {
  init: function() {
    this.jsonInit({
      "type": "1759555821741",
      "message0": "左11",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759555821741'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,79,119,150,59,75,118,189,28,151,92,110,97,125,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(60)\nMOTOmove19(75,20,180,99,97,115,70,98,125,180,20,102,106,85,131,99,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759555821741'] = function(block) {
  let code = "base_action.action('左11')\n";
  return code;
}

Blockly.Blocks['1759556704195'] = {
  init: function() {
    this.jsonInit({
      "type": "1759556704195",
      "message0": "左22",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759556704195'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,79,119,150,59,75,118,189,28,137,80,60,132,95,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,85,131,99)\nMOTOsetspeed(60)\nMOTOmove19(75,20,180,98,121,99,107,98,125,180,20,102,77,102,90,101,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1759556704195'] = function(block) {
  let code = "base_action.action('左22')\n";
  return code;
}

Blockly.Blocks['1759556860619'] = {
  init: function() {
    this.jsonInit({
      "type": "1759556860619",
      "message0": "1左",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759556860619'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(51,20,179,79,119,150,59,75,155,173,20,137,80,60,132,95,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(51,20,179,40,40,40,40,40,155,173,20,40,40,85,131,99)\nMOTOsetspeed(30)\nMOTOmove19(51,20,179,98,121,99,107,98,155,173,20,102,77,102,90,101,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759556860619'] = function(block) {
  let code = "base_action.action('1左')\n";
  return code;
}

Blockly.Blocks['1759557181314'] = {
  init: function() {
    this.jsonInit({
      "type": "1759557181314",
      "message0": "右22",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759557181314'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(40)\nMOTOmove19(70,15,190,80,113,116,84,90,130,181,15,132,91,50,153,121,0,0,100)\nMOTOwait()\nDelayMs(70)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(25)\nMOTOmove19(75,20,180,99,92,115,70,98,125,180,20,102,109,85,131,99,0,0,100)\nMOTOwait()\nDelayMs(60)\n";
  return code;
}

Blockly.Python['1759557181314'] = function(block) {
  let code = "base_action.action('右22')\n";
  return code;
}

Blockly.Blocks['1759557510366'] = {
  init: function() {
    this.jsonInit({
      "type": "1759557510366",
      "message0": "右11",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759557510366'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(40)\nMOTOmove19(32,32,169,80,113,116,84,90,169,166,35,132,91,50,153,121,0,0,100)\nMOTOwait()\nDelayMs(70)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(25)\nMOTOmove19(32,32,169,99,92,115,70,98,169,166,35,102,109,85,131,99,0,0,100)\nMOTOwait()\nDelayMs(60)\n";
  return code;
}

Blockly.Python['1759557510366'] = function(block) {
  let code = "base_action.action('右11')\n";
  return code;
}

Blockly.Blocks['1759718484980'] = {
  init: function() {
    this.jsonInit({
      "type": "1759718484980",
      "message0": "111左转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759718484980'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(40)\nMOTOmove19(67,10,165,100,91,55,129,100,135,190,40,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(67,10,165,95,71,55,109,95,135,190,40,105,89,145,51,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(25)\nMOTOmove19(67,10,165,100,91,55,129,100,135,190,40,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759718484980'] = function(block) {
  let code = "base_action.action('111左转')\n";
  return code;
}

Blockly.Blocks['1759718548879'] = {
  init: function() {
    this.jsonInit({
      "type": "1759718548879",
      "message0": "1左转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759718548879'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(40)\nMOTOmove19(67,10,165,100,91,55,129,100,135,190,40,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(67,10,165,95,71,55,109,95,135,190,40,105,89,145,51,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(25)\nMOTOmove19(67,10,165,100,91,55,129,100,135,190,40,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759718548879'] = function(block) {
  let code = "base_action.action('1左转')\n";
  return code;
}

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

Blockly.Blocks['1759718890751'] = {
  init: function() {
    this.jsonInit({
      "type": "1759718890751",
      "message0": "2左移",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759718890751'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,79,119,150,59,75,118,189,28,137,80,60,132,95,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,85,131,99)\nMOTOsetspeed(25)\nMOTOmove19(75,20,180,99,92,115,70,98,125,180,20,102,109,85,131,99,0,0,100)\nMOTOwait()\nDelayMs(60)\n";
  return code;
}

Blockly.Python['1759718890751'] = function(block) {
  let code = "base_action.action('2左移')\n";
  return code;
}

Blockly.Blocks['1759719034329'] = {
  init: function() {
    this.jsonInit({
      "type": "1759719034329",
      "message0": "1左移动",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759719034329'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(51,20,179,79,119,150,59,75,155,173,20,137,80,60,132,95,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(51,20,179,40,40,40,40,40,155,173,20,40,40,85,131,99)\nMOTOsetspeed(25)\nMOTOmove19(32,32,169,99,92,115,70,98,169,166,35,102,109,85,131,99,0,0,100)\nMOTOwait()\nDelayMs(60)\n";
  return code;
}

Blockly.Python['1759719034329'] = function(block) {
  let code = "base_action.action('1左移动')\n";
  return code;
}

Blockly.Blocks['1759719881681'] = {
  init: function() {
    this.jsonInit({
      "type": "1759719881681",
      "message0": "1左转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759719881681'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(40)\nMOTOmove19(67,10,165,100,91,55,129,100,135,190,40,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(67,10,165,95,71,55,109,95,135,190,40,105,89,145,51,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(25)\nMOTOmove19(67,10,165,100,91,55,129,100,135,190,40,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759719881681'] = function(block) {
  let code = "base_action.action('1左转')\n";
  return code;
}

Blockly.Blocks['1759719971594'] = {
  init: function() {
    this.jsonInit({
      "type": "1759719971594",
      "message0": "1右转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759719971594'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(25)\nMOTOmove19(65,11,149,95,110,55,149,95,140,189,50,105,130,145,91,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,11,149,100,90,55,129,100,140,189,50,100,110,145,71,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1759719971594'] = function(block) {
  let code = "base_action.action('1右转')\n";
  return code;
}

Blockly.Blocks['1759720057560'] = {
  init: function() {
    this.jsonInit({
      "type": "1759720057560",
      "message0": "2左转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759720057560'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,100,91,55,129,100,118,189,28,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(83,10,175,95,71,55,109,95,118,189,28,105,89,145,51,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,100,91,55,129,100,118,189,28,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759720057560'] = function(block) {
  let code = "base_action.action('2左转')\n";
  return code;
}

Blockly.Blocks['1759720125737'] = {
  init: function() {
    this.jsonInit({
      "type": "1759720125737",
      "message0": "2右转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759720125737'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,100,90,55,129,100,118,189,28,100,110,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(83,10,175,95,110,55,149,95,118,189,28,105,130,145,91,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,100,90,55,129,100,118,189,28,100,110,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759720125737'] = function(block) {
  let code = "base_action.action('2右转')\n";
  return code;
}

Blockly.Blocks['1759730263558'] = {
  init: function() {
    this.jsonInit({
      "type": "1759730263558",
      "message0": "抱两块",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759730263558'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,90,170,55,158,140,55,60,100,110,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(75,20,180,55,158,140,55,60,125,180,20,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(75,20,180,56,138,150,54,60,125,180,20,146,59,50,147,140,0,0,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(20)\nMOTOmove19(75,20,180,101,107,149,43,100,125,180,20,101,92,51,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,15,180,99,97,115,70,98,125,185,20,102,106,85,131,99,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759730263558'] = function(block) {
  let code = "base_action.action('抱两块')\n";
  return code;
}

Blockly.Blocks['1759730524987'] = {
  init: function() {
    this.jsonInit({
      "type": "1759730524987",
      "message0": "两块左移",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759730524987'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(83,10,175,51,126,150,58,70,118,189,28,133,86,92,110,120,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(83,10,175,103,113,90,109,100,118,189,28,97,87,111,91,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759730524987'] = function(block) {
  let code = "base_action.action('两块左移')\n";
  return code;
}

Blockly.Blocks['1759731487879'] = {
  init: function() {
    this.jsonInit({
      "type": "1759731487879",
      "message0": "一块左移",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759731487879'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(83,10,175,51,126,150,58,70,118,189,28,133,86,92,110,120,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(59,17,173,51,126,150,58,70,134,185,29,133,86,92,110,120,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(59,17,173,100,113,90,109,100,134,185,29,100,87,111,91,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759731487879'] = function(block) {
  let code = "base_action.action('一块左移')\n";
  return code;
}

Blockly.Blocks['1759731740281'] = {
  init: function() {
    this.jsonInit({
      "type": "1759731740281",
      "message0": "一块左移1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759731740281'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(59,17,173,51,126,150,58,70,134,185,29,133,86,92,110,120,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(59,17,173,100,113,90,109,100,134,185,29,100,87,111,91,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759731740281'] = function(block) {
  let code = "base_action.action('一块左移1')\n";
  return code;
}

Blockly.Blocks['1759739754642'] = {
  init: function() {
    this.jsonInit({
      "type": "1759739754642",
      "message0": "一块右转111",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759739754642'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(12)\nMOTOmove19(65,11,149,95,110,55,149,95,140,189,50,105,130,145,91,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(65,11,149,100,90,55,129,100,140,189,50,100,110,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759739754642'] = function(block) {
  let code = "base_action.action('一块右转111')\n";
  return code;
}

Blockly.Blocks['1759827196100'] = {
  init: function() {
    this.jsonInit({
      "type": "1759827196100",
      "message0": "两块右滑A",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759827196100'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(70, 15, 190, 100, 110, 90, 109, 100, 131, 181, 15, 100, 90, 111, 91, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(70, 15, 190, 62, 120, 90, 116, 77, 131, 181, 15, 139, 80, 50, 144, 133, 0, 0, 100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(70, 15, 190, 100, 110, 90, 109, 100, 131, 181, 15, 100, 90, 111, 91, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759827196100'] = function(block) {
  let code = "base_action.action('两块右滑A')\n";
  return code;
}

Blockly.Blocks['1759827222170'] = {
  init: function() {
    this.jsonInit({
      "type": "1759827222170",
      "message0": "一块左滑A",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759827222170'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(59, 12, 165, 100, 106, 90, 109, 100, 147, 182, 40, 100, 95, 111, 91, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(59, 12, 165, 84, 115, 150, 58, 77, 147, 182, 40, 164, 90, 92, 110, 120, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(59, 12, 165, 100, 106, 90, 109, 100, 147, 182, 40, 100, 95, 111, 91, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759827222170'] = function(block) {
  let code = "base_action.action('一块左滑A')\n";
  return code;
}

Blockly.Blocks['1759827238670'] = {
  init: function() {
    this.jsonInit({
      "type": "1759827238670",
      "message0": "一块右滑A",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759827238670'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- 1\nMOTOsetspeed(20)\nMOTOmove19(59, 12, 165, 100, 113, 90, 109, 100, 147, 182, 40, 100, 87, 111, 91, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(59, 12, 165, 51, 101, 95, 87, 78, 147, 182, 40, 139, 79, 50, 144, 133, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(40)\nMOTOmove19(59, 12, 165, 100, 113, 90, 109, 100, 147, 182, 40, 100, 87, 111, 91, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759827238670'] = function(block) {
  let code = "base_action.action('一块右滑A')\n";
  return code;
}

Blockly.Blocks['1759827259991'] = {
  init: function() {
    this.jsonInit({
      "type": "1759827259991",
      "message0": "两块左滑A",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759827259991'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(83, 10, 175, 100, 110, 90, 109, 100, 118, 189, 28, 100, 90, 111, 91, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(83, 10, 175, 51, 125, 150, 64, 68, 118, 189, 28, 133, 95, 92, 115, 120, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(83, 10, 175, 100, 110, 90, 109, 100, 118, 189, 28, 100, 90, 111, 91, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759827259991'] = function(block) {
  let code = "base_action.action('两块左滑A')\n";
  return code;
}

Blockly.Blocks['1759827506165'] = {
  init: function() {
    this.jsonInit({
      "type": "1759827506165",
      "message0": "一块左滑B",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759827506165'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(20)\nMOTOmove19(59,17,173,100,113,90,109,100,134,185,29,100,87,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(59,17,173,51,126,150,58,70,134,185,29,133,86,92,110,120,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(59,17,173,100,113,90,109,100,134,185,29,100,87,111,91,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759827506165'] = function(block) {
  let code = "base_action.action('一块左滑B')\n";
  return code;
}

Blockly.Blocks['1759827540264'] = {
  init: function() {
    this.jsonInit({
      "type": "1759827540264",
      "message0": "一块右滑B",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759827540264'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(32,32,169,99,92,115,70,98,169,166,35,102,109,85,131,99,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(40)\nMOTOmove19(32,32,169,80,113,116,84,90,169,166,35,132,91,50,153,121,0,0,100)\nMOTOwait()\nDelayMs(70)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(25)\nMOTOmove19(32,32,169,99,92,115,70,98,169,166,35,102,109,85,131,99,0,0,100)\nMOTOwait()\nDelayMs(60)\n";
  return code;
}

Blockly.Python['1759827540264'] = function(block) {
  let code = "base_action.action('一块右滑B')\n";
  return code;
}

Blockly.Blocks['1759827582850'] = {
  init: function() {
    this.jsonInit({
      "type": "1759827582850",
      "message0": "两块左滑B",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759827582850'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(83,10,175,100,93,60,125,100,118,189,28,100,106,137,76,100,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,79,119,150,59,75,118,189,28,142,93,82,120,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(40)\nMOTOmove19(83,10,175,100,93,60,125,100,118,189,28,100,106,137,76,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1759827582850'] = function(block) {
  let code = "base_action.action('两块左滑B')\n";
  return code;
}

Blockly.Blocks['1759827617396'] = {
  init: function() {
    this.jsonInit({
      "type": "1759827617396",
      "message0": "两块右滑B",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759827617396'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(75,20,180,99,92,115,70,98,125,180,20,102,109,85,131,99,0,0,100)\nMOTOwait()\nDelayMs(150)\nMOTOsetspeed(40)\nMOTOmove19(70,15,190,80,113,116,84,90,130,181,15,132,91,50,153,121,0,0,100)\nMOTOwait()\nDelayMs(70)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(25)\nMOTOmove19(75,20,180,99,92,115,70,98,125,180,20,102,109,85,131,99,0,0,100)\nMOTOwait()\nDelayMs(60)\n";
  return code;
}

Blockly.Python['1759827617396'] = function(block) {
  let code = "base_action.action('两块右滑B')\n";
  return code;
}

Blockly.Blocks['1759888928502'] = {
  init: function() {
    this.jsonInit({
      "type": "1759888928502",
      "message0": "抱一块11",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759888928502'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(80,30,149,100,93,55,124,100,120,170,50,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80,30,149,100,136,150,62,100,120,170,50,100,72,50,138,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,148,100,148,150,59,99,119,169,50,99,52,50,141,99,0,0,101)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(20)\nMOTOmove19(65,12,151,100,149,150,59,100,140,188,50,100,52,50,141,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,12,151,100,119,132,70,100,140,188,50,100,77,69,130,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,12,151,100,115,97,97,100,140,188,50,100,84,105,98,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,12,162,100,98,77,115,100,140,188,40,100,101,123,86,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759888928502'] = function(block) {
  let code = "base_action.action('抱一块11')\n";
  return code;
}

Blockly.Blocks['1759889580549'] = {
  init: function() {
    this.jsonInit({
      "type": "1759889580549",
      "message0": "抱两块111",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759889580549'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,90,170,55,158,140,55,60,100,110,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75,15,170,55,158,140,55,60,128,183,35,145,42,60,145,140,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,50,138,150,55,60,128,183,35,150,62,50,145,140,0,0,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,70,128,145,75,70,128,183,35,130,72,55,125,130,0,0,100)\nMOTOwait()\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,98,142,145,77,98,128,183,35,102,58,55,123,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10,62,185,100,93,55,124,100,190,138,18,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759889580549'] = function(block) {
  let code = "base_action.action('抱两块111')\n";
  return code;
}

Blockly.Blocks['1759889777168'] = {
  init: function() {
    this.jsonInit({
      "type": "1759889777168",
      "message0": "两块左滑",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759889777168'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(75,15,180,100,93,60,125,100,118,189,28,100,106,137,76,100,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(50)\nMOTOmove19(75,15,180,79,119,150,59,75,118,189,28,142,93,82,120,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(40)\nMOTOmove19(75,15,180,100,93,60,125,100,118,189,28,100,106,137,76,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1759889777168'] = function(block) {
  let code = "base_action.action('两块左滑')\n";
  return code;
}

Blockly.Blocks['1759889931599'] = {
  init: function() {
    this.jsonInit({
      "type": "1759889931599",
      "message0": "两块右滑111",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759889931599'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(75,15,180,99,92,115,70,98,125,185,20,102,109,85,131,99,0,0,100)\nMOTOwait()\nDelayMs(150)\nMOTOsetspeed(40)\nMOTOmove19(75,15,180,80,113,116,84,90,125,185,20,132,91,50,153,121,0,0,100)\nMOTOwait()\nDelayMs(70)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(25)\nMOTOmove19(75,15,180,99,92,115,70,98,125,185,20,102,109,85,131,99,0,0,100)\nMOTOwait()\nDelayMs(60)\n";
  return code;
}

Blockly.Python['1759889931599'] = function(block) {
  let code = "base_action.action('两块右滑111')\n";
  return code;
}

Blockly.Blocks['1759890004231'] = {
  init: function() {
    this.jsonInit({
      "type": "1759890004231",
      "message0": "两块左滑1111",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759890004231'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(75,15,180,100,93,60,125,100,125,185,20,100,106,137,76,100,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(50)\nMOTOmove19(75,15,180,79,119,150,59,75,125,185,20,142,93,82,120,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(40)\nMOTOmove19(75,15,180,100,93,60,125,100,125,185,20,100,106,137,76,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1759890004231'] = function(block) {
  let code = "base_action.action('两块左滑1111')\n";
  return code;
}

Blockly.Blocks['1759890186979'] = {
  init: function() {
    this.jsonInit({
      "type": "1759890186979",
      "message0": "一块左移1111",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759890186979'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(20)\nMOTOmove19(65,12,162,100,113,90,109,100,140,188,40,100,87,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(65,12,162,51,126,150,58,70,140,188,40,133,86,92,110,120,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(65,12,162,100,113,90,109,100,140,188,40,100,87,111,91,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759890186979'] = function(block) {
  let code = "base_action.action('一块左移1111')\n";
  return code;
}

Blockly.Blocks['1759890373177'] = {
  init: function() {
    this.jsonInit({
      "type": "1759890373177",
      "message0": "一块右移动",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759890373177'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(65,12,162,99,92,115,70,98,140,188,40,102,109,85,131,99,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(40)\nMOTOmove19(65,12,162,80,113,116,84,90,140,188,40,132,91,50,153,121,0,0,100)\nMOTOwait()\nDelayMs(70)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(25)\nMOTOmove19(65,12,162,99,92,115,70,98,140,188,40,102,109,85,131,99,0,0,100)\nMOTOwait()\nDelayMs(60)\n";
  return code;
}

Blockly.Python['1759890373177'] = function(block) {
  let code = "base_action.action('一块右移动')\n";
  return code;
}

Blockly.Blocks['1759890472205'] = {
  init: function() {
    this.jsonInit({
      "type": "1759890472205",
      "message0": "一块左转22",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759890472205'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(40)\nMOTOmove19(65,12,162,100,91,55,129,100,140,188,40,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(65,12,162,95,71,55,109,95,140,188,40,105,89,145,51,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(25)\nMOTOmove19(65,12,162,100,91,55,129,100,140,188,40,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759890472205'] = function(block) {
  let code = "base_action.action('一块左转22')\n";
  return code;
}

Blockly.Blocks['1759890660499'] = {
  init: function() {
    this.jsonInit({
      "type": "1759890660499",
      "message0": "一块前进22",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759890660499'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(65,12,162,100,91,55,129,100,140,188,40,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(65,12,162,90,91,48,134,88,140,190,40,94,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(65,12,162,86,123,95,115,90,140,190,40,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(65,12,162,86,121,37,161,88,140,190,40,94,109,146,72,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(65,12,162,107,98,56,129,111,140,190,40,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(65,12,162,106,93,54,128,113,140,190,40,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(65,12,162,106,91,54,128,111,140,190,40,114,89,163,39,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(65,12,162,88,69,45,112,90,140,190,40,93,102,144,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(65,12,162,86,123,95,115,90,140,190,40,94,107,146,72,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,12,162,86,123,75,129,100,140,190,40,94,107,146,72,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,12,162,100,91,55,129,100,140,190,40,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759890660499'] = function(block) {
  let code = "base_action.action('一块前进22')\n";
  return code;
}

Blockly.Blocks['1759890742054'] = {
  init: function() {
    this.jsonInit({
      "type": "1759890742054",
      "message0": "一快后退222",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759890742054'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(150)\nMOTOmove19(65,12,162,100,93,55,124,98,140,188,40,100,107,145,76,102,0,0,100)\nMOTOwait()\nMOTOrigid16(65,12,165,85,50,50,50,85,140,188,40,85,50,50,50,85)\nMOTOrigid16(65,12,165,85,60,60,60,75,140,188,40,85,60,60,60,75)\n\n\n-- 右抬腿\nMOTOsetspeed(10)\nMOTOmove19(65,12,162,105,93,55,124,108,140,188,40,111,102,136,78,112,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(65,12,162,105,93,55,124,107,140,188,40,108,125,145,94,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,12,162,92,116,55,144,85,140,188,40,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,12,162,92,75,55,106,95,140,188,40,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,12,162,105,93,55,124,107,140,188,40,108,84,141,56,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,12,162,105,92,55,124,107,140,188,40,111,107,136,78,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,12,162,100,93,55,124,98,140,188,40,100,107,145,76,102,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759890742054'] = function(block) {
  let code = "base_action.action('一快后退222')\n";
  return code;
}

Blockly.Blocks['1759891015637'] = {
  init: function() {
    this.jsonInit({
      "type": "1759891015637",
      "message0": "两块前进22",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759891015637'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(75,15,180,100,91,55,129,100,125,185,20,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(75,15,180,90,91,48,134,88,125,185,20,94,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(75,15,180,86,123,95,115,90,125,185,20,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(75,15,180,86,121,37,161,88,125,185,20,94,109,146,72,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(75,15,180,107,98,56,129,111,125,185,20,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(75,15,180,106,93,54,128,113,125,185,20,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(75,15,180,106,91,54,128,111,125,185,20,114,89,163,39,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(75,15,180,88,69,45,112,90,125,185,20,93,102,144,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(75,15,180,86,123,95,115,90,125,185,20,94,107,146,72,87,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(30)\nMOTOmove19(75,15,180,100,91,55,129,100,125,185,20,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759891015637'] = function(block) {
  let code = "base_action.action('两块前进22')\n";
  return code;
}

Blockly.Blocks['1759891275202'] = {
  init: function() {
    this.jsonInit({
      "type": "1759891275202",
      "message0": "两块后退222",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759891275202'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(150)\nMOTOmove19(75,15,180,100,93,55,124,98,125,185,20,100,107,145,76,102,0,0,100)\nMOTOwait()\nMOTOrigid16(100,100,100,85,50,50,50,85,100,100,100,85,50,50,50,85)\n\n\n-- 右抬腿\nMOTOsetspeed(10)\nMOTOmove19(75,15,180,105,93,55,124,108,125,185,20,111,102,136,78,112,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(75,15,180,105,93,55,124,107,125,185,20,108,125,145,94,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75,15,180,92,116,55,144,85,125,185,20,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,15,180,92,75,55,106,95,125,185,20,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75,15,180,105,93,55,124,107,125,185,20,108,84,141,56,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75,15,180,105,92,55,124,107,125,185,20,111,107,136,78,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(75,15,180,100,93,55,124,98,125,185,20,100,107,145,76,102,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759891275202'] = function(block) {
  let code = "base_action.action('两块后退222')\n";
  return code;
}

Blockly.Blocks['1759891383796'] = {
  init: function() {
    this.jsonInit({
      "type": "1759891383796",
      "message0": "两块左转22",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759891383796'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(75,15,180,100,91,55,129,100,125,185,20,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75,15,180,95,71,55,109,95,125,185,20,105,89,145,51,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(50)\nMOTOmove19(75,15,180,100,91,55,129,100,125,185,20,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759891383796'] = function(block) {
  let code = "base_action.action('两块左转22')\n";
  return code;
}

Blockly.Blocks['1759891487811'] = {
  init: function() {
    this.jsonInit({
      "type": "1759891487811",
      "message0": "两块右转222",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759891487811'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(75,15,180,100,90,55,129,100,125,185,20,100,110,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75,15,180,95,110,55,149,95,125,185,20,105,130,145,91,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(50)\nMOTOmove19(75,15,180,100,90,55,129,100,125,185,20,100,110,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759891487811'] = function(block) {
  let code = "base_action.action('两块右转222')\n";
  return code;
}

Blockly.Blocks['1760355077352'] = {
  init: function() {
    this.jsonInit({
      "type": "1760355077352",
      "message0": "000",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760355077352'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(75,15,180,79,119,150,59,75,125,185,20,142,93,82,120,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(75,15,180,79,119,150,59,75,125,185,20,116,92,50,155,90,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(75,15,180,100,93,60,125,100,125,185,20,100,106,137,76,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1760355077352'] = function(block) {
  let code = "base_action.action('000')\n";
  return code;
}

Blockly.Blocks['1760355587596'] = {
  init: function() {
    this.jsonInit({
      "type": "1760355587596",
      "message0": "33",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760355587596'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(75,15,180,98,127,119,92,98,125,185,20,102,71,74,107,103,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760355587596'] = function(block) {
  let code = "base_action.action('33')\n";
  return code;
}

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

Blockly.Blocks['1760355757547'] = {
  init: function() {
    this.jsonInit({
      "type": "1760355757547",
      "message0": "抱箱左移qa（2）",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760355757547'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35,0,0,0)\nMOTOsetspeed(65)\nMOTOmove19(65, 10, 149, 85, 112, 90, 115, 90, 140, 190, 50, 110, 107, 146, 70, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(65, 10, 149, 95, 93, 53, 131, 105, 140, 190, 50, 120, 116, 160, 68, 130, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(65, 10, 149, 100, 93, 54, 134, 98, 140, 190, 50, 103, 107, 146, 76, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 100, 93, 55, 134, 95, 140, 190, 50, 100, 107, 145, 76, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 100, 93, 55, 134, 100, 140, 190, 50, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760355757547'] = function(block) {
  let code = "base_action.action('抱箱左移qa（2）')\n";
  return code;
}

Blockly.Blocks['1760356319216'] = {
  init: function() {
    this.jsonInit({
      "type": "1760356319216",
      "message0": "288",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760356319216'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(75,15,180,93,119,150,59,94,125,185,20,143,86,83,117,111,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,15,180,98,96,121,69,97,125,185,20,101,103,76,133,99,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760356319216'] = function(block) {
  let code = "base_action.action('288')\n";
  return code;
}

Blockly.Blocks['1760414402671'] = {
  init: function() {
    this.jsonInit({
      "type": "1760414402671",
      "message0": "2888",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760414402671'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(80)\nMOTOmove19(10,60,190,77,93,55,124,60,190,140,12,113,107,145,76,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(10,60,190,77,93,55,124,81,190,140,12,113,107,145,76,88,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(10,60,190,100,93,55,124,100,190,140,12,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760414402671'] = function(block) {
  let code = "base_action.action('2888')\n";
  return code;
}

Blockly.Blocks['1760414498086'] = {
  init: function() {
    this.jsonInit({
      "type": "1760414498086",
      "message0": "2188",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760414498086'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,90,170,55,158,140,55,60,100,110,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(75,20,180,55,158,140,55,60,125,180,20,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(75,20,180,56,138,150,54,60,125,180,20,146,59,50,147,140,0,0,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(20)\nMOTOmove19(75,20,180,101,107,149,43,100,125,180,20,101,92,51,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10,60,190,100,93,55,124,100,190,140,12,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760414498086'] = function(block) {
  let code = "base_action.action('2188')\n";
  return code;
}

Blockly.Blocks['1760414969392'] = {
  init: function() {
    this.jsonInit({
      "type": "1760414969392",
      "message0": "11111",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760414969392'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(100)\nMOTOmove19(10,60,190,100,93,55,124,100,190,140,12,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(10,60,190,103,93,55,124,100,190,140,12,130,107,145,76,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10,60,190,72,93,55,124,110,190,140,12,101,107,145,76,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(10,60,190,100,93,55,124,100,190,140,12,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760414969392'] = function(block) {
  let code = "base_action.action('11111')\n";
  return code;
}

Blockly.Blocks['1760415399480'] = {
  init: function() {
    this.jsonInit({
      "type": "1760415399480",
      "message0": "2688",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760415399480'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(150)\nMOTOmove19(10,60,190,96,93,55,124,90,190,140,12,130,107,145,76,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(10,60,190,81,93,55,124,60,190,140,12,104,107,145,76,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(120)\nMOTOmove19(10,60,190,100,93,55,124,100,190,140,12,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760415399480'] = function(block) {
  let code = "base_action.action('2688')\n";
  return code;
}

Blockly.Blocks['1760415645999'] = {
  init: function() {
    this.jsonInit({
      "type": "1760415645999",
      "message0": "16",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760415645999'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(10,60,190,77,93,55,124,60,190,140,12,113,107,145,76,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10,60,190,77,93,55,124,81,190,140,12,113,107,145,76,88,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10,60,190,100,93,55,124,100,190,140,12,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760415645999'] = function(block) {
  let code = "base_action.action('16')\n";
  return code;
}

Blockly.Blocks['1760415667270'] = {
  init: function() {
    this.jsonInit({
      "type": "1760415667270",
      "message0": "17",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760415667270'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(10,60,190,96,93,55,124,90,190,140,12,130,107,145,76,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(10,60,190,81,93,55,124,60,190,140,12,104,107,145,76,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10,60,190,100,93,55,124,100,190,140,12,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760415667270'] = function(block) {
  let code = "base_action.action('17')\n";
  return code;
}

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

Blockly.Blocks['1760427257857'] = {
  init: function() {
    this.jsonInit({
      "type": "1760427257857",
      "message0": "抱两",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760427257857'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,90,170,55,158,140,55,60,100,110,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(75,20,180,55,158,140,55,60,125,180,20,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(75,20,180,56,138,150,54,60,125,180,20,146,59,50,147,140,0,0,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(20)\nMOTOmove19(75,20,180,101,107,149,43,100,125,180,20,101,92,51,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,15,180,100,93,55,124,100,125,185,20,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760427257857'] = function(block) {
  let code = "base_action.action('抱两')\n";
  return code;
}

Blockly.Blocks['1760427380477'] = {
  init: function() {
    this.jsonInit({
      "type": "1760427380477",
      "message0": "左2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760427380477'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(130)\nMOTOmove19(75,20,170,74,125,86,125,89,125,180,30,108,101,155,60,102,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(75,15,180,99,86,55,124,100,125,185,20,102,112,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760427380477'] = function(block) {
  let code = "base_action.action('左2')\n";
  return code;
}

Blockly.Blocks['1760427494865'] = {
  init: function() {
    this.jsonInit({
      "type": "1760427494865",
      "message0": "抱两个方块右移10",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760427494865'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35,0,0,0)\nMOTOsetspeed(100)\nMOTOmove19(75, 20, 170, 90, 92, 52, 127, 100, 125, 180, 30, 115, 88, 116, 88, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75, 20, 170, 100, 91, 55, 129, 100, 125, 180, 30, 100, 109, 145, 73, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760427494865'] = function(block) {
  let code = "base_action.action('抱两个方块右移10')\n";
  return code;
}

Blockly.Blocks['1760427562003'] = {
  init: function() {
    this.jsonInit({
      "type": "1760427562003",
      "message0": "右2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760427562003'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(100)\nMOTOmove19(75,15,180,90,92,52,127,100,125,185,20,115,88,116,88,100,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(75,15,180,100,93,55,124,100,125,185,20,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760427562003'] = function(block) {
  let code = "base_action.action('右2')\n";
  return code;
}

Blockly.Blocks['1760427909877'] = {
  init: function() {
    this.jsonInit({
      "type": "1760427909877",
      "message0": "左1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760427909877'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(130)\nMOTOmove19(58,10,180,74,125,86,125,89,130,190,20,108,101,155,60,102,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(68,10,180,99,86,55,124,100,130,190,20,102,112,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760427909877'] = function(block) {
  let code = "base_action.action('左1')\n";
  return code;
}

Blockly.Blocks['1760427981240'] = {
  init: function() {
    this.jsonInit({
      "type": "1760427981240",
      "message0": "右1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760427981240'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(100)\nMOTOmove19(68,10,180,90,92,52,127,100,130,190,20,115,88,116,88,100,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(68,10,180,99,86,55,124,100,130,190,20,102,112,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760427981240'] = function(block) {
  let code = "base_action.action('右1')\n";
  return code;
}

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

Blockly.Blocks['1760695824560'] = {
  init: function() {
    this.jsonInit({
      "type": "1760695824560",
      "message0": "GrabCube330",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760695824560'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 90, 170, 55, 158, 140, 55, 60, 100, 110, 30, 145, 42, 60, 145, 140, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(62, 16, 161, 55, 158, 140, 55, 60, 141, 183, 42, 145, 42, 60, 145, 140, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(150)\nMOTOmove19(58, 20, 155, 50, 138, 150, 55, 60, 141, 183, 49, 150, 62, 50, 145, 140, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(150)\nMOTOmove19(62, 16, 189, 70, 128, 145, 75, 70, 143, 183, 15, 130, 72, 55, 125, 130, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30,0,0,0)\nMOTOsetspeed(150)\nMOTOmove19(62, 16, 189, 98, 142, 145, 77, 98, 143, 183, 15, 102, 58, 55, 123, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(62, 16, 189, 100, 93, 55, 124, 100, 145, 178, 15, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10, 52, 190, 100, 93, 55, 124, 100, 190, 152, 14, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760695824560'] = function(block) {
  let code = "base_action.action('GrabCube330')\n";
  return code;
}

Blockly.Blocks['1760695941602'] = {
  init: function() {
    this.jsonInit({
      "type": "1760695941602",
      "message0": "GrabCube42",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760695941602'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 90, 170, 55, 158, 140, 55, 60, 100, 110, 30, 145, 42, 60, 145, 140, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75, 15, 170, 55, 158, 140, 55, 60, 128, 183, 35, 145, 42, 60, 145, 140, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(150)\nMOTOmove19(75, 15, 170, 50, 138, 150, 55, 60, 128, 183, 35, 150, 62, 50, 145, 140, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(150)\nMOTOmove19(75, 15, 170, 70, 128, 145, 75, 70, 128, 183, 35, 130, 72, 55, 125, 130, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30,0,0,0)\nMOTOsetspeed(150)\nMOTOmove19(75, 15, 170, 98, 142, 145, 77, 98, 128, 183, 35, 102, 58, 55, 123, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75, 15, 170, 100, 93, 55, 124, 100, 128, 183, 35, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10, 62, 185, 100, 93, 55, 124, 100, 190, 138, 18, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760695941602'] = function(block) {
  let code = "base_action.action('GrabCube42')\n";
  return code;
}

Blockly.Blocks['1760696189748'] = {
  init: function() {
    this.jsonInit({
      "type": "1760696189748",
      "message0": "Box_move_right340",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760696189748'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- 1\nMOTOsetspeed(25)\nMOTOmove19(14, 52, 190, 100, 113, 90, 109, 100, 190, 152, 14, 100, 87, 111, 91, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(14, 52, 190, 51, 112, 96, 103, 76, 190, 152, 14, 135, 91, 57, 149, 136, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(14, 52, 190, 100, 113, 90, 109, 100, 190, 152, 14, 100, 87, 111, 91, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760696189748'] = function(block) {
  let code = "base_action.action('Box_move_right340')\n";
  return code;
}

Blockly.Blocks['1760696757340'] = {
  init: function() {
    this.jsonInit({
      "type": "1760696757340",
      "message0": "1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760696757340'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(25)\nMOTOmove19(14,52,190,100,113,90,109,100,190,152,14,100,87,111,91,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(14,52,190,51,112,96,103,76,190,152,14,135,91,57,149,136,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(14,52,190,62,112,96,95,61,190,152,14,111,89,50,162,103,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,100,113,90,109,100,190,152,14,100,87,111,91,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760696757340'] = function(block) {
  let code = "base_action.action('1')\n";
  return code;
}

Blockly.Blocks['1760697009450'] = {
  init: function() {
    this.jsonInit({
      "type": "1760697009450",
      "message0": "右滑步A",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760697009450'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(25)\nMOTOmove19(14,52,190,100,113,90,109,100,190,152,14,100,87,111,91,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(14,52,190,51,112,96,103,76,190,152,14,135,91,57,149,136,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(14,52,190,62,112,96,95,61,190,152,14,111,89,50,162,103,0,0,100)\nMOTOwait()\nDelayMs(100)\n\n\n-- 1\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,100,113,90,109,100,190,152,14,100,87,111,91,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760697009450'] = function(block) {
  let code = "base_action.action('右滑步A')\n";
  return code;
}

Blockly.Blocks['1760697140846'] = {
  init: function() {
    this.jsonInit({
      "type": "1760697140846",
      "message0": "Box_move_left34",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760697140846'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- 1\nMOTOsetspeed(25)\nMOTOmove19(14, 52, 190, 100, 113, 90, 109, 100, 190, 152, 14, 100, 87, 111, 91, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(40)\nMOTOmove19(14, 52, 190, 84, 122, 150, 58, 77, 190, 152, 14, 166, 90, 98, 109, 120, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(14, 52, 190, 100, 113, 90, 109, 100, 190, 152, 14, 100, 87, 111, 91, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760697140846'] = function(block) {
  let code = "base_action.action('Box_move_left34')\n";
  return code;
}

Blockly.Blocks['1760697639855'] = {
  init: function() {
    this.jsonInit({
      "type": "1760697639855",
      "message0": "左滑步A",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760697639855'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(25)\nMOTOmove19(14,52,190,100,113,90,109,100,190,152,14,100,87,111,91,100,0,0,100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(40)\nMOTOmove19(14,52,190,84,122,150,58,77,190,152,14,166,90,98,109,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,137,95,85,123,137,0,0,100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 1\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,100,113,90,109,100,190,152,14,100,87,111,91,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760697639855'] = function(block) {
  let code = "base_action.action('左滑步A')\n";
  return code;
}

Blockly.Blocks['1760752200413'] = {
  init: function() {
    this.jsonInit({
      "type": "1760752200413",
      "message0": "左a",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760752200413'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(45)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(120)\nMOTOmove19(14,52,190,84,122,150,58,77,190,152,14,166,90,98,109,140,0,0,100)\nMOTOwait()\nDelayMs(80)\nMOTOsetspeed(100)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,137,95,85,123,137,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(100)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760752200413'] = function(block) {
  let code = "base_action.action('左a')\n";
  return code;
}

Blockly.Blocks['1760752950776'] = {
  init: function() {
    this.jsonInit({
      "type": "1760752950776",
      "message0": "右a",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760752950776'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(100)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,51,112,96,103,76,190,152,14,135,91,57,149,136,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(14,52,190,62,112,96,95,61,190,152,14,111,89,50,162,103,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760752950776'] = function(block) {
  let code = "base_action.action('右a')\n";
  return code;
}

Blockly.Blocks['1760752991039'] = {
  init: function() {
    this.jsonInit({
      "type": "1760752991039",
      "message0": "左b",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760752991039'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(120)\nMOTOmove19(14,52,190,84,122,150,58,77,190,152,14,166,90,98,109,140,0,0,100)\nMOTOwait()\nDelayMs(80)\nMOTOsetspeed(100)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,137,95,85,123,137,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(100)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760752991039'] = function(block) {
  let code = "base_action.action('左b')\n";
  return code;
}

Blockly.Blocks['1760753012159'] = {
  init: function() {
    this.jsonInit({
      "type": "1760753012159",
      "message0": "右b",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760753012159'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,51,112,96,103,76,190,152,14,135,91,57,149,136,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(14,52,190,62,112,96,95,61,190,152,14,111,89,50,162,103,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760753012159'] = function(block) {
  let code = "base_action.action('右b')\n";
  return code;
}

Blockly.Blocks['1760754411938'] = {
  init: function() {
    this.jsonInit({
      "type": "1760754411938",
      "message0": "芳",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760754411938'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- RIGEND\nMOTOsetspeed(60)\nMOTOmove19(75,15,170,100,90,55,127,100,125,185,35,100,110,145,73,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,100,91,150,42,102,125,185,35,100,107,51,158,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(75,20,180,55,158,140,55,60,125,180,20,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(74,52,180,55,158,140,55,60,124,152,19,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(74,52,180,56,138,150,54,60,124,152,19,146,59,50,147,140,0,0,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(20)\nMOTOmove19(80,33,130,101,107,149,43,100,120,165,66,101,92,51,157,100,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760754411938'] = function(block) {
  let code = "base_action.action('芳')\n";
  return code;
}

Blockly.Blocks['1760754577591'] = {
  init: function() {
    this.jsonInit({
      "type": "1760754577591",
      "message0": "左c",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760754577591'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(10,62,185,92,106,150,40,94,190,138,18,100,94,50,157,100,0,0,100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(120)\nMOTOmove19(10,62,185,84,122,150,58,77,190,138,18,166,90,98,109,140,0,0,100)\nMOTOwait()\nDelayMs(80)\nMOTOsetspeed(100)\nMOTOmove19(10,62,185,92,106,150,40,94,190,138,18,137,95,85,123,137,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(100)\nMOTOmove19(10,62,185,92,106,150,40,94,190,138,18,100,94,50,157,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760754577591'] = function(block) {
  let code = "base_action.action('左c')\n";
  return code;
}

Blockly.Blocks['1760754904770'] = {
  init: function() {
    this.jsonInit({
      "type": "1760754904770",
      "message0": "右c",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760754904770'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(10,62,185,92,106,150,40,94,190,138,18,100,94,50,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(10,62,185,51,112,96,103,76,190,138,18,135,91,57,149,136,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(10,62,185,62,112,96,95,61,190,138,18,111,89,50,162,103,0,0,100)\nMOTOwait()\nMOTOrigid16(10,62,185,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(10,62,185,92,106,150,40,94,190,138,18,100,94,50,157,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760754904770'] = function(block) {
  let code = "base_action.action('右c')\n";
  return code;
}

Blockly.Blocks['1760864490062'] = {
  init: function() {
    this.jsonInit({
      "type": "1760864490062",
      "message0": "12",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760864490062'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,51,112,96,103,76,190,152,14,135,91,57,149,136,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(14,52,190,62,112,96,95,61,190,152,14,111,89,50,162,103,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nDelayMs(600)\n";
  return code;
}

Blockly.Python['1760864490062'] = function(block) {
  let code = "base_action.action('12')\n";
  return code;
}

Blockly.Blocks['1760865084590'] = {
  init: function() {
    this.jsonInit({
      "type": "1760865084590",
      "message0": "112",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760865084590'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,51,112,96,103,76,190,152,14,135,95,60,155,136,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(14,52,190,62,112,96,95,61,190,152,14,111,89,50,162,103,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nDelayMs(600)\n";
  return code;
}

Blockly.Python['1760865084590'] = function(block) {
  let code = "base_action.action('112')\n";
  return code;
}

Blockly.Blocks['1760865401915'] = {
  init: function() {
    this.jsonInit({
      "type": "1760865401915",
      "message0": "221",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760865401915'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(120)\nMOTOmove19(14,52,190,84,122,150,58,77,190,152,14,166,90,98,109,140,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(100)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,137,95,85,123,137,0,0,100)\nMOTOwait()\nDelayMs(20)\nMOTOsetspeed(100)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760865401915'] = function(block) {
  let code = "base_action.action('221')\n";
  return code;
}

Blockly.Blocks['1760865489955'] = {
  init: function() {
    this.jsonInit({
      "type": "1760865489955",
      "message0": "222",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760865489955'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(120)\nMOTOmove19(14,52,190,84,122,150,58,77,190,152,14,166,90,98,109,140,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(100)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,137,95,85,123,137,0,0,100)\nMOTOwait()\nDelayMs(20)\nMOTOsetspeed(100)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1760865489955'] = function(block) {
  let code = "base_action.action('222')\n";
  return code;
}

Blockly.Blocks['1760865597027'] = {
  init: function() {
    this.jsonInit({
      "type": "1760865597027",
      "message0": "220",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760865597027'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(120)\nMOTOmove19(14,52,190,84,122,150,58,77,190,152,14,166,90,98,109,140,0,0,100)\nMOTOwait()\nDelayMs(80)\nMOTOsetspeed(100)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,137,95,85,123,137,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(100)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1760865597027'] = function(block) {
  let code = "base_action.action('220')\n";
  return code;
}

Blockly.Blocks['1760865633063'] = {
  init: function() {
    this.jsonInit({
      "type": "1760865633063",
      "message0": "110",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760865633063'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,51,112,96,103,76,190,152,14,135,95,60,155,136,0,0,100)\nMOTOwait()\nDelayMs(80)\nMOTOsetspeed(80)\nMOTOmove19(14,52,190,62,112,96,95,61,190,152,14,111,89,50,162,103,0,0,100)\nMOTOwait()\nDelayMs(80)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nDelayMs(400)\n";
  return code;
}

Blockly.Python['1760865633063'] = function(block) {
  let code = "base_action.action('110')\n";
  return code;
}

Blockly.Blocks['1760865806864'] = {
  init: function() {
    this.jsonInit({
      "type": "1760865806864",
      "message0": "1212",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760865806864'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,51,112,96,103,76,190,152,14,135,91,57,149,136,0,0,100)\nMOTOwait()\nDelayMs(80)\nMOTOsetspeed(80)\nMOTOmove19(14,52,190,62,112,96,95,61,190,152,14,111,89,50,162,103,0,0,100)\nMOTOwait()\nDelayMs(80)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1760865806864'] = function(block) {
  let code = "base_action.action('1212')\n";
  return code;
}

Blockly.Blocks['1760866260660'] = {
  init: function() {
    this.jsonInit({
      "type": "1760866260660",
      "message0": "01",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760866260660'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,51,112,96,95,76,190,152,14,135,106,77,141,136,0,0,100)\nMOTOwait()\nDelayMs(80)\nMOTOsetspeed(80)\nMOTOmove19(14,52,190,62,112,96,95,61,190,152,14,111,89,50,162,103,0,0,100)\nMOTOwait()\nDelayMs(80)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1760866260660'] = function(block) {
  let code = "base_action.action('01')\n";
  return code;
}

Blockly.Blocks['1760866447708'] = {
  init: function() {
    this.jsonInit({
      "type": "1760866447708",
      "message0": "02",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760866447708'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,51,112,96,95,76,190,152,14,135,106,77,145,136,0,0,100)\nMOTOwait()\nDelayMs(80)\nMOTOsetspeed(80)\nMOTOmove19(14,52,190,62,112,96,95,61,190,152,14,111,89,50,162,103,0,0,100)\nMOTOwait()\nDelayMs(80)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1760866447708'] = function(block) {
  let code = "base_action.action('02')\n";
  return code;
}

Blockly.Blocks['1760866516509'] = {
  init: function() {
    this.jsonInit({
      "type": "1760866516509",
      "message0": "03",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760866516509'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,51,112,96,95,76,190,152,14,135,106,77,145,136,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(80)\nMOTOmove19(14,52,190,62,112,96,95,61,190,152,14,111,89,50,162,103,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1760866516509'] = function(block) {
  let code = "base_action.action('03')\n";
  return code;
}

Blockly.Blocks['1760932358659'] = {
  init: function() {
    this.jsonInit({
      "type": "1760932358659",
      "message0": "04",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760932358659'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,51,112,96,95,76,190,152,14,135,89,59,147,136,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(80)\nMOTOmove19(14,52,190,62,112,96,95,61,190,152,14,111,89,50,162,103,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1760932358659'] = function(block) {
  let code = "base_action.action('04')\n";
  return code;
}

Blockly.Blocks['1760932711424'] = {
  init: function() {
    this.jsonInit({
      "type": "1760932711424",
      "message0": "033",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760932711424'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,51,112,96,95,76,190,152,14,135,95,70,145,136,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(80)\nMOTOmove19(14,52,190,62,112,96,95,61,190,152,14,111,89,50,162,103,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1760932711424'] = function(block) {
  let code = "base_action.action('033')\n";
  return code;
}

Blockly.Blocks['1760933039754'] = {
  init: function() {
    this.jsonInit({
      "type": "1760933039754",
      "message0": "左转身1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760933039754'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(45)\nMOTOmove19(65,11,149,100,90,55,129,100,140,189,50,100,110,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(12)\nMOTOmove19(65,11,149,95,110,55,149,95,140,189,50,105,130,145,91,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(65,11,149,100,90,55,129,100,140,189,50,100,110,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760933039754'] = function(block) {
  let code = "base_action.action('左转身1')\n";
  return code;
}

Blockly.Blocks['1760933060454'] = {
  init: function() {
    this.jsonInit({
      "type": "1760933060454",
      "message0": "右转身1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760933060454'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(45)\nMOTOmove19(65,11,149,100,90,55,129,100,140,189,50,100,110,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(12)\nMOTOmove19(65,11,149,95,110,55,149,95,140,189,50,105,130,145,91,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(65,11,149,100,90,55,129,100,140,189,50,100,110,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760933060454'] = function(block) {
  let code = "base_action.action('右转身1')\n";
  return code;
}

Blockly.Blocks['1760933212934'] = {
  init: function() {
    this.jsonInit({
      "type": "1760933212934",
      "message0": "后退步1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760933212934'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(50)\nMOTOmove19(65,12,162,100,93,55,124,98,140,188,40,100,107,145,76,102,0,0,100)\nMOTOwait()\nMOTOrigid16(65,12,165,85,50,50,50,85,140,188,40,85,50,50,50,85)\nMOTOrigid16(65,12,165,85,60,60,60,75,140,188,40,85,60,60,60,75)\n\n\n-- 右抬腿\nMOTOsetspeed(10)\nMOTOmove19(65,12,162,105,93,55,124,108,140,188,40,111,102,136,78,112,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(65,12,162,105,93,55,124,107,140,188,40,108,125,145,94,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,12,162,92,116,55,144,85,140,188,40,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,12,162,92,75,55,106,95,140,188,40,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,12,162,105,93,55,124,107,140,188,40,108,84,141,56,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,12,162,105,92,55,124,107,140,188,40,111,107,136,78,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,12,162,100,93,55,124,98,140,188,40,100,107,145,76,102,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760933212934'] = function(block) {
  let code = "base_action.action('后退步1')\n";
  return code;
}

Blockly.Blocks['1760933353357'] = {
  init: function() {
    this.jsonInit({
      "type": "1760933353357",
      "message0": "后退步10",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760933353357'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(50)\nMOTOmove19(14,52,190,100,93,55,124,98,190,152,14,100,107,145,76,102,0,0,100)\nMOTOwait()\nMOTOrigid16(65,12,165,85,50,50,50,85,140,188,40,85,50,50,50,85)\nMOTOrigid16(65,12,165,85,60,60,60,75,140,188,40,85,60,60,60,75)\n\n\n-- 右抬腿\nMOTOsetspeed(10)\nMOTOmove19(14,52,190,105,93,55,124,108,190,152,14,111,102,136,78,112,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(14,52,190,105,93,55,124,107,190,152,14,108,125,145,94,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,92,116,55,144,85,190,152,14,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(14,52,190,92,75,55,106,95,190,152,14,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,105,93,55,124,107,190,152,14,108,84,141,56,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,105,92,55,124,107,190,152,14,111,107,136,78,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(14,52,190,100,93,55,124,98,190,152,14,100,107,145,76,102,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760933353357'] = function(block) {
  let code = "base_action.action('后退步10')\n";
  return code;
}

Blockly.Blocks['1760933534757'] = {
  init: function() {
    this.jsonInit({
      "type": "1760933534757",
      "message0": "后退步11",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760933534757'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(35)\nMOTOmove19(14,52,190,100,93,55,124,98,190,152,14,100,107,145,76,102,0,0,100)\nMOTOwait()\nMOTOrigid16(65,12,165,85,50,50,50,85,140,188,40,85,50,50,50,85)\nMOTOrigid16(65,12,165,85,60,60,60,75,140,188,40,85,60,60,60,75)\n\n\n-- 右抬腿\nMOTOsetspeed(10)\nMOTOmove19(14,52,190,105,93,55,124,108,190,152,14,111,102,136,78,112,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(14,52,190,105,93,55,124,107,190,152,14,108,125,145,94,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,92,116,55,144,85,190,152,14,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(14,52,190,92,75,55,106,95,190,152,14,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,105,93,55,124,107,190,152,14,108,84,141,56,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,105,92,55,124,107,190,152,14,111,107,136,78,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(14,52,190,100,93,55,124,98,190,152,14,100,107,145,76,102,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760933534757'] = function(block) {
  let code = "base_action.action('后退步11')\n";
  return code;
}

Blockly.Blocks['1761045715274'] = {
  init: function() {
    this.jsonInit({
      "type": "1761045715274",
      "message0": "左1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1761045715274'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(120)\nMOTOmove19(14,52,190,84,122,150,58,77,190,152,14,166,90,98,109,140,0,0,100)\nMOTOwait()\nDelayMs(180)\nMOTOsetspeed(100)\nMOTOmove19(14,52,190,92,106,150,40,85,190,152,14,137,95,85,123,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(150)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1761045715274'] = function(block) {
  let code = "base_action.action('左1')\n";
  return code;
}

Blockly.Blocks['1761048529001'] = {
  init: function() {
    this.jsonInit({
      "type": "1761048529001",
      "message0": "右",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1761048529001'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,51,112,96,103,76,190,152,14,135,91,57,149,136,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(14,52,190,62,112,96,95,61,190,152,14,111,89,50,162,103,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1761048529001'] = function(block) {
  let code = "base_action.action('右')\n";
  return code;
}

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

Blockly.Blocks['1761105920408'] = {
  init: function() {
    this.jsonInit({
      "type": "1761105920408",
      "message0": "右转01",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1761105920408'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(65,11,149,100,90,55,129,100,140,189,50,100,110,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(12)\nMOTOmove19(65,11,149,95,110,55,149,95,140,189,50,105,130,145,91,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(65,11,149,100,90,55,129,100,140,189,50,100,110,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1761105920408'] = function(block) {
  let code = "base_action.action('右转01')\n";
  return code;
}

Blockly.Blocks['1761268621734'] = {
  init: function() {
    this.jsonInit({
      "type": "1761268621734",
      "message0": "左22",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1761268621734'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(10,62,185,92,106,150,40,94,190,138,18,100,94,50,157,100,0,0,100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(80)\nMOTOmove19(10,62,185,84,122,150,58,77,190,138,18,166,90,98,109,140,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(50)\nMOTOmove19(10,62,185,92,106,150,40,94,190,138,18,137,95,85,123,137,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(80)\nMOTOmove19(10,62,185,92,106,150,40,94,190,138,18,100,94,50,157,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1761268621734'] = function(block) {
  let code = "base_action.action('左22')\n";
  return code;
}

Blockly.Blocks['1761269534774'] = {
  init: function() {
    this.jsonInit({
      "type": "1761269534774",
      "message0": "22左",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1761269534774'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(10,62,185,92,106,150,40,94,190,138,18,100,94,50,157,100,0,0,100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(80)\nMOTOmove19(10,62,185,84,122,150,58,77,190,138,18,166,90,98,109,140,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(50)\nMOTOmove19(10,62,185,88,104,150,40,94,190,138,18,137,95,85,123,137,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(80)\nMOTOmove19(10,62,185,92,106,150,40,94,190,138,18,100,94,50,157,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1761269534774'] = function(block) {
  let code = "base_action.action('22左')\n";
  return code;
}

Blockly.Blocks['1761269859844'] = {
  init: function() {
    this.jsonInit({
      "type": "1761269859844",
      "message0": "左移111",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1761269859844'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(83,10,175,100,110,90,109,100,118,189,28,100,90,111,91,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(83,10,175,72,125,150,62,82,118,189,28,133,95,92,115,120,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(45)\nMOTOmove19(83,10,175,100,110,90,109,100,118,189,28,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(100)\n";
  return code;
}

Blockly.Python['1761269859844'] = function(block) {
  let code = "base_action.action('左移111')\n";
  return code;
}

Blockly.Blocks['1761270290214'] = {
  init: function() {
    this.jsonInit({
      "type": "1761270290214",
      "message0": "左移",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1761270290214'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(65,12,151,100,110,90,109,100,140,188,50,100,90,111,91,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(65,12,151,72,125,150,62,82,140,188,50,133,95,92,115,120,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(45)\nMOTOmove19(65,12,151,100,110,90,109,100,140,188,50,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(100)\n";
  return code;
}

Blockly.Python['1761270290214'] = function(block) {
  let code = "base_action.action('左移')\n";
  return code;
}

Blockly.Blocks['1761270436311'] = {
  init: function() {
    this.jsonInit({
      "type": "1761270436311",
      "message0": "右移",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1761270436311'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,92,95,150,40,94,190,152,14,100,100,50,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,51,112,96,103,76,190,152,14,135,91,57,149,136,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(14,52,190,62,112,96,95,61,190,152,14,111,89,50,162,103,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(14,52,190,92,95,150,40,94,190,152,14,100,100,50,157,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1761270436311'] = function(block) {
  let code = "base_action.action('右移')\n";
  return code;
}

Blockly.Blocks['1761271611791'] = {
  init: function() {
    this.jsonInit({
      "type": "1761271611791",
      "message0": "前进2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1761271611791'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(20)\nMOTOmove19(75,15,180,100,91,55,129,100,125,185,20,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(75,15,180,90,91,48,134,88,125,185,20,94,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(75,15,180,86,123,95,115,90,125,185,20,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(75,15,180,86,121,37,161,88,125,185,20,94,109,146,72,89,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(8)\nMOTOmove19(75,15,180,107,98,56,129,111,125,185,20,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(75,15,180,106,93,54,128,113,125,185,20,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(75,15,180,106,91,54,128,111,125,185,20,114,89,163,39,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(75,15,180,88,69,45,112,90,125,185,20,93,102,144,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(75,15,180,86,123,95,115,90,125,185,20,94,107,146,72,87,0,0,100)\nMOTOwait()\nDelayMs(150)\nMOTOsetspeed(15)\nMOTOmove19(75,15,180,100,91,55,129,100,125,185,20,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1761271611791'] = function(block) {
  let code = "base_action.action('前进2')\n";
  return code;
}

Blockly.Blocks['1761293016190'] = {
  init: function() {
    this.jsonInit({
      "type": "1761293016190",
      "message0": "抱2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1761293016190'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,90,170,55,138,140,55,60,100,110,30,145,62,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75,15,170,55,158,140,55,60,128,183,35,145,42,60,145,140,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,50,138,150,55,60,128,183,35,150,62,50,145,140,0,0,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,70,128,145,75,70,128,183,35,130,72,55,125,130,0,0,100)\nMOTOwait()\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,98,142,145,77,98,128,183,35,102,58,55,123,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10,62,185,100,93,55,124,100,190,138,18,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1761293016190'] = function(block) {
  let code = "base_action.action('抱2')\n";
  return code;
}

Blockly.Blocks['1761293422211'] = {
  init: function() {
    this.jsonInit({
      "type": "1761293422211",
      "message0": "放",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1761293422211'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- RIGEND\nMOTOsetspeed(60)\nMOTOmove19(75,15,170,100,90,55,127,100,125,185,35,100,110,145,73,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,100,91,150,42,102,125,185,35,100,107,51,158,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(75,20,180,55,138,140,55,60,125,180,20,145,62,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(74,52,180,55,158,140,55,60,124,152,19,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(74,52,180,56,138,150,54,60,124,152,19,146,59,50,147,140,0,0,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(20)\nMOTOmove19(80,33,130,101,107,149,43,100,120,165,66,101,92,51,157,100,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1761293422211'] = function(block) {
  let code = "base_action.action('放')\n";
  return code;
}

Blockly.Blocks['1761981189871'] = {
  init: function() {
    this.jsonInit({
      "type": "1761981189871",
      "message0": "高台反手放块",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1761981189871'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(110, 139, 10, 100, 93, 55, 124, 100, 110, 52, 190, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(110, 139, 10, 100, 93, 145, 38, 100, 110, 52, 190, 100, 106, 55, 162, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(20)\nMOTOsetspeed(20)\nMOTOmove19(110, 139, 10, 57, 150, 150, 48, 60, 110, 52, 190, 153, 48, 50, 151, 140, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(110, 139, 10, 57, 150, 150, 48, 60, 110, 52, 190, 153, 48, 50, 151, 140, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(150, 154, 10, 57, 150, 150, 48, 60, 60, 36, 190, 153, 48, 50, 151, 140, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(150, 153, 107, 57, 150, 150, 48, 60, 60, 36, 99, 153, 48, 50, 151, 140, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(150, 153, 107, 63, 119, 150, 49, 64, 60, 36, 99, 139, 55, 50, 127, 136, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(150, 153, 107, 98, 99, 146, 38, 98, 60, 36, 99, 102, 98, 52, 163, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(150, 153, 190, 64, 109, 150, 50, 62, 59, 36, 10, 147, 89, 50, 151, 139, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(87, 153, 190, 64, 109, 150, 50, 62, 108, 36, 10, 147, 89, 50, 151, 139, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(150, 153, 107, 98, 99, 146, 38, 98, 60, 36, 99, 102, 98, 52, 163, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1761981189871'] = function(block) {
  let code = "base_action.action('高台反手放块')\n";
  return code;
}

Blockly.Blocks['1761981205887'] = {
  init: function() {
    this.jsonInit({
      "type": "1761981205887",
      "message0": "翻滚6",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1761981205887'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(50)\nMOTOmove19(172, 153, 98, 104, 103, 145, 45, 98, 30, 45, 100, 108, 92, 50, 160, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(172, 153, 98, 99, 113, 115, 81, 60, 30, 45, 100, 107, 79, 50, 147, 79, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(172, 153, 98, 73, 115, 125, 71, 83, 30, 45, 100, 143, 81, 50, 147, 77, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(172, 153, 98, 20, 105, 130, 66, 121, 30, 45, 100, 180, 85, 82, 121, 82, 0, 0, 100)\nMOTOwait()\nDelayMs(700)\nMOTOsetspeed(30)\nMOTOmove19(110, 154, 97, 20, 116, 129, 68, 121, 72, 58, 99, 180, 85, 50, 151, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(109, 60, 97, 79, 114, 141, 53, 119, 72, 92, 98, 138, 85, 50, 151, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(109, 60, 97, 89, 113, 146, 52, 90, 72, 92, 98, 93, 84, 64, 134, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1761981205887'] = function(block) {
  let code = "base_action.action('翻滚6')\n";
  return code;
}

Blockly.Blocks['1761981674292'] = {
  init: function() {
    this.jsonInit({
      "type": "1761981674292",
      "message0": "反手放高台",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1761981674292'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(110,139,10,100,93,55,124,100,110,52,190,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(110,139,10,100,93,145,38,100,110,52,190,100,106,55,162,100,0,0,100)\nMOTOwait()\nDelayMs(20)\nMOTOsetspeed(10)\nMOTOmove19(110,139,10,57,150,150,48,60,110,52,190,153,48,50,151,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(150,154,10,57,150,150,48,60,60,36,190,153,48,50,151,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(150,153,107,57,150,150,48,60,60,36,99,153,48,50,151,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(150,153,107,63,119,150,49,64,60,36,99,139,55,50,127,136,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(150,153,107,98,99,146,38,98,60,36,99,102,98,52,163,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(150,153,190,64,109,150,50,62,59,36,10,147,89,50,151,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(87,153,190,64,109,150,50,62,108,36,10,147,89,50,151,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(150,153,107,98,99,146,38,98,60,36,99,102,98,52,163,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1761981674292'] = function(block) {
  let code = "base_action.action('反手放高台')\n";
  return code;
}

Blockly.Blocks['1761988282915'] = {
  init: function() {
    this.jsonInit({
      "type": "1761988282915",
      "message0": "反手抢高台",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1761988282915'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(110,139,10,100,93,55,124,100,110,52,190,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(110,139,10,100,93,145,38,100,110,52,190,100,106,55,162,100,0,0,100)\nMOTOwait()\nDelayMs(20)\nMOTOsetspeed(10)\nMOTOmove19(110,139,10,57,150,150,48,60,110,52,190,153,48,50,151,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(150,154,10,57,150,150,48,60,60,36,190,153,48,50,151,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(150,153,107,57,150,150,48,60,60,36,99,153,48,50,151,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(150,153,107,63,119,150,49,64,60,36,99,139,55,50,127,136,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(150,153,107,98,99,146,38,98,60,36,99,102,98,52,163,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(150,153,190,64,109,150,50,62,59,36,10,147,89,50,151,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(87,153,190,64,109,150,50,62,108,36,10,147,89,50,151,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(150,153,107,98,99,146,38,98,60,36,99,102,98,52,163,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1761988282915'] = function(block) {
  let code = "base_action.action('反手抢高台')\n";
  return code;
}

Blockly.Blocks['1764129745203'] = {
  init: function() {
    this.jsonInit({
      "type": "1764129745203",
      "message0": "2右",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764129745203'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(10,62,185,100,93,55,124,100,190,138,18,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(10,62,185,60,93,55,124,100,190,138,18,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(150)\nMOTOmove19(10,62,185,100,93,55,124,100,190,138,18,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764129745203'] = function(block) {
  let code = "base_action.action('2右')\n";
  return code;
}

Blockly.Blocks['1764129883397'] = {
  init: function() {
    this.jsonInit({
      "type": "1764129883397",
      "message0": "2左",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764129883397'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(10,62,185,100,93,55,124,100,190,138,18,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(10,62,185,100,93,55,124,100,190,138,18,140,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(150)\nMOTOmove19(10,62,185,100,93,55,124,100,190,138,18,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764129883397'] = function(block) {
  let code = "base_action.action('2左')\n";
  return code;
}

Blockly.Blocks['1764130186536'] = {
  init: function() {
    this.jsonInit({
      "type": "1764130186536",
      "message0": "1左",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764130186536'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(14,52,190,100,93,55,124,100,190,152,14,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,100,93,55,124,100,190,152,14,140,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(150)\nMOTOmove19(14,52,190,100,93,55,124,100,190,152,14,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764130186536'] = function(block) {
  let code = "base_action.action('1左')\n";
  return code;
}

Blockly.Blocks['1764130251771'] = {
  init: function() {
    this.jsonInit({
      "type": "1764130251771",
      "message0": "1右",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764130251771'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(14,52,190,100,93,55,124,100,190,152,14,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,60,93,55,124,100,190,152,14,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(150)\nMOTOmove19(14,52,190,100,93,55,124,100,190,152,14,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764130251771'] = function(block) {
  let code = "base_action.action('1右')\n";
  return code;
}

Blockly.Blocks['1764130373478'] = {
  init: function() {
    this.jsonInit({
      "type": "1764130373478",
      "message0": "1左转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764130373478'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,100,91,55,129,100,190,152,14,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(14,52,190,95,71,55,109,95,190,152,14,105,89,145,51,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,100,91,55,129,100,190,152,14,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764130373478'] = function(block) {
  let code = "base_action.action('1左转')\n";
  return code;
}

Blockly.Blocks['1764130496749'] = {
  init: function() {
    this.jsonInit({
      "type": "1764130496749",
      "message0": "1右转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764130496749'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(14,52,190,100,90,55,129,100,190,152,14,100,110,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(12)\nMOTOmove19(14,52,190,95,110,55,149,95,190,152,14,105,130,145,91,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,100,90,55,129,100,190,152,14,100,110,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764130496749'] = function(block) {
  let code = "base_action.action('1右转')\n";
  return code;
}

Blockly.Blocks['1764130613275'] = {
  init: function() {
    this.jsonInit({
      "type": "1764130613275",
      "message0": "02左转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764130613275'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(10,62,185,100,91,55,129,100,190,138,18,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(10,62,185,95,71,55,109,95,190,138,18,105,89,145,51,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(50)\nMOTOmove19(10,62,185,100,91,55,129,100,190,138,18,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764130613275'] = function(block) {
  let code = "base_action.action('02左转')\n";
  return code;
}

Blockly.Blocks['1764130710011'] = {
  init: function() {
    this.jsonInit({
      "type": "1764130710011",
      "message0": "02右转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764130710011'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(10,62,185,100,90,55,129,100,190,138,18,100,110,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(10,62,185,95,110,55,149,95,190,138,18,105,130,145,91,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(50)\nMOTOmove19(10,62,185,100,90,55,129,100,190,138,18,100,110,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764130710011'] = function(block) {
  let code = "base_action.action('02右转')\n";
  return code;
}

Blockly.Blocks['1764229182620'] = {
  init: function() {
    this.jsonInit({
      "type": "1764229182620",
      "message0": "2左1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764229182620'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(15)\nMOTOmove19(10,62,185,100,91,55,129,100,190,138,18,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(10,62,185,95,71,55,109,95,190,138,18,105,89,145,51,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(50)\nMOTOmove19(10,62,185,100,91,55,129,100,190,138,18,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764229182620'] = function(block) {
  let code = "base_action.action('2左1')\n";
  return code;
}

Blockly.Blocks['1764229256481'] = {
  init: function() {
    this.jsonInit({
      "type": "1764229256481",
      "message0": "2右1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764229256481'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(15)\nMOTOmove19(10,62,185,100,90,55,129,100,190,138,18,100,110,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(10,62,185,95,110,55,149,95,190,138,18,105,130,145,91,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(50)\nMOTOmove19(10,62,185,100,90,55,129,100,190,138,18,100,110,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764229256481'] = function(block) {
  let code = "base_action.action('2右1')\n";
  return code;
}

Blockly.Blocks['1764229380975'] = {
  init: function() {
    this.jsonInit({
      "type": "1764229380975",
      "message0": "2右2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764229380975'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(10,56,185,100,90,55,129,100,190,149,17,100,110,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(10,56,185,95,110,55,149,95,190,149,17,105,130,145,91,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(50)\nMOTOmove19(10,56,185,100,90,55,129,100,190,149,17,100,110,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764229380975'] = function(block) {
  let code = "base_action.action('2右2')\n";
  return code;
}

Blockly.Blocks['1764229587527'] = {
  init: function() {
    this.jsonInit({
      "type": "1764229587527",
      "message0": "抱222",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764229587527'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,90,170,55,138,140,55,60,100,110,30,145,62,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75,15,170,55,158,140,55,60,128,183,35,145,42,60,145,140,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,50,138,150,55,60,128,183,35,150,62,50,145,140,0,0,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,70,128,145,75,70,128,183,35,130,72,55,125,130,0,0,100)\nMOTOwait()\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,98,142,145,77,98,128,183,35,102,58,55,123,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10,63,184,100,93,55,124,100,190,147,18,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764229587527'] = function(block) {
  let code = "base_action.action('抱222')\n";
  return code;
}

Blockly.Blocks['1764230029257'] = {
  init: function() {
    this.jsonInit({
      "type": "1764230029257",
      "message0": "抱22222",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764230029257'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,90,170,55,138,140,55,60,100,110,30,145,62,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75,15,170,55,158,140,55,60,128,183,35,145,42,60,145,140,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,50,138,150,55,60,128,183,35,150,62,50,145,140,0,0,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,70,128,145,75,70,128,183,35,130,72,55,125,130,0,0,100)\nMOTOwait()\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,98,142,145,77,98,128,183,35,102,58,55,123,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10,63,183,100,93,55,124,100,190,140,19,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764230029257'] = function(block) {
  let code = "base_action.action('抱22222')\n";
  return code;
}

Blockly.Blocks['1764588689091'] = {
  init: function() {
    this.jsonInit({
      "type": "1764588689091",
      "message0": "抱俩",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764588689091'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,90,170,55,138,140,55,60,100,110,30,145,62,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75,15,170,55,158,140,55,60,128,183,35,145,42,60,145,140,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,50,138,150,55,60,128,183,35,150,62,50,145,140,0,0,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,70,128,145,75,70,128,183,35,130,72,55,125,130,0,0,100)\nMOTOwait()\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,98,142,145,77,98,128,183,35,102,58,55,123,102,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764588689091'] = function(block) {
  let code = "base_action.action('抱俩')\n";
  return code;
}

Blockly.Blocks['1764588941177'] = {
  init: function() {
    this.jsonInit({
      "type": "1764588941177",
      "message0": "op",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764588941177'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10,60,183,100,91,150,42,102,190,145,19,100,107,51,158,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(10,60,183,55,138,140,55,60,190,145,19,145,62,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(74,52,180,55,158,140,55,60,124,152,19,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(74,52,180,56,138,150,54,60,124,152,19,146,59,50,147,140,0,0,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(20)\nMOTOmove19(80,33,130,101,107,149,43,100,120,165,66,101,92,51,157,100,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764588941177'] = function(block) {
  let code = "base_action.action('op')\n";
  return code;
}

Blockly.Blocks['1764589017246'] = {
  init: function() {
    this.jsonInit({
      "type": "1764589017246",
      "message0": "opp",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764589017246'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10,60,183,100,91,150,42,102,190,145,19,100,107,51,158,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(10,60,183,55,138,140,55,60,190,145,19,145,62,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(74,52,180,55,158,140,55,60,124,152,19,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(74,52,180,56,138,150,54,60,124,152,19,146,59,50,147,140,0,0,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(20)\nMOTOmove19(80,33,130,101,107,149,43,100,120,165,66,101,92,51,157,100,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764589017246'] = function(block) {
  let code = "base_action.action('opp')\n";
  return code;
}

Blockly.Blocks['1764589280296'] = {
  init: function() {
    this.jsonInit({
      "type": "1764589280296",
      "message0": "放下2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764589280296'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10,60,183,100,91,150,42,102,190,145,19,100,107,51,158,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(10,60,183,55,138,140,55,60,190,145,19,145,62,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(10,60,183,55,158,140,55,60,190,145,19,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(74,52,180,56,138,150,54,60,124,152,19,146,59,50,147,140,0,0,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(20)\nMOTOmove19(80,33,130,101,107,149,43,100,120,165,66,101,92,51,157,100,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764589280296'] = function(block) {
  let code = "base_action.action('放下2')\n";
  return code;
}

Blockly.Blocks['1764589357642'] = {
  init: function() {
    this.jsonInit({
      "type": "1764589357642",
      "message0": "左22",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764589357642'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,140,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(150)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764589357642'] = function(block) {
  let code = "base_action.action('左22')\n";
  return code;
}

Blockly.Blocks['1764589408976'] = {
  init: function() {
    this.jsonInit({
      "type": "1764589408976",
      "message0": "22右",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764589408976'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(10,60,183,60,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(150)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764589408976'] = function(block) {
  let code = "base_action.action('22右')\n";
  return code;
}

Blockly.Blocks['1764589692593'] = {
  init: function() {
    this.jsonInit({
      "type": "1764589692593",
      "message0": "22前进",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764589692593'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(10,60,183,90,91,48,134,88,190,145,19,94,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(10,60,183,86,123,95,115,90,190,145,19,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(10,60,183,86,121,37,161,88,190,145,19,94,109,146,72,89,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(8)\nMOTOmove19(10,60,183,107,98,56,129,111,190,145,19,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(10,60,183,106,93,54,128,113,190,145,19,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(10,60,183,106,91,54,128,111,190,145,19,114,89,163,39,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(10,60,183,88,69,45,112,90,190,145,19,93,102,144,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(10,60,183,86,123,95,115,90,190,145,19,94,107,146,72,87,0,0,100)\nMOTOwait()\nDelayMs(150)\nMOTOsetspeed(30)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764589692593'] = function(block) {
  let code = "base_action.action('22前进')\n";
  return code;
}

Blockly.Blocks['1764590049118'] = {
  init: function() {
    this.jsonInit({
      "type": "1764590049118",
      "message0": "222前进",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764590049118'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(10,60,183,90,91,48,134,88,190,145,19,94,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(10,60,183,86,123,95,115,90,190,145,19,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(10,60,183,86,121,37,161,88,190,145,19,94,109,146,72,89,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(8)\nMOTOmove19(10,60,183,107,98,56,129,111,190,145,19,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(10,60,183,106,93,54,128,113,190,145,19,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(10,60,183,106,91,54,128,111,190,145,19,114,89,163,39,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(10,60,183,88,69,45,112,90,190,145,19,93,102,144,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764590049118'] = function(block) {
  let code = "base_action.action('222前进')\n";
  return code;
}

Blockly.Blocks['1764590179196'] = {
  init: function() {
    this.jsonInit({
      "type": "1764590179196",
      "message0": "后退2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764590179196'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(150)\nMOTOmove19(10,60,183,100,93,55,124,98,190,145,19,100,107,145,76,102,0,0,100)\nMOTOwait()\nMOTOrigid16(10,60,183,85,50,50,50,85,190,145,19,85,50,50,50,85)\n\n\n-- 右抬腿\nMOTOsetspeed(10)\nMOTOmove19(10,60,183,105,93,55,124,108,190,145,19,111,102,136,78,112,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(10,60,183,105,93,55,124,107,190,145,19,108,125,145,94,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(10,60,183,92,116,55,144,85,190,145,19,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10,60,183,92,75,55,106,95,190,145,19,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(10,60,183,105,93,55,124,107,190,145,19,108,84,141,56,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(10,60,183,105,92,55,124,107,190,145,19,111,107,136,78,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(10,60,183,100,93,55,124,98,190,145,19,100,107,145,76,102,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764590179196'] = function(block) {
  let code = "base_action.action('后退2')\n";
  return code;
}

Blockly.Blocks['1764590354827'] = {
  init: function() {
    this.jsonInit({
      "type": "1764590354827",
      "message0": "22左转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764590354827'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(15)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(10,62,185,95,71,55,109,95,190,138,18,105,89,145,51,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764590354827'] = function(block) {
  let code = "base_action.action('22左转')\n";
  return code;
}

Blockly.Blocks['1764590682087'] = {
  init: function() {
    this.jsonInit({
      "type": "1764590682087",
      "message0": "22右转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764590682087'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(10,60,183,95,110,55,149,95,190,145,19,105,130,145,91,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764590682087'] = function(block) {
  let code = "base_action.action('22右转')\n";
  return code;
}

Blockly.Blocks['1764591623110'] = {
  init: function() {
    this.jsonInit({
      "type": "1764591623110",
      "message0": "2左转2222",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764591623110'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(10)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(10,62,185,95,71,55,109,95,190,138,18,105,89,145,51,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(15)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764591623110'] = function(block) {
  let code = "base_action.action('2左转2222')\n";
  return code;
}

Blockly.Blocks['1764591674979'] = {
  init: function() {
    this.jsonInit({
      "type": "1764591674979",
      "message0": "2右转2222",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764591674979'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(10)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(10,60,183,95,110,55,149,95,190,145,19,105,130,145,91,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(15)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764591674979'] = function(block) {
  let code = "base_action.action('2右转2222')\n";
  return code;
}

Blockly.Blocks['1764591838126'] = {
  init: function() {
    this.jsonInit({
      "type": "1764591838126",
      "message0": "左转抱2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764591838126'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(13)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(13)\nMOTOmove19(10,62,185,95,71,55,109,95,190,138,18,105,89,145,51,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764591838126'] = function(block) {
  let code = "base_action.action('左转抱2')\n";
  return code;
}

Blockly.Blocks['1764591891286'] = {
  init: function() {
    this.jsonInit({
      "type": "1764591891286",
      "message0": "右转抱2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764591891286'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(13)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(13)\nMOTOmove19(10,60,183,95,110,55,149,95,190,145,19,105,130,145,91,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764591891286'] = function(block) {
  let code = "base_action.action('右转抱2')\n";
  return code;
}

Blockly.Blocks['1764592315443'] = {
  init: function() {
    this.jsonInit({
      "type": "1764592315443",
      "message0": "抱块左转2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764592315443'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(13)\nMOTOmove19(10,62,185,95,71,55,109,95,190,138,18,105,89,145,51,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764592315443'] = function(block) {
  let code = "base_action.action('抱块左转2')\n";
  return code;
}

Blockly.Blocks['1764592340001'] = {
  init: function() {
    this.jsonInit({
      "type": "1764592340001",
      "message0": "抱块右转2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764592340001'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(13)\nMOTOmove19(10,60,183,95,110,55,149,95,190,145,19,105,130,145,91,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764592340001'] = function(block) {
  let code = "base_action.action('抱块右转2')\n";
  return code;
}

Blockly.Blocks['1764763578261'] = {
  init: function() {
    this.jsonInit({
      "type": "1764763578261",
      "message0": "BAO2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764763578261'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100,90,170,55,138,140,55,60,100,110,30,145,62,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75,15,170,55,158,140,55,60,128,183,35,145,42,60,145,140,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,50,138,150,55,60,128,183,35,150,62,50,145,140,0,0,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,70,128,145,75,70,128,183,35,130,72,55,125,130,0,0,100)\nMOTOwait()\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,98,142,145,77,98,128,183,35,102,58,55,123,102,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1764763578261'] = function(block) {
  let code = "base_action.action('BAO2')\n";
  return code;
}

Blockly.Blocks['1764763659072'] = {
  init: function() {
    this.jsonInit({
      "type": "1764763659072",
      "message0": "FABNG2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764763659072'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,100,91,150,42,102,125,185,35,100,107,51,158,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(75,20,180,55,138,140,55,60,125,180,20,145,62,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(74,52,180,55,158,140,55,60,124,152,19,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(74,52,180,56,138,150,54,60,124,152,19,146,59,50,147,140,0,0,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(20)\nMOTOmove19(80,33,130,101,107,149,43,100,120,165,66,101,92,51,157,100,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764763659072'] = function(block) {
  let code = "base_action.action('FABNG2')\n";
  return code;
}

Blockly.Blocks['1764763746914'] = {
  init: function() {
    this.jsonInit({
      "type": "1764763746914",
      "message0": "ZUO2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764763746914'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(60)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,140,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1764763746914'] = function(block) {
  let code = "base_action.action('ZUO2')\n";
  return code;
}

Blockly.Blocks['1764763794647'] = {
  init: function() {
    this.jsonInit({
      "type": "1764763794647",
      "message0": "YOU2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764763794647'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(75,15,170,60,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764763794647'] = function(block) {
  let code = "base_action.action('YOU2')\n";
  return code;
}

Blockly.Blocks['1764763861973'] = {
  init: function() {
    this.jsonInit({
      "type": "1764763861973",
      "message0": "QIANJIN2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764763861973'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(75,15,170,90,91,48,134,88,128,183,35,94,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(75,15,170,86,123,95,115,90,128,183,35,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(75,15,170,86,121,37,161,88,128,183,35,94,109,146,72,89,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(8)\nMOTOmove19(75,15,170,107,98,56,129,111,128,183,35,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(75,15,170,106,93,54,128,113,128,183,35,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(75,15,170,106,91,54,128,111,128,183,35,114,89,163,39,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(75,15,170,88,69,45,112,90,128,183,35,93,102,144,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764763861973'] = function(block) {
  let code = "base_action.action('QIANJIN2')\n";
  return code;
}

Blockly.Blocks['1764763957252'] = {
  init: function() {
    this.jsonInit({
      "type": "1764763957252",
      "message0": "HOUTUI2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764763957252'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,100,93,55,124,98,128,183,35,100,107,145,76,102,0,0,100)\nMOTOwait()\nMOTOrigid16(75,15,170,85,50,50,50,85,128,183,35,85,50,50,50,85)\n\n\n-- 右抬腿\nMOTOsetspeed(10)\nMOTOmove19(75,15,170,105,93,55,124,108,128,183,35,111,102,136,78,112,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,105,93,55,124,107,128,183,35,108,125,145,94,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75,15,170,92,116,55,144,85,128,183,35,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,92,75,55,106,95,128,183,35,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75,15,170,105,93,55,124,107,128,183,35,108,84,141,56,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75,15,170,105,92,55,124,107,128,183,35,111,107,136,78,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(75,15,170,100,93,55,124,98,128,183,35,100,107,145,76,102,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764763957252'] = function(block) {
  let code = "base_action.action('HOUTUI2')\n";
  return code;
}

Blockly.Blocks['1764764017207'] = {
  init: function() {
    this.jsonInit({
      "type": "1764764017207",
      "message0": "ZUOZHUAN2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764764017207'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(13)\nMOTOmove19(75,15,170,95,71,55,109,95,128,183,35,105,89,145,51,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1764764017207'] = function(block) {
  let code = "base_action.action('ZUOZHUAN2')\n";
  return code;
}

Blockly.Blocks['1764764133846'] = {
  init: function() {
    this.jsonInit({
      "type": "1764764133846",
      "message0": "YOUZHUAN2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764764133846'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(13)\nMOTOmove19(75,15,170,95,110,55,149,95,128,183,35,105,130,145,91,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764764133846'] = function(block) {
  let code = "base_action.action('YOUZHUAN2')\n";
  return code;
}

Blockly.Blocks['1764764534160'] = {
  init: function() {
    this.jsonInit({
      "type": "1764764534160",
      "message0": "ZUO1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764764534160'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(62,15,170,100,93,55,124,100,138,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(60)\nMOTOmove19(62,15,170,100,93,55,124,100,138,183,35,140,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(150)\nMOTOmove19(62,15,170,100,93,55,124,100,138,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1764764534160'] = function(block) {
  let code = "base_action.action('ZUO1')\n";
  return code;
}

Blockly.Blocks['1764764659639'] = {
  init: function() {
    this.jsonInit({
      "type": "1764764659639",
      "message0": "YOU1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764764659639'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(62,15,170,100,93,55,124,100,138,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(62,15,170,60,93,55,124,100,138,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(150)\nMOTOmove19(62,15,170,100,93,55,124,100,138,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764764659639'] = function(block) {
  let code = "base_action.action('YOU1')\n";
  return code;
}

Blockly.Blocks['1764764906374'] = {
  init: function() {
    this.jsonInit({
      "type": "1764764906374",
      "message0": "QIANJIN1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764764906374'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(150)\nMOTOmove19(62,15,170,100,93,55,124,100,138,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(5)\nMOTOmove19(62,15,170,90,91,48,134,88,138,183,35,94,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(62,15,170,86,123,95,115,90,138,183,35,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(62,15,170,86,121,37,161,88,138,183,35,94,109,146,72,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(62,15,170,107,98,56,129,111,138,183,35,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(62,15,170,106,93,54,128,113,138,183,35,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(62,15,170,106,91,54,128,111,138,183,35,114,89,163,39,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(62,15,170,88,69,45,112,90,138,183,35,93,102,144,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(62,15,170,86,123,95,115,90,138,183,35,94,107,146,72,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(62,15,170,86,123,75,129,100,138,183,35,94,107,146,72,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(150)\nMOTOmove19(62,15,170,100,93,55,124,100,138,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1764764906374'] = function(block) {
  let code = "base_action.action('QIANJIN1')\n";
  return code;
}

Blockly.Blocks['1764765134340'] = {
  init: function() {
    this.jsonInit({
      "type": "1764765134340",
      "message0": "HOUTUI1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764765134340'] = function(block) {
  let code = "MOTOrigid16(62,15,170,65,100,100,100,65,100,100,35,65,100,100,100,65)\nMOTOsetspeed(35)\nMOTOmove19(62,15,170,100,93,55,124,98,138,183,35,100,107,145,76,102,0,0,100)\nMOTOwait()\nMOTOrigid16(62,15,170,85,50,50,50,85,138,183,35,85,50,50,50,85)\nMOTOrigid16(62,15,170,85,60,60,60,75,138,183,35,85,60,60,60,75)\n\n\n-- 右抬腿\nMOTOsetspeed(10)\nMOTOmove19(62,15,170,105,93,55,124,108,138,183,35,111,102,136,78,112,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(62,15,170,105,93,55,124,107,138,183,35,108,125,145,94,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(62,15,170,92,116,55,144,85,138,183,35,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(62,15,170,92,75,55,106,95,138,183,35,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(62,15,170,105,93,55,124,107,138,183,35,108,84,141,56,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(62,15,170,105,92,55,124,107,138,183,35,111,107,136,78,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(62,15,170,100,93,55,124,98,138,183,35,100,107,145,76,102,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764765134340'] = function(block) {
  let code = "base_action.action('HOUTUI1')\n";
  return code;
}

Blockly.Blocks['1764765208461'] = {
  init: function() {
    this.jsonInit({
      "type": "1764765208461",
      "message0": "ZUOZHUAN1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764765208461'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,138,183,30,65,65,65,65,65)\nMOTOsetspeed(20)\nMOTOmove19(62,15,170,100,91,55,129,100,138,183,35,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(62,15,170,95,71,55,109,95,138,183,35,105,89,145,51,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(62,15,170,100,91,55,129,100,138,183,35,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764765208461'] = function(block) {
  let code = "base_action.action('ZUOZHUAN1')\n";
  return code;
}

Blockly.Blocks['1764765277365'] = {
  init: function() {
    this.jsonInit({
      "type": "1764765277365",
      "message0": "YOUZHUAN1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764765277365'] = function(block) {
  let code = "MOTOrigid16(30,30,170,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(62,15,170,100,90,55,129,100,138,183,35,100,110,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(12)\nMOTOmove19(62,15,170,95,110,55,149,95,138,183,35,105,130,145,91,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(62,15,170,100,90,55,129,100,138,183,35,100,110,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764765277365'] = function(block) {
  let code = "base_action.action('YOUZHUAN1')\n";
  return code;
}

Blockly.Blocks['1764765789429'] = {
  init: function() {
    this.jsonInit({
      "type": "1764765789429",
      "message0": "ZUO222",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764765789429'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(60)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,140,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1764765789429'] = function(block) {
  let code = "base_action.action('ZUO222')\n";
  return code;
}

Blockly.Blocks['1764765818968'] = {
  init: function() {
    this.jsonInit({
      "type": "1764765818968",
      "message0": "YOU222",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764765818968'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(75,15,170,60,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764765818968'] = function(block) {
  let code = "base_action.action('YOU222')\n";
  return code;
}

Blockly.Blocks['1764765977228'] = {
  init: function() {
    this.jsonInit({
      "type": "1764765977228",
      "message0": "ZUO22",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764765977228'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(60)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,140,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(150)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1764765977228'] = function(block) {
  let code = "base_action.action('ZUO22')\n";
  return code;
}

Blockly.Blocks['1764765996466'] = {
  init: function() {
    this.jsonInit({
      "type": "1764765996466",
      "message0": "YOU22",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764765996466'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(75,15,170,60,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(150)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764765996466'] = function(block) {
  let code = "base_action.action('YOU22')\n";
  return code;
}

Blockly.Blocks['1764835924758'] = {
  init: function() {
    this.jsonInit({
      "type": "1764835924758",
      "message0": "FAN",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764835924758'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(110,139,10,100,93,55,124,100,110,52,190,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(109,139,10,78,93,55,124,80,110,52,190,125,107,145,76,125,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(110,139,10,57,150,150,48,60,110,52,190,153,48,50,151,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(150,154,10,57,150,150,48,60,60,36,190,153,48,50,151,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(150,153,190,64,109,150,50,62,59,36,10,147,89,50,151,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(87,153,190,64,109,150,50,62,108,36,10,147,89,50,151,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(150,153,107,98,99,146,38,98,60,36,99,102,98,52,163,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764835924758'] = function(block) {
  let code = "base_action.action('FAN')\n";
  return code;
}

