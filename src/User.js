import { useState } from "react";

export default function User() {
    let [img, setImg] = useState("assets/img/catanacomics.svg");
    let [userName, setUserName] = useState("catanacomics");

    function trocaImg(){
        const novaImg = prompt("informe o link da nova imagem")
        if(novaImg){
            setImg(novaImg);
        }
    }
    function trocaUserName(){
        const novoNome = prompt("informe o novo nome de usuário")
        if (novoNome) {
            setUserName(novoNome);
        }
    }
    return (
        <div class="usuario">
            <img onClick={trocaImg} src={img} alt="imagem de perfil" />
            <div class="texto">
                <span>
                    <strong>{userName}</strong>
                    <ion-icon onClick={trocaUserName} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    );
}