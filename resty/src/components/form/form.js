import React from "react";
import './form.scss';


class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
          url: '',
          method:'',
          result:'',
     };
    }

    handleChange = (e) =>{
        const url = e.target.value;
        this.setState({ url: url });

    };

    handleClickGo = (e) => {
        this.setState({result: `${this.state.method} ${'  '} ${this.state.url}`})
    };

    handleClickGet = (e) => {
        this.setState({ method: 'GET' });
    };
    handleClickPost = (e) => {
        this.setState({ method: 'POST' });
    };
    handleClickPut = (e) => {
        this.setState({ method: 'PUT' });
    };
    handleClickDelete = (e) => {
        this.setState({method: 'DELETE' });
    };

  render() {
    return (
        <main>
            <div className='methodDiv'>
                <label className="url">URL:</label>
                <input type="text" className='url' onChange={this.handleChange} />
                <button className='go' onClick={this.handleClickGo}>Go!</button>
                <br></br>
                <button className='method' onClick={this.handleClickGet}>GET</button>
                <button className='method' onClick={this.handleClickPost}>POST</button>
                <button className='method' onClick={this.handleClickPut}>PUT</button>
                <button className='method' onClick={this.handleClickDelete}>DELETE</button>
            </div>

        <div className='output'>{this.state.result} </div>
      </main>
    );
  }
}



  export default Main;