import React, { useState } from "react";
import './TodoList.Css';
import Icone from './assets/icon.webp'

function TodoList() {

    const [lista, setLista] = useState([]);
    const [novoItem, setNovoItem] = useState("");

    function adicionaItem(form){
        form.preventDefault();
        if(!novoItem){
            return;
        }
        setLista([...lista, {text: novoItem, iscompleted: false }])
        setNovoItem("");
        document.getElementById('input-entrada').focus();
    }


    return (
         <div>
            <h1>Lista de Tarefas</h1>
            <form onSubmit={adicionarItem}>
                <input 
                id="input-entrada"
                type="text"
                value={novoItem}
                onChange={(e)=>{setNovoItem(e.target.value)}}
                placeholder="Adicionde uma tarefa"
                />
                <button type="submit"></button>
            </form>
            <div className="listatarefas">
                {
                    lista.length <1
                    ?
                    <img src={Icone}/>
                    :
                    lista.map((item, index)=>(
                        <div className="item">
                    <span>{item.text}</span>
                    <button className="del">Deletar</button>
                </div>
                ))
                }
                
                <div className="item completo">
                    <span>Tarefa de exemplo</span>
                    <button className="del">Deletar</button>
                 
                </div>
            </div>

         </div>
    )
}
     

export default TodoList