const e = new e;
const IWorld = new IWorld;
const IPlayer = new IPlayer;
const IDimension = new IDimension;
const IScoreboard = new IScoreboard;
const IData = new IData;
const IItemStack = new IItemStack;
const INbt = new INbt;
const IEntity = new IEntity;
const IPos = new IPos;
const IBlock = new IBlock;
const IEntityItem = new IEntityItem;
const IRayTrace = new IRayTrace;
const IContainer = new IContainer;
interact(e);
chat(IPlayer,"");
e.player = "player";
e.npc = "npc";
e.npc.world = IWorld;
/*获取附近实体
@param pos IPos 中心位置
@param range 获取的最大距离
@param type 类型
@return IEntity[]
 */
e.npc.world.getNearbyEntities = function (pos,range,type) {return [IEntity]};
/*获取最近实体
@param pos IPos 中心位置
@param range 获取的最大距离
@param type 类型
@return IEntity
*/
e.npc.world.getClosestEntity = function (pos,range,type) {return IEntity};
/*获取世界中已经被加载的所有实体
@param type 实体类型
@return IEntity[]
 */
e.npc.world.getAllEntities = function (type) {return [IEntity]};
/*获取世界时间
@return long
 */
e.npc.world.getTime = function() {return 111111111111111};
/*设置世界时间
@param time 时间
@return void
 */
e.npc.world.setTime = function(time) {};
/*获取世界实际时间
不受 /time set 影响
@return long
 */
e.npc.world.getTotalTime = function() {return 111111111111111};
/*获取指定坐标的方块类
@param x 坐标
@param y 坐标
@param z 坐标
@return IBlock
 */
e.npc.world.getBlock = function (x,y,z) {return IBlock};
/*设置指定坐标的方块
@param x 坐标
@param y 坐标
@param z 坐标
@param name 方块名
@param meta 方块的元数据
@return void
 */
e.npc.world.setBlock = function (x,y,z,name,meta) {};
/*移除指定坐标的方块
@param x 坐标
@param y 坐标
@param z 坐标
@return void
 */
e.npc.world.removeBlock = function (x,y,z) {};
/*获取指定方块亮度
@param x 坐标
@param y 坐标
@param z 坐标
@return float (0-1)
 */
e.npc.world.getLightValue = function (x,y,z) {return 3.1};
/*获取玩家类
如果找不到玩家则返回null
@param name 玩家名
@return IPlayer
 */
e.npc.world.getPlayer = function (name) {return "name"};
/*判断当前世界是否白天
@return boolean
 */
e.npc.world.isDay = function() {return true};
/*判断当前世界是否下雨
@return boolean
 */
e.npc.world.isRaining = function () {return true};
/*获取当前世界的维度类
@return IDimension
 */
e.npc.world.getDimension = function () {return IDimension};
/*设置当前世界的下雨状态
@param bo true为下雨 false为否
@return void
 */
e.npc.world.setRaining = function (bo) {};
/*雷击当前世界的指定位置
@param x 坐标
@param y 坐标
@param z 坐标
@return void
 */
e.npc.world.thunderStrike = function (x,y,z) {};
/*播放音效
声音会在16格范围内播放
@param pos 声音的播放位置
@param sound 声音资源名
@param volume 音量 默认值为1
@param pitch 音调 默认值为1
@return void
 */
e.npc.world.playSoundAt = function (pos,sound,volume,pitch) {};
/*生成粒子
@param particle 粒子名 http://minecraft.gamepedia.com/Particles
@param x 坐标
@param y 坐标
@param z 坐标
@param dx x轴动量
@param dy y轴动量
@param dz z轴动量
@param speed 粒子速度 通常介于 0 和 1 之间
@param count 粒子数
@return void
 */
e.npc.world.spawnParticle = function (particle,x,y,z,dx,dy,dz,speed,count) {};
/*世界通知
@param message 消息
@return void
 */
