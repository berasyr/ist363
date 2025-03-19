from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import stripe
import sqlite3

app = FastAPI()

# Database setup
conn = sqlite3.connect("clotogo.db", check_same_thread=False)
cursor = conn.cursor()
cursor.execute("""
    CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        store_name TEXT,
        product_link TEXT,
        size TEXT,
        color TEXT,
        quantity INTEGER,
        delivery_address TEXT,
        payment_method TEXT
    )
""")
conn.commit()

# Stripe API Key (Use your real one)
stripe.api_key = "sk_test_your_secret_key"

class Order(BaseModel):
    store_name: str
    product_link: str
    size: str
    color: str
    quantity: int
    delivery_address: str
    payment_method: str

@app.post("/order")
def create_order(order: Order):
    cursor.execute("""
        INSERT INTO orders (store_name, product_link, size, color, quantity, delivery_address, payment_method)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    """, (order.store_name, order.product_link, order.size, order.color, order.quantity, order.delivery_address, order.payment_method))
    conn.commit()
    return {"message": "Order placed successfully!"}

class PaymentRequest(BaseModel):
    amount: int
    token: str

@app.post("/pay")
def process_payment(payment: PaymentRequest):
    try:
        charge = stripe.Charge.create(
            amount=payment.amount,
            currency="usd",
            source=payment.token,
            description="CloToGo Order Payment"
        )
        return {"status": "success", "charge_id": charge.id}
    except stripe.error.StripeError as e:
        raise HTTPException(status_code=400, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
