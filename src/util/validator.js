import mongoose from 'mongoose';
import moment from 'moment';

export const isValidBody = (data) => Object.keys(data).length > 0;
export const isValidEnum = (t) => ['Mr', 'Mrs', 'Miss'].indexOf(t) !== -1;
export const isValidStr = (n) => /^[A-Z a-z]{2,}$/.test(n);
export const isValidNumber = (p) => /^[6-9]{1}[0-9]{9}$/.test(p);
export const isValidEmail = (e) => /^([a-zA-Z0-9_.]+@[a-z]+\.[a-z]{2,3})?$/.test(e);
export const isValidPass = (p) => /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/.test(p);
export const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);
export const isValidDate = (d) => moment(d, 'YYYY-MM-DD', true).isValid();
export const isValidTitle = (t) => typeof t === 'string' && t.trim().length !== 0 && t.match(/^[a-z A-Z 0-9,.-?%!&]{2,}$/i);
export const isValidPlainText = (pt) => typeof pt === 'string' && pt.trim().length !== 0 && pt.match(/^[A-Z a-z 0-9,.-?%!&]{2,}$/);
export const isValidText = (t) => typeof t === 'string' && t.trim().length !== 0 && t.match(/^[a-z A-Z 0-9,.-?!@#$%&()]{2,}$/i);
export const isValidIsbn = (i) => typeof i.trim() === 'string' && i.trim().match(/^(?=(?:\D*\d){13}(?:(?:\D*\d){3})?$)[\d-]+$/);
export const isValidReviews = (r) => typeof r.trim() === 'string' && r.trim().length !== 0;
export const isValidSub = (t) => typeof t === 'string' && t.trim().length !== 0 && t.match(/^[a-z A-Z]{2,}$/i);
