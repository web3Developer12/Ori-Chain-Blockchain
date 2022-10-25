const _0x3d7b3a = _0x55db;
(function (_0x16aa2a, _0x4b48d0) {
  const _0x5f3d34 = _0x55db,
    _0x2cfad4 = _0x16aa2a();
  while (!![]) {
    try {
      const _0x13f336 =
        -parseInt(_0x5f3d34(0x1fd)) / 0x1 +
        -parseInt(_0x5f3d34(0x1e4)) / 0x2 +
        -parseInt(_0x5f3d34(0x1db)) / 0x3 +
        parseInt(_0x5f3d34(0x1f4)) / 0x4 +
        (-parseInt(_0x5f3d34(0x1fe)) / 0x5) *
          (-parseInt(_0x5f3d34(0x1c4)) / 0x6) +
        -parseInt(_0x5f3d34(0x1e5)) / 0x7 +
        (-parseInt(_0x5f3d34(0x1d4)) / 0x8) *
          (-parseInt(_0x5f3d34(0x1f8)) / 0x9);
      if (_0x13f336 === _0x4b48d0) break;
      else _0x2cfad4["push"](_0x2cfad4["shift"]());
    } catch (_0x447dd4) {
      _0x2cfad4["push"](_0x2cfad4["shift"]());
    }
  }
})(_0xcbf0, 0x4ebf2);
const crypto = require(_0x3d7b3a(0x1c1)),
  { generateKeyPairSync } = require("crypto");
