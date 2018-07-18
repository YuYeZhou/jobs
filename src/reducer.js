// 合并所有reducer 并且返回
import { combineReducers } from "redux";
import { user } from '../src/redux/user.redux'
import { chatuser } from '../src/redux/chatuser.redux'
import { chat } from '../src/redux/chat.redux'

export default combineReducers({ user, chatuser, chat })