e.npc.world.broadcast = function(message) {};
e.npc.world.getScoreboard = function () {return IScoreboard};
e.npc.world.getTempdata = function () {return IData};
e.npc.world.getStoreddata = function () {return IData};
e.npc.world.createItem = function (name,damage,size) {return IItemStack};
e.npc.world.createItemFromNbt = function(nbt) {return IItemStack};
e.npc.world.explode = function(x,y,z,range,fire,grief) {};
e.npc.world.getAllPlayers = function() {return IPlayer};
e.npc.world.getBiomeName = function(x,z) {return ""};
e.npc.world.spawnEntity = function(entity) {};
e.npc.world.getRedstonePower = function(x,y,z) {return 1};
e.npc.world.getEntity = function(uuid) {return IEntity};
e.npc.world.createEntityFromNBT = function(nbt) {return IEntity};
e.npc.world.createEntity = function(id) {return IEntity};
e.npc.world.getSpawnPoint = function() {return IBlock};
e.npc.world.setSpawnPoint = function(block) {};
e.npc.world.getName = function() {return ""};
e.npc.entity = IEntity;
e.npc.entity.getX = function() {return 1.1};
e.npc.entity.setX = function(x) {};
e.npc.entity.getY = function() {return 1.1};
e.npc.entity.setY = function(y) {};
e.npc.entity.getZ = function() {return 1.1};
e.npc.entity.setZ = function(z) {};
e.npc.entity.getBlockX = function() {return 1};
e.npc.entity.getBlockY = function() {return 1};
e.npc.entity.getBlockZ = function() {return 1};
e.npc.entity.getPos = function() {return IPos};
e.npc.entity.setPos = function(pos) {};
e.npc.entity.setPosition = function(x,y,z) {};
e.npc.entity.setRotation = function(rotation) {};
e.npc.entity.getRotation = function() {return 1.1};
e.npc.entity.getHeight = function() {return 1.1};
e.npc.entity.getEyeHeight = function() {return 1.1};
e.npc.entity.getWidth = function() {return 1.1};
e.npc.entity.setPitch = function(pitch) {};
e.npc.entity.getPitch = function() {return 1.1};
e.npc.entity.getMount = function() {return IEntity};
e.npc.entity.setMount = function(entity) {};
e.npc.entity.getRiders = function() {return [IEntity]};
e.npc.entity.getAllRiders = function() {return [IEntity]};
e.npc.entity.addRider = function(entity) {};
e.npc.entity.clearRiders = function() {};
e.npc.entity.knockback = function(power,direction) {};
e.npc.entity.isSneaking = function() {return true};
e.npc.entity.isSprinting = function() {return true};
e.npc.entity.dropItem = function(item) {return IEntityItem};
e.npc.entity.inWater = function() {return true};
e.npc.entity.inFire = function() {return true};
e.npc.entity.inLava = function() {return true};
e.npc.entity.getTempdata = function() {return IData};
e.npc.entity.getStoreddata = function() {return IData};
e.npc.entity.getNbt = function() {return INbt};
e.npc.entity.isAlive = function() {return true};
e.npc.entity.getAge = function() {return 1145141919810};
e.npc.entity.despawn = function() {};
e.npc.entity.spawn = function() {};
e.npc.entity.kill = function() {};
e.npc.entity.isBurning = function() {return true};
e.npc.entity.setBurning = function(seconds) {};
e.npc.entity.extinguish = function() {};
e.npc.entity.getWorld = function() {return IWorld};
e.npc.entity.getTypeName = function() {return ""};
e.npc.entity.getType = function() {return 1};
e.npc.entity.typeOf = function(type) {return true};
e.npc.entity.getUUID = function() {return ""};
e.npc.entity.generateNewUUI = function() {return ""};
e.npc.entity.storeAsClone = function(tab,name) {return };
e.npc.entity.getEntityNbt = function() {return INbt};
e.npc.entity.setEntityNbt = function(nbt) {return };
e.npc.entity.rayTraceBlock = function(distance,stopOnLiquid,ignoreBlockWithoutBoundingBox) {return IRayTrace};
e.npc.entity.rayTraceEntities = function(distance,stopOnLiquid,ignoreBlockWithoutBoundingBox) {return [IEntity]};
e.npc.entity.getTags = function() {return ["",""]};
e.npc.entity.addTag = function(tag) {};
e.npc.entity.hasTag = function(tag) {return true};
e.npc.entity.removeTag = function(tag) {};
e.npc.entity.playAnimation = function(tab) {};
e.npc.entity.damage = function(amount) {};
e.npc.entity.getMotionX = function() {return 1.1};
e.npc.entity.getMotionY = function() {return 2.1};
e.npc.entity.getMotionZ = function() {return 1.8};
e.npc.entity.setMotionX = function(motion) {};
e.npc.entity.setMotionY = function(motion) {};
e.npc.entity.setMotionZ = function(motion) {};
e.npc.entity.getName = function() {return ""};
e.npc.entity.setName = function(name) {};
e.npc.entity.hasCustomName = function() {return true};
e.npc.entity.getEntityName = function() {return ""};
e.npc.pos = IPos;
e.npc.pos.getX = function() {return 1};
e.npc.pos.getY = function() {return 1};
e.npc.pos.getZ = function() {return 1};
e.npc.pos.up = function() {return IPos};
e.npc.pos.up = function(n) {return IPos};
e.npc.pos.down = function() {return IPos};
e.npc.pos.down = function(n) {return IPos};
e.npc.pos.north = function() {return IPos};
e.npc.pos.north = function(n) {return IPos};
e.npc.pos.east = function() {return IPos};
e.npc.pos.east = function(n) {return IPos};
e.npc.pos.south = function() {return IPos};
e.npc.pos.south = function(n) {return IPos};
e.npc.pos.west = function() {return IPos};
e.npc.pos.west = function(n) {return IPos};
e.npc.pos.add = function(x,y,z) {return IPos};
e.npc.pos.add = function(pos) {return IPos};
e.npc.pos.subtract = function(x,y,z) {return IPos};
e.npc.pos.subtract = function(pos) {return IPos};
e.npc.pos.normalize = function() {return 1.1};
e.npc.pos.offset = function(direction) {return IPos};
e.npc.pos.offset = function(direction,n) {return IPos};
e.npc.pos.distanceTo = function(pos) {return 1.1};
e.npc.entityItem = IEntityItem;
e.npc.entityItem.getOwner = function() {return ""};
e.npc.entityItem.setOwner = function(name) {};
e.npc.entityItem.getPickupDelay = function() {return 1};
e.npc.entityItem.setPickupDelay = function(delay) {};
e.npc.entityItem.getAge = function() {return 1145141919810};
e.npc.entityItem.setAge = function(age) {return };
e.npc.entityItem.getLifeSpawn = function() {return 1};
e.npc.entityItem.setLifeSpawn = function(age) {};
e.npc.entityItem.getItem = function() {return IItemStack};
e.npc.entityItem.setItem = function(item) {};
e.npc.item = IItemStack;
e.npc.item.getStackSize = function() {return 1};
e.npc.item.setStackSize = function(size) {};
e.npc.item.getMaxStackSize = function() {return 1};
e.npc.item.getItemDamage = function() {return 1};
e.npc.item.setItemDamage = function(value) {};
e.npc.item.getMaxItemDamage = function() {return 1};
e.npc.item.getAttackDamage = function() {return 1.1};
e.npc.item.damageItem = function(damage,living) {};
e.npc.item.addEnchantment = function(id,strenght) {};
e.npc.item.isEnchanted = function() {return true};
e.npc.item.hasEnchant = function(id) {return true};
e.npc.item.removeEnchant = function(id) {return true};
e.npc.item.isWearable = function() {return true};
e.npc.item.hasCustomName = function() {return true};
e.npc.item.setCustomName = function(name) {return };
e.npc.item.getDisplayName = function() {return ""};
e.npc.item.getItemName = function() {return ""};
e.npc.item.getName = function() {return ""};
e.npc.item.copy = function() {return IItemStack};
e.npc.item.getNbt = function() {return INbt};
e.npc.item.hasNbt = function() {return true};
e.npc.item.removeNbt = function() {};
e.npc.item.getItemNbt = function() {return INbt};
e.npc.item.isEmpty = function() {return true};
e.npc.item.getType = function() {return 1};
e.npc.item.getLore = function() {return [""]};
e.npc.item.setLore = function(lore) {return };
e.npc.item.setAttribute = function(name,value,slot) {};
e.npc.item.getAttribute = function(name) {return 1.1};
e.npc.item.hasAttribute = function(name) {return true};
e.npc.item.getTempdata = function() {return IData};
e.npc.item.getStoreddata = function() {return IData};
e.npc.item.getFoodLevel = function() {return 1};
e.npc.item.compare = function(item,ignoreNBT) {return true};
e.npc.data = IData;
e.npc.data.put = function(key,value) {};
e.npc.data.get = function(key) {return object};
e.npc.data.remove = function(key) {};
e.npc.data.has = function(key) {return true};
e.npc.data.getKeys = function() {return [""]};
e.npc.data.clear = function() {};
e.npc.block = IBlock;

