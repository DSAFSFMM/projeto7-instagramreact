import { useState } from "react";

export default function Posts() {
    const elementos = [
        { title: "meowed", image: "gato-telefone", liked: "respondeai", likeN: "101523", id: 0 },
        { title: "barked", image: "dog", liked: "adorable_animals", likeN: "99159", id:1 },
        { title: "barked", image: "dog", liked: "adorable_animals", likeN: "99159", id:2 },
        { title: "meowed", image: "gato-telefone", liked: "respondeai", likeN: "101523", id:3 }]
    return (
        <div className="posts">
            {elementos.map(elemento => <Post key={elemento.id} title={elemento.title} image={elemento.image} liked={elemento.liked} likeN={elemento.likeN} />)}
        </div>
    );
}

function Post(props) {
    const urlUser = `assets/img/${props.title}.svg`
    const urlPost = `assets/img/${props.image}.svg`
    const urlLike = `assets/img/${props.liked}.svg`
    const [iconeFav, setIconeFav] = useState("bookmark-outline");
    const [iconeLike, setIconeLike] = useState("heart-outline");
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
            setLikes(Number(likes) + 1);
        } else {
            setIconeLike("heart-outline");
            setCor("");
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
        <div className="post" data-test="post">
            <div className="topo">
                <div className="usuario">
                    <img src={urlUser} alt={props.title} />
                    {props.title}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img data-test="post-image" onDoubleClick={likeImg} src={urlPost} alt={props.image} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon data-test="like-post" class={cor} onClick={like} name={iconeLike}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon data-test="save-post" onClick={salvaFavoritos} name={iconeFav}></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={urlLike} alt={props.liked} />
                    <div className="texto">
                        Curtido por <strong>{props.liked}</strong> e <strong data-test="likes-number">outras {likes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}