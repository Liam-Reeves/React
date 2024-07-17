
const Copy = ()=>{

    const copyhandler =()=>{
        alert("Text Copied")
    }

    return(
     <p onCopy={copyhandler}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit molestias atque ea repellat! Vitae earum molestiae dolorum dolorem, corrupti illo nisi exercitationem dolor rerum repellendus quia. Dolor ratione quidem blanditiis.</p>


    );

}

export default Copy