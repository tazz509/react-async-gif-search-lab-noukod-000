import React,{ Component } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

class GiftListContainer extends Component{
    state={
        gifs:[],
        query:""
    }

    fetchGifs=()=>{
        const { query }=this.state;
        fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then((res)=>res.json())
        .then(({ data })=>{
            data=data.slice(-3)
            this.setState({
                gifs: data
            })
        })
    }

    onHandleChange=(event)=>{
        const query=event.target.value;
        this.setState({ query })
    }

    
    onHandleSubmit=(event)=>{
        event.preventDefault();
        this.fetchGifs()
    }

    render(){
        return(
            <React.Fragment>
                <GifSearch onHandleSubmit={this.onHandleSubmit} onHandleChange={this.onHandleChange}/>
                <GifList gifs={this.state.gifs}/>
            </React.Fragment>
        )
    }
}

export default GiftListContainer;