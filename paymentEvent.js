class PaymentEvent{
    constructor(orderId,status,amount,itemId){
        this.orderId=orderId;
        this.status=status;
        this.amount=amount;
        this.itemId=this.itemId
    }
}

module.exports=PaymentEvent;