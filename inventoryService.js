const consumer=require('./kafkaConsumer');
const PaymentEvent=require('./paymentEvent');

const inventory={
    'item-1':100,
    'item-2':150
};

const updateInventory=(paymentEvent)=>{
    const quantityToReduce=1;
    const item=paymentEvent.itemId;
    if(inventory[item] && paymentEvent.status==="SUCCESS"){
        inventory[item]-=quantityToReduce;
        console.log(`Updated Inventory ${inventory[item]}`);
    }
    else if(inventory[item] && paymentEvent.status!='SUCCESS')
        console.log('Payment failed.Inventory not updated');
}

consumer.on('message',(message)=>{
    try {
        const paymentEvent=JSON.parse(message.value);
        updateInventory(paymentEvent);
    } catch (error) {
        console.error('Error processing message',error);
    }
})

consumer.on('error',(err)=>{
    console.error("Error with kafka consumer",err);
})