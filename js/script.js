const vm = new Vue ({
  el:'#app',
  data:{
    text:'Lorem Ipsum available but the  suffered alterat ionsome form humour or randomised words ',
    text2:'Business',
    text3:'Events'
  }
})

Vue.component('box-text', {
  template: '<div class="container-text"><div class="text">{{text}}</div><div class="icon-social"><ul><li><a href="#"><img src="img/icons/icon-linkedin.png" class="img-responsive"></a></li><li><a href="#"><img src="img/icons/icon-pinterest.png" class="img-responsive"></a></li><li><a href="#"><img src="img/icons/icon-twitter.png" class="img-responsive"></a></li> <li><a href="#"><img src="img/icons/icon-facebook.png" class="img-responsive"></a></li> </ul></div></div>'
})