module.exports = {
  checkLogin: function checkLogin(req,res,next) {
    req.flash('error', '未登录');
    return res.redirect('./signin');
  }
  next();
},
checkNotLogin:function checkNotLogin(req,res,next) {
  if (req.session.user) {
    req.flash('error','已登录');
    return res,redirect('back');//返回之前页面
  }
  next();
}
