'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$4 = "/* client/src/components/Button/Button.css */\r\n.button {\r\n  padding: 10px 20px;\r\n  border: none;\r\n  background-color: #007bff;\r\n  color: white;\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n}\r\n\r\n.button:hover {\r\n  background-color: #0056b3;\r\n}\r\n";
styleInject(css_248z$4);

// client/src/components/Button/Button.jsx

const Button = _ref => {
  let {
    onClick,
    children
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement("button", {
    className: "button",
    onClick: onClick
  }, children);
};

var css_248z$3 = "/* client/src/components/InputText/InputText.css */\r\n.input-wrapper {\r\n  margin: 10px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.input-label {\r\n  margin-bottom: 5px;\r\n  font-size: 14px;\r\n}\r\n\r\n.input-text {\r\n  padding: 10px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n}\r\n";
styleInject(css_248z$3);

// client/src/components/InputText/InputText.jsx

const InputText = _ref => {
  let {
    label,
    value,
    onChange,
    placeholder
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "input-wrapper"
  }, /*#__PURE__*/React__default["default"].createElement("label", {
    className: "input-label"
  }, label), /*#__PURE__*/React__default["default"].createElement("input", {
    className: "input-text",
    type: "text",
    value: value,
    onChange: onChange,
    placeholder: placeholder
  }));
};

var css_248z$2 = "/* client/src/components/Modal/Modal.css */\r\n.modal-overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.modal-content {\r\n  background-color: white;\r\n  padding: 20px;\r\n  border-radius: 5px;\r\n  width: 300px;\r\n  text-align: center;\r\n}\r\n";
styleInject(css_248z$2);

// client/src/components/Modal/Modal.jsx

const Modal = _ref => {
  let {
    isOpen,
    onClose,
    children
  } = _ref;
  if (!isOpen) return null;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "modal-content"
  }, children, /*#__PURE__*/React__default["default"].createElement(Button, {
    onClick: onClose
  }, "Close")));
};

var css_248z$1 = "/* client/src/components/Card/Card.css */\r\n.card {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  border: 1px solid #ccc;\r\n  padding: 10px;\r\n  border-radius: 4px;\r\n  margin: 10px 0;\r\n}\r\n\r\n.product-details {\r\n  flex: 1;\r\n}\r\n\r\n.product-name {\r\n  margin: 0;\r\n}\r\n\r\n.product-price {\r\n  margin: 0;\r\n}\r\n";
styleInject(css_248z$1);

// client/src/components/Card/Card.jsx
const Card = _ref => {
  let {
    product,
    onRemove
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "card"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "product-details"
  }, /*#__PURE__*/React__default["default"].createElement("h4", {
    className: "product-name"
  }, product.name), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "product-price"
  }, "$", product.price)), /*#__PURE__*/React__default["default"].createElement(Button, {
    onClick: () => onRemove(product.id)
  }, "Remove"));
};

function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}

var css_248z = "/* client/src/components/Cart/Cart.css */\r\n.cart {\r\n  padding: 20px;\r\n}\r\n\r\n.cart-items {\r\n  margin-top: 20px;\r\n}\r\n";
styleInject(css_248z);

const Cart = () => {
  const [items, setItems] = React.useState([]);
  const [newItem, setNewItem] = React.useState({
    name: '',
    price: ''
  });
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const handleAddItem = () => {
    setItems([...items, _objectSpread2(_objectSpread2({}, newItem), {}, {
      id: Date.now()
    })]);
    setNewItem({
      name: '',
      price: ''
    });
  };
  const handleRemoveItem = id => {
    setItems(items.filter(item => item.id !== id));
  };
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "cart"
  }, /*#__PURE__*/React__default["default"].createElement("h2", null, "Shopping Cart"), /*#__PURE__*/React__default["default"].createElement(InputText, {
    label: "Product Name",
    value: newItem.name,
    onChange: e => setNewItem(_objectSpread2(_objectSpread2({}, newItem), {}, {
      name: e.target.value
    })),
    placeholder: "Enter product name"
  }), /*#__PURE__*/React__default["default"].createElement(InputText, {
    label: "Product Price",
    value: newItem.price,
    onChange: e => setNewItem(_objectSpread2(_objectSpread2({}, newItem), {}, {
      price: e.target.value
    })),
    placeholder: "Enter product price"
  }), /*#__PURE__*/React__default["default"].createElement(Button, {
    onClick: handleAddItem
  }, "Add Item"), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "cart-items"
  }, items.map(item => /*#__PURE__*/React__default["default"].createElement(Card, {
    key: item.id,
    product: item,
    onRemove: handleRemoveItem
  }))), /*#__PURE__*/React__default["default"].createElement(Modal, {
    isOpen: isModalOpen,
    onClose: () => setIsModalOpen(false)
  }, /*#__PURE__*/React__default["default"].createElement("h4", null, "Are you sure you want to delete this item?")));
};

exports.Button = Button;
exports.Card = Card;
exports.Cart = Cart;
exports.InputText = InputText;
exports.Modal = Modal;
