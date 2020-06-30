import React from 'react';
import './form.scss';
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      method: '',
      url: '',
      request: {}
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.state.url && this.state.method) {
        try {
          const raw = await fetch(`${this.state.url}`);
          const data = await raw.json();
          let results = {
            Headers : raw.headers,
            Response : data
          }
          this.props.handler(results);
        } catch (err) {
          console.log(err);
        }
    }
  };

  handleChange = (e) => {
    const url = e.target.value;
    this.setState({ url })
  };
  handleChangeMethod = (e) => {
    const method = e.target.value;
    this.setState({ method })
  };

  render() {
    return (
      < main>
        <form onSubmit={this.handleSubmit}>
        <div className='methodDiv'>
        <label className="url">URL:</label>
            <input type="text" className='url' onChange={this.handleChange} />
              <button className='go' id='go'>Go!</button>
                <br></br>
                 <button className='method' onClick={this.handleChangeMethod} id='get' value="GET" >GET</button>
                <button className='method' onClick={this.handleChangeMethod} id='post' value="POST" >POST</button>
                 <button className='method' onClick={this.handleChangeMethod} id='put' value="PUT">PUT</button>
               <button className='method' onClick={this.handleChangeMethod} id='delete' value="DELETE">DELETE</button>
           </div>
        
 </form>
      </main>
    );
  }
}

export default Form;
