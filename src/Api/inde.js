// 请求的接口

import ajax from 'ajax'

// 1 获取经纬度位置
export const reqAddress =(geohash) =>ajax(`/position/${geohash}`)

// 2 获取食品分类
export const reqFoodList =() =>ajax(`/index_category`)

// 3 获取经纬度商铺列表
export const reqShopsList =(latitude,longitude) =>ajax('/shops',{latitude,longitude})

// // 4 获取经搜索商铺列表
// export const reqShopsSearch =(geohash) =>ajax(`/position/${geohash}`)

// // 5 获取验证码
// export const reqAddress =(geohash) =>ajax(`/position/${geohash}`)

// // 6 获取登录用户名和密码
// export const reqAddress =(geohash) =>ajax(`/position/${geohash}`)

// // 7 获取短信验证码
// export const reqAddress =(geohash) =>ajax(`/position/${geohash}`)

// // 8 获取手机号码登录
// export const reqAddress =(geohash) =>ajax(`/position/${geohash}`)
// // 9 获取用户详情
// export const reqAddress =(geohash) =>ajax(`/position/${geohash}`)
// // 10 获取用户登出
// export const reqAddress =(geohash) =>ajax(`/position/${geohash}`)