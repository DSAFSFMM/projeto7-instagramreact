export default function Stories() {
    const elementos = [
        {title:"9gag", src:"assets/img/9gag.svg"},
        {title:"meowed", src:"assets/img/meowed.svg"},
        {title:"barked", src:"assets/img/barked.svg"},
        {title:"nathanwpylestrangeplanet", src:"assets/img/nathanwpylestrangeplanet.svg"},
        {title:"wawawicomics", src:"assets/img/wawawicomics.svg"},
        {title:"respondeai", src:"assets/img/respondeai.svg"},
        {title:"filomoderna", src:"assets/img/filomoderna.svg"},
        {title:"memeriagourmet", src:"assets/img/memeriagourmet.svg"}]
    return (
        <div className="stories">
            {elementos.map(elemento=><Story key={elemento.title} title={elemento.title} src={elemento.src} />)}
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}

function Story(props) {
    return (
        <div className="story">
            <div className="imagem">
                <img src={props.src} alt={props.title} />
            </div>
            <div className="usuario">
                {props.title}
            </div>
        </div>
    );
}