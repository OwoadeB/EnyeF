import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

 function HeaderComponent (props) {

    function searchInputChange (val) {
        return props.inputChange(val)
      }
    return (
            
            <Row className="shadow" style={{position:"static"}}>               
                <Col>
                    <p style={{fontFamily:"Muli",fontSize:"25px",fontWeight:"bold",padding:"5px"}}>Enye Frontend</p>
                </Col>  
                <Col xs={12} md={8}>
                    <form >
                    <input
                        style={{outline:"none",backgroundColor:"none",borderWidth:"0 0 2px",borderColor:"#000",marginTop:"15px"}}
                        className="w-50" type="text" placeholder="Search Name" aria-label="Search" 
                        onChange={e => searchInputChange(e.target.value)}
                        />                            
                    </form> 
                </Col>                      
            
            </Row>
    )
    }

export default HeaderComponent;
