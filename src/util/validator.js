const mongoose = require('mongoose');
const moment = require('moment');

const isValidBody = (data) => Object.keys(data).length > 0;
const isValidEnum = (t) => ['Mr', 'Mrs', 'Miss'].indexOf(t) !== -1;
const isValidStr = (n) => /^[A-Z a-z]{2,}$/.test(n);
const isValidNumber = (p) => /^[6-9]{1}[0-9]{9}$/.test(p);
const isValidEmail = (e) => /^([a-zA-Z0-9_.]+@[a-z]+\.[a-z]{2,3})?$/.test(e);
const isValidPass = (p) => /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/.test(p);
const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);
const isValidDate = (d) => moment(d, 'YYYY-MM-DD', true).isValid();
const isValidTitle = (t) => typeof t === 'string' && t.trim().length !== 0 && t.match(/^[a-z A-Z 0-9,.-?%!&]{2,}$/i);
const isValidPlainText = (pt) => typeof pt === 'string' && pt.trim().length !== 0 && pt.match(/^[A-Z a-z 0-9,.-?%!&]{2,}$/);
const isValidText = (t) => typeof t === 'string' && t.trim().length !== 0 && t.match(/^[a-z A-Z 0-9,.-?!@#$%&()]{2,}$/i);
const isValidIsbn = (i) => typeof i.trim() === 'string' && i.trim().match(/^(?=(?:\D*\d){13}(?:(?:\D*\d){3})?$)[\d-]+$/);
const isValidReviews = (r) => typeof r.trim() === 'string' && r.trim().length !== 0;
const isValidSub = (t) => typeof t === 'string' && t.trim().length !== 0 && t.match(/^[a-z A-Z]{2,}$/i);

module.exports = { isValidEnum, isValidBody, isValidStr, isValidNumber, isValidEmail, isValidPass, isValidObjectId, isValidPlainText, isValidTitle, isValidText, isValidIsbn, isValidDate, isValidReviews, isValidSub };
