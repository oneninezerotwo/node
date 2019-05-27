const {
	MongoClient
} = require('mongodb'); // 引入了mongodb的第三方依赖包

const config = {
	url:"mongodb://localhost:27017",
	dbName:"1902"
}

MongoClient.connect(config.url,{
	useNewUrlParser:true
},(err,client)=>{
	// console.log(client);
	// 连接1902数据库
	let db = client.db(config.dbName);
	// 打印该数据库的信息
	// console.log(db);
	// 选中集合
	let collection = db.collection('students');
	// collection.insertMany([
	// 	{
	// 		name: "laoxie",
	// 	},
	// 	{
	// 		name: "lin"
	// 	},
	// 	{
	// 		name: "yao"
	// 	}
	// ], (err, result)=>{
	// 	console.log(result);
	// })
	collection.find({
		// 指定查询
		name: 'yao'
	}).toArray((err, docs)=>{
		console.log(docs);
	})
})