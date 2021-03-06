import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../template/grid';
import IconButton from '../template/iconButton';
import { changeDescription, search } from './todoActions';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.keyHandler = this.keyHandler.bind(this);
  }

  keyHandler(e) {
    if(e.key === 'Enter') {
      e.shiftKey ? this.props.handleSeach() : this.props.handleAdd();
    } else if(e.key === 'Return') {
      props.handleClear();
    }
  }

  componentWillMount() {
    this.props.search();
  }

  render() {
    return (
      <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
          <input 
            id='description' 
            className='form-control pl-0' 
            placeholder='Adicione uma tarefa' 
            value={this.props.description} 
            onChange={this.props.changeDescription} 
            onKeyUp={this.keyHandler}
          />
        </Grid>
        
        <Grid cols='12 3 2'>
          <div className='btn-group'>
          <IconButton style='primary' icon='plus' onClick={this.props.handleAdd}/>
          <IconButton style='info' icon='search' onClick={this.props.handleSeach}/>
          </div>            
        </Grid>
      </div>
    );
  }
}
    
const mapStateToProps = state => ({
    description: state.todo.description
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ changeDescription, search }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);