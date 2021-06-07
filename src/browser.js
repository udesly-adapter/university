import { Notyf } from "notyf"
import "notyf/notyf.min.css"

const notyf = new Notyf()

window.notyf = notyf

var ULZSS = {}
ULZSS.Window = function (input) {
  this.buffer = input
  this.offset = -ULZSS.N
  this.current = 0
  this.size = this.buffer.length
  this.hash = {}
}
ULZSS.MAX_LEN = 17
ULZSS.MIN_LEN = 1
ULZSS.MIN_BYTE = 2
ULZSS.N = 4096
ULZSS.NN = 4096 - 0x20
ULZSS.M = 2 * ULZSS.N

ULZSS.Window.prototype = {
  next: function () {
    if (this.current == this.size) {
      return false
    }
    if (this.search()) {
      for (var i = 0; i < this.match_len; i++) {
        this.insert_hash()
        this.current++
      }
      this.flag = true
    } else {
      this.flag = false
      this.insert_hash()
      this.current++
    }
    if (this.current > this.offset + ULZSS.N) {
      this.update()
    }
    return true
  },
  search: function () {
    var key = this.buffer.charCodeAt(this.current)
    this.match_len = this.match_pos = 0
    var d
    if ((d = this.hash[key])) {
      for (var i = 0; i < d.length; i++) {
        var pos = d[i]
        var real_pos = this.offset + pos
        if (this.current - real_pos >= ULZSS.NN) {
          continue
        }
        var j = 0
        var b = 0
        while (
          this.buffer.charCodeAt(real_pos + j) ==
            this.buffer.charCodeAt(this.current + j) &&
          j < ULZSS.MAX_LEN
        ) {
          b += ULZSS.charSize(this.buffer.charCodeAt(real_pos + j))
          j++
        }
        if (j > ULZSS.MIN_LEN && b > ULZSS.MIN_BYTE && j > this.match_len) {
          this.match_len = j
          this.match_pos = this.current - real_pos
        }
        //alert([j, b, this.match_len]);
      }
      if (this.match_len != 0) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  },
  insert_hash: function () {
    var code = this.buffer.charCodeAt(this.current)
    if (!this.hash[code]) {
      this.hash[code] = []
    }
    this.hash[code].push(this.current - this.offset)
  },
  update: function () {
    var new_hash = {}
    for (var key in this.hash) {
      var d = this.hash[key]
      var c = false
      for (var i = 0; i < d.length; i++) {
        if (d[i] > ULZSS.N) {
          if (!c) {
            new_hash[key] = []
            c = true
          }
          new_hash[key].push(d[i] - ULZSS.N)
        }
      }
    }
    this.offset += ULZSS.N
    this.hash = new_hash
  },
  previous_char: function () {
    return this.buffer.charAt(this.current - 1)
  },
}

ULZSS.encode = function (input) {
  var window = new ULZSS.Window(input)
  var body = ""
  var buffer = ""
  var flag = 0
  var mask = 1
  while (window.next()) {
    if (window.flag) {
      flag |= mask
      var code =
        window.match_pos + (window.match_len - ULZSS.MIN_LEN - 1) * 4096
      buffer += String.fromCharCode(code + 0x20)
    } else {
      buffer += window.previous_char()
    }
    mask <<= 1
    if (mask == 0x40) {
      mask = 1
      var s = flag + 0x20
      body += String.fromCharCode(s)
      body += buffer
      buffer = ""
      flag = 0
    }
  }
  if (mask != 1) {
    s = flag + 0x20
    body += String.fromCharCode(s)
    body += buffer
  }
  return body
}

ULZSS.decode = function (input) {
  var size = input.length
  var i = 1
  var current = 0
  var output = ""
  var mask = 0
  var flag = input.charCodeAt(0) - 0x20
  var count = 0
  while (i < size) {
    if (flag & (1 === 1)) {
      var code = input.charCodeAt(i) - 0x20
      var match_len = Math.floor(code / 4096) + ULZSS.MIN_LEN + 1
      var match_pos = code % 4096
      //alert([match_pos, match_len, code]);
      var j = 0,
        p = current
      var k = 0
      while (k < match_len) {
        output += output.charAt(current - match_pos + k)
        k++
      }
      current += match_len
      i++
    } else {
      output += input.charAt(i)
      i++
      current++
    }
    count++
    if (count === 6 && i < size) {
      flag = input.charCodeAt(i) - 0x20
      i++
      count = 0
    } else {
      flag >>= 1
    }
  }
  return output
}

ULZSS.charSize = function (c) {
  if (c <= 0x7f) {
    return 1
  } else if (c > 0x7ff) {
    return 3
  } else {
    return 2
  }
}

class CustomAttribute extends HTMLElement {
  copyToClipboard(str) {
    const el = document.createElement("textarea")
    el.value = str
    document.body.appendChild(el)
    el.select()
    document.execCommand("copy")
    document.body.removeChild(el)
    notyf.success(`Copied "${str}" to clipboard`)
  }

  constructor() {
    // Always call super first in constructor
    super()

    // Create a shadow root
    const shadow = this.attachShadow({ mode: "open" })

    // Create spans

    // Insert icon
    let type = this.hasAttribute("dynamic") ? "dynamic" : "static"

    let name = this.getAttribute("name")
    let value = this.getAttribute("value")

    // Create some CSS to apply to the shadow dom
    const style = document.createElement("style")

    const nameCode = document.createElement("code")
    nameCode.classList.add("attribute", "name")
    nameCode.textContent = name
    nameCode.addEventListener("click", () => {
      this.copyToClipboard(name)
    })

    const valueCode = document.createElement("code")
    valueCode.classList.add("attribute", "value", type)
    valueCode.textContent = value
    valueCode.addEventListener("click", e => {
      if (type === "static") {
        this.copyToClipboard(value)
      } else {
        notyf.error("Dynamic values cannot be copied!")
      }
    })

    const div = document.createElement("div")
    div.classList = "flex-center"

    div.append(nameCode, valueCode)

    style.textContent = `
      div.flex-center {
          display: flex;
          align-items: center;
          justify-content: center;
      }
      code.attribute {
        padding: .25rem;
        margin: .25rem;
        color: #3c3c3b;
        color: var(--color-ui-typo);
        background-color: #edf2f7;
        font-family: Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;
        border-bottom-width: 1px;
        border-right-width: 1px;
        border-color: #e2e8f0;
        font-size: .875rem;
        border-radius: .25rem;
        cursor: pointer;
    }
    code.attribute.value {
        background-color: rgba(0,221,151,.23);
    }

    code.attribute.value.dynamic {
        background-color: rgba(248,162,57,.15);
        cursor: not-allowed;
    }
      `

    // Attach the created elements to the shadow dom
    shadow.appendChild(style)
    shadow.appendChild(div)
  }
}

class CopyElement extends HTMLElement {
  triggerCopy() {
    document.execCommand("copy")
  }

  handleCopy(e) {
    try {
      e.clipboardData.setData("application/json", this.value)
      e.preventDefault()
      notyf.success(`${this.name} copied! Paste it inside Webflow!`)
    } catch (e) {
      notyf.error("Failed to copy Element :(")
    }
  }

  b64DecodeUnicode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(
      atob(str)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)
        })
        .join("")
    )
  }

  decode(str) {
    return ULZSS.decode(this.b64DecodeUnicode(str))
  }

  constructor() {
    // Always call super first in constructor
    super()

    // Create a shadow root
    const shadow = this.attachShadow({ mode: "open" })

    this.name = this.getAttribute("name")
    this.value = this.decode(this.textContent.trim())

    console.log(this.value)

    // Create some CSS to apply to the shadow dom
    const style = document.createElement("style")

    const div = document.createElement("div")
    div.classList = "copy-button"

    const p = document.createElement("p")

    p.textContent = `Copy element: ${this.name}`

    p.addEventListener("copy", e => {
      this.handleCopy(e)
    })

    p.addEventListener("click", () => {})

    div.addEventListener("click", () => {
      this.triggerCopy()
    })

    const span = document.createElement("span")
    span.classList.add("material-icons-outlined")
    span.textContent = "content_copy"
    div.append(p)
    div.append(span)

    style.textContent = `
        div.copy-button {
            cursor: pointer;
            color: rgb(36, 42, 49);
            border: 1px solid rgb(230, 236, 241);
            margin: auto;
            display: flex;
            padding: 10px 30px;
            position: relative;
            box-shadow: rgba(116, 129, 141, 0.1) 0px 3px 8px 0px;
            align-items: center;
            border-radius: 3px;
            flex-direction: row;
            text-decoration: none;
            background-color: rgb(255, 255, 255);
            -moz-box-align: center;
            break-inside: avoid;
            text-align: center;
            max-width: max-content;
            justify-content: center;
            transition: border 250ms ease 0s;
            transition: color 250ms ease, border-color 250ms ease;
        }
        div.copy-button:hover {
            color: var(--color-primary);
            border-color: var(--color-primary);
        }
        span {
            margin-left: 8px;
            font-family: "Material Icons Outlined";
        }
        `

    // Attach the created elements to the shadow dom
    shadow.appendChild(style)
    shadow.appendChild(div)
  }
}

// Define the new element
customElements.define("custom-attribute", CustomAttribute)

customElements.define("copy-element", CopyElement)
