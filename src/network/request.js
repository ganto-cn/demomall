import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
	
  // axios的拦截器
  
  // 请求拦截
  instance.interceptors.request.use(config => { // 请求成功
    //console.log(config) // 请求前的参数
    /** 为什么要拦截？
    *		1.比如config中的一些信息不符合服务器的要求，对数据进行一些修改
    *		2.比如每次发送网路请求时，都希望在网站界面中显示一个请求的图标
    * 	3.某些网络请求（比如登录（token）），必须携带一些特殊信息
    */
    return config // 拦截成功后要把数据返回，要不然拿不到config数据了
  }, err => { // 请求失败
    //console.log(err)
  })

  // 响应拦截
  instance.interceptors.response.use(res => {
    //console.log(res) // 请求返回的结果
    return res.data // 拦截成功后要把数据返回，这里只需要返回data数据就行，其他的数据无用
  }, err => {
    //console.log(err)
  })
  
  return instance(config) // 调用instance本身就会返回promise
}