/**
 * api接口的统一出口
 */
// 文章模块接口
import article from "@/api/article";
// 其他模块的接口……
import money999 from "@/api/money";
import requseLogin from "@/api/loginApi";

// 导出接口
export default {
  article,
  money999,
  requseLogin
  // ……
};
