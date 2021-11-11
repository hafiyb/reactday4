import React from "react"
import List from "../../components/list"


export default class Dashboard extends React.Component{
constructor(props){
    super(props);
    
    this.state={
        items: [],
    }

    this.addNew = this.addNew.bind(this);
}

delete(value){
    const filterItem = this.state.items.filter( list => list.key !== value)
    this.setState({items:filterItem})
}

addNew(){
    console.log('test')
    console.log(this._inputElement.value)

    

    if(this._inputElement.value != ''){

        const newItem = {
            title: this._inputElement.value,
            key: Date.now()
        }

        // this.setState({items : this._inputElement.value}, () => console.log(this.state.items))

        // this.setState(
        //     (prevState) => {
        //         return {
        //             items: prevState.items.concat(newItem)
        //         }
        //     }, 
        //     () => console.log(this.state.items)
        // )

        this.setState({items: [...this.state.items, newItem]})

        // this.state.items.push(newItem)

        console.log(this.state.items)

        this._inputElement.value = '';
    }
}

render(){
    return(
        <div className="flex flex-col justify-center items-center bg-yellow-600 h-full">
            <div className="flex flex-row justify-between items-center" >
                    <input className="p-1 border-2 border-black rounded-md h-3/4 placeholder-gray-800" type="text" placeholder="What to do?" ref={(a) => this._inputElement = a} />
                    <button onClick={this.addNew} className="rounded border-2 border-black m-4 p-1">Add item</button>
            </div>
            <div className="flex flex-col rounded-lg bg-gray-100 p-2" style={{width:'50vw'}}>
            {/* <List /> */}
                <h1 className="m-4 border-b-2 border-gray-600">To do : </h1>
                {
                    this.state.items.map( list => (
                        <List title={list.title} time={list.key} click={() => this.delete(list.key)} />
                    ))
                }
            
            </div>
        </div>
    )
}
}