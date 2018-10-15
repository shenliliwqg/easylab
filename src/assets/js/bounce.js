/**
 * Created by sll on 2018/10/15.
 */

exports.install = function (Vue, options) {
  Vue.prototype.bounce = function (title,content){
    let $mask=document.getElementById('mask');
    $mask.querySelector('.title').innerHTML=title;
    $mask.querySelector('.content').innerHTML=content;
    $mask.querySelector('.cancel').onclick=function () {
      $mask.style.cssText="display:none";
    };
  };
}


