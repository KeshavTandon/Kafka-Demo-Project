const kafka = require("kafka-node");

const Producer = kafka.Producer;

const client = new kafka.KafkaClient({ kafkaHost: "localhost:9092" });

const producer=new Producer(client);

producer.on("ready", () => {
  const paymentEvent = JSON.stringify({
    orderId: "order-123",
    status: "SUCCESS",
    amount: 150.0,
    itemId:'item-1'
  });

  const payloads = [{ topic: "payments", messages: paymentEvent }];

  producer.send(payloads, (data, err) => {
    if (err) {
      console.error("Error sending messages", err);
    } else {
      console.log("Messages Sent Successfully", data);
    }
  });
});

producer.on('error',(err)=>{
    console.log("Error with kafka producer",err);
})
