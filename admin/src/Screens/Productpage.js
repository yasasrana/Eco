import axios, {BASE_URL} from "../api/axios";
import {Grid, Paper} from "@mui/material";
import Header from "../Components/Header";
import React, {useEffect, useState} from "react";
import {Button, Col, Container, Row, Table} from "react-bootstrap";
import "../index.css";
const Productlist = () => {
  const [products, Setproducts] = useState([]);
  const [nulla, setNulla] = useState(false);
  const authAxios = axios.create({
    baseURL: BASE_URL,
    /*  headers: {
      Authorization :`Bearer ${Token}`
    } */
  });
  const fetchIssue = async () => {
    try {
      const response = await authAxios.get(`/api/product/getAll`);
      if (response.data == null) {
        setNulla(true);
      } else {
        Setproducts(response.data.data);
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log(products);
    fetchIssue();
  }, []);

  let itemdelete = async id => {
    try {
      const response = await authAxios.delete(`/api/product/delete/${id}`);
      fetchIssue();
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  let itemconfirmed = async product => {
    try {
      const response = await authAxios.put(`/api/product/update/${product._id}`, {
        name: product.name,
        model: product.model,
        price: product.price,
        isconfirmed: !product.isconfirmed,
      });
      fetchIssue();
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <Grid direction={"row"} sx={{width: "auto", marginTop: "20px", height: "auto", display: "flex"}}>
        <Container>
          <Row>
            <Col>
              <h2>List of Orders</h2>
            </Col>
          </Row>
          <Col md={{span: 10, offset: 2}}>
            <Table className=" diagnostic-tablex" borderless hover variant="light">
              <thead>
                <tr>
                  <th>no</th>
                  <th>Name</th>
                  <th>Model</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {Array.isArray(products)
                  ? products.map((product, index) => {
                      return (
                        <tr key={product._id}>
                          <td>{index + 1}</td>
                          <td>{product.name}</td>
                          <td>{product.model}</td>
                          <td>{product.price}</td>
                          <td>
                            <Button className= {product.isconfirmed ? "btncmmngrey" : "btncmmnblue"} onClick={() => itemconfirmed(product)}>
                              {product.isconfirmed ? "confirmed" : "confirm"}
                            </Button>
                            <Button className="btncmmnred" onClick={() => itemdelete(product._id)}>
                              Remove
                            </Button>
                          </td>
                        </tr>
                      );
                    })
                  : null}
              </tbody>
            </Table>
          </Col>
        </Container>
      </Grid>
    </div>
  );
};

export default Productlist;
