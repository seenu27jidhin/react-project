import { Card,Button } from "react-bootstrap"
import { FormatCurrency } from "../utilities/FormateCurrency"
import { useShoppingCart } from "../context/ShoppingCartContext"


type StoreItemProps = {
    id: number
    name:string
    price:number
    imgUrl:string
    
    }

export function StoreItems({ id, name, price, imgUrl } : StoreItemProps) {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
    const quantity = getItemQuantity(id)
    return (
            <Card>
                <Card.Img variant="top" src={imgUrl} height="200px" style={{ objectFit :"cover"}}/>
                    <Card.Body className="d-flex flex-column" >
                        <Card.Title className="d-flex justify-content-space-between align-items-baseline mb-4">
                            <span className="fs-2">{name}</span>
                            <span className="ms-2 text-muted">{FormatCurrency(price)}</span>
                        
                        </Card.Title>
                        <div className="mt-auto">
                            {(quantity === 0 ? (
                                <Button className="w-100" onClick={()=>increaseCartQuantity(id)}>+ Add to cart</Button>
                            ) : 
                                <div className="d-flex align-items-center flex-cloumn" style={{ gap:".5rem" }}>
                                    <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
                                        <Button onClick={()=>decreaseCartQuantity(id)}>-</Button>
                                            <div>
                                                <span className="fs=3">{quantity}</span> in
                                                cart
                                            </div>
                                        <Button onClick={()=>increaseCartQuantity(id)}>+</Button>
                                    </div>
                                <Button variant="danger" onClick={()=>removeFromCart(id)}>Remove</Button>
                                
                                </div>
                            )}
                        </div>
                    </Card.Body>
            </Card>
        )
}