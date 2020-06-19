import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Input,Button,Row,Col,FormFeedback,Container,Card,CardImg,CardTitle,CardSubtitle,CardText, CardBody} from 'reactstrap'
import faker, { fake, date } from 'faker'

class App extends Component {
  state = {
    load:false,
    page:false,
    emailLogin: '',
    passwordLogin: '',
    email:'',
    password:'',
    dob:'',
    address:'',
    phoneno:'',
    touched:{
      emailLogin:false,
      passwordLogin:false,
        email:false,
        password:false,
        dob:false,
      address:false,
      phoneno:false,

    },
    errors:{
      emailLogin:'',
      passwordLogin:'',
        email:'',
        password:'',
        dob:'',
        address:'',
        phoneno:''
    }
}

handleBlur=(field)=>(evt)=>{
  this.setState({
    touched:{...this.state.touched,[field]:true}
  })
}

changeHandler = e => {
  this.setState({ [e.target.name]: e.target.value })
}

handleSignup=e=>{
  this.setState({load:true})
}

handleLogin=e=>{
  this.setState({load:false})
}

handleSubmit=e=>{
  const touch=this.state.touched;
  const error=this.state.errors;

  if(touch.email&&error.email===""&&touch.password&&error.password===""&&touch.dob&&error.dob===""&&touch.address&&error.address===""&&touch.phoneno&&error.phoneno===""){
    alert("Success")
    this.setState({load:false})
  }
  else{
    alert("Some err")
  }
}

handleLoginProfile=e=>{

 
 if(this.state.emailLogin===this.state.email&&this.state.passwordLogin===this.state.password){
    this.setState({page:true})
 }
 else{
   alert("Unknown User")
 }
}

validateLogin(email,password){
  const reg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  if(this.state.touched.emailLogin&&email===''){
    this.state.errors.emailLogin="Email should not be empty";
  }
  else if(this.state.touched.emailLogin&&!reg.test(email)){
    this.state.errors.emailLogin="Enter a valid Email address"
  }
  else{
    this.state.errors.emailLogin=""
  }

  if(this.state.touched.passwordLogin&&password===''){
    this.state.errors.passwordLogin="Password should not be empty"
  }
  else{
    this.state.errors.passwordLogin=""
  }


}

validateSignup(email,password,dob,address,phoneno){
      

  const reg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  if(this.state.touched.email&&email===''){
    this.state.errors.email="Email should not be empty";
  }
  else if(this.state.touched.email&&!reg.test(email)){
    this.state.errors.email="Enter a valid Email address"
  }
  else{
    this.state.errors.email=""
  }

  if(this.state.touched.password&&password===''){
    this.state.errors.password="Password should not be empty"
  }
  else{
    this.state.errors.password=""
  }

  if(this.state.touched.dob&&dob===''){
    this.state.errors.dob="DOB should not be empty"
  }
  else{
    this.state.errors.dob=""
  }

  if(this.state.touched.address&&address===''){
    this.state.errors.address="Address should not be empty"
  }
  else{
    this.state.errors.address=""
  }

  if(this.state.touched.phoneno&&phoneno===''){
    this.state.errors.phoneno="Phoneno should not be empty"
  }
  else{
    this.state.errors.phoneno=""
  }

}







  render(){
    console.log(this.state)
    this.validateSignup(this.state.email,this.state.password,this.state.dob,this.state.address,this.state.phoneno)
    this.validateLogin(this.state.emailLogin,this.state.passwordLogin)
   
    return(
      
      <div className="conatiner">
        {this.state.page?<div>
          <Container>
          <Card>
          <CardImg top width="100%" src={faker.fake('{{image.avatar}}')} alt="Card image cap" />
          <CardBody>
            <CardTitle>{faker.fake('{{date.recent}}')}</CardTitle>
          </CardBody>
       </Card>
      </Container>
        </div>:this.state.load?<div>
          <Container>
          <Row>
          <Col>
              <h1>Signup</h1>
             </Col>
            <Col>
               <Button onClick={this.handleLogin} className="offset-md-8">Login</Button>
             </Col>
            </Row>
                <Row>
                  <Input type="email" 
               name="email" onChange={this.changeHandler} onBlur={this.handleBlur('email')}
                           
               
               invalid={this.state.errors.email!==''}  placeholder="Email"/>
                <FormFeedback>{this.state.errors.email}</FormFeedback>
              </Row>
             

              <br/>
              <Row>
              <Input type="password" 
              name="password" onChange={this.changeHandler} onBlur={this.handleBlur('password')}
                           
              invalid={this.state.errors.password!==''}  placeholder="Password"/>
               <FormFeedback>{this.state.errors.password}</FormFeedback>

              </Row>
             
              <br/>
              <Row>
              <Input type="date" 
              name="dob" onChange={this.changeHandler} onBlur={this.handleBlur('dob')}
                           
              invalid={this.state.errors.dob!==''}  placeholder="DOB"/>
               <FormFeedback>{this.state.errors.dob}</FormFeedback>
              </Row>
             
              <br/>
              <Row>
              <Input type="text"
              name="address" onChange={this.changeHandler} onBlur={this.handleBlur('address')}           
              invalid={this.state.errors.address!==''}  placeholder="Address"/>
                <FormFeedback>{this.state.errors.address}</FormFeedback>
              </Row>

              <br/>
              <Row>
              <Input type="number"
              name="phoneno" onChange={this.changeHandler}  onBlur={this.handleBlur('phoneno')}
                           
              invalid={this.state.errors.phoneno!==''} placeholder="Phone"/>
               <FormFeedback>{this.state.errors.phoneno}</FormFeedback>
              </Row>

              <hr/>
              <Row>
                <Col>
              <Button onClick={this.handleSubmit}>Submit</Button>
              </Col>
              </Row>
              </Container>
        </div>:<div>
          <Container>
          <Row>
            <Col>
              <h1>Login</h1>
             </Col>
             <Col>
               <Button onClick={this.handleSignup} className="offset-md-8">Signup</Button>
             </Col>
             </Row>
             <Row>
               <Input type="email" value={this.state.emailLogin} name="emailLogin" onBlur={this.handleBlur('emailLogin')}
                           
                  invalid={this.state.errors.emailLogin!==''} onChange={this.changeHandler}  placeholder="Email"/>
                  <FormFeedback>{this.state.errors.emailLogin}</FormFeedback>
              </Row>
              
              <br/>
              <Row>
              <Input type="password"  value={this.state.passwordLogin} onBlur={this.handleBlur('passwordLogin')}
                           
                    invalid={this.state.errors.passwordLogin!==''} name="passwordLogin" onChange={this.changeHandler}  placeholder="Password"/>
                    <FormFeedback>{this.state.errors.passwordLogin}</FormFeedback>
              </Row>
            
              <hr/>
              <Row>
                <Col>
                <Button onClick={this.handleLoginProfile}>Login</Button> 
              </Col>
              </Row>
             </Container>
              </div>}
      </div>
    )
  }
 
}
 
export default App;
 

