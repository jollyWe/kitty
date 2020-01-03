/*Api.js接口管理*/

import axios from "@/request/http"; // 导入http中创建的axios实例ba
// import qs from "qs"; // 根据需求是否导入qs模块

const money = {
  updateMoney(params) {
    return axios.get("/money/get", {
      params: params
    });
  }
};

// export function addMoney(params) {
//   return request({
//     url: "/money/add",
//     method: "get",
//     params: params
//   });
// }

// export function removeMoney(params) {
//   return request({
//     url: "/money/remove",
//     method: "get",
//     params: params
//   });
// }
// export function batchremoveMoney(params) {
//   return request({
//     url: "/money/batchremove",
//     method: "get",
//     params: params
//   });
// }
// export function updateMoney(params) {
//   return request({
//     url: "/money/edit",
//     method: "get",
//     params: params
//   });
// }

export default money;
