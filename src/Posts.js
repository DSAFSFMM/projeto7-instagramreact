export default function Posts() {
    return (
        <div class="posts">
            <Post title="meowed" image="gato-telefone" liked="respondeai" likeN="101.523"/>
            <Post title="barked" image="dog" liked="adorable_animals" likeN="99.159"/>
            <Post title="barked" image="dog" liked="adorable_animals" likeN="99.159"/>
            <Post title="meowed" image="gato-telefone" liked="respondeai" likeN="101.523"/>
        </div>
    );
}

function Post(props) {
    const urlUser = `assets/img/${props.title}.svg`
    const urlPost = `assets/img/${props.image}.svg`
    const urlLike = `assets/img/${props.liked}.svg`
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={urlUser} alt={props.title}/>
                    {props.title}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={urlPost} alt={props.image}/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={urlLike} alt={props.liked} />
                    <div class="texto">
                        Curtido por <strong>{props.liked}</strong> e <strong>outras {props.likeN} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}