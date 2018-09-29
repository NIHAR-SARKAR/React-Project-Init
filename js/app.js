var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
var List=["First","Second","Third"];
var App=createReactClass({
    getInitialState:function(){
        return{
            Textvalue:""
        };
    },
    render:function(){
        return(
            <div>
                <Header/>
                <div>
                <div class="alert alert-info col-sm-12" role="alert">
                    Hello test
                </div>
                </div>
                {
                    List.map((text,index)=>{
                        return(<Thumbnail header={text} key={index}/>);
                      }
                    )
                }
                
                
            </div>
        );
    }
});
var Header=createReactClass({
    render:function(){
        return(
            <div className="header">
            <nav class="navbar navbar-inverse">
            <h3 className="text-info">App Header</h3>
            </nav>
            </div>
        )
    }
});
class Thumbnail extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Text:this.props.header,
            Mode:false
        };
 
    }
    render(){
        if(this.state.Mode){
            return this.SetEditMode();
        }
        else{
            return this.SetReadOnlyMode();
        }
    }
    MoveToEdit = ()=>{
        this.setState({Mode:true});
    }
    MoveToReadOnly=()=>{
        this.setState({Mode:false});
    }
    UpdateChanges=()=>{
        this.setState({Text:event.target.value});
    }
    SetEditMode(){
        return(
            <div class="col-sm-6 col-md-4">
              <div class="thumbnail">
                <div class="caption">
                  <h3>{this.props.header}</h3>
                  <textarea onChange={this.UpdateChanges}>{this.state.Text}</textarea>
                  <p><a href="#" class="btn btn-success" role="button" onClick={this.MoveToReadOnly}>Save</a></p>
                </div>
              </div>
           </div>
           )
    }
    SetReadOnlyMode(){
        return(
            <div class="col-sm-6 col-md-4">
              <div class="thumbnail">
                <div class="caption">
                  <h3>{this.props.header}</h3>
                  <p>{this.state.Text}</p>
                  <p><a href="#" class="btn btn-primary" role="button" onClick={this.MoveToEdit}>Edit</a> <a href="#" class="btn btn-danger" role="button">Remove</a></p>
                </div>
              </div>
           </div>
           )
    }
}
ReactDOM.render(<App/>,
    document.getElementById("app"))
	
	
	