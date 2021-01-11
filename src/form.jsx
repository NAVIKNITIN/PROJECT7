import React, { Component } from 'react';
import simplereactvalidator from 'simple-react-validator';
class Form extends Component{
    constructor(){
        super();
        this.state={
            firstname:'',
            lastname:'',
            mobileno:'',
            gender:'',
            country:'' ,
            UserLogin:{
                userid:'',
                email:''
            },
              
        };
        this.validator = new simplereactvalidator({autoForceUpdate:this});
    }
    handlesubmit=(e)=>{
        
        e.preventDefault();
        if(this.validator.allValid()){
            let data = {
            username: this.state.firstname,
            lastname:this.state.lastname,
            mobileno:this.state.mobileno,
            gender: this.state.gender,
            country:this.state.country,
            UserLogin:{
                id:this.state.UserLogin.userid,
                email:this.state.UserLogin.email
            }
        };
        console.log(data);
        // alert("thanks for the registration");
      
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
        
        
    };



    handleinputdata=(e)=>{
        // console.log(e.target.value);
        this.setState({[e.target.name]:e.target.value})
    };



    setuserid=(e)=>{
        // console.log(e.target.value);
            let Uid = Object.assign({},this.state.UserLogin)
            Uid.userid = e.target.value;
            this.setState({UserLogin:Uid});
    };



    setuseremail=(e)=>{
        // console.log(e.target.value);

        let Uemail = Object.assign({},this.state.UserLogin)
        Uemail.email = e.target.value;
        this.setState({UserLogin:Uemail});
    }
    render(){
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-8">
                        <h2>Form Component</h2>
                        <br></br>

                        <form onSubmit={this.handlesubmit} className="col md-12">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="enter first name"
                                name="firstname" value={this.state.firstname}
                                onChange={this.handleinputdata}
                                />
                            {
                                    this.validator.message('firstname',this.state.firstname,'required|min:3')
                                    }
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="enter last name"
                                name="lastname" value={this.state.lastname}
                                onChange={this.handleinputdata}
                                />
                                    {
                                    this.validator.message('lastname',this.state.lastname ,'required|min:3')
                                    }
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="enter Mobile no."
                                name="mobileno" value={this.state.mobileno}
                                onChange={this.handleinputdata}/> 
                                {
                                    this.validator.message('no',this.state.no,'required|phone')
                                    }
                            </div>
                            <div className="form-group"
                            onChange={this.state.gender}>
                                <label>
                                    <input name="male "type="radio" value="Male" checked={true}
                                    
                                    />
                                </label>
                                <label>
                                    <input  type="radio" value="Female" />
                                </label>
                                
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="enter userid"
                                name="userid" value={this.state.UserLogin.userid}
                                onChange={this.setuserid}/>
                                    {
                                    this.validator.message('id',this.state.UserLogin.userid,'required|min:5')
                                    }

                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="enter email"
                                name="email" value={this.state.UserLogin.email}
                                onChange={this.setuseremail}/>
                                    {
                                    this.validator.message('',this.state.UserLogin.email,'required|email')
                                    }
                            </div>

                            <button type="handlesubmit" className="btn btn-outline-primary">Submit</button>

                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
};
export default Form;
