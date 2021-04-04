// Author 思望文宣
function IONPC(){
    //初始化部分
    var File = Java.type("java.io.File");
    var FileOutputStream = Java.type("java.io.FileOutputStream");
    var BufferedReader = Java.type("java.io.BufferedReader");
    var InputStreamReader = Java.type("java.io.InputStreamReader");
    var FileInputStream = Java.type("java.io.FileInputStream");
    var StringBuilder=Java.type("java.lang.StringBuilder");
    var RootDirectory = new File("");
    var folder = new File(RootDirectory.getCanonicalPath()+"\\CNPCData");
    if(!folder.exists()){
        folder.mkdir();
    }
    //获取部分
    //file:文件名
    this.get = function(file){
        var files = new File(RootDirectory.getCanonicalPath()+"\\CNPCData\\"+file+".sw");
        var text = null;
        if(files.exists()){
            var fileInputStream = new FileInputStream(files);
            var inputStreamReader = new InputStreamReader(fileInputStream);
            var bufferedReader = new BufferedReader(inputStreamReader);
            var sb = new StringBuilder();
            while((text = bufferedReader.readLine()) != null){
                sb.append(text);
            }
        }
        try{
            return eval("("+sb.toString()+")");
        }catch(e){
            return {};
        }
    }
    //设置部分
    //file:文件名
    //object:对象
    this.set = function(file,object){
        if(!(object instanceof Object)){
            print("请输入对象");
            return;
        }
        var files = new File(RootDirectory.getCanonicalPath()+"\\CNPCData\\"+file+".sw");
        if(files.exists()){
            files.createNewFile();
        }
        var fileOutputStream = new FileOutputStream(files);
        fileOutputStream.write(JSON.stringify(object).getBytes());
        fileOutputStream.flush();
        fileOutputStream.close();
    }
    //删除部分
    //file:文件名
    this.remove = function(file){
        var files = new File(RootDirectory.getCanonicalPath()+"\\CNPCData\\"+file+".sw");
        if(files.exists()){
            files.delete();
        }
    }
}
/*
*这个脚本函数的永久储存，是为了让大家更重视对象
*Java本身就是个面向对象编程，使用对象可以更便捷
*大概说一下对象在这里的表述方式：
*var test = {
*        a:1,
*        b:true,
*        c:"qwq"
*     }
*这样就是一个简单的对象了，test.a会输出1，test.b会输出true，test.c会输出qwq，就这样
*那这里的储存就用了最简单粗暴的IO流，然后我有设置只能存对象，因为对象真的很方便
*示例：
    var io = new IONPC();
    io.set("test",{
        a:1,
        b:true,
        c:"qwq"
    });
    npc.say(io.get("test").c);
*这样就可以很方便的读写数据了,有什么方便的呢，示例：
*    假如你想把所有玩家手持物品名字存起来，用名字就可以调用，那么就可以：
        var player = world.getAllServerPlayers();
        var io = new IONPC();
        var test = io.get("test");
        for(var x in player){
            if(player[x].getHeldItem() != null){
                test[player[x].name] = player[x].getHeldItem().getDisplayName();
            }else test[player[x].name] = null;
        }
        io.set("test",test);
    这样就可以了，比如我叫“思望文宣”，我只需要npc.say(io.get("test").思望文宣);就可以获取到我的手持物品了，是不是很方便
    至少用这种方式做仓库之类的会方便不少
*对象的使用很广泛，也很灵活，自己去学学就好了，善用对象，你的代码会简洁不少
*by-思望文宣 2020/6/21
 */
