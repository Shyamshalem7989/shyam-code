const _0x5e834e = _0x23eb;
function _0x3131() {
  const _0x85a66d = [
    "<strong>$1</strong>",
    "\x5c$&",
    "4009957geqaXM",
    "shiftKey",
    "removeItem",
    "classList",
    "replace",
    "820nIduHE",
    "username",
    "1234",
    "substr",
    "error",
    "8IptEAh",
    "value",
    "find",
    "reload",
    "loginContainer",
    "then",
    "harsha",
    "<br>",
    "contextmenu",
    "preventDefault",
    "<span\x20data-math-type=\x22asciimath\x22>",
    "getItem",
    "warn",
    "log",
    "activeSession",
    "setItem",
    "add",
    "</span>",
    "replacementRules",
    "keyCode",
    "loggedInUser",
    "169728nFVplC",
    "216fMSBHn",
    "innerText",
    "password2",
    "text/plain",
    "forEach",
    "ctrlKey",
    "record",
    "write",
    "https://api.npoint.io/e9defce24ecf197c6473",
    "processReplacements",
    "</p>",
    "_session",
    "hidden",
    "storage",
    "editor",
    "addEventListener",
    "toString",
    "getElementById",
    "329226Zwubol",
    "<ul><li\x20style=\x22list-style-type:\x20circle;\x22>$1</li></ul>",
    "<p><br></p>",
    "Error\x20fetching\x20JSON:",
    "441153CKCojZ",
    "currentSession",
    "password",
    "charCodeAt",
    "<p>",
    "clipboard",
    "random",
    "3109062UMvXVB",
    "trim",
    "2980295sRJdXI",
    "Invalid\x20credentials!",
    "remove",
    "user2",
    "editorContainer",
    "text/html",
    "onkeydown",
    "innerHTML",
  ];
  _0x3131 = function () {
    return _0x85a66d;
  };
  return _0x3131();
}
(function (_0x548606, _0x2474ac) {
  const _0x1f0fdb = _0x23eb,
    _0x461eef = _0x548606();
  while (!![]) {
    try {
      const _0x365823 =
        -parseInt(_0x1f0fdb(0x172)) / 0x1 +
        parseInt(_0x1f0fdb(0x15f)) / 0x2 +
        (-parseInt(_0x1f0fdb(0x160)) / 0x3) *
          (parseInt(_0x1f0fdb(0x145)) / 0x4) +
        parseInt(_0x1f0fdb(0x17f)) / 0x5 +
        parseInt(_0x1f0fdb(0x17d)) / 0x6 +
        (-parseInt(_0x1f0fdb(0x140)) / 0x7) *
          (parseInt(_0x1f0fdb(0x14a)) / 0x8) +
        parseInt(_0x1f0fdb(0x176)) / 0x9;
      if (_0x365823 === _0x2474ac) break;
      else _0x461eef["push"](_0x461eef["shift"]());
    } catch (_0x2b9fb4) {
      _0x461eef["push"](_0x461eef["shift"]());
    }
  }
})(_0x3131, 0x50e10);
let replacementRules = [];
fetch(_0x5e834e(0x168))
  [_0x5e834e(0x14f)]((_0x117deb) => _0x117deb["json"]())
  [_0x5e834e(0x14f)]((_0x5492c3) => {
    const _0x309821 = _0x5e834e;
    console[_0x309821(0x157)](_0x5492c3[_0x309821(0x166)][_0x309821(0x15c)]),
      (replacementRules = _0x5492c3["record"][_0x309821(0x15c)]);
  })
  ["catch"]((_0x1047b7) =>
    console[_0x5e834e(0x149)](_0x5e834e(0x175), _0x1047b7)
  ),
  (window[_0x5e834e(0x169)] = async function () {
    const _0x3f5e69 = _0x5e834e,
      _0xeb4a62 = document["getElementById"](_0x3f5e69(0x16e));
    let _0x44ae3c = _0xeb4a62["innerText"];
    replacementRules[_0x3f5e69(0x164)]((_0xdd2fbb) => {
      const _0x5abfc4 = _0x3f5e69;
      if (_0xdd2fbb["find"]) {
        const _0x4eff24 = new RegExp(
          _0xdd2fbb[_0x5abfc4(0x14c)][_0x5abfc4(0x144)](
            /[.*+?^${}()|[\]\\]/g,
            _0x5abfc4(0x13f)
          ),
          "g"
        );
        _0x44ae3c = _0x44ae3c[_0x5abfc4(0x144)](
          _0x4eff24,
          _0xdd2fbb[_0x5abfc4(0x144)]
        );
      }
    }),
      (_0x44ae3c = _0x44ae3c[_0x3f5e69(0x144)](
        /\\\[\s*([\s\S]*?)\s*\\\]/g,
        (_0x3be1f0, _0x1cb926) => {
          const _0x5ae198 = _0x3f5e69;
          return "\x5c(" + _0x1cb926[_0x5ae198(0x17e)]() + "\x5c)";
        }
      )),
      (_0x44ae3c = _0x44ae3c["replace"](
        /\\\(\s*([\s\S]*?)\s*\\\)/g,
        (_0x1d513d, _0x4008d6) => {
          const _0xd457e7 = _0x3f5e69;
          return (
            _0xd457e7(0x154) + _0x4008d6[_0xd457e7(0x17e)]() + _0xd457e7(0x15b)
          );
        }
      )),
      (_0x44ae3c = _0x44ae3c[_0x3f5e69(0x144)](
        /\*\*(.*?)\*\*/g,
        _0x3f5e69(0x13e)
      )),
      (_0x44ae3c = _0x44ae3c["replace"](/^[ ]{2,}- (.*)/gm, _0x3f5e69(0x173))),
      (_0x44ae3c = _0x44ae3c[_0x3f5e69(0x144)](
        /^\s*- (.*)/gm,
        "<ul><li\x20style=\x22list-style-type:\x20disc;\x22>$1</li></ul>"
      )),
      (_0x44ae3c = _0x44ae3c["replace"](
        /^###\s*(.*)/gm,
        "<strong>$1</strong>"
      )),
      (_0x44ae3c = _0x44ae3c[_0x3f5e69(0x144)](/\n/g, _0x3f5e69(0x151))),
      console[_0x3f5e69(0x157)](_0x44ae3c),
      (_0xeb4a62["innerHTML"] = _0x44ae3c);
  }),
  (window["copyText"] = async function () {
    const _0x26295f = _0x5e834e,
      _0x571016 = document[_0x26295f(0x171)]("editor");
    try {
      let _0x3dd0e6 = _0x571016[_0x26295f(0x13d)],
        _0xb67b6 = _0x571016[_0x26295f(0x161)],
        _0x6f9fbc = _0x3dd0e6["split"](/<br\s*\/?>/i),
        _0x37b4b9 = _0x6f9fbc["map"]((_0x38276a) => {
          const _0x106d23 = _0x26295f;
          return (
            (_0x38276a = _0x38276a["trim"]()),
            _0x38276a["length"] > 0x0
              ? _0x106d23(0x17a) + _0x38276a + _0x106d23(0x16a)
              : _0x106d23(0x174)
          );
        })["join"]("\x0a");
      const _0x4660de = new ClipboardItem({
        "text/html": new Blob([_0x37b4b9], {
          type: _0x26295f(0x184),
        }),
        "text/plain": new Blob([_0xb67b6], {
          type: _0x26295f(0x163),
        }),
      });
      await navigator[_0x26295f(0x17b)][_0x26295f(0x167)]([_0x4660de]);
    } catch (_0x430546) {
      console[_0x26295f(0x156)](
        "Using\x20fallback\x20copy\x20method:",
        _0x430546
      );
    }
  });
