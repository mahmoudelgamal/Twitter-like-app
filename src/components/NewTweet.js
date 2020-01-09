import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleAddTweet } from '../actions/tweets'
import { Redirect } from 'react-router-dom'

class NewTweet extends Component {

    state = {
        text: '',
        toHome: false,
    }

    handleChnage = (e) => {
        const text = e.target.value

        this.setState(() => ({
            text
        }))
    }
    
    handleSubmit = (e) => {
        e.preventDefault()

        const { text } = this.state 
        const {dispatch, id} = this.props
        
        dispatch(handleAddTweet(text, id))

        this.setState(() => ({
            text: '',
            toHome: id ? false : true,
        }))
        }


    render() {
        const { text, toHome } = this.state

        {/* todo: Redirect to / if submitted */}
        if (toHome === true) {
            return <Redirect to='/' />
        }
    

        const leftLength = 280 - text.length 
        return (
            <div>
                <h3 className="center"> Compose New Tweet</h3>
                <form className="new-tweet" onSubmit={this.handleSubmit}>
                    <textarea
                        className="textarea"
                        placeholder="Write Your Tweet"
                        maxLength={280}
                        onChange={this.handleChnage}
                        value={text}
                    />
                    {leftLength <= 100 && (
                        <div className="tweet-left">
                            {leftLength}
                        </div>
                    )}
                    
                    <button
                        className="btn"
                        type="submit"
                        disabled={text === ''}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default connect()(NewTweet);