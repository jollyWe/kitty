// eslint-disable-next-line no-unused-vars
import Mock from "mockjs";
import { param2Obj } from "@/utils/mUtils";
/*
 * 用来存放一些模拟用户的数据
 * */

// import Mock from 'mockjs'
// eslint-disable-next-line no-unused-vars
const users = [
  {
    id: 1,
    username: "admin",
    password: "123456",
    email: "123456@qq.com",
    name: "搬砖者"
  },
  {
    id: 2,
    username: "lytton",
    password: "123456",
    email: "yyyyy@163.com",
    name: "混子"
  }
];

export default {
  loginByUsername: config => {
    const { password, username } = param2Obj(config.url);
    if (username === "admin" && password === "123456") {
      return {
        success: true
      };
    } else {
      return {
        success: false
      };
    }
  }
};
