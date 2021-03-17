// export function test() {
//     document.write('测试自定义包');
//     console.log('test()')
// }

// export function TTTT() {
//     console.log('TTTT()')
// }

//引入其他文件, 然后再暴露
//1. 目标文件中暴露数据  export 数据
// import {chunk} from './array/chunk';
//2. 暴露数据
// export {chunk};


//数组相关的 API 函数
export {chunk} from './array/chunk';
export {concat} from './array/concat';
export {map, reduce, filter,find ,findIndex,every,some} from './array/declares';
export {difference} from './array/difference';
export {drop, dropRight} from './array/drop';
export {flatten1, flatten2} from './array/flatten';
export {pull, pullAll} from './array/pull';
export {slice} from './array/slice';
export {unique1,unique2,unique3} from './array/unique';

//axios发送 AJAX 请求
export {axios} from './axios/index';

//事件委托
export {addEventListener} from './event-bind/index';

//事件总线
export {eventBus} from './event-bus/index';

//函数相关
export {apply} from './function/apply';
export {bind} from './function/bind';
export {call} from './function/call';
export {debounce} from './function/debounce';
export {throttle} from './function/throttle';

//对象相关
export {clone1,clone2,deepClone1, deepClone2,deepClone3,deepClone4} from './object/clone';
export {mergeObject} from './object/mergeObject';
export {myInstanceOf} from './object/myInstanceOf';
export {newInstance} from './object/newInstance';

//消息订阅与发布
export {PubSub} from './pub-sub';

//字符串
export {reverseString, palindrome, truncate} from './string/index';
