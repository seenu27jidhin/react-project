import { Col, Row } from "react-bootstrap"
import storeItems from "../data/items.json"
import { StoreItems } from "../components/StoreItems";


export function Store(){
    return (
    <>
    <section id="store" className="w-full bg-primary-100 py-40"></section>
        <h1>store</h1>
        <Row md={2} xs={1} Ig={3} className="g-3">
            
            {storeItems.map(items => (
            <Col key={items.id}>
                <StoreItems {...items }></StoreItems>
            </Col>
           )
           )
           }
           
        </Row>
   
    </>
    )
}