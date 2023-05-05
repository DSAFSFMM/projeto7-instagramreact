export default function Suggestions() {
    const elementos = [
        { title: "bad.vibes.memes", message: "Segue você" }, 
        { title: "chibirdart", message: "Segue você" }, 
        { title: "razoesparaacreditar", message: "Novo no Instagram" }, 
        { title: "adorable_animals", message: "Segue você" }, 
        { title: "smallcutecats", message: "Segue você" }]
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {elementos.map(elemento=> <Suggestion title={elemento.title} message={elemento.message} />)}
        </div>
    );
}

function Suggestion(props) {
    const url = `assets/img/${props.title}.svg`
    const alt = `${props.title}.svg`
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={url} alt={alt} />
                <div class="texto">
                    <div class="nome">{props.title}</div>
                    <div class="razao">{props.message}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}