//获取该方块的x坐标
e.npc.block.getX = function() {return 1};

//获取该方块的y坐标
e.npc.block.getY = function() {return 1};

//获取该方块的z坐标
e.npc.block.getZ = function() {return 1};

/*获取该方块的位置
*
* 返回位置数据类型*/
e.npc.block.getPos = function() {return IPos};

/*获取该方块的元数据*/
e.npc.block.getMetaData = function() {return 1};

/*设置方块的元数据
* @param i 元数据*/
e.npc.block.setMetaData = function(i) {};

/*获取该方块名*/
e.npc.block.getName = function() {return ""};

/*移除此方块*/
e.npc.block.remove = function() {};

/*判断此方块是否被替换*/
e.npc.block.isRemoved = function() {return true};

/*判断当前位置是否为空气*/
e.npc.block.isAir = function() {return true};

/*设置方块
* @param block 要替换的方块
*
* 返回替换后的方块*/
e.npc.block.setBlock = function(block) {return IBlock};

/*判断是否是实体方块*/
e.npc.block.hasTileEntity = function() {return true};

/*判断是否为一个容器*/
e.npc.block.isContainer = function() {return true};

/*获取容器*/
e.npc.block.getContainer = function() {return IContainer};

/*获取方块的临时数据
直到重新加载，临时数据能存储任何内容。 （仅适用于customnpcs的方块）
 */
