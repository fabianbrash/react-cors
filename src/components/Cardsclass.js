import React, { Component } from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBContainer, MDBRow, MDBIcon } from 'mdbreact';

export default class Cardsclass extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoading: true
        };
    }

    async componentDidMount() {

        const apiURI = "http://192.168.100.88:4001/api/v1/data";

        const response = await fetch(apiURI)
        const data = await response.json()
        console.log(data)
        this.setState({data: data, isLoading: false})


    }

    render() {

        const { data } = this.state;

        const postsList = data.map((post, i ) => {

        return (
            <div key={post.id}className="mt-4">
            <MDBCol className="ml-4">
                <MDBCard style={{ width: "22rem" }}>
                 <p><MDBIcon icon="server" size="1x" className="deep-purple-text mt-3 mr-3"/>{post.id}</p> 
                { /*<MDBCardImage className="img-fluid" src={this.props.imgsrc} waves /> */}
                <MDBCardBody>
                <MDBCardTitle>{post.title}</MDBCardTitle>
                <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card&apos;s content.
                </MDBCardText>
                <MDBBtn color="deep-purple" href="#">MDBBtn</MDBBtn>
                </MDBCardBody>
            </MDBCard>
            </MDBCol>  
            </div>
        )
        })

        if(this.state.isLoading){
            return(
                <MDBContainer>
                    <div className="spinner-border fast" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                    
                </MDBContainer>
            )
        }

    return (
        <MDBContainer fluid>
          
          <MDBRow>
            {postsList}
        </MDBRow>

        </MDBContainer>
       
        
    )
    }
}

    
