import { useState } from "react"

export default function Registro(){

    const [titulo, setTitulo] = useState(' ');
    const [autor, setAutor] = useState(' ');
    const [descripcion, setDescripcion] = useState(' ');
    function handleSubmit(event){
        event.preventDefault();
    }

    return(
        <div className="justify-content-center align-items-center row">
            <div className="col-auto">
                <h1>Formulario De registro</h1>
                <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                    <label class="form-label">Titulo</label>
                    <input type="text" className="form-control" value={titulo} onChange={event => setTitulo(event.target.value)}/>
                    </div>
                    <div class="mb-3">
                    <label class="form-label">Autor</label>
                    <input type="text" className="form-control" value={autor} onChange={event => setAutor(event.target.value)}/>
                    </div>
                    <div class="mb-3">
                    <label class="form-label">Descripción</label>
                    <input type="text" className="form-control" value={descripcion} onChange={event => setDescripcion(event.target.value)}/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
        
      
    )
}