function clearEditor() {
  const _0x20fc1c = _0x5e834e;
  document[_0x20fc1c(0x171)]("editor")["innerHTML"] = "";
}
document[_0x5e834e(0x16f)](_0x5e834e(0x152), (_0x3e5d0d) =>
  _0x3e5d0d[_0x5e834e(0x153)]()
),
  (document[_0x5e834e(0x185)] = function (_0x17f2a4) {
    const _0x3f83cb = _0x5e834e;
    if (_0x17f2a4["keyCode"] == 0x7b) return !0x1;
    if (
      _0x17f2a4[_0x3f83cb(0x165)] &&
      _0x17f2a4["shiftKey"] &&
      _0x17f2a4[_0x3f83cb(0x15d)] == "I"[_0x3f83cb(0x179)](0x0)
    )
      return !0x1;
    if (
      _0x17f2a4[_0x3f83cb(0x165)] &&
      _0x17f2a4[_0x3f83cb(0x141)] &&
      _0x17f2a4["keyCode"] == "C"[_0x3f83cb(0x179)](0x0)
    )
      return !0x1;
    if (
      _0x17f2a4["ctrlKey"] &&
      _0x17f2a4[_0x3f83cb(0x141)] &&
      _0x17f2a4["keyCode"] == "J"[_0x3f83cb(0x179)](0x0)
    )
      return !0x1;
    if (
      _0x17f2a4[_0x3f83cb(0x165)] &&
      _0x17f2a4[_0x3f83cb(0x15d)] == "U"[_0x3f83cb(0x179)](0x0)
    )
      return !0x1;
  });
