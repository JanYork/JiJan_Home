  <script>
        //获取img元素
        var imgObj = document.querySelector("img");
        //给img元素绑定点击事件
        imgObj.addEventListener("click", function() {
            //当点击事件触发的时候改变图片的路径，将第二张图片引入。
            this.src ="img";
        })
    </script>
