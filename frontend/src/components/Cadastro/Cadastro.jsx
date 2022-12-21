import { useState, useEffect } from "react";
import API from "../../api/api"

function Cadastro() {
    const [categorias, setCategorias] = useState([
        { _id: 0, name: "Carregando categorias..." },
    ]);

    async function loadCategorias() {
        const categoriasDoBanco = await API.category.list()
        const categoriasCarregadas = await categoriasDoBanco.json()
        setCategorias(categoriasCarregadas);
    }

    useEffect(function () {
        loadCategorias();
    }, [])

    async function handleForm(e) {
        e.preventDefault();

        const formEl = e.target;
        formEl.submitButton.disabled = true;

        const body = {
            name: formEl.name.value,
            imageUrl: formEl.imageUrl.value,
            category: formEl.category.value
        }

        const request = await API.item.create(body);
        //console.log(requestJson);
        
        formEl.submitButton.disabled = false;
        //const requestJson = await request.json();
        
        if (request.status === 201) {
            alert("Item Cadastrado com Sucesso");
            formEl.name.value = "";
            formEl.imageUrl.value = "";
            formEl.name.focus();
        } else {
            
            const requestJson = await request.json();
            alert("Erro na request: " + request.status + "\n"+requestJson.message);
        }

        ///console.log(body)

    }

    return (
        <form className="container" onSubmit={handleForm}>
            <h1>Cadastro  de itens</h1>
            <div className="form-group mt-2">
                <label>Nome:</label>
                <input className="form-control" name="name" type="text" />
            </div>

            <div className="form-group mt-2">
                <label>Url da Imagem:</label>
                <input className="form-control" name="imageUrl" type="url" />
            </div>

            <div className="form-group mt-2">
                <label>Categoria:</label>
                <select className="form-control" name="category">
                    {categorias.map(
                        el => <option key={el._id} value={el._id}>{el.name}</option>
                    )}
                </select>
            </div>

            <div className="form-group mt-3">
                <button type="submit" name="submitButton" className="btn btn-primary">Cadastrar</button>
            </div>
        </form>
    );
}

export default Cadastro;