e.npc.block.getTempdata = function() {return IData};

/*获取方块存储的数据
存储的数据无视世界的重新加载。与临时数据不同，只能保存字符串和数字（仅适用于具有TileEntities的方块）
 */
e.npc.block.getStoreddata = function() {return IData};

/*获取方块所在的世界*/
e.npc.block.getWorld = function() {return IWorld};

/*获取方块实体的nbt数据*/
e.npc.block.getTileEntityNBT = function() {return INbt};

/*设置方块实体的nbt数据*/
e.npc.block.setTileEntityNBT = function(nbt) {};

/*方块事件
@param type 事件的类型
@param data 事件的数据类型 例如： Chests - type:1 data:1 opens the lid, type:1 data:0 closes the lid Note block - type:(0-9) data:(0-24) plays different notes
 */
e.npc.block.blockEvent = function(type,data) {};

/*获取方块的显示名称
 */
e.npc.block.getDisplayName = function() {return ""};

/*
* 模拟玩家与该方块进行互动（会出现奇奇怪怪的结果）
* @param side - 你要进行交互的方块面 */
e.npc.block.interact = function(side) {};
e.npc.block. = function() {return };
e.npc.block. = function() {return };
e.npc.block. = function() {return };
e.npc.block. = function() {return };
e.npc.block. = function() {return };
e.npc.block. = function() {return };
e.npc.block. = function() {return };
e.npc.block. = function() {return };
e.npc.block. = function() {return };
e.npc.block. = function() {return };

e.npc.scoreboard = scoreboard;
e.npc.scoreboard.setPlayerScore = function(player,stringName,intLevel);
