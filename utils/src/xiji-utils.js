// Anything exported from this file is importable by other in-browser modules.
import './set-public-path'
// 用户API
import UserAPI from  './api/User'
// 公共数据存储
import Global from './global'
export {
  UserAPI,
  Global
}
