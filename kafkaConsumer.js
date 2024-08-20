const kafka=require('kafka-node');

const Consumer=kafka.Consumer; 

const client=new kafka.KafkaClient({kafkaHost:'localhost:9092'}); //connecting client to broker

const consumer=new Consumer(
    client,
    [{topic:'payments',partition:0}],
    {
        autoCommit:true,
        groupId:'inventory-group'
    }
)

module.exports=consumer;