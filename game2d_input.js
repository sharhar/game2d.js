const GAME2D_KEY_SPACE = 32;
const GAME2D_KEY_COMMA = 188;
const GAME2D_KEY_PERIOD = 190;
const GAME2D_KEY_0 = 48;
const GAME2D_KEY_1 = 49;
const GAME2D_KEY_2 = 50;
const GAME2D_KEY_3 = 51;
const GAME2D_KEY_4 = 52;
const GAME2D_KEY_5 = 53;
const GAME2D_KEY_6 = 54;
const GAME2D_KEY_7 = 55;
const GAME2D_KEY_8 = 56;
const GAME2D_KEY_9 = 57;
const GAME2D_KEY_A = 65;
const GAME2D_KEY_B = 66;
const GAME2D_KEY_C = 67;
const GAME2D_KEY_D = 68;
const GAME2D_KEY_E = 69;
const GAME2D_KEY_F = 70;
const GAME2D_KEY_G = 71;
const GAME2D_KEY_H = 72;
const GAME2D_KEY_I = 73;
const GAME2D_KEY_J = 74;
const GAME2D_KEY_K = 75;
const GAME2D_KEY_L = 76;
const GAME2D_KEY_M = 77;
const GAME2D_KEY_N = 78;
const GAME2D_KEY_O = 79;
const GAME2D_KEY_P = 80;
const GAME2D_KEY_Q = 81;
const GAME2D_KEY_R = 82;
const GAME2D_KEY_S = 83;
const GAME2D_KEY_T = 84;
const GAME2D_KEY_U = 85;
const GAME2D_KEY_V = 86;
const GAME2D_KEY_W = 87;
const GAME2D_KEY_X = 88;
const GAME2D_KEY_Y = 89;
const GAME2D_KEY_Z = 90;

const GAME2D_KEY_LEFT_BRACKET = 219; /* [ */
const GAME2D_KEY_BACKSLASH = 220; /* \ */
const GAME2D_KEY_RIGHT_BRACKET = 221; /* ] */
const GAME2D_KEY_GRAVE_ACCENT = 192; /* ` */
const GAME2D_KEY_ESCAPE = 27;
const GAME2D_KEY_ENTER = 13;
const GAME2D_KEY_TAB = 9;
const GAME2D_KEY_BACKSPACE = 8;
const GAME2D_KEY_INSERT = 45;
const GAME2D_KEY_DELETE = 46;
const GAME2D_KEY_RIGHT = 39;
const GAME2D_KEY_LEFT = 37;
const GAME2D_KEY_DOWN = 40;
const GAME2D_KEY_UP = 38;
const GAME2D_KEY_PAGE_UP = 33;
const GAME2D_KEY_PAGE_DOWN = 34;
const GAME2D_KEY_HOME = 36;
const GAME2D_KEY_END = 35;
const GAME2D_KEY_CAPS_LOCK = 20;
const GAME2D_KEY_NUM_LOCK = 12;
const GAME2D_KEY_PRINT_SCREEN = 44;

const GAME2D_KEY_F1 = 112;
const GAME2D_KEY_F2 = 113;
const GAME2D_KEY_F3 = 114;
const GAME2D_KEY_F4 = 115;
const GAME2D_KEY_F5 = 116;
const GAME2D_KEY_F6 = 117;
const GAME2D_KEY_F7 = 118;
const GAME2D_KEY_F8 = 119;
const GAME2D_KEY_F9 = 120;
const GAME2D_KEY_F10 = 121;
const GAME2D_KEY_F11 = 122;
const GAME2D_KEY_F12 = 123;
const GAME2D_KEY_F13 = 124;
const GAME2D_KEY_F14 = 125;
const GAME2D_KEY_F15 = 126;
const GAME2D_KEY_F16 = 127;
const GAME2D_KEY_F17 = 128;
const GAME2D_KEY_F18 = 129;
const GAME2D_KEY_F19 = 130;
const GAME2D_KEY_F20 = 131;
const GAME2D_KEY_F21 = 132;
const GAME2D_KEY_F22 = 133;
const GAME2D_KEY_F23 = 134;
const GAME2D_KEY_F24 = 135;
const GAME2D_KEY_F25 = 136;
const GAME2D_KEY_KP_0 = 96;
const GAME2D_KEY_KP_1 = 97;
const GAME2D_KEY_KP_2 = 98;
const GAME2D_KEY_KP_3 = 99;
const GAME2D_KEY_KP_4 = 100;
const GAME2D_KEY_KP_5 = 101;
const GAME2D_KEY_KP_6 = 102;
const GAME2D_KEY_KP_7 = 103;
const GAME2D_KEY_KP_8 = 104;
const GAME2D_KEY_KP_9 = 105;

const GAME2D_KEY_KP_DECIMAL = 110;
const GAME2D_KEY_KP_DIVIDE = 111;
const GAME2D_KEY_KP_MULTIPLY = 106;
const GAME2D_KEY_KP_SUBTRACT = 109;
const GAME2D_KEY_KP_ADD = 107;
const GAME2D_KEY_KP_ENTER = 13;

const GAME2D_KEY_SHIFT = 16;
const GAME2D_KEY_CONTROL = 17;
const GAME2D_KEY_ALT = 18;

const IS_FIREFOX = navigator.userAgent.indexOf("Firefox") > 0;

const GAME2D_KEY_MINUS = IS_FIREFOX ? 173 : 189;
const GAME2D_KEY_SEMICOLON = IS_FIREFOX ? 59 : 186;
const GAME2D_KEY_EQUAL = IS_FIREFOX ? 61 : 187;

var ____keyStates = [];

const GAME2D_KEY_PRESS = 1;
const GAME2D_KEY_RELEASE = 2;

function initKeyInput(keyFunction) {
	for(var i = 0; i < 300; i++) {
		____keyStates.push(false);
	}

	document.addEventListener('keydown', function(event) {
		if(!____keyStates[event.keyCode]) {
			keyFunction(event.keyCode, GAME2D_KEY_PRESS);
		}
		____keyStates[event.keyCode] = true;
	});

	document.addEventListener('keyup', function(event) {
		if(____keyStates[event.keyCode]) {
			keyFunction(event.keyCode, GAME2D_KEY_RELEASE);
		}
		____keyStates[event.keyCode] = false;
	});
}