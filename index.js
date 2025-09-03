function gridMaker()
{
let size = document.getElementById("size").value;
size = parseInt(size);
    const container = document.getElementById("grid");
    container.innerHTML = "";
    for(let i=0;i<size;i++)
    {
        for(let j=0;j<size;j++)
        {
            let div = document.createElement("div");
            div.classList.add("block");
            container.appendChild(div); 
            div.addEventListener('mouseenter', function() 
            {
                let rgb = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
                div.style.backgroundColor = rgb;
            });
        }
        container.appendChild(document.createElement("br"));
    }

}
gridMaker();


