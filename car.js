AFRAME.registerComponent("move",{
    schema:{
        clickcount:{type:"number",default:0}
    },
    update:function(){
      window.addEventListener("click",e=>{
        this.data.clickcount = this.data.clickcount+1;
        if(this.data.clickcount===1){
            const rotation = {x:0,y:20,z:0};
            this.el.setAttribute("rotation",rotation);
        }else if(this.data.clickcount===2){
            const rotation = {x:0,y:100,z:0};
            this.el.setAttribute("rotation",rotation);
        }
      })
    }
})
