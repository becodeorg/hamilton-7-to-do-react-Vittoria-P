function ListToDo (){
    return (
        <div>
            <div>
                <input type="checkbox" id="scales" name="scales" checked></input>
                <label for="scales">Learn React</label>
            </div>

            <div>
                <input type="checkbox" id="horns" name="horns"></input>
                <label for="horns">Be Awesome !</label>
            </div>  
        </div>  
    );
}

export default ListToDo;