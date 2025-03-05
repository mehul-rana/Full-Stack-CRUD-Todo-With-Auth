module.exports = {
  getSignup: async (req,res)=>{
      try {
        res.render('signup.ejs')
      } catch (error) {
        console.log(error)
      } 
  }
}