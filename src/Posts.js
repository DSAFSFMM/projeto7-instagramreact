import { useState } from "react";

export default function Posts() {
    const elementos = [
        { title: "meowed", image: "gato-telefone", liked: "respondeai", likeN: "101523" },
        { title: "barked", image: "dog", liked: "adorable_animals", likeN: "99159" },
        { title: "barked", image: "dog", liked: "adorable_animals", likeN: "99159" },
        { title: "meowed", image: "gato-telefone", liked: "respondeai", likeN: "101523" }]
    return (
        <div class="posts">
            {elementos.map(elemento => <Post title={elemento.title} image={elemento.image} liked={elemento.liked} likeN={elemento.likeN} />)}
        </div>
    );
}

function Post(props) {
    const urlUser = `assets/img/${props.title}.svg`
    const urlPost = `assets/img/${props.image}.svg`
    const urlLike = `assets/img/${props.liked}.svg`
    let [iconeFav, setIconeFav] = useState("bookmark-outline");
    let [iconeLike, setIconeLike] = useState("heart-outline");
    let [cor, setCor] = useState("");
    let [likes, setLikes] = useState(props.likeN);
    function salvaFavoritos() {
        if (iconeFav === "bookmark-outline") {
            setIconeFav("bookmark");
        } else {
            setIconeFav("bookmark-outline");
        }
    }
    function like() {
        if (iconeLike === "heart-outline") {
            setIconeLike("heart");
            setCor("red");
            console.log(likes);
            setLikes(Number(likes) + 1);
        } else {
            setIconeLike("heart-outline");
            setCor("");
            console.log(likes);
            setLikes(Number(likes) - 1);
        }
    }
    function likeImg() {
        if (iconeLike === "heart-outline") {
            setIconeLike("heart");
            setCor("red");
            setLikes(Number(likes) + 1);
        }
    }
    return (
        <div class="post" data-test="post">
            <div class="topo">
                <div class="usuario">
                    <img src={urlUser} alt={props.title} />
                    {props.title}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img data-test="post-image" onClick={likeImg} src={urlPost} alt={props.image} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon data-test="like-post" class={cor} onClick={like} name={iconeLike}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon data-test="save-post" onClick={salvaFavoritos} name={iconeFav}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={urlLike} alt={props.liked} />
                    <div class="texto">
                        Curtido por <strong>{props.liked}</strong> e <strong data-test="likes-number">outras {likes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}