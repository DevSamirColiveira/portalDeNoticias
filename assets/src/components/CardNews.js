class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow ({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }
    // o que vai construir 
    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newContent = document.createElement("p");
        newContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newContent);


        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");

        const newImage = document.createElement("img");
        newImage.src = this.getAttribute("photo") || "assets/img/han-solo.png";
        newImage.alt = "Photo da Noticia";

        cardRight.appendChild(newImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;

    }

    // Colocando o estilo
    styles(){
        const style = document.createElement("style");
        style.textContent = `
        
        .card {
            width: 800px;
            height: 265px;
            /*border: 1px solid grey;*/
            display: flex;
            flex-direction: row;
        
            box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
            -webkit-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
            justify-content: space-between;
        }
           
        .card_left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 10px;
        }
        
        .card_left > span {
            font-weight: 500;
            color: rgb(150, 150, 150);
        }
        
        .card_left > a {
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
        }
     
        .card_left > p {
            color: rgb(134, 134, 134);
        }

        `;
        return style;
    }
}

customElements.define("card-news", CardNews);