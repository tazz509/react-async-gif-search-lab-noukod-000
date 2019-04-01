import React from 'react';

class GifList extends React.Component{
    render(){
        const { gifs }=this.props;

        if(gifs===[]){
            return;
        }

        return(
            <ul>
            { gifs.map((gif,index)=><li key={index}><img src={gif.images.original.url} width={gif.images.original.width} height={gif.images.original.height} /></li>) }
            </ul>
        )
    }
}


export default GifList;
