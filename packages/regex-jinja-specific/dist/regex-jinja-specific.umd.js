/**
 * regex-jinja-specific
 * Regular expression for detecting Python-specific Jinja code
 * Version: 1.0.1
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/regex-jinja-specific/
 */

!function(e,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports):"function"==typeof define&&define.amd?define(["exports"],i):i((e="undefined"!=typeof globalThis?globalThis:e||self).regexJinjaSpecific={})}(this,(function(e){"use strict";e.isJinjaSpecific=function(){return/(set\s*[\w]+\s*=\s*namespace\()|({{['"][\w]+['"]\s+if)|(['"]%x?[+0]?[.>^<]?\d+[\w%]['"]\|format\()/gi},e.version="1.0.1",Object.defineProperty(e,"__esModule",{value:!0})}));
