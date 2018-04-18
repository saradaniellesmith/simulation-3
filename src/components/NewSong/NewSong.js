import React, {Component} from 'react';
import {connect} from 'react-redux';
import './NewSong.css';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class NewSong extends Component {
    constructor() {
        super();
    }

    render() {
        return(
           <div> 
               <h1> Add a new song </h1> 
               <section className="video"> 
                   <video width="320" height="240" autoPlay > 
                       <source src={require('./708213662 copy.mp4')} type="video/mp4" /> 
                   </video>
               </section> 
                
               <section className="add-new-song">
                   <h1> New Song </h1>
                   <div className="new-song">
                       <TextField 
                          defaultValue="song"
                          id="text-field-controlled" />
                       <TextField 
                          defaultValue="artist"
                          id="text-field-controlled" />
                       <TextField 
                          defaultValue="album"
                          id="text-field-controlled" />

                      <RaisedButton label="Save" />
                    </div>
               </section>
                
           </div>
        )
    }
}

export default NewSong;