const USERS = [
    {
      username: "shyamshalem",
      password: "shyamshalem",
    },
  ],
  SESSION_KEY = _0x5e834e(0x158),
  USER_KEY = _0x5e834e(0x15e);
function login() {
  const _0x109f63 = _0x5e834e,
    _0x1edfc3 = document[_0x109f63(0x171)](_0x109f63(0x146))["value"],
    _0x1e579d = document["getElementById"](_0x109f63(0x178))[_0x109f63(0x14b)],
    _0x50109e = USERS[_0x109f63(0x14c)](
      (_0x3cf6f1) =>
        _0x3cf6f1["username"] === _0x1edfc3 &&
        _0x3cf6f1[_0x109f63(0x178)] === _0x1e579d
    );
  if (_0x50109e) {
    const _0x4210fd = generateSessionId(),
      _0x2727b5 = localStorage[_0x109f63(0x155)](
        _0x50109e[_0x109f63(0x146)] + "_session"
      );
    _0x2727b5 && localStorage[_0x109f63(0x142)](_0x2727b5),
      localStorage["setItem"](USER_KEY, _0x50109e[_0x109f63(0x146)]),
      localStorage[_0x109f63(0x159)](SESSION_KEY, _0x4210fd),
      localStorage[_0x109f63(0x159)](
        _0x50109e[_0x109f63(0x146)] + _0x109f63(0x16b),
        _0x4210fd
      ),
      sessionStorage[_0x109f63(0x159)](_0x109f63(0x177), _0x4210fd),
      showEditor(),
      checkSession();
  } else alert(_0x109f63(0x180));
}
function logout() {
  const _0x8812e9 = _0x5e834e,
    _0x45037d = localStorage[_0x8812e9(0x155)](USER_KEY);
  _0x45037d && localStorage["removeItem"](_0x45037d + _0x8812e9(0x16b)),
    localStorage[_0x8812e9(0x142)](USER_KEY),
    localStorage[_0x8812e9(0x142)](SESSION_KEY),
    sessionStorage["removeItem"](_0x8812e9(0x177)),
    location[_0x8812e9(0x14d)]();
}
function showEditor() {
  const _0x191242 = _0x5e834e;
  document[_0x191242(0x171)](_0x191242(0x14e))["classList"][_0x191242(0x15a)](
    _0x191242(0x16c)
  ),
    document[_0x191242(0x171)](_0x191242(0x183))[_0x191242(0x143)][
      _0x191242(0x181)
    ](_0x191242(0x16c));
}
function checkSession() {
  setInterval(() => {
    const _0x4a370f = _0x23eb,
      _0x3566c2 = localStorage[_0x4a370f(0x155)](SESSION_KEY),
      _0x1dbe32 = sessionStorage[_0x4a370f(0x155)](_0x4a370f(0x177));
    (!_0x3566c2 || _0x3566c2 !== _0x1dbe32) && logout();
  }, 0x7d0);
}
window[_0x5e834e(0x16f)](_0x5e834e(0x16d), function (_0x491c30) {
  const _0x4a2bd4 = _0x5e834e;
  if (_0x491c30["key"] === SESSION_KEY) {
    const _0x59a132 = localStorage[_0x4a2bd4(0x155)](SESSION_KEY),
      _0x4b182e = sessionStorage[_0x4a2bd4(0x155)](_0x4a2bd4(0x177));
    (!_0x59a132 || _0x59a132 !== _0x4b182e) && logout();
  }
});
function _0x23eb(_0xa32120, _0x37db44) {
  const _0x31316b = _0x3131();
  return (
    (_0x23eb = function (_0x23eb30, _0x5d64a4) {
      _0x23eb30 = _0x23eb30 - 0x13d;
      let _0x3f910e = _0x31316b[_0x23eb30];
      return _0x3f910e;
    }),
    _0x23eb(_0xa32120, _0x37db44)
  );
}
function generateSessionId() {
  const _0x361b1f = _0x5e834e;
  return Math[_0x361b1f(0x17c)]()
    [_0x361b1f(0x170)](0x24)
    [_0x361b1f(0x148)](0x2, 0xc);
}
(window["onload"] = function () {
  const _0x5dc86e = _0x5e834e,
    _0x425bcd = localStorage[_0x5dc86e(0x155)](SESSION_KEY),
    _0x149958 = sessionStorage[_0x5dc86e(0x155)]("currentSession");
  (!_0x425bcd || _0x425bcd !== _0x149958) &&
    (localStorage[_0x5dc86e(0x142)](USER_KEY),
    localStorage[_0x5dc86e(0x142)](SESSION_KEY),
    sessionStorage[_0x5dc86e(0x142)]("currentSession")),
    document[_0x5dc86e(0x171)](_0x5dc86e(0x14e))[_0x5dc86e(0x143)][
      _0x5dc86e(0x181)
    ](_0x5dc86e(0x16c)),
    document[_0x5dc86e(0x171)](_0x5dc86e(0x183))["classList"][_0x5dc86e(0x15a)](
      _0x5dc86e(0x16c)
    );
}),
  document[_0x5e834e(0x16f)](_0x5e834e(0x152), (_0x34952b) =>
    _0x34952b[_0x5e834e(0x153)]()
  ),
  (document[_0x5e834e(0x185)] = function (_0x7591cc) {
    const _0x530fb6 = _0x5e834e;
    if (_0x7591cc[_0x530fb6(0x15d)] == 0x7b) return !0x1;
    if (
      _0x7591cc[_0x530fb6(0x165)] &&
      _0x7591cc[_0x530fb6(0x141)] &&
      _0x7591cc[_0x530fb6(0x15d)] == "I"[_0x530fb6(0x179)](0x0)
    )
      return !0x1;
    if (
      _0x7591cc[_0x530fb6(0x165)] &&
      _0x7591cc["shiftKey"] &&
      _0x7591cc[_0x530fb6(0x15d)] == "C"[_0x530fb6(0x179)](0x0)
    )
      return !0x1;
    if (
      _0x7591cc[_0x530fb6(0x165)] &&
      _0x7591cc["shiftKey"] &&
      _0x7591cc["keyCode"] == "J"[_0x530fb6(0x179)](0x0)
    )
      return !0x1;
    if (
      _0x7591cc[_0x530fb6(0x165)] &&
      _0x7591cc[_0x530fb6(0x15d)] == "U"[_0x530fb6(0x179)](0x0)
    )
      return !0x1;
  });
