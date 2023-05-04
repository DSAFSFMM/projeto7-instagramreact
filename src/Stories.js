export default function Stories() {
    return (
        <div class="stories">
            <Story title="9gag" src="assets/img/9gag.svg" />
            <Story title="meowed" src="assets/img/meowed.svg" />
            <Story title="barked" src="assets/img/barked.svg" />
            <Story title="nathanwpylestrangeplanet" src="assets/img/nathanwpylestrangeplanet.svg" />
            <Story title="wawawicomics" src="assets/img/wawawicomics.svg" />
            <Story title="respondeai" src="assets/img/respondeai.svg" />
            <Story title="filomoderna" src="assets/img/filomoderna.svg" />
            <Story title="memeriagourmet" src="assets/img/memeriagourmet.svg" />
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}

function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.src} alt={props.title} />
            </div>
            <div class="usuario">
                {props.title}
            </div>
        </div>
    );
}