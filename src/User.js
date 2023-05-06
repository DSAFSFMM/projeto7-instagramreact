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
        <div className="usuario">
            <img data-test="profile-image" onClick={trocaImg} src={img} alt="imagem de perfil" />
            <div className="texto">
                <span>
                    <strong data-test="name">{userName}</strong>
                    <ion-icon data-test="edit-name" onClick={trocaUserName} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    );
}