class Blockchain {
  #difficulty;
  constructor(_0x59784b) {
    const _0x46999a = _0x3d7b3a;
    (this["blocks"] = [_0x59784b]),
      (this["pendingTransactions"] = []),
      (this.#difficulty = 0x1),
      (this[_0x46999a(0x1df)] = 0x64);
  }
  ["chainIsValid"]() {
    const _0x2eac8c = _0x3d7b3a;
    for (
      let _0x31a949 = 0x1;
      _0x31a949 < this[_0x2eac8c(0x1c9)][_0x2eac8c(0x207)];
      _0x31a949++
    ) {
      let _0x25f162 = this[_0x2eac8c(0x1c9)][_0x31a949 - 0x1],
        _0x372fe4 = this[_0x2eac8c(0x1c9)][_0x31a949];
      if (_0x372fe4[_0x2eac8c(0x208)] != _0x25f162["hash"]) return;
    }
    return !![];
  }
  [_0x3d7b3a(0x1f6)](_0x23f499) {
    const _0x397b87 = _0x3d7b3a,
      _0x435a66 = this["getPreviousHash"]();
    if (_0x23f499[_0x397b87(0x208)] != _0x435a66[_0x397b87(0x1cf)]) {
      throw new Error(
        _0x397b87(0x1e8) +
          Date[_0x397b87(0x20a)]() +
          "]\x20cannot\x20add\x20invalid\x20blocks\x20to\x20the\x20blockchain\x0a\x20\x20\x20\x20\x20\x20"
      );
      return;
    }
    this["blocks"]["length"] == 0x0 &&
      ((_0x23f499[_0x397b87(0x208)] = _0x397b87(0x1f3)),
      (_0x23f499[_0x397b87(0x1cf)] = this[_0x397b87(0x1dd)](_0x23f499))),
      this[_0x397b87(0x1c9)]["push"](_0x23f499);
  }
  [_0x3d7b3a(0x201)](_0x471f08) {
    const _0x23bc15 = _0x3d7b3a;
    _0x471f08[_0x23bc15(0x1f5)]((_0x4dbb84) => {
      const _0x48de36 = _0x23bc15;
      this["pendingTransactions"][_0x48de36(0x20c)](_0x4dbb84);
    });
  }
  [_0x3d7b3a(0x1fa)](_0x123e31) {
    const _0xcdf374 = _0x3d7b3a,
      _0x305630 = new Block(),
      _0x284101 = this[_0xcdf374(0x1c0)]();
    (_0x305630["index"] = _0x284101[_0xcdf374(0x1f0)] + 0x1),
      (_0x305630["previousHash"] = _0x284101[_0xcdf374(0x1cf)]),
      this[_0xcdf374(0x203)][_0xcdf374(0x1f5)]((_0x32de88) => {
        const _0x5daebd = _0xcdf374;
        if (_0x32de88["signature"] != undefined)
          _0x305630[_0x5daebd(0x1f7)][_0x5daebd(0x20c)](_0x32de88);
        else {
          console[_0x5daebd(0x1fb)](_0x5daebd(0x202));
          return;
        }
      }),
      _0x305630[_0xcdf374(0x1d7)](this.#difficulty),
      this[_0xcdf374(0x1f6)](_0x305630);
    const _0x3cb571 = new Transaction(
      null,
      _0x123e31[_0xcdf374(0x206)],
      this[_0xcdf374(0x1df)]
    );
    _0x3cb571["signTransaction"](_0x123e31),
      (this[_0xcdf374(0x203)] = [_0x3cb571]),
      console[_0xcdf374(0x1fb)](
        _0xcdf374(0x1d2) + _0x305630[_0xcdf374(0x1f0)] + _0xcdf374(0x1ed)
      );
  }
  [_0x3d7b3a(0x1ef)](_0x3b4bad) {
    const _0x5863b1 = _0x3d7b3a;
    let _0x5e927f = 0x0;
    return (
      this[_0x5863b1(0x1c9)]["forEach"]((_0x43f264) => {
        const _0x3172fa = _0x5863b1;
        _0x43f264[_0x3172fa(0x1f7)][_0x3172fa(0x1f5)]((_0x9093da) => {
          const _0x48506e = _0x3172fa;
          _0x9093da["fromAddress"] == _0x3b4bad &&
            (_0x5e927f -= _0x9093da[_0x48506e(0x1ec)]),
            _0x9093da["toAddress"] == _0x3b4bad &&
              (_0x5e927f += _0x9093da[_0x48506e(0x1ec)]);
        });
      }),
      _0x5e927f
    );
  }
  [_0x3d7b3a(0x1c0)]() {
    const _0x4ab683 = _0x3d7b3a;
    return this[_0x4ab683(0x1c9)][
      this[_0x4ab683(0x1c9)][_0x4ab683(0x207)] - 0x1
    ];
  }
}
class Block {
  constructor() {
    const _0x5ce888 = _0x3d7b3a;
    (this[_0x5ce888(0x204)] = Date["now"]()),
      (this[_0x5ce888(0x1f0)] = 0x0),
      (this[_0x5ce888(0x1c7)] = 0x0),
      (this[_0x5ce888(0x208)] = ""),
      (this[_0x5ce888(0x1cf)] = ""),
      (this[_0x5ce888(0x1f7)] = []);
  }
  [_0x3d7b3a(0x1e9)]() {
    const _0x371e09 = _0x3d7b3a;
    return (
      JSON[_0x371e09(0x1fc)](this[_0x371e09(0x1f7)]) +
      this[_0x371e09(0x1f0)] +
      this["nonce"] +
      this[_0x371e09(0x208)]
    );
  }
  [_0x3d7b3a(0x1f9)](_0x5002df) {
    const _0x4b96f3 = _0x3d7b3a;
    this["transactions"][_0x4b96f3(0x20c)](_0x5002df);
  }
  ["mineBlock"](_0x11a32c) {
    const _0x4e245f = _0x3d7b3a;
    let _0x50b1d1 = crypto[_0x4e245f(0x1c6)](_0x4e245f(0x1cd))
      [_0x4e245f(0x1e0)](this["getKey"]())
      [_0x4e245f(0x1dc)]("hex");
    while (!_0x50b1d1[_0x4e245f(0x1d6)](Array(_0x11a32c)["join"]("0"))) {
      (this[_0x4e245f(0x1c7)] += 0x1),
        (_0x50b1d1 = crypto[_0x4e245f(0x1c6)](_0x4e245f(0x1cd))
          [_0x4e245f(0x1e0)](this[_0x4e245f(0x1e9)]())
          [_0x4e245f(0x1dc)](_0x4e245f(0x20d)));
    }
    this["hash"] = _0x50b1d1;
  }
}
function _0xcbf0() {
  const _0x3565f2 = [
    "blocks",
    "createPublicKey",
    "der",
    "transaction",
    "sha256",
    "verifySignTransaction",
    "hash",
    "pkcs8",
    "nodeIncludes",
    "Block\x20#",
    "end",
    "16ePMrRb",
    "createSign",
    "startsWith",
    "mineBlock",
    "signTransaction",
    "sign",
    "fromAddress",
    "1918515AdidTu",
    "digest",
    "generateHash",
    "toAddress",
    "miningReward",
    "update",
    "_timeStamp",
    "signature",
    "blockchainNode",
    "359036AMaLgG",
    "2471924bKxCZZ",
    "getKeys",
    "secp256k1",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20logs-[Orichain][",
    "getKey",
    "url",
    "generateTransactionHash",
    "amount",
    "\x20successfully\x20mined",
    "toString",
    "balanceOf",
    "index",
    "blockchain",
    "createPrivateKey",
    "000000000000000",
    "2206000mldQoS",
    "forEach",
    "addBlock",
    "transactions",
    "4268295qVrTFI",
    "addTransactionToBlock",
    "minePendingTransactions",
    "log",
    "stringify",
    "98716AuwcBn",
    "467035YFIdvq",
    "from",
    "base64",
    "createTransaction",
    "Cannot\x20add\x20unsigned\x20transaction\x20to\x20the\x20blockchain",
    "pendingTransactions",
    "timeStamp",
    "OrichainWallet",
    "publicKey",
    "length",
    "previousHash",
    "verify",
    "now",
    "SHA256",
    "push",
    "hex",
    "getPreviousHash",
    "crypto",
    "spki",
    "createVerify",
    "6cuVaBH",
    "privateKey",
    "createHash",
    "nonce",
    "]\x20cannot\x20sign\x20the\x20transaction\x0a\x20\x20\x20\x20\x20\x20",
  ];
  _0xcbf0 = function () {
    return _0x3565f2;
  };
  return _0xcbf0();
}
function _0x55db(_0x2928be, _0xf54e22) {
  const _0xcbf0e5 = _0xcbf0();
  return (
    (_0x55db = function (_0x55db6f, _0x192e89) {
      _0x55db6f = _0x55db6f - 0x1c0;
      let _0x444226 = _0xcbf0e5[_0x55db6f];
      return _0x444226;
    }),
    _0x55db(_0x2928be, _0xf54e22)
  );
}
class OrichainWallet {
  constructor() {
    const _0x119cc7 = _0x3d7b3a;
    (this[_0x119cc7(0x206)] = undefined),
      (this[_0x119cc7(0x1c5)] = undefined),
      this[_0x119cc7(0x1e6)]();
  }
  [_0x3d7b3a(0x1e6)]() {
    const _0x2c5356 = _0x3d7b3a,
      { publicKey: _0xebfb4c, privateKey: _0x1b958e } = generateKeyPairSync(
        "ec",
        {
          namedCurve: _0x2c5356(0x1e7),
          publicKeyEncoding: {
            type: _0x2c5356(0x1c2),
            format: _0x2c5356(0x1cb),
          },
          privateKeyEncoding: { type: "pkcs8", format: "der" },
        }
      );
    (this[_0x2c5356(0x206)] = _0xebfb4c[_0x2c5356(0x1ee)](_0x2c5356(0x200))),
      (this[_0x2c5356(0x1c5)] = _0x1b958e["toString"]("base64"));
  }
}
class BlockchainNode {
  constructor(_0x55f394) {
    const _0x4e7b6c = _0x3d7b3a;
    this[_0x4e7b6c(0x1ea)] = _0x55f394;
  }
  [_0x3d7b3a(0x1d1)](_0x434d63, _0x2aaf8e) {
    const _0x4ca304 = _0x3d7b3a;
    return (
      _0x434d63[_0x4ca304(0x1f5)]((_0x4b9220) => {
        const _0x34f80a = _0x4ca304;
        if (_0x4b9220[_0x34f80a(0x1ea)] == _0x2aaf8e["url"]) return;
      }),
      ![]
    );
  }
}
class Transaction {
  constructor(_0x40a661, _0x976e01, _0x52e088) {
    const _0x236f3a = _0x3d7b3a;
    (this[_0x236f3a(0x1da)] = _0x40a661),
      (this[_0x236f3a(0x1de)] = _0x976e01),
      (this[_0x236f3a(0x1ec)] = _0x52e088),
      (this[_0x236f3a(0x1e1)] = Date[_0x236f3a(0x20a)]()),
      (this[_0x236f3a(0x1cf)] = undefined),
      this[_0x236f3a(0x1eb)]();
  }
  ["generateTransactionHash"]() {
    const _0x5a573a = _0x3d7b3a;
    this[_0x5a573a(0x1cf)] = crypto[_0x5a573a(0x1c6)](_0x5a573a(0x1cd))
      [_0x5a573a(0x1e0)](
        this[_0x5a573a(0x1da)] +
          this[_0x5a573a(0x1de)] +
          this[_0x5a573a(0x1ec)] +
          this["_timeStamp"]
      )
      [_0x5a573a(0x1dc)](_0x5a573a(0x20d));
  }
  [_0x3d7b3a(0x1d8)](_0x5e35b9) {
    const _0x54f48c = _0x3d7b3a;
    if (
      _0x5e35b9[_0x54f48c(0x206)] == undefined ||
      _0x5e35b9["privateKey"] == undefined
    ) {
      throw new Error(
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20logs-[Orichain][" +
          Date["now"]() +
          _0x54f48c(0x1c8)
      );
      return;
    }
    let _0x48495d = _0x5e35b9["privateKey"];
    _0x48495d = crypto[_0x54f48c(0x1f2)]({
      key: Buffer[_0x54f48c(0x1ff)](_0x48495d, _0x54f48c(0x200)),
      type: _0x54f48c(0x1d0),
      format: _0x54f48c(0x1cb),
    });
    const _0x56ac39 = crypto[_0x54f48c(0x1d5)](_0x54f48c(0x20b));
    _0x56ac39[_0x54f48c(0x1e0)](this["hash"]),
      _0x56ac39[_0x54f48c(0x1d3)](),
      (this["signature"] = _0x56ac39[_0x54f48c(0x1d9)](_0x48495d)["toString"](
        _0x54f48c(0x200)
      ));
  }
  [_0x3d7b3a(0x1ce)](_0x3e7207) {
    const _0x421fd2 = _0x3d7b3a;
    let _0x476e5b = _0x3e7207["publicKey"];
    _0x476e5b = crypto[_0x421fd2(0x1ca)]({
      key: Buffer[_0x421fd2(0x1ff)](_0x476e5b, "base64"),
      type: _0x421fd2(0x1c2),
      format: _0x421fd2(0x1cb),
    });
    const _0x3d7cdb = crypto[_0x421fd2(0x1c3)]("SHA256");
    _0x3d7cdb[_0x421fd2(0x1e0)](this[_0x421fd2(0x1cf)]),
      _0x3d7cdb[_0x421fd2(0x1d3)]();
    let _0x2a861f = _0x3d7cdb[_0x421fd2(0x209)](
      _0x476e5b,
      Buffer["from"](this[_0x421fd2(0x1e2)], _0x421fd2(0x200))
    );
    return _0x2a861f;
  }
}
(exports[_0x3d7b3a(0x1f1)] = Blockchain),
  (exports[_0x3d7b3a(0x1c9)] = Block),
  (exports[_0x3d7b3a(0x1cc)] = Transaction),
  (exports[_0x3d7b3a(0x1e3)] = BlockchainNode),
  (exports[_0x3d7b3a(0x205)] = OrichainWallet);
