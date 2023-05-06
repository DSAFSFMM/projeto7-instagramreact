export default function Suggestions() {
    const elementos = [
        { title: "bad.vibes.memes", message: "Segue você" }, 
        { title: "chibirdart", message: "Segue você" }, 
        { title: "razoesparaacreditar", message: "Novo no Instagram" }, 
        { title: "adorable_animals", message: "Segue você" }, 
        { title: "smallcutecats", message: "Segue você" }]
    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {elementos.map(elemento=> <Suggestion key={elemento.title} title={elemento.title} message={elemento.message} />)}
        </div>
    );
}

function Suggestion(props) {
    const url = `assets/img/${props.title}.svg`
    const alt = `${props.title}.svg`
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={url} alt={alt} />
                <div className="texto">
                    <div className="nome">{props.title}</div>
                    <div className="razao">{props.message}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    );
}