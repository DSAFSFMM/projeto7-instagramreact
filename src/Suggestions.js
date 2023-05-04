export default function Suggestions() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            <Suggestion title="bad.vibes.memes" message="Segue você" />
            <Suggestion title="chibirdart" message="Segue você" />
            <Suggestion title="razoesparaacreditar" message="Novo no Instagram" />
            <Suggestion title="adorable_animals" message="Segue você" />
            <Suggestion title="smallcutecats" message="Segue você" />
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